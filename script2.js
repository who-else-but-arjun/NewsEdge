var url = 'https://who-else-but-arjun.github.io/news_server/data.json';
fetch(url)
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        updateBreakingNewsWithTransition(data.articles);
    })
    .catch(function (error) {
        console.error('There was a problem with the fetch operation:', error);
    });

var currentIndex = 0;
function updateBreakingNewsWithTransition(articles) {
    var newsHeadline = document.querySelector('.breaking-news');

    if (!articles || articles.length === 0) {
        newsHeadline.innerHTML = '<p>No breaking news available.</p>';
        return;
    }
    newsHeadline.innerHTML = `<a href="${articles.url}" target="_blank"s><span>${articles[currentIndex].headline}</span></a>`;
    currentIndex = (currentIndex + 1) % articles.length;

    setInterval(function () {
        newsHeadline.firstElementChild.style.opacity = '0';
        setTimeout(function () {
            newsHeadline.innerHTML = `<a href="${articles.url}"><span>${articles[currentIndex].headline}</span></a>`;
            currentIndex = (currentIndex + 1) % articles.length;
            newsHeadline.firstElementChild.style.opacity = '1';
        }, 500);
    }, 5000);
}
