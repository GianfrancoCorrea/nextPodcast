import React from 'react';
import { Link } from '../routes';
import slug from '../helpers/slug';
import { connect } from 'react-redux';

function ChannelGrid(props) {
    const { channels, isFetching } = props;
    const loader = (
        <div>
            <center><h2>nextPodcast</h2></center>
            <div className="loader">
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
                <div className="bar4" />
                <div className="bar5" />
                <div className="bar6" />
            </div>
            <style jsx global>
                {`
                    body, html {
                    background-color: #8756ca!important;
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                    }
                    header a {color: #8756ca!important;}
                    h2 {
                        margin: 0 auto;
                    text-align: center;
                    font-size: 20px;
                    position: absolute;
                    top: 40%;
                    width: 100%;
                    
                    color: white;
                    }
                    .loader {
                    margin: 0 auto;
                    width: 60px;
                    height: 50px;
                    text-align: center;
                    font-size: 10px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translateY(-50%) translateX(-50%);
                    }
                    .loader > div {
                    height: 100%;
                    width: 8px;
                    display: inline-block;
                    float: left;
                    margin-left: 2px;
                    -webkit-animation: delay 0.8s infinite ease-in-out;
                    animation: delay 0.8s infinite ease-in-out;
                    }
                    .loader .bar1 {
                    background-color: #754fa0;
                    }
                    .loader .bar2 {
                    background-color: #09b7bf;
                    -webkit-animation-delay: -0.7s;
                    animation-delay: -0.7s;
                    }
                    .loader .bar3 {
                    background-color: #90d36b;
                    -webkit-animation-delay: -0.6s;
                    animation-delay: -0.6s;
                    }
                    .loader .bar4 {
                    background-color: #f2d40d;
                    -webkit-animation-delay: -0.5s;
                    animation-delay: -0.5s;
                    }
                    .loader .bar5 {
                    background-color: #fcb12b;
                    -webkit-animation-delay: -0.4s;
                    animation-delay: -0.4s;
                    }
                    .loader .bar6 {
                    background-color: #ed1b72;
                    -webkit-animation-delay: -0.3s;
                    animation-delay: -0.3s;
                    }

                    @-webkit-keyframes delay {
                    0%, 40%, 100% {
                        -webkit-transform: scaleY(0.05);
                    }
                    20% {
                        -webkit-transform: scaleY(1);
                    }
                    }
                    @keyframes delay {
                    0%, 40%, 100% {
                        transform: scaleY(0.05);
                        -webkit-transform: scaleY(0.05);
                    }
                    20% {
                        transform: scaleY(1);
                        -webkit-transform: scaleY(1);
                    }
                    }
                    `}

            </style>
        </div>
    );

    const channelsUI = (
        <div className="channels">
            {channels.map(channel => (
                <Link route="channel" params={{ slug: slug(channel.title), id: channel.id }} key={channel.id} prefetch>
                    <a className="channel">
                        <img src={channel.urls.logo_image.original} alt={channel.title} />
                        <h2>{channel.title}</h2>
                    </a>
                </Link>
            )) }
            <style jsx>
                {`   
                        .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                        }
                        a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                        }
                        .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                        }
                `}

            </style>
        </div>
    );

    return !isFetching ? channelsUI : loader;
}

export default connect()(ChannelGrid);
