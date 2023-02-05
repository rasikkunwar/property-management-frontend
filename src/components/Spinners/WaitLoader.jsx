import React, { useState } from 'react'
import HashLoader from "react-spinners/HashLoader";
import "./WaitLoader.css"



const WaitLoader = ({ loading }) => {

    const [color, setColor] = useState("#36d7b7");

    return (
        <div className='spinner'>
            <HashLoader
                color={color}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>

    )
}

export default WaitLoader