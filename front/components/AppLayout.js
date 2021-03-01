import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Row, Col } from "antd";
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import SearchForm from './SearchForm';


const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">노드버드</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">프로필</Link>
                </Menu.Item>

                <Menu.Item>
                    <Link href="/signup">회원 가입</Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchForm />
                </Menu.Item>
            </Menu>
            {/* {children} */}
            <Row gutter="8">
                <Col xs={24} md={6}>
                    {me
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.zerocho.com" 
                       target="_blank" 
                       rel="noreferrer noopenner"
                    >Made by ZeroCho</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;





