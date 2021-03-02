import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
// useState, useCallback 추가
import React, { useEffect, useState, useCallback  } from "react";
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';

import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

import useSWR from 'swr';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);


const Profile = () => {
    const { me } = useSelector((state) => state.user);
    const [followingsLimit, setFollowingsLimit] = useState(3);
    const [followersLimit, setFollowersLimit] = useState(3);
    const { data: followingsData, error: followingError } = useSWR(`http://127.0.0.1:3065/user/followings?limit=${followingsLimit}`, fetcher);
    const { data: followersData, error: followerError } = useSWR(`http://127.0.0.1:3065/user/followers?limit=${followersLimit}`, fetcher);

    console.log("followingsData : ", followingsData);
    console.log("followersData : ", followersData);

    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    }, []);

    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3);
    }, []);


    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    if (followerError || followingError) {
        console.error(followerError || followingError);
        return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
    }

    if (!me) {
        return '내 정보 로딩중...';
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={followingsData} onClickMore={loadMoreFollowings} loading={!followingError && !followingsData} />
                <FollowList header="팔로워" data={followersData} onClickMore={loadMoreFollowers} loading={!followerError && !followersData} />
            </AppLayout>
        </>
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
        type: LOAD_USER_REQUEST,
    });

    // context.store.dispatch({
    //     type: LOAD_FOLLOWERS_REQUEST,
    // });

    // context.store.dispatch({
    //     type: LOAD_FOLLOWINGS_REQUEST,
    // });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Profile;

