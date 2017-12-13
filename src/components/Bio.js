import React from 'react'
import { Follow } from 'react-twitter-widgets'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-dp.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Emmanuel Evance`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          👋 My friends call me Mtuchi. 
          I'm a Developer / Design Ninja and I​ want​ to​ be​ a ​Front-End​ ​Architect​​ ​when​ I grow​ up.
        </p>
        <Follow username='mtuchidev' />
      </div>
    )
  }
}

export default Bio
