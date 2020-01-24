const path = require('path');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const articleTemplate = path.resolve('src/templates/articleTemplate.js');
  const designTemplate = path.resolve('src/templates/designTemplate.js');

  const articles = graphql(`
  {
    allArticle {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allArticle.edges.forEach(article => {
      createPage({
        path: `/article/${article.node.id}`,
        component: articleTemplate,
        context: {articleId: article.node.id}
      })
    });
  });

  const designs = graphql(`
  {
    allDesign {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    result.data.allDesign.edges.forEach(design=> {
      createPage({
        path: `/design/${design.node.id}`,
        component: designTemplate,
        context: {designId: design.node.id}
      })
    });
  });

  return Promise.all([articles, designs]);
}
