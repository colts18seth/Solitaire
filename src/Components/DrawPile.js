import { useState } from "react";
import { cardback } from "./Images/images"
import styled from 'styled-components'

function DrawPile({ deck, drag }) {
    let [drawPile, setDrawPile] = useState(deck);
    let [discardPile, setDiscardPile] = useState([]);
    let [drawnCard, setDrawnCard] = useState();

    const drawCard = () => {
        if (drawPile.length !== 0) {
            setDrawnCard(drawPile.pop());
        }
        if (drawnCard) {
            discardPile.unshift(drawnCard);
        }
    }

    const resetCards = () => {
        if (drawnCard) {
            discardPile.unshift(drawnCard);
        }
        setDrawPile(discardPile);
        setDiscardPile([]);
        setDrawnCard();
    }

    const DrawDeck = styled.div`
        display: flex;
        margin: 0 auto;
        padding 1rem;
        border: 2px solid blue;
        height: 28vh;
    `
    const DrawnPile = styled.div`
        margin: 0 auto;
        padding: 0 1rem;
        border: 2px solid green;
        justify-content: row;
    `

    return (
        <DrawDeck>
            {drawPile.length !== 0 ?
                <DrawnPile onClick={() => drawCard()}>
                    <img src={cardback} alt="cardback" />
                </DrawnPile> :
                <DrawnPile onClick={() => resetCards()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                        <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                    </svg>
                </DrawnPile>
            }
            {drawnCard &&
                <DrawnPile onDragStart={(e) => drag(e)}>
                    <img id={drawnCard} src={drawnCard} alt="" />
                </DrawnPile>
            }
        </DrawDeck >
    );
}

export default DrawPile;