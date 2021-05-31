import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import Chart from "react-apexcharts";

const FifthComponent = () => {
  // Set up states for retrieving access token and top tracks
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [pop, setPop] = useState([]);
  const [names, setNames] = useState([]);

  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      colors: ["#F8D7BD", "#546E7A", "#d4526e"],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: ["white"],
          },
        },
      },
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colors: "red",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  // Artist ID from Spotify
  // https://open.spotify.com/artist/0SwO7SWeDHJijQ3XNS7xEE?si=GqvUghTgQq6GoP2NfqNWFA
  const id = "0SwO7SWeDHJijQ3XNS7xEE";
  const market = "US";

  useEffect(() => {
    // Api call for retrieving token
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer(
            "323c4b40498e4c89af268c21d8b1b482" +
              ":" +
              "7063eb4b2d964871952e04471d761cf2",
          ).toString("base64"),
      },
      data: "grant_type=client_credentials",
    })
      .then(tokenresponse => {
        console.log(tokenresponse.data.access_token);
        setToken(tokenresponse.data.access_token);

        // Api call for retrieving tracks data
        axios(
          `https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + tokenresponse.data.access_token,
            },
          },
        )
          .then(trackresponse => {
            console.log(trackresponse.data.tracks);
            setTracks(trackresponse.data.tracks);
            // setImage(trackresponse.data.tracks[0].album.images[0].url)
            PopularityByTrack(trackresponse.data.tracks)
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
      // PopularityByTrack(tracks)
  }, []);

  // Transform track data
  function PopularityByTrack(data) {
    console.log(data)
    let plotData = [];

    let names = [];
    let popularity = [];

    data.map(each => {
      names.push(each.name);
      popularity.push(each.popularity);
    });

    plotData["names"] = names;
    plotData["popularity"] = popularity;

    setData({ options: {
      chart: {
        id: "basic-bar",
      },
      colors: ["#F8D7BD", "#546E7A", "#d4526e"],
      xaxis: {
        categories: names,
        labels: {
          style: {
            colors: "white",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: ["white"],
          },
        },
      },
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#D8E3F0",
          colors: "red",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    series: [
      {
        name: "Popularity (1-100)",
        data: popularity,
      },
    ],})


  }

  return (
    <div className="component fifth-component">
      <div className="fifth-title">
        <h1 className="fontfam2">Songs By Popularity</h1>
      </div>
      <div className="mixed-chart">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width="100%"
        />
      </div>
    </div>
  );
};

export default FifthComponent;
