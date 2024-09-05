import SortHeroesByHealth from "../sort";
test('sort heroes array by health', () => {
    const heroes = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];
    const sortedHeroes = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ]
    SortHeroesByHealth(heroes);
    expect(heroes).toEqual(sortedHeroes)
})