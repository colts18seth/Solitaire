
import { cardback } from "./Images/images"
import styled from 'styled-components'

function FinalDecks() {

    const DecksContainer = styled.div`
    display: flex;
    margin: 0 auto;
    padding 1rem;
    border: 2px solid blue;
    `

    const Pile = styled.div`
    margin: 0 auto;
    padding: 0 1rem;
    border: 2px solid green;
    justify-content: row;
    `

    return (
        <DecksContainer>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
        </DecksContainer >
    );
}

export default FinalDecks;