import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UseMapHistory() {
    const history = useHistory();
    const historyList = useSelector(state => state.bike.historyList);
    const [redirect, setRedirect] = useState(false);

    const redirectIndex = () => {
        setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
            history.push('/');
        }
    }
    return (
        <div>
            <button
                onClick={() => redirectIndex()}
            >Back to Index</button>
            <h1>History</h1>
            <ol>
                {historyList.map(itemHistory => (
                    <li key={itemHistory.date}>{`Date${itemHistory.date}`}</li>
                ))}
            </ol>
            {renderRedirect()}
        </div>
    )
}

export default UseMapHistory;