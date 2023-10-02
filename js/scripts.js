const apiKey = process.env.NEWS_API_KEY

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;



async function fetchNews() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
        console.log(data)
    } catch (error){
        console.error("There was an error!", error);
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
       
        //Create links for headlines
        const articleDiv = document.createElement('a');
        articleDiv.className = 'card col-sm-8 col-md-10 w-75 mx-auto shadow-lg border border-black bg-warning-subtle';
        articleDiv.href = article.url;
        articleDiv.style.textDecoration = 'none';

        //Create card body
        const cardBody = document.createElement('div');
        cardBody.className = "card-body";
        articleDiv.appendChild(cardBody);
        
        //create and append a headline to the articleDiv
        if (article.title){
            const title = document.createElement('h4');
            title.className = "card-title text-center text-info pt-1 fw-bold fs-2";
            title.textContent = article.title;
            cardBody.appendChild(title);
        }
        //create Image Element
        if (article.urlToImage){
        const imgElement = document.createElement('img');
        imgElement.className = "card-img-top  mx-auto d-block pt-2 pb-2";
        imgElement.src = article.urlToImage;
        cardBody.appendChild(imgElement);
        }
        
        //Create description to article
        if (article.description){
        const description = document.createElement('p');
        description.className = "card-text text-center p-3 text-success fs-6 fst-italic";
        description.textContent=article.description;
        cardBody.appendChild(description);
        }

       newsDiv.appendChild(articleDiv);

    }
}



fetchNews();

