import { useState, useEffect } from "react";
import Rules from "./rules.jsx";
import Header from "./header.jsx";
import BigBoard from "./bigBoard.jsx";
import WelcomeMenu from "./menus/welcomeMenu.jsx";
import AiMenu from "./menus/aiMenu.jsx";
import NetworkMenu from "./menus/networkMenu.jsx";
import HostMenu from "./menus/hostMenu.jsx";
import JoinMenu from "./menus/joinMenu.jsx";
import styles from "./styles.module.scss";

function App() {
  const [reset, setReset] = useState(0);
  const [robot, setRobot] = useState(2);
  const [status, setStatus] = useState("welcomeMenu");
  const [playerIsX, setPlayerIsX] = useState(true);

  function resetBoard() {
    setReset(reset + 1);
  }

  function statusUpdate(newStatus) {
    setStatus(newStatus);
  }

  function togglePlayerisX() {
    setPlayerIsX(!playerIsX);
  }

  function robotMenuClick(robotLevel) {
    setRobot(robotLevel);
    setStatus("aiGame");
  }
  let children = [];
  switch (status) {
    case "welcomeMenu":
      children.push(<WelcomeMenu setStatus={statusUpdate} />);
      break;
    case "aiMenu":
      children.push(
        <AiMenu
          togglePlayerisX={togglePlayerisX}
          playerIsX={playerIsX}
          robotMenuClick={robotMenuClick}
        />
      );
      break;
    case "networkMenu":
      children.push(<NetworkMenu setStatus={statusUpdate} />);
      break;
    case "hostMenu":
      children.push(
        <HostMenu togglePlayerisX={togglePlayerisX} playerIsX={playerIsX} />
      );
      break;
    case "joinMenu":
      children.push(<JoinMenu />);
      break;
    default:
      children.push(
        <BigBoard
          robot={robot}
          key={reset}
          appStatus={status}
          playerIsX={playerIsX}
        />
      );
      break;
  }
  return (
    <div id="container">
      <Header setStatus={statusUpdate} welcome={status === "welcomeMenu"} />
      {children}
      <Rules />
    </div>
  );
}

export default App