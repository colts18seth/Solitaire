import { C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, CA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, DA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, HA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK, SA } from "./Images/images";
import DrawPile from "./DrawPile";
import styled from 'styled-components';
import FinalDecks from "./FinalDecks";
import GameColumns from "./GameColumns";

let deck = [C2, C3, C4];

shuffle(deck);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function Table() {

    const TableTop = styled.div`
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space around;
    border: 2px solid red;
    height: 100vh;
    `

    return (
        <TableTop >
            <DrawPile deck={deck} />
            <FinalDecks />
            <GameColumns />
        </TableTop >
    );
}

export default Table;