import "/src/pages/Game/BlackJack/src/styles.module.scss";
import { Box, Typography } from "@material-ui/core";
import BlackJack from "./BlackJack";
import React from "react";


export default function Casino() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: 'navy',
    }}>
      <div
        className="container"
        style={{
          background: 'var(--graph-color)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '700px',
          minHeight: '100px',
          width: '90%',
          margin: '0 auto',
          border: '3px solid var(--border-color)',
          borderRadius: '50px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box className="App">
          <Box className={"h1-header"} style={{ fontSize: '40px', textAlign: 'center', margin: '40px 0 20px 0' }}>BlackJack</Box>
          <hr style={{ width: '80%', margin: '10px auto' }} />
          <Box id="table"
            style={{ margin: '30px' }}>
            <BlackJack />
          </Box>
        </Box>
      </div>
    </div>
  );
}
