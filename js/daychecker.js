const today = new Date().getDate();

try {
    if (today < day) {
        document.body.innerText = `Ezt még nem kéne látnod! ${today}/${day}`;
    }
} catch (error) {
    document.body.innerText = 'Ádám elfelejtette megadni, hogy ez az oldal melyik naphoz tartozik.';
}
