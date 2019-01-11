import React from 'react';

function Audio(props) {
 const {clip} = props
 return <div className='player'>
  <h3>{clip.title}</h3>
  <h6>{clip.channel.title}</h6>
  <audio controls autoPlay={true}>
   <source src={clip.urls.high_mp3} type='audio/mpeg' />
  </audio>

  <style jsx>{`
        .player {
          width: 100%;
          position: fixed;
          z-index: 110;
          bottom: 0;
          padding-top: 1em;
          
          background: #8756ca;
          text-align: center;
        }
        h3 {
          margin: 0;
          padding-left: 1em;
          padding-right: 1em;
        }
        h6 {
          margin: 0;
          margin-top: 1em;
        }
        audio {
          margin-top: 1em;
          width: 95%;
          border-radius: 0;
        }
        `}</style>
 </div>
}

export default Audio;