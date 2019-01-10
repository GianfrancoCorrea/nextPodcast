import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'
import { selectCategory, fetchCategory } from '../actions'

class Index extends React.Component {
    render() {
        const {  statusCode,  } = this.props
        if (statusCode !== 200) {
            //return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="nextPodcast">
                <ChannelGrid {...this.props} />
            </Layout>
        )
    }
}
const mapStateToProps = state => {
    if(state.channelsByCategory.recommended !== undefined) {
        return {
            channels: state.channelsByCategory.recommended.items,
            isFetching: state.channelsByCategory.recommended.isFetching
        }
    }
    return {channels: [], isFetching: []}
  }
export default connect(mapStateToProps)(Index)