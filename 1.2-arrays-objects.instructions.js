/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let movie = {
    nameOfMovie: 'Willow', 
    runTime: '126 minutes', 
    characters: [
        {antagonist: 'Bavmorda', age: 'Quite old', items: [{item1: 'crown'}, {item2: 'magic'}]},
        {tritagonist: 'Sorsha', age: 18, items: [{item1: 'sword'}, {item2: 'shield'}]}
    ]
    }

    console.log(movie.nameOfMovie);
    console.log(movie.runTime);
    console.log(movie.characters);
    console.log(movie.characters[0].antagonist);
    console.log(movie.characters[1].tritagonist);
    console.log(movie.characters[0].items[0].item1);
    console.log(movie.characters[1].items[1].item2);

