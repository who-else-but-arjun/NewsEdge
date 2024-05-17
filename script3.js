var url = 'https://who-else-but-arjun.github.io/news_server/data.json';
fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        generateCards(data.articles);
    })
    .catch(function(error) {
        console.error('There was a problem with the fetch operation:', error);
    });

function generateCards(articles) {
    const cardContainer = document.querySelector('.card-grid');
    if (!Array.isArray(articles)) {
      console.error('The data received is not an array:', articles);
      return;
  }
    articles.forEach((article, index) => {
      const card = document.createElement('div');
      card.classList.add('card');

      if ((index) % 6 === 0) {
        card.classList.add('large');
      } else if ((index) % 6 === 1) {
        card.classList.add('medium');
      } else if ((index) % 6 === 2) {
        card.classList.add('small');
      } else if ((index) % 6 === 3){
        card.classList.add('small');
      }  else if((index) % 6 === 4){
        card.classList.add('medium');
      }  else if((index) % 6 === 5){
        card.classList.add('xlarge');
      }
  
      card.style.backgroundImage = `url(${article.image})`;
      card.innerHTML = `
      <div class="card-content">
    <div id="infos">
        <span class="info">${article.type}</span>
        <span class="info">${article.subtype}</span>
        <span class="info">${article.origin}</span>
    </div>
    <h2 class="card-headline">${article.headline}</h2>
    <div class="bottom-info">
        <p class="card-author">${article.author}</p>
        <p class="card-date">${article.date}</p>
    </div>
</div>
`;
      cardContainer.appendChild(card);
      document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            window.open(article.url, '_blank');
        });
    });
    });
  }
  
  