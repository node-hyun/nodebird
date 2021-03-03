import React, { useEffect, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { Button } from "antd";
// import Router from 'next/router';


const Home = () => {
    const { me } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post);

    // const gotoMain = useCallback(() => {
    //     Router.replace('/');
    // }, [searchPostsDone]);

    // useEffect(() => {
    //     function onScroll() {
    //         // console.log(window.scrollY + document.documentElement.clientHeight, document.documentElement.scrollHeight);
    //         if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {
    //             // console.log("화면이 바닥에 도달했습니다.");

    //             if (hasMorePosts && !loadPostsLoading) {
    //                 console.log("화면이 바닥에 도달 + 포스팅 추가!!");
    //                 // mainPosts 배열의 개수 - 1이 마지막 요소의 인덱스 번호가 되므로 다음과 같이 indec 번호를 가져 온다.
    //                 const lastId = mainPosts[mainPosts.length - 1]?.id;
    //                 dispatch({
    //                     type: LOAD_POSTS_REQUEST,
    //                     // data: mainPosts[mainPosts.length - 1].id,
    //                     lastId: lastId // 그냥 lastId만 써도 된다.
    //                 });
    //             }

    //         }
    //     }
    //     window.addEventListener('scroll', onScroll);
    //     return () => {
    //         window.removeEventListener('scroll', onScroll);
    //     }
    // }, [mainPosts, hasMorePosts, loadPostsLoading]);

    return (
        <AppLayout>
            <Head>
                <title>Home</title>
            </Head>
            {me && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c.id} post={c} />
                );
            })}
            {searchPostsDone ? <Button onCLick={gotoMain}>go to main</Button> : null}
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

    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: SEARCH_POSTS_REQUEST,
        data: searchWord
    });
    // 아래의 두줄은success 요청할때까지 기다리라는 뜻
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Home;
