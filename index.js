'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity : takes in any value and returns the same value, without alteration
 * 
 * @param {value} is the value to be returned 
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;

/**
 * typeOf : takes in a value and returns the type of data (number, string, 
 * boolean, object, array, undefined, null, or function)
 * 
 * @param {value} is the value to be typed 
 */

function typeOf(value) {
    var result = typeof(value);
    
    if (result === 'object') {
        if (Array.isArray(value)) {
            result = 'array';
        } else if (value === null) {
            result = 'null';
        } else {
            result = 'object';
        }
    }
    
    return result;
}

module.exports.typeOf = typeOf;

/**
 * first : takes in an array and an optional number parameter. if number is 
 * undefined, first returns the first element of the array; if number is 
 * defined and is positive, first returns the first (number) elements of the 
 * array (ex. if number is 2, return the first 2 elements of the array). if 
 * number is greater than the legnth of the array, first returns the whole
 * array; if number is negative or if the input is not an array, first returns 
 * a blank array
 * 
 * @param {array} is the array to search through for the first (number) inputs
 * @param {number} is optional and is used to return the first x values of the
 * array
 */ 
 
function first(array, number) {
    
    if (!Array.isArray(array)) {
        return [];
    } else if (number === undefined) {
        return array[0];
    } else if (number <= 1) {
        return [];
    } else if (number > array.length) {
        return array;
    } else {
        var result = [];
        for (var i = 0; i < number; i++) {
            result.push(array[i]);
        }
        return result;
    }
}

module.exports.first = first;

/**
 * last : takes in an array and an optional number parameter. if number is 
 * undefined, last returns the last element of the array; if number is 
 * defined and is positive, last returns the last (number) elements of the 
 * array (ex. if number is 2, return the last 2 elements of the array). if 
 * number is greater than the legnth of the array, last returns the whole
 * array; if number is negative or if the input is not an array, last returns 
 * a blank array
 * 
 * @param {array} is the array to search through for the last (number) inputs
 * @param {number} is optional and is used to return the last x values of the
 * array
 */ 
 
function last(array, number) {
    console.log(array);
    console.log(number);
    
    if (!Array.isArray(array)) {
        return [];
    } else if (number === undefined) {
        return array[array.length - 1];
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else {
        var result = [];
        for (var i = number; i > 0; i--) {
            result.push(array[array.length - i]);
        }
        return result;
    }
}

module.exports.last = last;

/**
 * indexOf : takes in an array and a value; if the value is contained in the 
 * array, returns the index of the value. if the value is not contained in the 
 * array, returns -1. 
 * 
 * @param {array} is the array to search through for the value
 * @param {value} is the value that is being searched for 
 */

function indexOf(array, value) {
    var index;
    
    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === value.toLowerCase()) {
            index = i;
            break;
        } else {
            index = -1;
        }
    }
    
    return index;
}

module.exports.indexOf = indexOf;

/**
 * contains : takes in an array and a value; returns true if the value is 
 * contained in the array and returns false if the value is not contained
 * in the array
 * 
 * @param {array} is the array to search through for the value
 * @param {value} is the value that is being searched for 
 */
 
function contains(array, value) {
    var contains = (array.includes(value))? true : false;
    
    return contains;
}

module.exports.contains = contains;

/**
 * each : designed to loop over a collection, array or object, and applies the 
 * action function to each value in the collection.
 * 
 * @param {array or object} is the collection over which to iterate.
 * @param {function} is the action to be applied to each value in the collection
 */

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique : iterates over an array and creates a new array with only the unique items
 * within the array (creates a new array with only unique items / duplicates removed)
 * 
 * @param {array} is the array over which to iterate / where duplicates are being
 * removed
 */

function unique(array) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
        } else {
            newArray.push(array[i]);
        }
    }
    
    return newArray;
}

module.exports.unique = unique;

/**
 * filter : takes in an array and a function and creates a new array, filled with 
 * elements from the first array for which the function returns true (for example, 
 * if given the element [1, 2, 3, 4] and the function (var % 2 === 0), filter would 
 * filter out only the values for which % 2 === 0, so [2, 4])
 * 
 * @param {array} is the array that is being iterated over
 * @param {func} is the function that is being conducted on each element
 */

function filter(array, func) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    
    return newArray;
}

module.exports.filter = filter;

/** 
 * reject : reject is the opposite of filter, so it takes in an array and a function
 * and creates a new array, filled with elements from the first array for which the
 * function returns false (for example, if given the element [1, 2, 3, 4] and the 
 * function (var % 2 === 0), filter would filter out only the values for which 
 * % 2 === 0 is false, so [1, 3])
 * 
 * @param {array} is the array that is being iterated over
 * @param {func} is the function that is being conducted on each element
 */
 
function reject(array, func) {
    var newArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    
    return newArray;
}

module.exports.reject = reject;

/** 
 * partition : combines filter and reject, creates two arrays, truthy and falsy, that 
 * are the results of a function iterated over an array. any time the function returns 
 * true, that element is added to the truthy array, and any time the function returns
 * false, that element is added to the falsy array. partition returns the array of 
 * [truthy, falsy], an array containing the two arrays.
 * 
 * @param {array} is the array that is being iterated over
 * @param {func} is the function that is being conducted on each element
 */

function partition(array, func) {
    var truthy = [];
    var falsy = [];
    
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            truthy.push(array[i]);
        } else {
            falsy.push(array[i]);
        }
    }
    
    return [truthy, falsy];
}

module.exports.partition = partition;

/** 
 * map : takes in a collection and a function and performs the function on each element
 * in the array or object. then map returns the results of the function in a new array, 
 * called newArray
 * 
 * @param {collection} is the object or array to be iterated over 
 * @param {func} is the function to be performed on the elements or values in the 
 * collection 
 */
 
function map(collection, func) {
    var newArray = [];
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            newArray.push(func(collection[key], key, collection));
        }
    }
    
    return newArray;
}

module.exports.map = map;

/** 
 * pluck : takes in an array of objects and then uses the map function to pull the 
 * values of a given key (property) and create an array of just the values. function
 * is defined within the map call to return just the property of each object (for 
 * example, if the array contains objects about individual people, and the property
 * is name, pluck will return all of the name properties for the objects in the array)
 * 
 * @param {array} is an array of objects to iterate over
 * @param {property} is the key or property that is going to be returned 
 */
 
function pluck(array, property) {
    return map(array, function(object) {return object[property];});
}

module.exports.pluck = pluck;