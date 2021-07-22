import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';

const Proflie = () => {
    return (
        <AppLayout>
            <Head>
                <title>내 프로필 | Nodebird</title>
            </Head>
            <div>내 프로필</div>
        </AppLayout>
    );
};

export default Proflie;