const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

    /**
     *  Create Project Pages
     */ 
    const projectResults = await graphql(`
    query GET_PROJECTS {
        wpcontent {
            posts(first: 1000, after: null) {
                edges {
                    node {
                        databaseId
                        slug
                        title
                        date
                        content(format: RENDERED)
                        featuredImage {
                            altText
                            link
                            mediaItemUrl
                            uri
                        }
                    }
                }
            }
        }
    }`)

    projectResults.data.wpcontent.posts.edges.forEach(({node}) => {
        createPage({
            path: `/projects/${node.slug}`,
            component: path.resolve('./src/templates/project-post.js'),
            context: {
                slug: node.slug,
                databaseId: node.databaseId,
            }
        })
    })

//   return graphql(`
//     {
//       __typename
//       wpcontent {
//         posts(where: { categoryName: "Project" }) {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     console.log(result)
//     result.data.wpcontent.posts.edges.forEach(({ node }) => {
//       createPage({
//         path: `/projects/${node.slug}`,
//         component: path.resolve(`./src/templates/project-post.js`),
//         context: {
//           slug: node.slug,
//         },
//       })
//     })
//   })
}
