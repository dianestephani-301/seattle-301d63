// CHALLENGE 4

// You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

// Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

// Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.

// Do not use split for this function.
// ------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};


const listFoods = (recipe) => {
  let result = [];
  
  recipe.ingredients.forEach(ingredient => {
    // cut off the numbers
    let firstIndex = ingredient.indexOf(' ');
    let secondStr = ingredient.slice(firstIndex + 1);

    // cut off the units
    let secondIdx = secondStr.indexOf(' ');
    let finalStr = secondStr.slice(secondIdx + 1);

    result.push(finalStr);
  })
  return result;
};