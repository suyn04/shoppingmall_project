import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";

const Analysis = () => {
    const [daily, setDaily] = useState();
    let now = new Date();
    let year = now.getFullYear();
    let month = String(now.getMonth() + 1).padStart(2, "0");
    let day = String(now.getDate()).padStart(2, "0") - 1;

    let formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);

    const analysisGetAxios = () => {
        axios
            .get(`http://localhost:5001/analysis`)
            .then((res) => {
                console.log("서버 다녀옴", res.data);
                console.log(res.data[0].status_date.slice(0, 10));

                // let curData = res.data.filter((item) => {
                //     item.status_date.slice(0, 10) == formattedDate;
                // });
                // console.log(curData);
                // setDaily(curData);
            })
            .catch((err) => {
                console.error("에러발생 ; ", err);
            });
    };
    useEffect(() => {
        analysisGetAxios();
    }, []);

    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default Analysis;
