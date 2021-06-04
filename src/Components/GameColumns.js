
import { cardback } from "./Images/images"
import styled from 'styled-components'

function GameColumns({ allowDrop, drop }) {

    const ColumnsContainer = styled.div`
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

    let colOne = []

    return (
        <ColumnsContainer>
            <Pile id="col-1" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
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
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
            <Pile>
                <img src={cardback} alt="cardback" />
            </Pile>
        </ColumnsContainer >
    );
}

export default GameColumns;