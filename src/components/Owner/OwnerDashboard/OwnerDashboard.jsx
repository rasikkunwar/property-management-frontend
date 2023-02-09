import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { fetchOwnerDashboardData } from '../../../store/dashboard/dashboard'
import Chart from "react-apexcharts";
import DonutChart from '../../Charts/DonutChart'
import WaitLoader from '../../Spinners/WaitLoader'
import "./OwnerDashboard.css"

const OwnerDashboard = () => {

    const [ownerDashData, setOwnerDashData] = useState()

    const [options, setOptions] = useState({
        chart: {
            type: "pie",
        },
        labels: [],
        series: [],
        title: {
            text: "Property Application Distribution"
        }
    });


    const [barOptions, setBarOptions] = useState({
        title: {
            text: "Property Application Distribution"
        },
        chart: {
            type: "bar",
        },
        xaxis: {
            title: {
                text: "Property",
            },
            categories: [],
        },
        yaxis: {
            title: {
                text: "Views",
            },
        },
        series: [
            {
                name: "Property View Application Wise",
                data: [],
            },
        ],
    });

    const [donutOptions, setDonutOptions] = useState({
        chart: {
            type: "donut",
        },
        labels: [],
        series: [],
        title: {
            text: "Property Type Count"
        }
    });


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchOwnerDashboardData()).then((data) => {
            setOwnerDashData(data)

            // For property application count
            const propertyAppCount = data.propertyApplicationCountChartData;
            setOptions({
                ...options,
                labels: propertyAppCount.map((item) => item.title),

                series: propertyAppCount.map((item) => item.count),
            });


            // For propertyViewCountChartData
            const propertyViewCount = data.propertyViewCountChartData;
            setBarOptions({
                ...barOptions,
                xaxis: {
                    categories: propertyViewCount.map((item) => item.title),
                },
                series: [
                    {
                        name: "Count",
                        data: propertyViewCount.map((item) => item.count),
                    },
                ],
            })


            //For ownerPropertyTypeCountChartData
            const propertyTypeCount = data.ownerPropertyTypeCountChartData;
            setDonutOptions({
                ...donutOptions,
                labels: propertyTypeCount.map((item) => item.propertyType),

                series: propertyTypeCount.map((item) => item.count),
            });



        }).catch((res) => {
            toast.error(res)
        })
    }, []);


    if (!ownerDashData) {
        return <div className='owner-dashboard-container'><p>
            <WaitLoader />
        </p></div>
    }

    if (ownerDashData) {
        return (
            <div className='owner-dashboard-container'>
                <div className='owner-dashboard'>
                    <p className='title'>Owner Dashboard</p>
                </div>
                <div className='chart-container'>
                    <div className='owner-dashboard-chart-container'>
                        <div className='chart-box'>
                            <Chart
                                className="chart-box-item"
                                options={options}
                                series={options.series}
                                type={options.chart.type}
                                width={350}
                                height={200}
                            />
                        </div>
                        <div className='chart-box'>
                            {/* <Chart
                                className="chart-box-item"
                                options={barOptions}
                                series={barOptions.series}
                                type={barOptions.chart.type}
                                width={350}
                                height={200}
                            /> */}
                            <Chart
                                className="chart-box-item"
                                options={donutOptions}
                                series={donutOptions.series}
                                type={donutOptions.chart.type}
                                width={350}
                                height={200}
                            />
                        </div>

                        <div className='chart-box'>
                            <Chart
                                className="chart-box-item"
                                options={donutOptions}
                                series={donutOptions.series}
                                type={donutOptions.chart.type}
                                width={350}
                                height={200}
                            />
                        </div>
                        <div className='chart-box'>
                            <Chart
                                className="chart-box-item"
                                options={options}
                                series={options.series}
                                type={options.chart.type}
                                width={350}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default OwnerDashboard