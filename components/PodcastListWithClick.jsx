import React from 'react';
import slug from '../helpers/slug';
import PropTypes from 'prop-types';

export default function PodcastListWithClick(props) {
    const { podcasts, onClickPodcast } = props;

    return (
        <div>
            { podcasts.map(podcast => (
                <a
                    href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(podcast.title)}.${podcast.id}`}
                    className="podcast"
                    key={podcast.id}
                    onClick={event => onClickPodcast(event, podcast)}
                >
                    <h3>{ podcast.title }</h3>
                    <div className="meta">
                        { Math.ceil(podcast.duration / 60) }
                        {' '}
                          minutes
                    </div>
                </a>
            )) }

            <style jsx>
                {`
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
        .podcast h3 {
          margin: 0;
        }
        .podcast .meta {
          color: #666;
          margin-top: 0.5em;
          font-size: 0.8em;
        }
      `}

            </style>
        </div>
    );
}

PodcastListWithClick.propTypes = {
    podcasts: PropTypes.PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        id: PropTypes.number,
        duration: PropTypes.number,
        channel: PropTypes.shape({
            id: PropTypes.number,
        }),
    })).isRequired,
    onClickPodcast: PropTypes.func.isRequired,
};

