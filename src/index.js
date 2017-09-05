/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn, thisArg) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }

    return result;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result = initial || array[0],
        first = initial ? 0 : 1;

    for (var i = first; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var result = [];

    for (var i in obj) {
        result.push(i);
    }

    return result;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var result = [];

    for (var i in obj) {
        result.push(i.toUpperCase());
    }

    return result;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from = 0, to) {
    var result = [],
        length = array.length;

    from = args(from, length);
    to = args(to, length);

    function args(i, length) {
        if (i === undefined) {
            i = length;
        } else {
            i = i > length ? length : i;
            i = i < 0 ? length + i : i;
            i = i < 0 ? 0 : i;
        };

        return i;
    }

    for (var i = from; i < to; i++) {
        result.push(array[i]);
    }

    return result;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var proxy = new Proxy(obj, {
        set(target, prop, value) {
            return target[prop] = value * value;
        }
    });

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
