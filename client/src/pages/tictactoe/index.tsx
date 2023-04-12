import { useState, useEffect } from "react";
import axios from "axios";
import { NextPage } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

const TicTacToe: NextPage = () => {
  const randomBoard = () => {
    const startBoard = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];

    if (Math.random() > 0.5) {
      startBoard[Math.floor(Math.random() * 5) * 2] = "X";
    }

    return startBoard;
  };

  const startGame = () => {
    setBoard(randomBoard());
    setIsGameOn(true);
    setMessage(" ");
    setNum(0);
  };

  let [board, setBoard] = useState([" "]);
  useEffect(() => setBoard(randomBoard()), []);
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState(" ");
  const [isGameOn, setIsGameOn] = useState(true);

  async function changeBoard(index: number) {
    if (board[index] === "-" && isGameOn) {
      board[index] = "O";
      setBoard(board);

      setNum(num + 1);
      endGame();

      if (isGameOn) {
        await delay(350);

        const strBoard = board.join("");
        board = (
          await axios.get(`http://localhost:8081/nextMove/${strBoard}`)
        ).data.split("");
        await setBoard(board);
      }

      setNum(num + 1);
      endGame();
    }
  }

  function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  

  async function endGame() {
    const strBoard = board.join("");
    const winner: string = await (
      await axios.get(`http://localhost:8081/winner/${strBoard}`)
    ).data;

    if (winner) {
      setIsGameOn(false);

      winner === "Tie"
        ? setMessage("its a tie!")
        : setMessage(`the winner is ${winner}!`);
    }
  }

  const Cell = ({ num }: any) => {
    const style = {
      X: <FontAwesomeIcon icon={faX} />,
      O: <FontAwesomeIcon icon={faCircle} />,
      "-": " ",
    };

    return (
      <td
        onClick={() => changeBoard(num)}
        className="border-4 border-base-content w-48 h-48"
      >
        <div className="flex justify-center text-9xl">{style[board[num]]}</div>
      </td>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <table className="border-collapse border-4 border-base-content mt-28">
          <tbody>
            <tr>
              <Cell num={0}></Cell>
              <Cell num={1}></Cell>
              <Cell num={2}></Cell>
            </tr>
            <tr>
              <Cell num={3}></Cell>
              <Cell num={4}></Cell>
              <Cell num={5}></Cell>
            </tr>
            <tr>
              <Cell num={6}></Cell>
              <Cell num={7}></Cell>
              <Cell num={8}></Cell>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => startGame()}
          className="mt-3.5 bg-base-200 hover:bg-base-300 font-bold py-2 px-4 rounded-full"
        >
          start new game
        </button>
        <div className="text-5xl mt-3.5 flex justify-center">{message}</div>
      </div>
    </div>
  );
};

export default TicTacToe;
