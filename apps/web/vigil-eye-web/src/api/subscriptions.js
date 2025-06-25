export async function getSubscriptions() {
    const res = await fetch("https://<your-api>/subscriptions");
    return res.json();
}
