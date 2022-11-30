function secretMessage() {
    if (today > 24) return;

    const messages = [
        'Végre December! ❄',
        'Illetve amikor még ezt írom November van... December előtt kb. egy héttel kezdtem neki.',
        'Remélem tetszeni fog ez a kis naptár és benne a kihívások. Még magam sem tudom milyenek lesznek, mert 11 van kész jelenleg.',
        'Majd haladok és találok ki út közben feladatokat. Szerintem lépést tudok tartani az idővel. 😄',
        'November 30-a van ma amúgy amikor ezt írom. Előkészültem az Advent of Code 2022-re. Az egy nagyobb esemény, ami már évek óta megy. Remélem tudok ihletet meríteni onnan is.',
        'Hmm... Az 5. nap. Úgy tervezem, hogy én lennék a Mikulásod és rakok valamit az ablakodhoz. Remélem otthon leszel, bár kétlem, mert az egy keddi nap. Majd meglátom mi lesz...',
    ];

    for (let i = 0; i < Math.min(today, 25); i++) {
        console.log(`${i}: ${messages[i]}`);
    }
}

secretMessage();