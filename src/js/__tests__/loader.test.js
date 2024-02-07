import savingLoader from '../app';

test('Класс GameSavingLoader возвращает объект типа GameSaving', () => {
    const saving = savingLoader();
    const correctObject = {
        "id":9,
        "created":1546300800,
        "userInfo": {
            "id":1,
            "name":"Hitman",
            "level":10,
            "points":2000
        }
    };

    expect(saving).toEqual(correctObject);
});
