import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error'
import PodcastListWithClick from '../components/PodcastListWithClick';
import PodcastPlayer from '../components/podcastPlayer';

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.state = { openPodcast: null }
    }

    static async getInitialProps({ query, res }) {
        try {
            let idChannel = query.id

            let [requestChannel, requestSeries, requestAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
                ]);
                
            if( requestChannel.status >= 404 ) {
                res.statusCode = requestChannel.status
                return { channel: null, series: null, audioClips: null, statusCode: 404 }
            }

            let dataChannel = await requestChannel.json();
            let channel = dataChannel.body.channel;

            let dataSeries = await requestSeries.json();
            let series = dataSeries.body.channels;

            let dataAudios = await requestAudios.json();
            let audioClips = dataAudios.body.audio_clips;

            return { channel, series, audioClips, statusCode: 200 }
        } catch(e){
            return { channel: null, series: null, audioClips: null, statusCode: 503 }
        }
    }

    openPodcast = (event, podcast) => {
        event.preventDefault();
        this.setState({
            openPodcast: podcast
        })
    }

    closePodcast = (event) => {
        event.preventDefault()
        this.setState({
            openPodcast: null
        })
    }

    render() {
        const { channel, series, audioClips, statusCode } = this.props
        const { openPodcast } = this.state

        if( statusCode !== 200 ) {
            return <Error statusCode={ statusCode }/>
        }

        return (
            <Layout title={channel.title}>
                <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
                {openPodcast && <PodcastPlayer clip={ openPodcast } onClose={ this.closePodcast }/>}
                <h1>{ channel.title }</h1>
                { series.length > 0 &&
                    <div className="series">
                    <h2>Series</h2>
                        <ChannelGrid channels={ series } />
                    </div>
                }
                <div className="lastPodcasts">
                    <h2>Ultimos Podcasts</h2>
                    <PodcastListWithClick podcasts={ audioClips } onClickPodcast={this.openPodcast}/>
                </div>

                <style jsx>{`
                    .banner {
                        width: 100%;
                        padding-bottom: 25%;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #aaa;
                    }

                    h1 {
                        font-weight: 600;
                        padding: 15px;
                    }
                    h2 {
                       padding: 5px;
                       font-size: 0.9em;
                       font-weight: 600;
                       margin: 0;
                       text-align: center;
                       }
                `}</style>
        </Layout>
        )
    }
}