document.addEventListener("DOMContentLoaded", function() {
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
            window.articles = data.articles;
            updateNewsContent(window.articles);
        })
        .catch(function(error) {
            console.error('There was a problem with the fetch operation:', error);
        });
    function updateNewsContent(articles) {
        var newsContainer = document.getElementById('newsContainer');
        if (articles.length === 0) {
            newsContainer.innerHTML = '<p>No articles available.</p>';
            return;
        }
        var html = '';
        articles.forEach(function(article) {
            html += `
            <div class="article">
                <img src="${article.image}" alt="Article Image">
                <div class="article-content">
                    <h2><a href="${article.url}" target="_blank">${article.headline}</a></h2>
                    <p>${article.date}</p>
                </div>
            </div>
            `;
        });

        newsContainer.innerHTML = html;
    }

    window.filterArticles = function(filter) {
        var filteredArticles = window.articles.filter(function(article) {
            return article.origin === filter;
        });
        updateNewsContent(filteredArticles);
    };
    var currentDate = new Date();
    var currentDateElement = document.getElementById('current-date');
    if (!currentDateElement) {
        console.error('Element with id "current-date" not found.');
    } else {
        currentDateElement.textContent = currentDate.toDateString();
    }
});