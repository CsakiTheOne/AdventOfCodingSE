const today = new Date().getDate();

try {
    if (debug) { }
} catch (error) {
    if (today < day) {
        document.body.innerHTML = `<h3>Ezt még nem kéne látnod! ${today}/${day}</h3>`;
    }
}
