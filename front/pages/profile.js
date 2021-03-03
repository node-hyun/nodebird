import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import React, { useEffect, useState, useCallback } from "react";
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import useSWR, { mutate } from 'swr'
import { Form, Input, notification } from "antd";


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
            notification.open({
                message: '알림',
                description:
                    '메인 페이지로 이동 합니다 ~! 프로필 페이지에 방문하시기전에 로그인 해주세요 ~!',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            Router.push('/');
        }
    }, [me && me.id]);

    if (!me) {
        return '내 정보 로딩중';
    }

    if (followingError || followerError) {
        console.error(followerError || followingError);
        return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
    }

    if (!followingsData || !followersData) {
        return '팔로잉 데이터 로딩중...';
    }

    mutate(`http://127.0.0.1:3065/user/followings?limit=${followingsLimit}`);
    mutate(`http://127.0.0.1:3065/user/followers?limit=${followingsLimit}`);

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
        type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Profile;
