import React, { useState } from "react";
import { logConsent } from "../api/consent";

function ConsentLogger() {
    const [url, setUrl] = useState("");
    const [response, setResponse] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await logConsent(url);
        setResponse(res);
    }

    return (
        <div>
            <h2>📄 Consent Tracker</h2>
            <form onSubmit={handleSubmit}>
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste ToS/Privacy URL"
                    style={{ width: "60%", marginRight: "1rem" }}
                />
                <button type="submit">Track</button>
            </form>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default ConsentLogger;
