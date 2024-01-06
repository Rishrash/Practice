import { useState } from "react";
import { generateRandomNumbersArray, getSum } from "./helper";
import { WINNING_NUMBER } from "./constants";
import "./Lottery.css";

export default function Lottery() {
  let [ticket, setTicket] = useState(generateRandomNumbersArray(3));
  let isWin = getSum(ticket) === WINNING_NUMBER;

  let generateTicket = () => {
    setTicket(generateRandomNumbersArray(3));
  };
  return (
    <div>
      <h2>Lottery Game</h2>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <br />
      <button onClick={generateTicket}>Generate New Ticket</button>
      <h4>{isWin ? "Congratulations, you won!!!" : "Better Luck Next Time"}</h4>
    </div>
  );
}
