import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './global.css'

const TemplateWrapper = ({ children }) => (
  <div className={styles.main}>
    <Helmet
      title="DNGN"
      meta={[
        { name: 'description', content: 'A tiny dungeon crawler' },
        { name: 'keywords', content: 'game, dungeon, crawler' },
      ]}
    />
    <div className={styles.content}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
