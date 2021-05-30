import React from "react";
import { useState, useEffect, useCallback, updateState } from "react";
import "./index.css";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

// import useGlobal from "../store";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  scroll: {
    overflowX: "scroll",
    height: "80%",
    // marginRight: 20,
    // marginLeft: 20
  },
  tourDate: {
    backgroundColor: "transparent",
    height: "25%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    marginBottom: 2,
    borderBottom: "5px solid white",
    paddingLeft: 20,
    paddingRight: 10
  },
  tourDateTitle: {
    backgroundColor: "transparent",
    height: "20%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: 2,
    borderBottom: "5px solid white",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
  },
  buttonRoot: {
    backgroundColor: "#5A7B62",
    color: "white",
    padding: 25,
    borderRadius: 40,
    fontSize: 17,
    "&:hover": {
      backgroundColor: "#47d5dc",
    },
  },
  buttonSecond: {
    backgroundColor: "#5A7B62",
    color: "white",
    marginRight: 3,
    fontSize: 17,
    padding: 25,
    borderRadius: 40,
    "&:hover": {
      backgroundColor: "#a9a9a9",
    },
  },
}));

export default function SecondComponent() {
  const classes = useStyles();
  const [sortedAppointments, setSortedAppointments] = useState([]);
  // const [globalState, globalActions] = useGlobal();
  const [tourDates, setTourDates] = useState([
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "
    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
    {
      location: "CAMBDON, NJ, 01854",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "IMAGINE DRAGONS, STEEL PULSE "

    },
  ]);

  useEffect(() => {
    // fetch('https://sampledata.petdesk.com/api/appointments')
    // .then(response => response.json())
    // .then(data => sortAppointments(data));
  }, []);


  return (
    <div className={classes.root}>
      <div className={classes.tourDateTitle}>
        <h1 className="fontfam">TOUR DATES</h1>
      </div>
      <div className={classes.scroll}>
        {tourDates.map((tourDate, i) => (
      
          <div key={i} className={classes.tourDate}>
            <div style={{display: "flex", flexDirection:"row", alignItems: "left"}}>
            <div style={{ marginRight: 30 }}>
              <p className="tourDateFont" style={{ color: "#E68FD5", fontWeight: "400", fontSize: 25, marginBottom: "-10px" }}>{tourDate.day}</p>
              <p className="tourDateFont" style={{ color: "white", fontWeight: "600", fontSize: 40, marginBottom: "-10px" }}>{tourDate.date}</p>
              <p className="tourDateFont" style={{ color: "#E68FD5", fontWeight: "400", fontSize: 25 }}>{tourDate.year}</p>
            </div>
            <div>
              <p className="tourDateFont" style={{ color: "#E68FD5", fontWeight: "400", fontSize: 25, marginBottom: "-10px" }}>{tourDate.location}</p>
              <p className="tourDateFont" style={{ color: "white", fontWeight: "600", fontSize: 40, marginBottom: "-10px" }}>{tourDate.venue}</p>
              <p className="tourDateFont" style={{ color: "#E68FD5", fontWeight: "400", fontSize: 25 }}>{tourDate.guests}</p>
            </div>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                classes={{
                  root: classes.buttonSecond,
                }}
                className="tourDateFont" 
              >
                VIP
              </Button>
              <Button
                classes={{
                  root: classes.buttonRoot,
                }}
                className="tourDateFont" 
              >
                TICKETS
              </Button>
            </div>
          </div>
       
        ))}
      </div>
    </div>
  );
}
