import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setMapHistory } from "../store/bikes/actions";

function UseMapHistory() {
    const dispatch = useDispatch();
    const history = useHistory();
    const historyList = useSelector(state => state.bike.historyList);
    const [redirect, setRedirect] = useState(false);
    const [patRedirect, setPatRedirect] = useState('');

    const redirectMapHistory = (itemHistory) => {
        setPatRedirect('/mapHistory')
        dispatch(setMapHistory(itemHistory));
        setRedirect(true);
    }

    const redirectIndex = () => {
        setPatRedirect('/')
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
            <h1>History</h1>
            <ol>
                {historyList.map(itemHistory => (
                    <li onClick={() => redirectMapHistory(itemHistory)} key={itemHistory.date}>{`Date: ${itemHistory.date}`}</li>
                ))}
            </ol>
            {renderRedirect()}
        </div>
    )
}

export default UseMapHistory;