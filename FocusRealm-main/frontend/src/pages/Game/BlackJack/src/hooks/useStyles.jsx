import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  playArea: {
    margin: "10px 25px"
  },
  coinArea: {
    height: "100px",
    padding: "10px",
    color: "#fff"
  },
  messageArea: {
    margin: "10px"
  },
  message: {
    fontSize: "22px",
    color: "white"
  },
  winOrLoseContainer: {
    height: "50px"
    // margin: "-50px auto 0px"
  },
  winOrLose: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid var(--border-color)",
    backgroundColor: "var(--btn-color)",
    height: "40px",
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "white",
    lineHeight: "40px",
    opacity: 1,
    margin: "20px 0 10px 0 "
  }
});
