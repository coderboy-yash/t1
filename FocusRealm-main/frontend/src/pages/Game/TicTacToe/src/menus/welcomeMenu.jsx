import Button from "../../../../../components/shared/Button/Button";

export default function WelcomeMenu({ setStatus }) {
  return (
    <div style={{ marginTop:"30px",border: "2px solid var(--border-color)", borderRadius: "20px", width: "80%", margin: "auto", padding: "50px" }}>

      <div style={{marginBottom:"40px"}}>
        <h2>Select game mode:</h2>
      </div>

      <Button
        title={'2 player shared screen'}
        className="resetButton"
        onClick={() => {
          setStatus("localGame");
        }}
      >
      </Button>
     

      <div style={{ margin: "30px 0 0 0", width: "100%" }}>
      <Button
        title={'Play against the computer'}
        className="resetButton"
        onClick={() => {
          setStatus("aiMenu")
        }}
      >
        Play against the computer
      </Button>
      </div>
    </div>
  );
}
