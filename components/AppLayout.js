import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <div>
                <Menu mode="horizontal">
                    <Menu.Item>
                        <Link href="/"><a>노드버드</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/profile"><a>프로필</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <SearchInput enterButton />
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/signup"><a>회원가입</a></Link>
                    </Menu.Item>
                </Menu>
                <Row gutter={8}>
                    <Col xs={24} md={6}>
                        {isLoggedIn} ? <UserProfile /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />
                    </Col>
                    <Col xs={24} md={12}>
                        {children}
                    </Col>
                    <Col xs={24} md={6}>
                        <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">Made by Taewoong Kang</a>
                    </Col>
                </Row>
            </div>
        </div>
    );
};


AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
// props로 넘어오는 애들은 이 propTypes로 검사를 한 번 해주는 것이 좋다. children은 node(리액트의 node) 타입을 가지고 있다. 화면에 그릴 수 있는 모든 것들이 node이다.

// <AppLayout>
// 이 사이에 들어가는 것이 children으로 전달된다.
// </AppLayout>

export default AppLayout;
