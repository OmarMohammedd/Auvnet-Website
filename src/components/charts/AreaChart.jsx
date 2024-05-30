import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

export const mainChartColors = ["#8F00FF", "#41CBBF", "#0099FF"];
const AreaChart = ({ chartData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (chartData?.length > 0) {
      const arr = chartData.map((e) => {
        return {
          year: JSON.parse(e.date?.split("-")[0]),
          Services: e.services?.length,
          Courses: e.courses?.length,
          Projects: e.projects?.length,
        };
      });
      setData(arr);
    }
  }, [chartData]);

  const Servicess = data.map((item) => item.Services);
  const Projects = data.map((item) => item.Projects);
  const Courses = data.map((item) => item.Courses);
  const years = data.map((item) => item.year);

  const chartOptions = {
    chart: {
      height: 320,
      type: "area",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Services",
        type: "area",
        data: Servicess,
      },
      {
        name: "Projects",
        type: "area",
        data: Projects,
      },
      {
        name: "Courses",
        type: "area",
        data: Courses,
      },
    ],
    colors: mainChartColors,

    xaxis: {
      categories: years,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: "#675db7",
      },
      labels: {
        style: {
          colors: "#000000", // Change the color of the y-axis here
        },
      },
    },

    legend: {
      position: "top", // Change the position of the legend to top
      // Other properties of legend like fontSize, fontFamily, etc., can be configured here
    },

    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "red",
        },
        labels: {
          style: {
            colors: "#000000", // Change the color of the y-axis here
          },
        },
        title: {
          // text: 'Income (thousand crores)',
          // text: 'Services (Dollar)',
        },
      },
    ],

    tooltip: {
      followCursor: true,
      theme: "dark",
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " ";
          }
          return y;
        },
      },
    },
    grid: {
      borderColor: "#00000060", // You can customize the color of the grid lines
      strokeDashArray: 10, // You can adjust the stroke dash array for the grid lines
      position: "back",
      show: true,
    },

    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      // @ts-ignore
      options={chartOptions}
      series={chartOptions.series}
      stacked={false}
      type="area"
      fill={{ opacity: 1 }}
      height={320}
    />
  );
};

export default AreaChart;
