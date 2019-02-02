/* Syntax For .map for JS Arrays */
/* Takes 3 arguments, 
currentValue which is the current element
index (optional),
array (optional) the arrap  map was called on.
thisArg - value to use as this when using CB  

MAP DOES NOT MUTATE THE ORIGINAL ARRAY*/

/* A Scenario Where You Need All The ID's into a new array. At least 2 ways of doing this */
var officers = [
    { id: 20, name: 'Michael' },
    { id: 24, name: 'Mark' },
    { id: 56, name: 'Jesse' },
    { id: 88, name: 'Adam' }
  ];
/* We COULD use ForEach, but it is a little more work to get it set up since
we have to define the empty array prior */

const officerIds = [];

officers.forEach(officer=> officerIds.push(officer.id));
console.log (officerIds);
/* logs [ 20, 24, 56, 88 ] to the console  */

/* However, in this situation in this case using .map is better */

const officerIds2 = officers.map(officer => officer.id);
console.log(officerIds2)
/* The Result Is The Same, this method is more concise. */