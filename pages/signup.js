import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Signup = () => {
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Nodebird</title>
            </Head>
            <div>회원가입</div>
        </AppLayout>
    );
};

export default Signup;