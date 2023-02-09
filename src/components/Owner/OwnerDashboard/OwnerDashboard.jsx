import React, { useEffect, useRef, useState } from 'react'
import "./OwnerDashboard.css"
import { Line, Bar, Doughnut, Scatter } from 'react-chartjs-2';
import 'chart.js/auto'

const OwnerDashboard = () => {

    const ref = useRef();

    const [stateLabels, setStateLabels] = useState([])
    const [stateData, setStateData] = useState([])
    const [propertyTypeLabels, setPropertyTypeLabels] = useState([])
    const [propertyCount, setPropertyCount] = useState([])

    const apiData =
    {
        "data": {
            "statePropertyChartData": [
                {
                    "state": "Arizona",
                    "count": 2
                },
                {
                    "state": "Alabama",
                    "count": 3
                }
            ],
            "propertyTypeCountChartData": [
                {
                    "propertyType": "Condo",
                    "count": 1
                },
                {
                    "propertyType": "House",
                    "count": 4
                }
            ]
        }
    }

    const processApiData = () => {
        apiData.data.statePropertyChartData.map((data) => {
            console.log(data.state)
            setStateLabels([...stateLabels, data.state])
            setStateData([...stateData, data.state])
        })

        console.log(stateLabels, stateData)

        // apiData.data.propertyTypeCountChartData.map((data) => {
        //     setPropertyTypeLabels(...propertyTypeLabels, data.propertyType)
        //     setPropertyCount(...propertyCount, data.propertyCount)
        // })
    }

    useEffect(() => {
        processApiData()
    }, [])

    const data = {
        labels: stateLabels,
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#742774"
            },
            // {
            //     label: "Second dataset",
            //     data: [33, 25, 35, 51, 54, 76],
            //     fill: true,
            //     borderColor: "#742774"
            // }
        ]
    };


    return (
        <div className='owner-dashboard-container'>
            <div className='owner-dashboard'>
                <p className='title'>Owner Dashboard</p>
            </div>
            <div className='chart-container'>
                <div className='owner-dashboard-chart-container'>
                    <div className='chart-box'>
                        <Line data={data} ref={ref} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Line Chart',
                                }
                            }
                        }}
                        />
                    </div>
                    <div className='chart-box'>
                        <Bar data={data} ref={ref} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Bar Chart',
                                }
                            }
                        }} />
                    </div>
                    <div className='chart-box'>
                        <Bar data={data} ref={ref} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Bar Chart',
                                }
                            }
                        }} />
                    </div>
                    <div className='chart-box'>
                        <Scatter data={data} ref={ref} options={{
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Scatter Chart',
                                }
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerDashboard