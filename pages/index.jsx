import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'
import { selectCategory, fetchCategory } from '../actions'
import Audio from '../components/Audio';
import PodcastPlayer from '../components/podcastPlayer';
class Index extends React.Component {
    render() {
        const {  statusCode,  } = this.props
        if (statusCode !== 200) {
            //return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="nextPodcast" podcast={this.props.podcast} isPlaying={this.props.isPlaying} >
                <ChannelGrid {...this.props} />
                
            </Layout>
        )
    }
}
const mapStateToProps = state => {
    if(state.channelsByCategory.recommended !== undefined) {
        return {
            channels: state.channelsByCategory.recommended.items,
            isFetching: state.channelsByCategory.recommended.isFetching,
            podcast: state.toggledPodcast.podcast !== undefined ? state.toggledPodcast.podcast : undefined,
    isPlaying: state.toggledPodcast.isPlaying
            
        }
    }
    return {channels: [], isFetching: [], podcast: undefined}
  }

export default connect(mapStateToProps)(Index)