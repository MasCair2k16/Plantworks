export async function handleFetchPosts(event) {
    event.preventDefault(); // submit without reloading the page
    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/plants`;

    if (location.hostname === "localhost" || location.hostname === "127.0.0.1")
        url = '/api/plants';

    const res = await fetch(url, {
        body: JSON.stringify(formData),
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            'access-control-allow-methods': 'POST, GET, OPTIONS, PUT, DELETE',
            'access-control-allow-origin': '*',
        },
        method: 'POST',
    });

    res.status !== 200 && console.log('Error: ' + res.statusText + ' ' + res.statusMessage);

    const result = await res.json();
    console.log(result);
}