const today = new Date().getDate();
let content = '';

try {
    if (debug) { }
} catch (error) {
    try {
        if (today < day) {
            content = `<h3>Ezt még nem kéne látnod! ${today}/${day}</h3>`;
        }
        else if (today > 24) {
            content = '<h3>Még nincs December</h3>';
        }
    } catch (error) {
        content = '<h3>Ádám elfelejtette megadni, hogy ez az oldal melyik naphoz tartozik.</h3>';
    }

    document.body.innerHTML = content;
}
