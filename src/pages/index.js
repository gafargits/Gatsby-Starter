import React from "react"
import { Link } from 'gatsby'
import Layout from './components/layout'
import Head from '../pages/components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello,</h1>
      <h2>I'm Gafar, a full-stack developer in Nigeria</h2>
      <p>Need a developer? <Link href="/contact">Contact me</Link></p>
      <p>Wanna know more about me? Read it here -><Link to="/about">About me</Link></p>
    </Layout>
  )
}

export default IndexPage