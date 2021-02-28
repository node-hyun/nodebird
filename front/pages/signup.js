import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Checkbox, Button } from "antd";
import useInput from '../hooks/useInput';
import { useDispatch ,useSelector} from 'react-redux';
import { SIGN_UP_REQUEST } from '../reducers/user';
import Router from 'next/router';



const Signup = () => {
    const dispatch = useDispatch();
    const [email, onChangeEmail] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    // const { signUpLoading} = useSelector((state) => state.user);
    const { signUpLoading, me, signUpDone, signUpError} = useSelector((state) => state.user);

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);

    
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        // console.log("회원 가입 정보 : id, nick, password : ", email, nickname, password);

        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email,
                nickname,
                password,
            },
        });


    }, [email, password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback(
        (e) => {
            setPasswordError(e.target.value !== password);
            setPasswordCheck(e.target.value);
        },
        [password]
    );

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);


    return (
        <AppLayout>
            <Head>
                <title>회원 가입 | NodeBird</title>
            </Head>

            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">이메일</label>
                    <br />
                    <Input
                        name="user-id"
                        value={email}
                        required
                        onChange={onChangeEmail}
                    />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nickname}
                        required
                        onChange={onChangeNickname}
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword}
                    />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    />

                    {passwordError && (
                        <div style={{ color: "red" }}>
                            비밀번호가 일치하지 않습니다.
                        </div>
                    )}
                </div>

                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >
                        제로초 말을 잘 들을 것을 동의합니다.
                    </Checkbox>
                    {termError && (
                        <div style={{ color: "red" }}>
                            약관에 동의하셔야 합니다.
                        </div>
                    )}
                </div>

                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>

            </Form>
        </AppLayout>
    );
};


export default Signup;