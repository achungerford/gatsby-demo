// for custom and bringing in your own data
// need modules from Node
const path = require('path');
const data = require('./src/data/pageData');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    data.forEach(page => {
        createPage({
            path: page.slug,
            component: path.resolve('./src/templates/Generic.js'),
            context: {
                title: page.title,
                description: page.description
            }
        })
    })

    const mdPages = await graphql(`
        query MyQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    console.log(mdPages);
}