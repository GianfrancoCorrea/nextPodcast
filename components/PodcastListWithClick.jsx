import slug from '../helpers/slug'
import { connect } from 'react-redux';
import {togglePodcast} from '../actions'
class PodcastListWithClick extends React.Component {
  render() {
    const { podcasts, onPodcastClick } = this.props

    return <div>
      { podcasts.map((podcast) => (
        <a href={`/${slug(podcast.channel.title)}.${podcast.channel.id}/${slug(podcast.title)}.${podcast.id}`}
          className='podcast' key={podcast.id}
          onClick={ (event) => onPodcastClick(event, podcast) }>
          <h3>{ podcast.title }</h3>
          <div className='meta'>
            { Math.ceil(podcast.duration / 60) } minutes
          </div>
        </a>
      )) }

      <style jsx>{`
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
      `}</style>
    </div>
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => {
    return {
        onPodcastClick: (event, podcast) => {
            event.preventDefault();
            dispatch(togglePodcast(podcast))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PodcastListWithClick)