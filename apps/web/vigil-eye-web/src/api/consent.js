export async function logConsent(url) {
    const res = await fetch("https://<your-api>/log-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
    });
    return res.json();
}
