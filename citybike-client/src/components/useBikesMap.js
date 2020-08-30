import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateHistoryList } from "../store/bikes/actions";
import socketIOClient from "socket.io-client";
import UseMap from "./useMap";
import axios from 'axios';


function useBikeMap() {
    const dispatch = useDispatch();
    const history = useHistory();
    const historyList = useSelector(state => state.bike.historyList);
    const [redirect, setRedirect] = useState(false);
    const [response, setResponse] = useState(false);
    const [endpoint, setEndpoint] = useState("http://127.0.0.1:4001");
    const [mainEndpoint, setMainEndpoint] = useState("http://127.0.0.1:4001/getBikeInfo");
    const [callSocket, setCallSocket] = useState(false);

    useEffect(() => {
        if (callSocket && response) {
            const socket = socketIOClient(endpoint);
            socket.on("CityBikesData", data => setResponse(data));
        }
    }, [callSocket]);

    useEffect(() => {
        getInfoBike();
    }, [])

    useEffect(() => {
        if (response) {
            historyList.push({
                date: Date.now(),
                list: response
            });
            dispatch(updateHistoryList(historyList));
        }
    }, [response]);

    const getInfoBike = async function () {
        const response = await axios.get(mainEndpoint);
        setResponse(response.data.response);

        setCallSocket(true);
    }
    const redirectHistory = () => {
        setRedirect(true);
    }

    const renderRedirect = () => {
        if (redirect) {
            history.push('/history');
        }
    }

    return (
        response &&
        <div>
            <button
                onClick={() => redirectHistory()}
            >History</button>
            <UseMap properties={response} />
            {renderRedirect()}
        </div>

    )
}

export default useBikeMap;