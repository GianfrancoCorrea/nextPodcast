import React from 'react';
import 'isomorphic-fetch';
import Link from 'next/link';
import Error from './_error';
import PropTypes from 'prop-types';

export default class Podcast extends React.Component {
    static async getInitialProps({ query, res }) {
        try {
            const podcastID = query.id;
            const requestAudio = await fetch(`https://api.audioboom.com/audio_clips/${podcastID}.mp3`);
            if (requestAudio.status >= 404) {
                res.statusCode = requestAudio.status;
                return {
                    channel: null, series: null, audioClips: null, statusCode: 404,
                };
            }

            const dataAudio = await requestAudio.json();
            const audio = dataAudio.body.audio_clip;
            const { statusCode } = res;

            return { audio, statusCode };
        } catch (e) {
            return { audio: null, statusCode: 503 };
        }
    }

    render() {
        const { audio, statusCode } = this.props;

        if (statusCode !== 200) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <div>
                <header>Podcasts</header>

                <div className="modal">
                    <div className="clip">
                        <nav>
                            <Link href={`/channel?id=${audio.channel.id}`}>
                                <a className="close"><b>&lt; Back</b></a>
                            </Link>
                        </nav>

                        <picture>
                            <div style={{ backgroundImage: `url(${audio.urls.image || audio.channel.urls.logo_image.original})` }} />
                        </picture>
                        <div className="player">
                            <h3>{audio.title}</h3>
                            <h6>{audio.channel.title}</h6>
                            <audio controls autoPlay>
                                <source src={audio.urls.high_mp3} type="audio/mpeg" />
                            </audio>
                        </div>
                    </div>

                    <style jsx>
                        {`
                nav {
                background: none;
                }
                nav a {
                display: inline-block;
                padding: 15px;
                color: white;
                cursor: pointer;
                text-decoration: none;
                }
                .clip {
                display: flex;
                height: 100%;
                flex-direction: column;
                background: #8756ca;
                color: white;
                }
                picture {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1 1;
                flex-direction: column;
                width: auto;
                padding: 10%;
                }
                picture div {
                width: 100%;
                height: 100%;
                background-position: 50% 50%;
                background-size: contain;
                background-repeat: no-repeat;
                }
                .player {
                padding: 30px;
                background: rgba(0,0,0,0.3);
                text-align: center;
                }
                h3 {
                margin: 0;
                }
                h6 {
                margin: 0;
                margin-top: 1em;
                }
                audio {
                margin-top: 2em;
                width: 100%;
                }

                .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 99999;
                }
            `}

                    </style>

                    <style jsx global>
                        {`
                body {
                margin: 0;
                font-family: system-ui;
                background: white;
                }
            `}

                    </style>
                </div>
            </div>
        );
    }
}

Podcast.propTypes = {
    audio: PropTypes.shape({
        channel: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            urls: PropTypes.shape({
                logo_image: PropTypes.shape({
                    original: PropTypes.string,
                }),
                image: PropTypes.string,
            }),
        }),

    }).isRequired,
    statusCode: PropTypes.number.isRequired,
};
