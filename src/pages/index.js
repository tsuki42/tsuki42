import React from "react"
import SEO from "components/seo"
import GlobalStyles from "components/global-styles"
import Navigation from "components/navigation"
import About from "components/about"
import Posts from "components/posts"
import Contact from "components/contact"
import Footer from "components/footer"

const Home = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Navigation />
        <About />
        <Posts />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Home />
  </>
)

export default IndexPage
