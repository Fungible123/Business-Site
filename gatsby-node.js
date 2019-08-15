const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // 1. Get path to template
  const productTemplate = path.resolve(`./src/templates/productDisplay.js`)
  // 2. Get markdown data
  const res = await graphql(`
    query {
      allInternalPosts {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  // 3. Create new pages
  res.data.allInternalPosts.edges.forEach(edge => {
    createPage({
      component: productTemplate,
      path: `/product/${edge.node.id}`,
      context: {
        id: edge.node.id,
      },
    })
  })
}
