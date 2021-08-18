import React, { useEffect, useState } from "react";
import "./common.scss";
import Stock from "../Stock/Stock";
import ShuffleDeck from "../Tableau/Shuffle";
import TableauPile from "../Tableau/TableauPile";
import Tableau from "../Tableau/Tableau";
import Foundation from "../Foundation/Foundation";
import Header from "./Header";

function Home() {
  const [cards, setcards] = useState({});
  const [move, setMove] = useState([]);
  const [score, setScore] = useState([]);
  const [table, setTable] = useState({
    cards: [],
    decks: [],
    selectedCard: "",
    selectedDeck: "",
    selected: [],
    hands: 0
  });

  useEffect(() => {
    const shuffledCards = ShuffleDeck();
    const orderedSet = TableauPile(shuffledCards);
    setcards(orderedSet);
    setMove(0);
    setScore(0);
    setTable((previousSet) => ({
      ...previousSet,
      cards: orderedSet.cards,
      decks: orderedSet.decks,
    }));
  }, []);

  return (
    <div className="background" data-testid="background-testid">
      <Header move={move} score={score}></Header>
      <div className="container">
        <Foundation></Foundation>
        <Tableau 
        table={table} setTable={setTable}
         move={move} setMove={setMove} 
         score={score} setScore={setScore}>
         </Tableau>
        {cards.hasOwnProperty("decks") && table.decks[10].length > 0 && (
        <Stock 
        table={table} setTable={setTable} 
        move={move} setMove={setMove}>
        </Stock>
        )}
        </div>
    </div>

  );
}


export default Home;
