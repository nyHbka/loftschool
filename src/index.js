/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000 * seconds);
    })
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {
    return new Promise(function(resolve) {
        var request = new XMLHttpRequest(),
            url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

        request.open('GET', url, true);
        request.send();
        request.onload = function() {
            if(this.status == 200) {
                var cities = JSON.parse(this.responseText);
                resolve(cities.sort((a, b) => a.name.localeCompare(b.name)));
            }
        }
    })
}

export {
    delayPromise,
    loadAndSortTowns
};
