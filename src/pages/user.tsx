import * as React from 'react'
import { css, StyleAttribute } from 'glamor'
import withData from '../lib/withData'
import App from '../components/App'
import User from '../components/User'

export default withData((props: any) => {
  return (
    <App>
      <User params={props.url.query} />
    </App>
  )
})
