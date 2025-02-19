/**
 * Documentation you may need: 
 * DOM Get Elements: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 * Fetch requests: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * API Documentation: https://restcountries.com/
 */

// API URL - DO NOT MODIFY CODE
const API_URL = 'https://restcountries.com/v3.1/name/canada'

// TODO: Get any rquired HTML elements


// TODO: Function to fetch data from API and populate HTML
const fetchData = async () => {
    // ----Code in Lines----
    
    // ---------------------
    // Keep console log at the bottom of the function - DO NOT MODIFY CODE
    console.log('Data fetching completed!')
}


const fetchDataWithTimeout = () => {
    fetchData()
    setTimeout(() => {
        console.log('Timeout finished!')
    }, 0)
}

// TODO: Attach the "fetchDataWithTimeout" function to button click

