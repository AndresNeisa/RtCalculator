import React from "react";
import { Line } from "react-chartjs-2";

import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

const LineChart = ({ theme, rt }) => {
  const data = {
    labels: [ 
      "125",
      "250",
      "500",
      "1K",
      "2K",
      "4K",
    ],
    datasets: [
      {
        label: "Initial",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.primary,
        data: rt
      },
      // {
      //   label: "With Material",
      //   fill: true,
      //   backgroundColor: "transparent",
      //   borderColor: theme.tertiary,
      //   borderDash: [4, 4],
      //   data: [
      //     1.3,
      //     1.4,
      //     1.6,
      //     1.7,
      //     1.1,
      //     1.3,
      //   ]
      // }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      intersect: false
    },
    hover: {
      intersect: true
    },
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.2)"
          },
          scaleLabel: {
            display: true,
            labelString: "Hz"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            stepSize: 0.5
          },
          display: true,
          borderDash: [4, 4],
          gridLines: {
            color: "rgba(0,0,0,0.05)",
            fontColor: "#000"
          },
          scaleLabel: {
            display: true,
            labelString: "Seconds"
          }
          
        }
      ]
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5">Reverberation Time</CardTitle>
        <h6 className="card-subtitle text-muted">
          
        </h6>
      </CardHeader>
      <CardBody>
        <div className="chart">
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

LineChart.defaultProps = {
  theme: ({primary: "blue",
          tertiary: "red"})
}

export default LineChart;
