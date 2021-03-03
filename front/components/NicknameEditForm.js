import React, { useMemo , useCallback} from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

import { CHANGE_NICKNAME_REQUEST } from '../reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';

const SearchFormWrapper = styled.form`
   margin: 10px;
`;

const NicknameEditForm = () => {
    const { me } = useSelector((state) => state.user);
    const [nickname, onChangeNickname] = useInput(me?.nickname || '');
    const dispatch = useDispatch();


    const onSubmit = useCallback(() => {
        dispatch({
            type: CHANGE_NICKNAME_REQUEST,
            data: nickname,
        });
    }, [nickname]);

    return (
        <SearchFormWrapper>
            <Input.Search
                value={nickname}
                onChange={onChangeNickname}
                addonBefore="닉네임"
                enterButton="수정"
                onSearch={onSubmit}
            /> </SearchFormWrapper>
    );
};

export default NicknameEditForm;
