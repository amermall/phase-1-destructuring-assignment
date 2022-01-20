// Strings
const farmAnimals = 'cow horse sheep pig chicken';
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const arr2 = [...farmAnimals.split(' ')];
const [moo, neigh, baa, oink, cluck] = arr2;
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const arr3 = [...farmAnimals.split(' ')];
const [bessie, ,dolly, babe, little] = arr3;
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const arr4 = [...farmAnimals.split(' ')];
const [blackAndWhite, ,black, pink, ,] = arr4;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// Arrays
// 4. Use destructuring to assign appropriate variables using the color names.
const arr5 = [...colors];
const [red, orange, yellow, green, blue, indigo, violet] = arr5;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const arr6 = [...colors];
const [r, o, y, g, b, ,v] = arr6;
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg.
const arr7 = [...colors];
const [, , , , , indg,] = arr6;


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const muppetObj = {
  ...muppet
};
const { muppetName, color, song, job, partner } = muppetObj;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const nestedMuppet2 = {
  ...nestedMuppet, 
  song2: 'Moving Right Along',
  song4: 'I Hope That Something Better Comes Along',
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { song2, song4, nestedJob, nestedPartner} = nestedMuppet2;