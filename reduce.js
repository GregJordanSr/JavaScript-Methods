/* arr.reduce(callback[, initialValue]) */

const array1 = [1, 2, 3, 4];


const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer,5));
/* Console Logs 15 to the console as expected */

/* Could Also Be Written Like */

const alternate = array1.reduce((acc, num) => acc+num)

console.log("Alternate",alternate);



const footBallPlayers = [
    {
      id: 12,
      name: "Tom Brady",
      years: 14,
    },
    {
      id: 2,
      name: "Terelle Owens",
      years: 30,
    },
    {
      id: 41,
      name: "Brett Farve",
      years: 28,
    },
    {
      id: 99,
      name: "Tim Tebow",
      years: 2,
    }
  ];

  /* We Want to find out the total years of experience of these players*/

  const experience = footBallPlayers.reduce((acc, player) => acc + player.years,0);
  /* new var          array           method  acc  player     acc    what adding  starting value */

  console.log(experience)
  /* 74 prints to the console log as expected */

  
  /* Another Example, It Can Be Used To Flatten Arrays */
  
  var flattenedCars = [['Audi', 'Honda'], ['Chevy', 'Ford'], ['Nissan', 'BMW']].reduce(
    function(accumulator, currentValue) {
      return accumulator.concat(currentValue);
    },
    []
  );
 
console.log(flattenedCars)
/* Returns [ 'Audi', 'Honda', 'Chevy', 'Ford', 'Nissan', 'BMW' ] */