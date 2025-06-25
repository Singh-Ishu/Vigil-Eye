export async function fetchDataLog() {
    const res = await fetch("https://<your-api>/data-log");
    return res.json();
}
