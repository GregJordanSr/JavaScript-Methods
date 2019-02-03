/* Array Some Will Return True If Some OF The Array Is True

Empty Array Will Return False*/

/* Example, return true if SOME of the values are "2008" */

const carYears = [2001,2002,2003,2004,2008,2010];

const have2008InStock = carYears.some(cars => {
    return cars === 2008;
})

console.log('2008',have2008InStock);
/* returns true */

const have2005InStock = carYears.some(cars => {
    return cars === 2005;
})

console.log('2005', have2005InStock);

/* Contrived example, but this could have some really good applications */