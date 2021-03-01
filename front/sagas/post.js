import { all, delay, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
import axios from 'axios';
// import shortId from 'shortid';
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,

    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,

    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,

    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,

    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCCESS,
    DELETE_COMMENT_FAILURE,

    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE,

    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,

    RETWEET_REQUEST,
    RETWEET_SUCCESS,
    RETWEET_FAILURE,

    SEARCH_POSTS_REQUEST,
    SEARCH_POSTS_SUCCESS,
    SEARCH_POSTS_FAILURE,

} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

// add your api 1122
function SearchPostsAPI(data) {
    console.log('data : ', data);
    return axios.get(`/search/posts/${data.search_word}/${data.lastId || 0}?`);
}

function* searchPosts(action) {
    try {
        console.log("action.data : ", action.data);
        const result = yield call(SearchPostsAPI, action.data);
        console.log("result for SearchPostsAPI : ", result);
        console.log("result for SearchPostsAPI : ", result.data.length);

        yield put({
            type: SEARCH_POSTS_SUCCESS,
            data: result.data
        });

    } catch (err) {
        console.log("error : ", err);
        console.error(err);
        yield put({
            type: SEARCH_POSTS_FAILURE,
            data: err.response.data,
        });
    }
}

function retweetAPI(data) {
    return axios.post(`/post/${data}/retweet`);
}

function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}

function addPostAPI(data) {
    // console.log("data for posting at saga : ", data);
    return axios.post('/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        console.log("result for posting : ", result);

        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function removePostAPI(data) {
    // return axios.delete('/api/post', data);
    return axios.delete(`/post/${data}`);
}
function* removePost(action) {
    try {
        // yield delay(1000);
        const result = yield call(removePostAPI, action.data);
        console.log("result from backend, postId 확인 하기 : ", result.data);

        yield put({
            type: REMOVE_POST_SUCCESS,
            // data: action.data,
            data: result.data,
        });

        yield put({
            type: REMOVE_POST_OF_ME,
            // data: action.data,
            data: result.data,
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function addCommentAPI(data) {
    console.log("data from saga for add comment : ", data);
    return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    console.log("addComent action : ", action.data);
    try {
        // yield delay(1000);
        const result = yield call(addCommentAPI, action.data);
        console.log("result(response from backend from insert comment): ", result);

        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.log("댓글 에러 : ", err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function loadPostsAPI(lastId) {
    // return axios.get('/posts', data);
    return axios.get(`/posts?lastId=${lastId || 0}`);

}
function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId);
        console.log("result for loadPostsAPI : ", result);
        console.log("result for loadPostsAPI : ", result.data.length);

        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        });
    }
}

function uploadImagesAPI(data) {
    console.log("data 확인 from saga : ", data);
    return axios.post('/post/images', data);
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}

function deleteCommentAPI(data) {
    console.log("data 확인 from saga : ", data);
    return axios.delete(`post/comment/${data.PostId}/${data.CommentId}`);
}

function* deleteComment(action) {
    try {
        const result = yield call(deleteCommentAPI, action.data);
        console.log("삭제에 대한 응답 : ", result.data);

        yield put({
            type: DELETE_COMMENT_SUCCESS,
            // 라우터에서 댓글 삭제한뒤 PostId와 CommentId 리턴 
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: DELETE_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchDeleteComment() {
    yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment);
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchSearchPosts() {
    yield takeLatest(SEARCH_POSTS_REQUEST, searchPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchLoadPosts),
        fork(watchUploadImages),
        fork(watchDeleteComment),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchRetweet),
        fork(watchSearchPosts),
    ]);
}
