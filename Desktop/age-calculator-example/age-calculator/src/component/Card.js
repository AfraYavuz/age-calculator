import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useEffect } from "react";

function BasicCard() {
  return (
    <Card
      className="card-input"
      sx={{
        width: 650,
        height: 450,
        backgroundColor: "hsl(0, 0%, 100%)",
        borderRadius: "20px 20px 90px 20px",
      }}
    >
      <CardContent>
        <Box
          onSubmit={(e) => handleFormSubmit(e)}
          className="card"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "17ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={(e) => handleDayChange(e)}
            className="day-input"
            required
            id="outlined-required"
            label="DAY"
            helperText="This field is required"
          />{" "}
          <TextField
            onChange={(e) => handleMonthChange(e)}
            className="month-input"
            required
            id="outlined-required"
            label="MONTH"
            helperText="This field is required"
          />{" "}
          <TextField
            onChange={(e) => handleYearChange(e)}
            className="year-input"
            required
            id="outlined-required"
            label="YEAR"
            helperText="This field is required"
          />
        </Box>
        <hr />
        <Stack direction="row-reverse" spacing={1}>
          <IconButton aria-label="arrow" size="large" className="btn">
            <ArrowDownwardIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
export default BasicCard;
