// Progression 1: create a function and fetch the api using axios
const articleGrid = document.getElementById('articleGrid');
function populateData() {
  axios
    .get(
      'https://gnews.io/api/v4/top-headlines?token=d5a5c5947d73b5a4a07e72093c52ffb8&lang=en'
    )
    .then((res) => {
      console.log(res.data);
      const articles = res.data.articles;

      articles.forEach((article) => {
        const articleElement = document.createElement('div');
        const titleElement = document.createElement('h3');
        const imageElement = document.createElement('img');
        const contentElement = document.createElement('p');
        articleElement.setAttribute('class', 'article');

        titleElement.innerText = article.title;
        imageElement.setAttribute('src', article.image);
        contentElement.innerHTML = article.content;

        articleElement.append(titleElement);
        articleElement.append(imageElement);
        articleElement.append(contentElement);
        articleGrid.append(articleElement);
      });
    });
}
populateData();
