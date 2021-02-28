import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Avatar, List, Comment, Popover, Button } from 'antd';
// 컴퍼넌트 임포트
import CommentForm from './CommentForm';
import PostImages from "./PostImages";
import PostCardContent from "../components/PostCardContent";
import FollowButton from './FollowButton';
import CommentRow from './CommentRow';

// 11 RETWEET_REQUEST 임포트 추가
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST  } from '../reducers/post';
import Link from 'next/link';
import moment from 'moment';


const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const { removePostLoading } = useSelector((state) => state.post);
    const { me } = useSelector((state) => state.user);
    const id = me && me.id;
    const liked = post.Likers.find((v) => v.id === id);


    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);

    const onLike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: LIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    const onUnlike = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: UNLIKE_POST_REQUEST,
            data: post.id,
        });
    }, [id]);

    // 33 리트윗 함수 추가
    const onRetweet = useCallback(() => {
        if (!id) {
            return alert('로그인이 필요합니다.');
        }
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id,
        });
    }, [id]);    

    return (
        <>
            <Card
                style={{ width: "100%" ,marginBottom:"10px" }}
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[

                    // 22 버튼에 이벤트 걸기 <RetweetOutlined key="retweet" />,
                    <RetweetOutlined key="retweet" onClick={onRetweet} />,

                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
                        : <HeartOutlined key="heart" onClick={onLike} />,
                    <MessageOutlined key="message" onClick={onToggleComment} />,

                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id
                                    ? (
                                        <>
                                            <Button>수정</Button>
                                            <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                        </>
                                    )
                                    : <Button>신고</Button>}
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                    
                ]}
                extra={< FollowButton post={post} />}

                title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
            >
                {/* <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    description={<PostCardContent postData={post.content} />}
                /> */}

                {post.RetweetId && post.Retweet
                    ? (
                        <Card
                            cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
                        >
                            <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
                            <Card.Meta
                                avatar={<Link href={`/user/${post.Retweet.User.id}`}><a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a></Link>}
                                title={post.Retweet.User.nickname}
                                description={<PostCardContent postData={post.Retweet.content} />}
                            />
                        </Card>
                    )
                    : (
                        <>
                            <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
                            <Card.Meta
                                avatar={<Link href={`/user/${post.User.id}`}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
                                title={post.User.nickname}
                                description={<PostCardContent postData={post.content} />}
                            />
                        </>
                    )}

            </Card>

            {commentFormOpened && ( 
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments ? post.Comments.length : 0} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={(item) => (
                            <li>
                                <CommentRow comment={item} PostId = {post.id} />
                            </li>
                        )}
                    />
                </>
            )}


        </>
    );
};

export default PostCard;

