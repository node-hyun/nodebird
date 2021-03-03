import React, { useCallback, useEffect, useState } from "react";
import { Avatar, Card, Button, notification } from "antd";


// import { useDispatch } from "react-redux";
// import { logoutAction } from "../reducers/user";
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';


const dummy = {
    nickname: "제로초",
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
};


const UserProfile = ({ setIsLoggedIn }) => {
    const dispatch = useDispatch();
    const { me, logOutLoading, logInLoading, logInDone, logOutDone } = useSelector((state) => state.user);
    const [logOutUser, setlogOutUser] = useState("")

    useEffect(() => {
        notification.open({
            message: '알림',
            description: "환영합니다 " + me.nickname + "님"
        })
    }, [me && logInDone]);

    const onLogOut = useCallback(() => {
        // setIsLoggedIn(false);
        // dispatch(logoutAction());
        dispatch({
            type: LOG_OUT_REQUEST,
        });

    }, []);

    return (
        <Card
            actions={[
                <div key="twit">
                    짹짹
                    <br />
                    {me.Posts.length}
                </div>,
                <div key="following">
                    팔로잉
                    <br />
                    {me.Followings.length}
                </div>,
                <div key="follower">
                    팔로워
                    <br />
                    {me.Followers.length}
                </div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />
            <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
        </Card>
    );
};


export default UserProfile;