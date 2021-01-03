// for custom and bringing in your own data
// need modules from Node
const path = require('path');
const data = require('./data/pageData');

exports.createPages = ({ actions }) => {
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
}