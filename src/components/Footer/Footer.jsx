import React from "react";
import { useLocation } from "react-router-dom";

export default function Footer(){
    const {pathname} = useLocation()

    return (
        <React.Fragment>
           {pathname != '/login' && pathname != '/sign-up' && <footer className="App-footer">
                <div className="Copyright">
                    &copy; SRNA- All Rights Reserved
                </div>
            </footer>
 }
        </React.Fragment>
    )
}