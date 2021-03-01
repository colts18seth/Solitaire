import Deck from "./Deck";
import { getNewDeck } from "./API";
function Game() {
    const deckId = getNewDeck();
    console.log(deckId)
    return (
        <div className="Game">
            <Deck deckId={deckId} />
        </div>
    );
}

export default Game;
