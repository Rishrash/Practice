import { useState } from "react";
import { generateRandomNumbersArray, getSum } from "./helper";
import "./Lottery.css";
import Ticket from "./Ticket";
import { WINNING_NUMBER } from "./constants";

export default function Lottery({ n, winningSum }) {
  let [ticket, setTicket] = useState(generateRandomNumbersArray(n));
  let isWin = getSum(ticket) === WINNING_NUMBER;

  let generateTicket = () => {
    setTicket(generateRandomNumbersArray(n));
  };
  return (
    <div>
      <h2>Lottery Game</h2>
      <Ticket ticketArr={ticket} />
      <br />
      <button onClick={generateTicket}>Generate New Ticket</button>
      <h4>{isWin ? "Congratulations, you won!!!" : "Better Luck Next Time"}</h4>
    </div>
  );
}
