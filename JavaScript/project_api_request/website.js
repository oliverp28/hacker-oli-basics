
window.onload = function() {
    // standard API request for BTC
    getStandardAPIResponse();
    // Code for update search period
    updateSearchPeriod();
}


// function to update the search period
function updateSearchPeriod() {
    var rangeInput = document.getElementById('customRange2');
    var rangeValueOutput = document.getElementById('rangeValue');

    rangeInput.addEventListener('input', function() {
    rangeValueOutput.innerText = rangeInput.value;
    });
}


// function to get the standard API response for BTC
async function getStandardAPIResponse() {
    const url = 'https://alpha-vantage.p.rapidapi.com/query?market=USD&symbol=BTC&function=DIGITAL_CURRENCY_DAILY';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'YOUR_API_KEY', // insert your API key here
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        parseResponseToTable(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    };
}


// Check if the user typed in a search term
document.addEventListener('DOMContentLoaded', function() {
    var searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {

            event.preventDefault();
            var searchTerm = document.getElementById('searchInput').value;

            if (searchTerm == "") {
                alert("Please enter a search term.");
            } else {
                performSearch(searchTerm);
            }
        });
    }
});


// funtion to perform the search
async function performSearch(searchTerm) {
    const apiKey = 'YOUR_API_KEY'; // insert your API key here

    // API-Endpoints for stocks and crypto
    const stockEndpoint = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=';
    const cryptoEndpoint = 'https://alpha-vantage.p.rapidapi.com/query?market=USD&function=DIGITAL_CURRENCY_DAILY&symbol=';
    const cryptoCheckBox = document.getElementById('cryptoCheckBox').checked;

    const stockOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        }
    };

    const cryptoOptions = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
        }
    };

    // check if the search term is a crypto or a stock
    try {
        if (cryptoCheckBox) {
            // request for crypto
            const cryptoResponse = await fetch(cryptoEndpoint + searchTerm, cryptoOptions);
            const cryptoData = await cryptoResponse.json();
            console.log(cryptoData);
            parseResponseToTable(cryptoData);
        }
        else {
            // request for stock
            const stockResponse = await fetch(stockEndpoint + searchTerm, stockOptions);
            const stockData = await stockResponse.json();
            console.log(stockData);
            parseResponseToTable(stockData);
        }
    // catch errors
    } catch (error) {
        alert('Bitte geben sie ein gültiges Kürzel einer Aktie / Kryptowährung an.');
        console.error('Fehler bei der API-Anfrage:', error);
    }
}


// parse the response to a table
function parseResponseToTable(dataJson) {
    showSpinner('spinnerDiv');
    var searchPeriod = document.getElementById('customRange2').value;

        const dataTable = document.getElementById('dataTable');
        var tbody = dataTable.getElementsByTagName('tbody')[0];

        // creating the table header dynamically
        var resultName = document.getElementById('searchResultName');
        var title = dataJson["Meta Data"]["2. Digital Currency Code"] || dataJson["Meta Data"]["2. Symbol"];
        resultName.setAttribute("class", "text-center font-weight-bold text-secondary mt-5 ")
        resultName.innerHTML = title;


        // delete all existing rows
        tbody.innerHTML = "";
    
        // Iterate over all keys in the main object (e.g., "Time Series (Daily)", "Time Series (Digital Currency Daily)")
        for (var timeSeriesKey in dataJson) {
            // check if the key includes "Time Series"
            if (timeSeriesKey.includes("Time Series")) {
                var timeSeriesData = dataJson[timeSeriesKey];
    
                // limit the number of rows to the search period
                var count = 0;
    
                // Iterate over all keys in the time series object
                for (var date in timeSeriesData) {
                    if (count >= searchPeriod) {
                        break; // stop the loop if the number of rows is greater than the search period
                    }
    
                    var row = tbody.insertRow();
                    var data = timeSeriesData[date];
    
                    // Insert a cell for each key in the time series object
                    var dateCell = row.insertCell(0);
                    dateCell.textContent = date; // use date as the cell content
    
                    var openCell = row.insertCell(1);
                    openCell.textContent = data["1. open"] || data["1a. open (USD)"] || data["1b. open (USD)"];
    
                    var highCell = row.insertCell(2);
                    highCell.textContent = data["2. high"] || data["2a. high (USD)"] || data["2b. high (USD)"];
    
                    var lowCell = row.insertCell(3);
                    lowCell.textContent = data["3. low"] || data["3a. low (USD)"] || data["3b. low (USD)"];
    
                    var volumeCell = row.insertCell(4);
                    volumeCell.textContent = data["5. volume"];
    
                    count++;
                }
            }
        }

    // function to set the spinner invisible after 1.5 seconds (Imitation of a loading screen)
    setTimeout(function() {
        // Get the spinner element
        var spinnerElement = document.getElementById('spinnerDiv');

        // Delete the spinner element after a delay of 1.5 seconds
        setTimeout(function() {
            var parentElement = document.getElementById('spinnerDiv');
            parentElement.innerHTML = '';
        }, 1500);
    }, 0);
}


// function to show the spinner
function showSpinner(parentId) {
    // create the spinner element
    var spinnerElement = document.createElement('div');
    spinnerElement.className = 'spinner-border';
    spinnerElement.setAttribute('role', 'status');

    var spanElement = document.createElement('span');
    spanElement.className = 'visually-hidden';

    spinnerElement.appendChild(spanElement);

    // grab the spinner element by its ID
    var parentElement = document.getElementById(parentId);

    if (parentElement) {
        // Add the spinner element to the specified parent element
        parentElement.appendChild(spinnerElement);
    } else {
        console.error('Parent element with ID ' + parentId + ' not found.');
    }
}