import React from "react";
import ConsentLogger from "./components/ConsentLogger";
import DataLogViewer from "./components/DataLogViewer";
import SubscriptionSummary from "./components/SubscriptionSummary";

function App() {
    return (
        <div>
            <h1>🛡️ Vigil-Eye Dashboard</h1>
            <ConsentLogger />
            <hr />
            <SubscriptionSummary />
            <hr />
            <DataLogViewer />
        </div>
    );
}

export default App;
