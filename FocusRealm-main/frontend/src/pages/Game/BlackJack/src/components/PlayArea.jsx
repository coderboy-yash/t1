import React from "react";
import { Box, Grid, Chip } from "@material-ui/core";
import { useStyles } from "../hooks/useStyles";
import Card from "./Card";
import * as BJUtilities from "../utilities/BlackJackUtilities";

export default function PlayArea(props) {
  const classes = useStyles();
  return (
    <Box className={classes.playArea}>
      <Grid
        container
        direction="column"
        spacing={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Box
            className="arrow_box_common arrow_box_dealer"
            style={{
              fontSize: '1rem',
              width: '80px',
              height: '40px',
              lineHeight: '40px',
              margin: '0px auto',
              marginBottom: '10px',
              position: 'relative',
              background: 'var(--border-color)',
              opacity: 0.8,
              padding: '0px',
              textAlign: 'center',
              color: '#ffffff',
              borderRadius: '8px'
            }}
            visibility={props.isTurnEnd ? "visible" : "hidden"}
          >
            {props.dealersHand.length !== 0 &&
              BJUtilities.getScoreForDisplay(props.dealersHand)}

            <span
              style={{
                border: 'solid transparent',
                content: '""',
                height: 0,
                width: 0,
                pointerEvents: 'none',
                position: 'absolute',
                borderColor: 'rgba(0, 95, 158, 0)',
                borderTopWidth: '10px',
                borderBottomWidth: '10px',
                borderLeftWidth: '10px',
                borderRightWidth: '10px',
                marginLeft: '-10px',
              }}
            />

          </Box>
          <Grid container direction="row">
            {props.dealersHand.map((card, index) => {
              let marginLeft = index === 0 ? "0px" : "-35px";
              const hide = index === 1 && !props.isTurnEnd ? true : false;
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} hide={hide} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" className="main">
            {props.playersHand.map((card, index) => {
              let marginLeft = index === 0 ? "0px" : "-35px";
              return (
                <Grid item key={index} style={{ marginLeft: marginLeft }}>
                  <Card card={card} hide={false} />
                </Grid>
              );
            })}
          </Grid>
          <Box className={classes.winOrLoseContainer}>
            {props.isTurnEnd && (
              <Chip
                label={BJUtilities.judge(props.dealersHand, props.playersHand)}
                className={classes.winOrLose}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Box className="arrow_box_common arrow_box_player"
        style={{
          fontSize: '1rem',
          width: '80px',
          height: '40px',
          lineHeight: '40px',
          margin: '0px auto',
          background: 'var(--border-color)',
          opacity: 0.8,
          padding: '0px',
          textAlign: 'center',
          color: '#ffffff',
          borderRadius: '8px'
        }}
        mt="20px">
        {props.playersHand.length !== 0 &&
          BJUtilities.getScoreForDisplay(props.playersHand)}
        <span
          style={{
            bottom: '100%',
            left: '50%',
            borderBottomColor: '#8f2424'
          }}
        />
      </Box>
    </Box>
  );
}
