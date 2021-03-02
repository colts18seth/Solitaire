import axios from "axios";

async function getNewDeck() {
    try {
        const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
        return res;
    } catch (error) {
        console.error(error)
    }
}

export { getNewDeck };