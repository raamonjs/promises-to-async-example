// // returning a new promise
// function getJokes() {
//   const URL = 'https://api.chucknorris.io/jokes/random';
//   return new Promise((resolve, reject) => {
//     fetch(URL).then((obj) => resolve(obj.json()));
//   });
// }

getJokes().then((objData) => console.log(objData.value));

async function getJokes() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const responseData = await response.json();
  return responseData;
}

getJokes().then((objData) => console.log(objData.value));

/*
    People are mostly saying that this is
    syntactic sugar and judging from this example
    you can use either one. Haven't came across the benefits
    of using one over the other yet. Need to do more research.
*/
