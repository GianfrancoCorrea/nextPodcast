import React from 'react';
import { Link } from '../routes';
import slug from '../helpers/slug';
import PropTypes from 'prop-types';

export default function PodcastPlayer(props) {
    const {
        clip, onClose, children, minimized,
    } = props;

    const modalState = !minimized ? 'modal' : 'hidden';
    return (
        <div className={modalState}>
            <div className="clip">
                <nav>
                    { onClose
                        ? (
                            <a onClick={onClose}>
                                <b>
                                    <span role="img" aria-label="arrow">⏬ </span>
                                  Minimize
                                </b>

                            </a>
                        )
                        : (
                            <Link
                                route="channel"
                                params={{ slug: slug(clip.channel.title), id: clip.channel.id }}
                                prefetch
                            >
                                <a className="close">&lt; Volver</a>
                            </Link>
                        )
                    }
                </nav>

                <picture>
                    <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
                </picture>

            </div>

            {children}
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
          z-index: 100;
        }
        .hidden .clip {
            display: none
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
        </div>
    );
}
PodcastPlayer.defaultProps = {
    onClose: null,
    minimized: null,
};
PodcastPlayer.propTypes = {
    clip: PropTypes.shape({
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
    onClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    minimized: PropTypes.bool,
};

