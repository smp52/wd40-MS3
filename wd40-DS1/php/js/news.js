const key = "923b8e9de1c24266a13f2430884ba723"
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector("#news")
    newsdata.articles.forEach((article) => {

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news__article"
      div.innerHTML = `
			<h2 class="news__title">${article.title}</h2>
			<img class="news__image" src="${article.urlToImage}"/><br>
            <a class="news__link" target="_blank" href="${article.url}">Read more</a> `
      articlesDiv.appendChild(div)

    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
