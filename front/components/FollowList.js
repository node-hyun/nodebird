import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, Card, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from '../reducers/user';


const FollowList = ({ header, data, onClickMore, loading }) => {
    const dispatch = useDispatch();

    const onCancel = (id) => () => {
        if (header === '팔로잉') {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: id,
            });
        }else{
            dispatch({
                type: REMOVE_FOLLOWER_REQUEST,
                data: id,
            });
        }

    };

    console.log("data : ", data);
    return (
        <>
            <h4>{header}</h4>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                
                {data && data.map((v) => {
                    return (
                        <Card style={{ width: "30%" }} actions={[<StopOutlined key="stop" />]} onClick={onCancel(v.id)}>
                            <Card.Meta description={v.nickname} />
                        </Card>
                    )
                })}

                <Button block loading={loading} onClick={onClickMore}>더보기</Button>
                <br /><br />
            </div>
        </>
    );
};

FollowList.propTypes = {
};

export default FollowList;