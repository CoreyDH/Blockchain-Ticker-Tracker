export const sortArrByKey = function(arr, { sortBy, dir = 'asc' }) {
    if(arr && sortBy) {
        arr = arr.sort(function(a, b) {

          if(dir === 'desc') {
              let temp = a;
              a = b;
              b = temp;
          }

          if(typeof a[sortBy] === 'string')
              return a[sortBy].localeCompare(b[sortBy]);
          
          if(typeof a[sortBy] === 'number')
              return a[sortBy] - b[sortBy];
      });
    }

    return arr;
}