const API_KEY = 'd815a21470864b0fb68ad2ac005c3945';
const newsContainer = document.getElementById('newsContainer');
const loader = document.getElementById('loader');
let currentCategory = 'general';

// Initialize the news feed
document.addEventListener('DOMContentLoaded', () => {
    fetchNewsByCategory('general');
});

// Fetch news by category
async function fetchNewsByCategory(category) {
    try {
        // Update active category button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase() === category) {
                btn.classList.add('active');
            }
        });

        currentCategory = category;
        showLoader();
        clearNews();

        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader();
    }
}

// Search news
async function searchNews() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) return;

    try {
        showLoader();
        clearNews();

        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader();
    }
}

// Display news articles
function displayNews(articles) {
    articles.forEach(article => {
        const card = createNewsCard(article);
        newsContainer.appendChild(card);
    });
}

// Create news card
function createNewsCard(article) {
    const card = document.createElement('div');
    card.className = 'news-card';

    const image = article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image+Available';
    const date = new Date(article.publishedAt).toLocaleDateString();

    card.innerHTML = `
        <img src="${image}" alt="${article.title}" class="news-image" onerror="this.src='https://via.placeholder.com/400x200?text=No+Image+Available'">
        <div class="news-content">
            <p class="news-source">${article.source.name}</p>
            <h2 class="news-title">${article.title}</h2>
            <p class="news-description">${article.description || 'No description available'}</p>
            <p class="news-date">${date}</p>
            <a href="${article.url}" target="_blank" class="read-more">Read More</a>
        </div>
    `;

    return card;
}

// Utility functions
function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}

function clearNews() {
    newsContainer.innerHTML = '';
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.style.textAlign = 'center';
    errorDiv.style.color = 'red';
    errorDiv.style.padding = '2rem';
    errorDiv.innerHTML = `<h2>Error: ${message}</h2>`;
    newsContainer.appendChild(errorDiv);
}

// Add event listener for search input (Enter key)
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchNews();
    }
});