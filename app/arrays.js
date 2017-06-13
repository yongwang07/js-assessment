exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (array, item) => [].indexOf.call(array, item),

  sum: array => [].reduce.call(array, (acc, item) => acc + item, 0),
      
  remove: (array, item) => [].filter.call(array, element => element !== item),
      
  removeWithoutCopy: (array, item) => {
    for (let i = 0; i < array.length;) {
      if (array[i] === item) array.splice(i, 1);
      else i++;
    }
    return array;
  },
      
  append: (array, item) => [].push.call(array, item) && array,
      
  truncate: array => [].pop.call(array) && array,
      
  prepend: (array, item) => [].splice.call(array, 0, 0, item) && array,
      
  curtail: array => [].shift.call(array) && array,
  
  concat: (array1, array2) => [].concat.call(array1, array2),
  
  insert: (array, item, position) => [].splice.call(array, position, 0, item) && array,
  
  count: (array, item) => [].filter.call(array, element => element === item).length,
  
  duplicates: array => Array.from([].reduce.call(array, (acc, item) => {
    if (!acc[0].has(item)) acc[0].add(item);
    else acc[1].add(item);
    return acc;
  }, [new Set(), new Set()])[1]),
      
  square: array => [].map.call(array, item => item* item),
  
  findAllOccurrences: (array, item) => [].reduce.call(array, (acc, element, i) => {
    if (element === item) acc.push(i);
    return acc;
  }, [])
};