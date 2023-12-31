import obstacles from './obstaclesDataArray.js';
import Alien from '../Aliens.js';

function enemiePosition() {
  //used to compare obstacle position
  let initialColumn = 6;
  let initialRow = 6;

  //used to position enemie
  let initialColumnEnemie = 22;
  let initialRownEnemie = 22;

  //greed size
  let greedSize = 150;

  let enemyPosition = [];
  let i = 0;
  let id = 1;

  while (i < greedSize) {
    let comparsionRow = {
      x: initialColumn,
      y: initialRow,
      width: 37,
      height: 37,
    };

    //function to filter the obstacles position
    if (filter(obstacles, comparsionRow)) {
      enemyPosition.push(
        new Alien(id, initialColumnEnemie, initialRownEnemie, 7, 7)
      );
      id++;
    }

    initialRow += 39;
    initialRownEnemie += 39;
    i++;

    if (i % 15 === 0) {
      initialColumn += 39;
      initialColumnEnemie += 39;
      initialRow = 6;
      initialRownEnemie = 22;
    }
  }

  return enemyPosition;
}

// excludes from array the positions taken by the blocks
function filter(arr1, targetObject) {
  const isObjectInArray = arr1.some(
    (obj) => obj.x === targetObject.x && obj.y === targetObject.y
  );

  if (isObjectInArray) return false;
  return true;
}

// const jsonArrayAsString = JSON.stringify(arayTest, null, 2); // 2 spaces for
// fs.writeFile('Output.txt', jsonArrayAsString, (err) => {
//   // In case of a error throw err.
//   if (err) throw err;
// });

export { enemiePosition };
