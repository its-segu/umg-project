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
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

// import useGlobal from "../store";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
  },
  textField: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',            
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500
},
input: {
    color: 'white'
},
  scroll: {
    overflowX: "scroll",
    height: "80%",
    overscrollBehavior: "contain",
  },
  tourDate: {
    backgroundColor: "transparent",
    height: "23%",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    marginBottom: 2,
    borderBottom: "5px solid white",
    paddingLeft: 20,
    paddingRight: 10,

    "&:hover": {
      backgroundColor: "rgb(111 111 111 / 42%)",
    },
  },
  tourDateTitle: {
    backgroundColor: "transparent",
    height: "20%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
      backgroundColor: "#47d5dc",
    },

  //   searchInput: {
  //     "&:focus": {
  // border: "none",
  // outline: "none",
  // boxShadow: "none",

  //     }
  //   }
  },
}));

export default function SecondComponent() {
  const classes = useStyles();
  const [searchResults, setSearchResults] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState([]);
  const [tourDates, setTourDates] = useState([
    {
      location: "CAMBDON, NJ",
      venue: "BB&T PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "SELDON NY",
      venue: "LONG ISLAND COMMUNITY HOSPITAL AMPITHEATRE",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "BRIDGEPORT, CT",
      venue: "HARTFORD HEALTHCARE AMPITHEATRE",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "PORTLAND, ME",
      venue: "THOMPSON'S POINT",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "BOSTON, MA",
      venue: "LEADER BANK PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "HOLMDEL, NJ",
      venue: "PNC BANK ARTS BAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "VIRGINIA BEACH, VA",
      venue: "MECU PAVILION",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
    {
      location: "WILMINGTON, NC",
      venue: "RIVERFRONT PARK",
      day: "SAT",
      date: "AUG 21",
      year: "2021",
      guests: "311 WITH SPECIAL GUESTS",
    },
  ]);

  useEffect(() => {
    setSearchResults(tourDates);
  }, []);

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };
  
  useEffect(() => {
    var results = tourDates.filter(function(o) {
      return Object.keys(o).some(function(k) {
        return (
          o[k]
            .toString()
            .toLowerCase()
            .indexOf(searchTerm) != -1
        );
      });
    });
    setSearchResults(results);
    console.log(results);
  }, [searchTerm]);

  return (
    <div className={classes.root}>
      <div className={classes.tourDateTitle}>
        <div style={{ width: 250}}></div>
        <h1 className="fontfam" style={{ paddingTop: 30 }}>
          TOUR DATES
        </h1>
        <input
          label="Search"
          variant="outlined"
          type="search" 
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="searchInput"
          style={{borderRadius: 50, width: 250, height: 50, color: "black", padding: 20, marginTop:30}}
          // InputProps={{
         
          //   endAdornment: (
          //     <InputAdornment>
          //       <IconButton>
          //         <SearchIcon />
          //       </IconButton>
          //     </InputAdornment>
          //   ),
            
            
          // }}
        />
      </div>
      <div className={classes.scroll}>
        {searchResults.map((tourDate, i) => (
          <div key={i} className={classes.tourDate}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "left",
              }}
            >
              <div className="td-wrap">
                <p className="tourDateFont1">{tourDate.day}</p>
                <p className="tourDateFont2">{tourDate.date}</p>
                <p className="tourDateFont3">{tourDate.year}</p>
              </div>
              <div>
                <p className="tourDateFont1">{tourDate.location}</p>
                <p className="tourDateFont2">{tourDate.venue}</p>
                <p className="tourDateFont3">{tourDate.guests}</p>
              </div>
            </div>
            <div className={classes.buttonDiv}>
              <Button
                classes={{
                  root: classes.buttonSecond,
                }}
                className="tourDateButton"
              >
                VIP
              </Button>
              <Button
                classes={{
                  root: classes.buttonRoot,
                }}
                className="tourDateButton"
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
