import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi horsey people</h1>
    <p>
      Just because you like large farm animals doesn't mean you need to live in
      technological stone age.
    </p>
    <p>A collection of fun and serious equine-inspired web apps made by me.</p>

    <div className="columns">
      <div className="column">
        <h2> Serious Horsing </h2>
        <p>Show management</p>
        <p>Easy Riding Diary</p>
      </div>

      <div className="column">
        <h2>Educational Equines</h2>
        <p>Punnett Ponies</p>
        <p> Wiki-powered Equine Timeline</p>
      </div>

      <div className="column">
        <h2>Horsey Games & Web Toys</h2>
        <p> Dressage Arena - Phaser</p>
        <p> Horse Cloud Jumper - Phaser</p>
        <p> Expanded Horse Hangman</p>
        <p> Future expanded web-game?</p>
      </div>
    </div>
    <p> Hire me! I need to pay for my horsing!! </p>
  </Layout>
)

export default IndexPage
