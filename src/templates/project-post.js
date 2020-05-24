import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const BlogPost = ({ data }) => (

    <Layout>
      <div>
        <h1>{data.wpcontent.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />
      </div>
    </Layout>
)
export default BlogPost

export const query = graphql`
  query($databaseId: ID!) {
      wpcontent {
          post(id: $databaseId, idType: DATABASE_ID) {
              title
              content(format: RENDERED)
          }
      }
  }`