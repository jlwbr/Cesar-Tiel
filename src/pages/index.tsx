import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/layout';

export default function IndexRoute(props: PageProps) {
    return (
        <Layout>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </Layout>
    );
}
