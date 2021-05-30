import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import axios from "axios";
import Chart from "react-apexcharts";

const FifthComponent = () => {
  // Set up states for retrieving access token and top tracks
  const [token, setToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      colors: ['#F8D7BD', '#546E7A', '#d4526e', 
              ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        labels: {
          style: {
            colors: "white",
            fontSize: '12px'
          }
        }
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
        type: 'gradient',
        gradient: {
          colorFrom: '#D8E3F0',
          colors: 'red',
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        }
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  // Artist ID from Spotify
  const id = "06HL4z0CvFAxyc27GXpf02";
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
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }, []);

  // Transform track data
  function PopularityByTrack(data) {
    let plotData = [];

    let names = [];
    let popularity = [];

    data.map(each => {
      names.push(each.name);
      popularity.push(each.popularity);
    });

    plotData["names"] = names;
    plotData["popularity"] = popularity;

    return plotData;
  }

  return (
    // <div >
    //   <Plot
    //     data={[
    //       {
    //         type: "bar",
    //         x: PopularityByTrack(tracks)["names"],
    //         y: PopularityByTrack(tracks)["popularity"],
    //         marker: { color: "#03fc6b" },
    //       },
    //     ]}
    //     layout={{
    //       width: "100%",
    //       height: "100%",
    //       // title: 'Taylor Swfit Top Tracks'
    //       title: "<b>Taylor Swift Top Tracks</b> <br> <sub>US Market</sub>",
    //       margin: {
    //         l: 100,
    //         r: 100,
    //         b: 150,
    //         t: 150,
    //         pad: 4,
    //       },
    //       paper_bgcolor: "#919191",
    //       plot_bgcolor: "#919191",
    //       font: {
    //         family: "Newsreader, serif",
    //         size: 20,
    //         color: "white",
    //       },
    //       xaxis: {
    //         title: "Name",
    //         titlefont: {
    //           family: "Arial, sans-serif",
    //           size: 12,
    //           color: "white",
    //         },
    //         showticklabels: false,
    //         tickfont: {
    //           family: "Arial, sans-serif",
    //           size: 12,
    //           color: "white",
    //         },
    //       },
    //       yaxis: {
    //         title: "Popularity",
    //         titlefont: {
    //           family: "Arial, sans-serif",
    //           size: 12,
    //           color: "white",
    //         },
    //         showticklabels: true,
    //         tickfont: {
    //           family: "Arial, sans-serif",
    //           size: 12,
    //           color: "white",
    //         },
    //       },
    //       hovermode: "closest",
    //     }}
    //   />
    // </div>
    <div className="component fifth-component">
            <div
        style={{
          height: "20%",
          backgroundColor: "#333",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="fontfam">Songs By Popularity</h1>
      </div>
      {/* <div className="row"> */}
      <div className="mixed-chart" style={{margin: "auto", width:"60%"}}>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width="100%"
          // height="100%"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default FifthComponent;
