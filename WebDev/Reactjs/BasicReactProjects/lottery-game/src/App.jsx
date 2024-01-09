import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lottery from "./Lottery";
import {
  WINNING_NUMBER,
  NUMBER_OF_DIGITS_IN_LOTTERY_TICKET,
} from "./constants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lottery
        n={NUMBER_OF_DIGITS_IN_LOTTERY_TICKET}
        winningSum={WINNING_NUMBER}
      />
    </>
  );
}

export default App;
