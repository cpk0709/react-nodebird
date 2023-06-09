import PropsTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import { useState } from 'react';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useSelector } from 'react-redux';

const SearchInput = css`
  vertical-align: middle;
`;
const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton css={SearchInput} />
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='https://www.zerocho.com'
            target='_blank'
            rel='_noreferrer noopener'
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.prototype = {
  children: PropsTypes.node.isRequired,
};

export default AppLayout;
