function example() {
    const jokeURI = 'https://dog.ceo/api/breeds/image/random'

    // fetch information
    const getJoke = async() => {
        try {
            const response = await fetch(jokeURI)
            const obj = await response.json()
            console.log(`FETCHED. Response JSON ${obj}`)
            console.log(obj.message)
            const joke = obj.message || 'No joke for you.'
            return joke
        } catch (error) { console.error(error) }
    }

    // interact with DOM
    const updateWithJoke = async(event) => {
        try {
            document.querySelector('#result').src = ''
            const answer = await getJoke()
            document.querySelector('#result').src = answer
        } catch (error) { console.error(error) }
    }
    updateWithJoke(getJoke)
}