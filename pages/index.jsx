import React from 'react'
import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'
import { selectCategory, fetchCategory } from '../actions'

class Index extends React.Component {
    static async getInitialProps({ reduxStore, req, res }) {
        
        // TODO: reemplazar los channels del fetch (line 20-27) por el fetch (line 15)
        reduxStore.dispatch(selectCategory('recommended'))
        reduxStore.dispatch(fetchCategory('recommended')).then(() =>
            console.log(reduxStore.getState())
        )

        try {
            let request = await fetch('https://api.audioboom.com/channels/recommended')
            let { body: channels } = await request.json();
            return { channels, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { channels: null, statusCode: 503 }
        }
    }

    componentDidMount() {
        const { dispatch } = this.props
    }

    componentWillUnmount() {

    }

    render() {
        const {  channels, statusCode,  } = this.props

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

        return (
            <Layout title="nextPodcast">
                <ChannelGrid channels={channels} />
            </Layout>
        )
    }
}

export default connect()(Index)