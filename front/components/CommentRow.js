// import React from 'react'
import React, { useEffect } from "react";
import { Avatar, Comment, notification } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import { CommentRowRapper } from './style/CommentRowStyle';
import { useSelector, useDispatch } from 'react-redux';
import { DELETE_COMMENT_REQUEST } from '../reducers/post'


function CommentRow({ comment, PostId }) {
    const dispatch = useDispatch();
    console.log(comment);
    const { deleteCommentDone, deleteCommentLoading } = useSelector((state) => state.post);

    useEffect(() => {
        notification.open({
            message: '알림',
            description: "댓글 삭제 성공 !!"
        })
    }, [deleteCommentDone]);


    function deleteComment() {
        console.log("deleteComment button 클릭");
        console.log("comment 정보 확인 : ", comment);

        dispatch({
            type: DELETE_COMMENT_REQUEST,
            data: {
                CommentId: comment.id,
                PostId
            }
        });

    }

    return (
        <CommentRowRapper>
            <Comment
                author={comment.User.nickname}
                avatar={<Avatar>{comment.User.nickname[0]}</Avatar>}
                content={comment.content}
            />
            <CloseSquareOutlined loading={deleteCommentLoading} onClick={deleteComment} style={{ fontSize: '20px', color: '#08c' }} />
        </CommentRowRapper>
    )
}

export default CommentRow
