import Button from "../../../../components/shared/Button/Button";
// import styles from './styles.module.scss';


export default function Header({ setStatus, welcome = false }) {
  return (
    <div style={{border:"2px solid var(--border-color)", borderRadius:"20px", width:"80%",margin:"auto"}}>
    <h1 className="header">
      <span className="headerText" style={{fontSize:"25px"}}>Ultimate Tic-Tac-Toe</span>
      {!welcome && BackButton({ setStatus })}
    </h1>
    </div>
  );
}

function BackButton({ setStatus }) {
  return (
    <div className="head" style={{marginTop:"15px",marginBottom:"0px"}}>
    <Button className="resetButton"  onClick={() => setStatus("welcomeMenu")} title={'Home'}/>
    </div>
  );
}
