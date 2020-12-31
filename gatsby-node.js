// for custom and bringing in your own data
// need modules from Node
const path = require('path');

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    // createPage takes a path and we give it a component
    createPage({
        path: '/created',
        component: path.resolve('./src/templates/Generic.js')
    })
}