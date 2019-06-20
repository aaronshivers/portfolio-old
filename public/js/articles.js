const articles = [{
  name: 'The Simplest Node.js Application Ever',
  link: 'https://medium.com/@aaronshivers/the-simplest-node-js-application-ever-b7ab192c7f73'
}, {
  name: 'Start Testing Node.js, Now!',
  link: 'https://medium.com/@aaronshivers/start-testing-node-js-now-33b9a156b252'
}]

const articlesList = document.getElementById('articlesList')

articles.forEach(article => {
  const link = document.createElement('a')
  link.classList.add('list-group-item', 'list-group-item-action')
  link.textContent = article.name
  link.rel = `noreferrer`
  link.href = article.link
  link.target = `_blank`
  articlesList.appendChild(link)
})