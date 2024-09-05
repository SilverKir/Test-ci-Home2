export default function SortHeroesByHealth(heroesArray) {
    let i, j, temp;
    let swapped;
    const n = heroesArray.length;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (heroesArray[j].health < heroesArray[j + 1].health) {
                temp = heroesArray[j];
                heroesArray[j] = heroesArray[j + 1];
                heroesArray[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped === false)
            break;
    };
}