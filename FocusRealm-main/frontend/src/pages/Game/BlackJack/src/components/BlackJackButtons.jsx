import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Button from '/src/components/shared/Button/Button';
import "/src/pages/Game/BlackJack/src/styles.module.scss";

export default function BlackJackButtons(props) {
  useEffect(() => {
    function click(event) {
      switch (event.key) {
        case "h":
          props.onClickHit();
          break;
        case "s":
          props.onClickStand();
          break;
        default:
          break;
      }
    }
    document.body.addEventListener("keydown", click, {
      passive: false
    });
    return () => {
      document.body.removeEventListener("keydown", click, {
        passive: false
      });
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
      mb={3}
      mt={"auto"}
    >
      <Box mx={1} style={{width: '20%', backgroundColor: 'limegreen'}}>
        <Button 
        variant="contained" 
        title={'Hit'}
        onClick={props.onClickHit}/>
         
      </Box>
      <Box mx={1} style={{width: '20%', backgroundColor: 'maroon',}}>
        <Button  
        variant="contained" 
        title={'Stand'}
        onClick={props.onClickStand}/>
      </Box>
    </Box>
  );
}
