import React from 'react';
import { connect } from 'react-redux';
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error';

function Index(props) {
    const { statusCode } = props;
    if (statusCode > 200) {
        return <Error statusCode={statusCode} />;
    }
    return (
        <Layout title="nextPodcast">
            <ChannelGrid {...props} />
        </Layout>
    );
}

const mapStateToProps = (state) => {
    if (state.channelsByCategory.recommended !== undefined) {
        return {
            channels: state.channelsByCategory.recommended.items,
            isFetching: state.channelsByCategory.recommended.isFetching,
        };
    }
    return { channels: [], isFetching: [] };
};
export default connect(mapStateToProps)(Index);

