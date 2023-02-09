import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { fetchOwnerDashboardData } from '../../../store/dashboard/dashboard'
import WaitLoader from '../../Spinners/WaitLoader'
import "./OwnerDashboard.css"

const OwnerDashboard = () => {

    const [ownerDashData, setOwnerDashData] = useState()
    const [propertyApplicationTitle, setPropertyApplicationTitle] = useState([])
    const [propertyApplicationCount, setPropertyApplicationCount] = useState([])

    // Data Sample 
    // {
    //     "data": {
    //         "propertyApplicationCountChartData": [
    //             {
    //                 "title": "H3 ",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H1",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H1",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H1",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H4 ",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H5",
    //                 "count": 1
    //             }
    //         ],
    //         "propertyViewCountChartData": [
    //             {
    //                 "title": "H3 ",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H1",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H4 ",
    //                 "count": 1
    //             },
    //             {
    //                 "title": "H5",
    //                 "count": 1
    //             }
    //         ],
    //         "ownerPropertyTypeCountChartData": [
    //             {
    //                 "propertyType": "House",
    //                 "count": 4
    //             },
    //             {
    //                 "propertyType": "Condo",
    //                 "count": 1
    //             }
    //         ],
    //         "favoriteCountChartData": []
    //     }

    const dispatch = useDispatch()

    const fillDashData = () => {
        if (ownerDashData) {
            ownerDashData.propertyApplicationCountChartData.map((data, id) => {
                console.log(data.title)
                console.log(data.count)
            })
        }
    }

    useEffect(() => {
        dispatch(fetchOwnerDashboardData())
            .then((res) => {
                setOwnerDashData(res)
                fillDashData()
            }).catch((res) => {
                toast.error(res)
            })
    }, [])



    if (!ownerDashData) {
        return <div className='owner-dashboard-container'><p>
            <WaitLoader />
        </p></div>
    }

    return (
        <div className='owner-dashboard-container'>
            <div className='owner-dashboard'>
                <p className='title'>Owner Dashboard</p>
            </div>
            <div className='chart-container'>
                <div className='owner-dashboard-chart-container'>
                    <div className='chart-box'>

                    </div>
                    <div className='chart-box'>

                    </div>
                    <div className='chart-box'>

                    </div>
                    <div className='chart-box'>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default OwnerDashboard