
function callThatShit() {
    fetch("https://motivational-spark-api.vercel.app/api/quotes/random/10")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error)); 

    
}

async function fetchQuotes() {
    try {
        const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random/10")
        if(!response.ok) {
            throw new Error("Failed to fetch data.")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        throw error;
    }
}

async function displayQuotes() {
    const container = document.getElementById('quote-container')
    const errorMessage = document.getElementById('error-msg')

    try{
        const quotes = await fetchQuotes()
        const quotesHtml = quotes.map(item => 
            `<div>
                <p><b>${item.author}</b></p>
                <p>${item.quote}</p>
                
            </div>`
        ).join("");

        container.innerHTML = quotesHtml;
        errorMessage.innerHTML = "";

    } catch (error) {
        console.log(error);
        errorMessage.textContent = "⚠️ " + error.message;
    }
}


displayQuotes();