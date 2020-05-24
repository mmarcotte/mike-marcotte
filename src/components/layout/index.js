import React from "react"
import { Link } from "gatsby"
import "../../styles/styles.scss"

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

const Header = props => {
  return (
    <header>
      <h1>
        <Link to="/">mike marcotte . tech</Link>
      </h1>
    </header>
  )
}
const Footer = props => {
  return (
    <footer>
      <p>&copy; 2020 Mike Marcotte</p>
    </footer>
  )
}

export default Layout
