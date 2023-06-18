import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox } from 'antd';
import { useCallback, useState } from 'react';
import useInput from '../hooks/useInput';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const termErrorStyle = css`
  color: red;
`;

const Signup = () => {
  const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(password !== e.target.value);
    },
    [password]
  );

  const onSubmit = () => console.log('test');

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-id'>아이디</label>
          <br />
          <Input name='user-id' value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor='user-nickname'>닉네임</label>
          <br />
          <Input
            name='user-nickname'
            value={nickname}
            onChange={onChangeNickname}
            required
          />
        </div>
        <div>
          <label htmlFor='user-password'>비밀번호</label>
          <br />
          <Input
            name='user-password'
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div>
          <label htmlFor='user-passCheck'>비밀번호 확인</label>
          <br />
          <Input
            name='user-passCheck'
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
            이용 약관에 동의합니다.
          </Checkbox>
          {termError && (
            <div css={termErrorStyle}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
