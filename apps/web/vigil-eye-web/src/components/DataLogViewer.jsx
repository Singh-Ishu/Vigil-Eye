import React, { useEffect, useState } from "react";
import { fetchDataLog } from "../api/dataLog";

function DataLogViewer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataLog().then(setData);
    }, []);

    return (
        <div>
            <h2>🧾 Personal Data Log</h2>
            <ul>
                {data.map((entry, i) => (
                    <li key={i}>
                        {entry.email} shared on {entry.website} at{" "}
                        {new Date(entry.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DataLogViewer;
