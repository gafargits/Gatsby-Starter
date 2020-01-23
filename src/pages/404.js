import React from 'react'
import { Link } from 'gatsby'
import Head from '../pages/components/head'


import Layout from '../pages/components/layout'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page Not Found</h1>
      <p><Link to="/">Head Home</Link></p>
    </Layout>
  )
}

export default NotFound