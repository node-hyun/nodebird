import React, { useMemo } from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const SearchFormWrapper = styled.form`
   margin: 10px;
`;

const NicknameEditForm = () => {

    return (
        <SearchFormWrapper>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </SearchFormWrapper>
    );
};

export default NicknameEditForm;
