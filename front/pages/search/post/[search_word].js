import React, { useEffect, useCallback } from "react";
import AppLayout from "../../../components/AppLayout";
import Head from "next/head";
import PostForm from "../../../components/PostForm";
import PostCard from "../../../components/PostCard";
import { SEARCH_POSTS_REQUEST } from '../../../reducers/post';
import { LOAD_USER_REQUEST } from '../../../reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import wrapper from '../../../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { Button } from "antd";
import { useRouter } from 'next/router';


const SearchPost = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts, searchPostsDone, searchPostsLoading, hasMorePosts } = useSelector((state) => state.post);
    const router = useRouter();
    const dispatch = useDispatch();
    const { search_word } = router.query;
    console.log("search_word : " + search_word);
    console.log("search_word : " + searchPostsDone);

    useEffect(() => {
        function onScroll() {
            if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {

                if (hasMorePosts && !searchPostsLoading) {
                    console.log("화면이 바닥에 도달 + 포스팅 추가!!");
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                    dispatch({
                        type: SEARCH_POSTS_REQUEST,
                        data: {
                            search_word: search_word,
                            lastId: lastId // 그냥 lastId만 써도 된다.
                        }
                    })
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [mainPosts, hasMorePosts, searchPostsLoading]);

    return (
        <AppLayout>
            <Head>
                <title>Home</title>
            </Head>
            <h4>search world : {search_word}</h4>
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {

    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }

    console.log("context.params.search_word : ", context.params.search_word);

    context.store.dispatch({
        type: LOAD_USER_REQUEST,
    });

    context.store.dispatch({
        type: SEARCH_POSTS_REQUEST,
        data: {
            search_word: context.params.search_word,
        }
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default SearchPost;

