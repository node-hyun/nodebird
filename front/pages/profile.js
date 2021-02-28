import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import Router from 'next/router';


// 팔로잉(내가 팔로잉 하는 사람)
// 팔로워(나를 팔로잉 하는 사람)
// const followingList = [
//     { nickname: "제로초" },
//     { nickname: "장기효" },
//     { nickname: "k덕배" },
// ];

// const followerList = [
//     { nickname: "음바페" },
//     { nickname: "호빵맨" },
//     { nickname: "이순신" },
// ];

const Profile = () => {
    const { me } = useSelector((state) => state.user);
    console.log("me : ", me);

    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);
    if (!me) {
        return null;
    }

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>

            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={me.Followings} />
                <FollowList header="팔로워 목록" data={me.Followers} />
            </AppLayout>
        </>
    );
};

export default Profile;

