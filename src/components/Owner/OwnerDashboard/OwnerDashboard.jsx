import React, { useEffect, useRef, useState } from 'react'
import "./OwnerDashboard.css"

const OwnerDashboard = () => {
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