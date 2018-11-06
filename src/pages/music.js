import React from 'react'
import Layout from '../components/layout'

const Music = props => (
  <Layout {...props}>
    <div className="animated fadeIn">
      <p>
        I've created and played music from the get-go. Started by singing and
        playing guitar right when I was seven years old; been experimenting with
        electronic sounds from roughly the same age.
      </p>

      <p>
        After playing in two or three bands (mostly metal), with one of which we
        did some gigs, I've taken the path of solitude with doing electronic
        music under the name <strong>refer</strong>. Here's the latest EP:
      </p>

      <iframe
        style={{ border: 0, width: '100%', height: '274px', marginTop: '8pt' }}
        src="https://bandcamp.com/EmbeddedPlayer/album=144455406/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/"
        title="bandcamp player"
        seamless
      >
        <a href="http://refer.bandcamp.com/album/solemn-ep-2">
          Solemn EP by refer
        </a>
      </iframe>
    </div>
  </Layout>
)

export default Music
