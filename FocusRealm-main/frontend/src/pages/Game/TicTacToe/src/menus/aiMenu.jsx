import PlayAsXToggle from "./playAsXToggle";
import Button from "../../../../../components/shared/Button/Button";

export default function AiMenu({ togglePlayerisX, playerIsX, robotMenuClick }) {
  return (
    <div style={{border:"2px solid var(--border-color)",borderRadius:"20px",width:"80%",margin:"20px auto",padding:"20px"}}>
      <h2 style={{marginLeft:"20px"}}>Select the AI difficulty level</h2>
      <div style={{margin:"10px 0 10px 0"}}>
      <Button
        className="resetButton"
        title={'Beginner'}
        onClick={() => {
          robotMenuClick(1);
        }}
      />
      </div>

<div style={{margin:"10px 0 10px 0"}}>
      <Button
        className="resetButton"
        title={'Intermediate'}
        onClick={() => {
          robotMenuClick(2);
        }}
      />
      </div>
      
      <div style={{margin:"10px 0 10px 0"}}>
      <Button
        className="resetButton"
        title={'Expert'}
        onClick={() => {
          robotMenuClick(3);
        }}
      /></div>

<div style={{margin:"10px 0 20px 0"}}>
      <Button
        className="resetButton"
        title={'Master'}
        onClick={() => {
          robotMenuClick(4);
        }}
      /></div>
      <PlayAsXToggle playerIsX={playerIsX} togglePlayerisX={togglePlayerisX} />
    </div>
  );
}
