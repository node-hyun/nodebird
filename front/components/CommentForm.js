import React, { useCallback, useEffect } from 'react';
import { Button, Form, Input, notification } from 'antd';
import useInput from '../hooks/useInput';

import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';


const CommentForm = ({ post }) => {
    const dispatch = useDispatch();

    const id = useSelector((state) => state.user.me?.id);
    const { addCommentDone, addCommentLoading } = useSelector((state) => state.post);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');

    useEffect(() => {
        if (addCommentDone) {
            setCommentText('');
            notification.open({
                message: '알림',
                description: "댓글 달기 성공 !!"
            })
        }
    }, [addCommentDone]);

    const onSubmitComment = useCallback(() => {
        console.log("submit post.id : ", post.id); // 본문글
        console.log("userId : ", id);  // userId 
        console.log("commentText  : ", commentText); // 댓글내용

        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, userId: id, postId: post.id },
        });

    }, [commentText]);


    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', marginTop: "-10px" }}>
                <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
                <Button
                    style={{ position: 'absolute', right: 0, bottom: -40 }}
                    type="primary"
                    htmlType="submit"
                    loading={addCommentLoading}
                >
                    삐약
                </Button>
            </Form.Item>
        </Form>
    );
};

CommentForm.propTypes = {
};

export default CommentForm;
