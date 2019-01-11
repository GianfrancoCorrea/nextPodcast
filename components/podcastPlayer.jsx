import { Link } from '../routes'
import slug from '../helpers/slug'
import Audio from './Audio';
import { Portal } from './Portal';

export default class PodcastPlayer extends React.Component {
  constructor(props){
    super(props)
  }
  shouldComponentUpdate (nextProps) {
    return JSON.stringify(nextProps.clip) !== JSON.stringify(this.props.clip);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.clip) {
      this.props.setIsPlaying()
    }
  }
  componentDidMount(){
    console.log('se monta')
    
  }
  render() {
    const { clip, onClose, minimized, children } = this.props
    if (!clip || this.props.isPlaying) return null;
    return <Portal selector='#player'>
    <div className="">
    {!minimized ? 
      <div className=' clip'>
        <nav>
          { onClose ?
            <a onClick={onClose}><b>&lt; Back</b></a>
            :
            <Link route='channel' 
              params={{ slug: slug(clip.channel.title), id: clip.channel.id }} 
              prefetch>
              <a className='close'>&lt; Back</a>
            </Link>
          }
        </nav>

        <picture>
          <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
        </picture>

      </div>
      : null}
      {children}

      <style jsx>{`
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
      `}</style>
    </div>
    </Portal>
  }
}