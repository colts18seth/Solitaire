import axios from "axios";

async function getNewDeck() {
    try {
        await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then((res) => {
                return res.data.deck_id
            })
    } catch (error) {
        console.error(error)
    }
}

export { getNewDeck };