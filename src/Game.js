// import Deck from "./Deck";
// import { getNewDeck } from "./API";
// import { useEffect, useState } from "react";
function Game() {
    // const [deckId, setDeckId] = useState(null);

    // useEffect(() => {
    //     async function getDeckId() {
    //         await getNewDeck().then((res) => setDeckId(res.data.deck_id))
    //     }
    //     getDeckId()
    // }, [])

    return (
        <div className="Game">
            <img src="../PNG/2C.png" alt="card" />
            {/* <Deck deckId={deckId} /> */}
        </div>
    );
}

export default Game;
