import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UseMap from "./useMap";

function UseCheckHistory() {
    const history = useHistory();
    const itemHistory = useSelector(state => state.bike.history);
    const [redirect, setRedirect] = useState(false);
    const [patRedirect, setPatRedirect] = useState('');

    const redirectIndex = () => {
        setPatRedirect('/')
        setRedirect(true);
    }

    const redirectHistory = () => {
        setPatRedirect('/history')
        setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
            history.push(patRedirect);
        }
    }

    return (
        <div>
            <button
                onClick={() => redirectIndex()}
            >Back to Index</button>
            <button
                onClick={() => redirectHistory()}
            >Back to History</button>
            <h1>{`The date selected is: ${itemHistory.date}`}</h1>
            <UseMap properties={itemHistory.list} />
            {renderRedirect()}
        </div>
    )
}

export default UseCheckHistory;