// const { createQuote } = require("../server/controller")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quotesBtn = document.getElementById("quotesButton")
const quotesContainer = document.getElementById("quotesContainer")
const form = document.querySelector('form')

const quotesCallback = ({ data: quotes }) => displayQuotes(quotes)
const errCallback = err => console.log(err)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
        alert(data).catch(errCallback)
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
        alert(data).catch(errCallback)
    });
}

// the code that followw are all references to back end demo 1 & 2 and also assignment back end 1 & 2!

const quotesURL = "http://localhost:4000/api/quotes"

const getQuotes = () => {
    axios.get(quotesURL)
        .then(quotesCallback).catch(errCallback);
}


const createQuotesCard = quotes => {
    const quotesCard = document.createElement('div')
    quotesCard.classList.add('quotes-card')

    quotesCard.innerHTML = `
    <p>${quotes.quote}</p>
    <button onclick="deleteQuote(${quotes.id})">delete</button>
    `


    quotesContainer.appendChild(quotesCard)
}

const displayQuotes = arr => {
    quotesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createQuotesCard(arr[i])
    }
}

const createQuote = body => {
    axios.post(quotesURL, body).then(quotesCallback).catch(errCallback)
}

function submitHandler(e) {
    e.preventDefault()

    let quote = document.querySelector('#addQuote')

    let bodyObj = {
        quote: `--> ${quote.value}`,
    }

    createQuote(bodyObj)

    quote.value = ''
}

const deleteQuote = id => {
    axios.delete(` ${quotesURL}/${id}`).then(quotesCallback).catch(errCallback)
    console.log(` ${quotesURL}/${id}`)
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
quotesBtn.addEventListener('click', getQuotes)
form.addEventListener('submit', submitHandler)

