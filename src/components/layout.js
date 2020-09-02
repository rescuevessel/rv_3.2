import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav"
import Footer from './Footer'
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     
        <Nav siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>
            {children} 
          </main>
        </div>
        <Footer />
    </>
  )
}

Layout.propTypes = { children: PropTypes.node.isRequired, }

export default Layout


