import React, { useEffect, useState } from "react";
import { getSubscriptions } from "../api/subscriptions";

function SubscriptionSummary() {
    const [subs, setSubs] = useState([]);

    useEffect(() => {
        getSubscriptions().then(setSubs);
    }, []);

    const total = subs.reduce((sum, sub) => sum + sub.amount, 0);

    return (
        <div>
            <h2>💸 Subscriptions</h2>
            <p>Total monthly spend: ₹{total.toFixed(2)}</p>
            <ul>
                {subs.map((s, i) => (
                    <li key={i}>
                        {s.vendor}: ₹{s.amount} ({s.frequency})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SubscriptionSummary;
