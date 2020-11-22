/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.error('Something went wrong!');
    return;
  }

  results.data.allProjectsJson.edges.forEach(edge => {
    const project = edge.node;

    createPage({
      path: `/projects/${project.slug}/`,
      component: require.resolve("./src/templates/project-detail/"),
      context: {
        slug: project.slug,
      }
    })
  })
}