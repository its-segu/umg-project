// import React from "react";

// export default () => {
//   return (
//     <div className="component second-component">
//       <h2>Second Component</h2>

//     </div>
//   );
// };

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
    backgroundColor: "#373737",
  },
  scroll: {
    overflowX: "scroll",
    height: "80%",
    marginRight: 20,
    marginLeft: 20
  },
  tourDate: {
    backgroundColor: "transparent",
    height: "20%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    marginBottom: 2,
    borderBottom: "5px solid white",
  },
  tourDateTitle: {
    backgroundColor: "transparent",
    height: 200,
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

  // const rescheduleClick = (appointment) => {
  //   globalActions.showDialog(true);
  // }

  // const confirmClick = (appointment) => {
  //   globalActions.confirmedAppointment(appointment);
  //   var index = appointments.indexOf(appointment);
  //   if (index > -1) {
  //       appointments.splice(index, 1);
  //   }
  //   setAppointments(appointments)
  // }

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
              <h4 style={{ color: "#E68FD5" }}>{tourDate.day}</h4>
              <h2 style={{ color: "white"}}>{tourDate.date}</h2>
              <h4 style={{ color: "#E68FD5" }}>{tourDate.year}</h4>
            </div>
            <div>
              <h4 style={{ color: "white" }}>{tourDate.location}</h4>
              <h2 style={{ color: "#E68FD5", textAlign: "left" }}>{tourDate.venue}</h2>
              <h4 style={{ color: "white" }}>{tourDate.guests}</h4>
            </div>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                classes={{
                  root: classes.buttonSecond,
                }}
              >
                VIP
              </Button>
              <Button
                classes={{
                  root: classes.buttonRoot,
                }}
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
