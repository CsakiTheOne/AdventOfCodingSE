const today = new Date().getDate();

try {
    if (debug) { }
} catch (error) {
    try {
        if (today < day) {
            document.body.innerHTML = `<h3>Ezt még nem kéne látnod! ${today}/${day}</h3>`;
        }
    } catch (error) {
        document.body.innerHTML = '<h3>Ádám elfelejtette megadni, hogy ez az oldal melyik naphoz tartozik.</h3>';
    }
}
