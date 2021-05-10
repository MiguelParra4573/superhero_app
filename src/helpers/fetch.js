
// const API_URL = process.env.API_URL;
// const ENDPOINT_ALKEMY = process.env.ENDPOINT_ALKEMY;


export const fetchSinTokent = ( data, method = 'GET') => {
    
    const URL = `http://challenge-react.alkemy.org`;
    
    const params =  {
        method,
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }

    if (method === 'GET') {
        return fetch(URL)
            .catch((error) => {console.error(error)})
            
    } else {
        return fetch(URL, params)
            .then(response => { return response.json() })
            .catch((error) => { console.error(error) })

    }
}

//  