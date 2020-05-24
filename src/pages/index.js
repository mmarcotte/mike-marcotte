import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="content">
        <div
          dangerouslySetInnerHTML={{
            __html: data.wpcontent.pages.edges[0].node.content,
          }}
        />
      </div>
      <div className="secondary-content">
        <h2>Projects</h2>

        <ul>
        {data.wpcontent.posts.edges.map(({node: project}) => <Project {...project}></Project>)}
        </ul>
      </div>
    </Layout>
  )
}

function Project({ title, slug, modified }) {
    return (
        <li><Link to={`/projects/${slug}`}>{title}</Link></li>
    )
}

export const query = graphql`
  {
    wpcontent {
      pages(where: { title: "Home Page" }) {
        edges {
          node {
            content
          }
        }
      }
      posts(where: { categoryName: "Project" }) {
        edges {
          node {
            title
            slug
            modified
          }
        }
      }
    }
  }
`
