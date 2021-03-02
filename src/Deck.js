import Card from "./Card";

function Deck({ deckId }) {

    console.log("Inside Deck: " + deckId);

    return (
        <div className="Deck">
            <Card />
        </div>
    );
}

export default Deck;
