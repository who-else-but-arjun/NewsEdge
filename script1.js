// Function to generate cards from the JSON data
function generateCards(articles, containerId) {
    const cardContainer = document.getElementById(containerId);
    var count =0;  
    articles.forEach((article,index) => {
        if (article.type.toLowerCase() === containerId.split('-')[0] || article.subtype.toLowerCase() === containerId.split('-')[0]) {
            const card = document.createElement('div');
            card.classList.add('card');
        
            if (((count)) % 6 === 0) {
                card.classList.add('large');
            } else if ((count) % 6 === 1) {
                card.classList.add('medium');
            } else if ((count) % 6 === 2) {
                card.classList.add('small');
            } else if ((count) % 6 === 3){
                card.classList.add('small');
            }  else if((count) % 6 === 4){
                card.classList.add('medium');
            }  else if((count) % 6 === 5){
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
            count++;
            cardContainer.appendChild(card);
            card.addEventListener('click', function() {
                window.open(article.url, '_blank');
            });
        }
    });
}
