
질문:
reducer의 DELETE_COMMENT_SUCCESS에서 immer 문법으로 staet를 갱신해서 댓글을 삭제하려고 하는데여 

아래처럼 사가에서 PostId(mainPosts 요소 id)와 CommentId(mainPosts 요소의 Comments의 id)가 넘어오는 상황이고 
state는 아래의 currentState와 같은데 댓글 부분 삭제를 어떻게 설정해야 될까여?

filter find 등을 사용하면 될거 같긴 한데 잘안되서여 

어떻게 하는지 아시는분 알려주시면 대단히 감사여 ~!

// 케이스문:
case DELETE_COMMENT_SUCCESS:
    draft.deleteCommentLoading = false;
    draft.deelteCommentDone = true;
    // 댓글 삭제


// current state:
{
    removePostDone,
        removePostLoading,
        mainPosts[
        {
            id: 23,
            content: 'posting 1212',
            createdAt: '2021-02-26T07:55:13.000Z',
            updatedAt: '2021-02-26T07:55:13.000Z',
            UserId: 2,
            RetweetId: null,
            User: {
                id: 2,
                nickname: 'tere2'
            },
            Images: [
                {
                    id: 20,
                    src: 'sf4_1614326111307.jpg',
                    createdAt: '2021-02-26T07:55:13.000Z',
                    updatedAt: '2021-02-26T07:55:13.000Z',
                    PostId: 23
                }
            ],
            Comments: [
                {
                    id: 11,
                    content: '댓글 11',
                    createdAt: '2021-02-26T12:14:42.000Z',
                    updatedAt: '2021-02-26T12:14:42.000Z',
                    UserId: 2,
                    PostId: 23,
                    User: {
                        id: 2,
                        nickname: 'tere2'
                    }
                }
            ],
            Likers: [],
            Retweet: null
        },
        {
            id: 18,
            content: 'test 1111',
            createdAt: '2021-02-26T00:16:09.000Z',
            updatedAt: '2021-02-26T00:16:09.000Z',
            UserId: 2,
            RetweetId: null,
            User: {
                id: 2,
                nickname: 'tere2'
            },
            Images: [
                {
                    id: 15,
                    src: 'sf6_1614298564136.jpg',
                    createdAt: '2021-02-26T00:16:09.000Z',
                    updatedAt: '2021-02-26T00:16:09.000Z',
                    PostId: 18
                }
            ],
            Comments: [],
            Likers: [],
            Retweet: null
        },
    ]
}

// post 삭제는 이렇게 하니까 되었어여 
            case REMOVE_POST_SUCCESS:
draft.removePostLoading = false;
draft.removePostDone = true;
draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);