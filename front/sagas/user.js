import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_FOLLOWERS_REQUEST, 
    LOAD_FOLLOWERS_SUCCESS, 
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST, 
    LOAD_FOLLOWINGS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE,
} from '../reducers/user';
import axios from "axios";

function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);
        console.log("result (리무부 팔로워) :  result");
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowersAPI(data) {
    console.log("data from loadFollowersAPI: ", data);
    // return axios.get(`/user/followers?limit=${data.limit || 3}`, data);
    return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        console.log("result from saga for loadFollowersAPI:", result);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data) {
    console.log("data from loadFollowingsAPI: ", data);
    return axios.get(`/user/followings`, data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        console.log("result from saga for loadFollowersAPI:", result);

        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    // console.log("saga signUpAPI 실행 확인 회원 가입 정보는 => ", data);
    return axios.post('/user', data);
}

function* signUp(action) {
    try {
        // yield delay(1000);
        const result = yield call(signUpAPI, action.data);
        console.log("회원 가입 응답 result : ", result);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI(data) {
    // return axios.post('/api/follow');
    return axios.patch(`/user/${data}/follow`);
}
function* follow(action) {
    try {
        // yield delay(1000);
        const result = yield call(followAPI, action.data);
        console.log("result for followAPI from backend : ", result);

        yield put({
            type: FOLLOW_SUCCESS,
            // data: action.data,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI(data) {
    // return axios.post('/api/unfollow');
    return axios.delete(`/user/${data}/follow`);
    
}
function* unfollow(action) {
    try {
        // yield delay(1000);
        const result = yield call(unfollowAPI, action.data);
        console.log("result for unfollowAPI from backend : ", result);
        yield put({
            type: UNFOLLOW_SUCCESS,
            // data: action.data,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function logInAPI(data) {
    console.log("로그인 데이터 to 서버 from saga: ", data);
    // return axios.post('/api/login', data);
    return axios.post('/user/login', data);
}

function* logIn(action) {
    try {
        // yield delay(2000);
        const result = yield call(logInAPI, action.data);
        console.log("result.data(from server) : ", result.data);

        yield put({
            type: LOG_IN_SUCCESS,
            // data: action.data,
            data: result.data,
        });
    } catch (err) {
        console.log("로그인 에러 확인 from saga : ",err);
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI(data) {
    // return axios.post('/api/login', data);
    return axios.post('/user/logout', data);
}

function* logOut(action) {
    try {
        console.log('saga logout');
        // yield delay(2000);
        const result = yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserAPI() {
    return axios.get('/user');
}
function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogOut() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchLogIn() {
    console.log("saga watch 실행 check");
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchRemoveFollower),
        fork(watchSignUp),
        fork(watchLoadUser),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
    ]);
}
