import React from 'react'
import Layout from '../components/layout'

const tracks = [
  {
    name: '&quot;acidpaskajunglehomma&quot;',
    link: 'acidpaskajunglehomma',
    id: '2547432583',
  },
  { name: 'Tommi Mäkinen', link: 'tommi-m-kinen', id: '2652456485' },
  { name: 'beat_no1', link: 'beat-no1', id: '2103061003' },
  { name: 'Solemn Pt. 2', link: 'solemn-pt-2', id: '107563528' },
]

const albums = [{ name: 'Solemn EP', link: 'solemn-ep-2', id: '144455406' }]

const Music = props => (
  <Layout {...props}>
    <div className="animated fadeIn">
      {tracks.map((track, index) => (
        <iframe
          style={{
            border: 0,
            width: '100%',
            height: '42px',
            marginTop: index === 0 ? '8pt' : '1pt',
          }}
          src={`https://bandcamp.com/EmbeddedPlayer/track=${
            track.id
          }/size=small/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`}
          seamless
          key={track.id}
        >
          <a href={`http://refer.bandcamp.com/track/${track.link}`}>
            {track.name} by refer
          </a>
        </iframe>
      ))}
      {albums.map(album => (
        <iframe
          style={{
            border: 0,
            width: '100%',
            height: '274px',
            marginTop: '1pt',
          }}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${
            album.id
          }/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/`}
          title="bandcamp player"
          seamless
        >
          <a href={`http://refer.bandcamp.com/album/${album.link}`}>
            {album.name} by refer
          </a>
        </iframe>
      ))}
    </div>
  </Layout>
)

export default Music
