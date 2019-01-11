import React from 'react';
import 'isomorphic-fetch';
import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';
import Error from './_error';
import PodcastListWithClick from '../components/PodcastListWithClick';
import PodcastPlayer from '../components/podcastPlayer';
import Audio from '../components/Audio';
import PropTypes from 'prop-types';

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openPodcast: null, minimized: false };
    }

    static async getInitialProps({ query, res }) {
        try {
            const idChannel = query.id;

            const [requestChannel, requestSeries, requestAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
            ]);
            if (requestChannel.status >= 404) {
                res.statusCode = requestChannel.status;
                return {
                    channel: null, series: null, audioClips: null, statusCode: 404,
                };
            }

            const dataChannel = await requestChannel.json();
            const { channel } = dataChannel.body;

            const dataSeries = await requestSeries.json();
            const series = dataSeries.body.channels;

            const dataAudios = await requestAudios.json();
            const audioClips = dataAudios.body.audio_clips;

            return {
                channel, series, audioClips, statusCode: 200,
            };
        } catch (e) {
            return {
                channel: null, series: null, audioClips: null, statusCode: 503,
            };
        }
    }

    openPodcast = (event, podcast) => {
        event.preventDefault();
        this.setState({
            openPodcast: podcast,
        });
    }

    closePodcast = (event) => {
        event.preventDefault();
        this.setState({
            minimized: true,
        });
    }

    render() {
        const {
            channel, series, audioClips, statusCode,
        } = this.props;
        const { openPodcast, minimized } = this.state;

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title={channel.title}>
                <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
                <h1>{ channel.title }</h1>
                { series.length > 0
                    && (
                        <div className="series">
                            <h2>Series</h2>
                            <ChannelGrid channels={series} />
                        </div>
                    )
                }
                <div className="lastPodcasts">
                    <h2>Ultimos Podcasts</h2>
                    <PodcastListWithClick podcasts={audioClips} onClickPodcast={this.openPodcast} />
                </div>

                {openPodcast
                && (
                    <PodcastPlayer
                        clip={openPodcast}
                        onClose={this.closePodcast}
                        minimized={minimized}
                    >
                        <Audio
                            clip={openPodcast}
                            minimized={minimized}
                            onClose={this.closePodcast}
                        />
                    </PodcastPlayer>
                )}
                <style jsx>
                    {`
                    .banner {
                        width: 100%;
                        padding-botconst 25%;
                        background-consttion: 50% 50%;
                        background-const: cover;
                        background-constr: #aaa;
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
                `}

                </style>
            </Layout>
        );
    }
}
Channel.defaultProps = {
    series: null,
};
Channel.propTypes = {
    statusCode: PropTypes.number.isRequired,
    audioClips: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    series: PropTypes.arrayOf(PropTypes.shape({})),
    channel: PropTypes.shape({}).isRequired,
};

