console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


let basket = [];
let bag = [1, 2, 3, 4];
let cart = ['Bread', 'Eggs'];



function addItem(item) {
        basket.push(item);
        return true;
    }

addItem('Apple');
addItem('Bananas');
addItem('Kale');
addItem('Spinach');
addItem('Eggs');
addItem('Bread');
addItem('Kiwi');

console.log(basket);

  //- Create a function called `listItems`. It should:
  //- loop over the items in the `basket` array
  //- console.log each individual item on a new line

  function listItems(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
  }

listItems(basket);
listItems(bag);  
listItems(cart);

//- Create a function called `empty`. It should:
//- reset the `basket` to an empty array

/*function empty(array){
    array.splice(0, array.length)
}
empty(basket);
console.log(basket);*/


//__Using functions in other functions!__

//1. Add a global `const` named `maxItems` and set it to 5.

//2. Create a function called isFull(). It should:
  //- return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)


// The code seems to console out correctly, but does not seem to "pass the test."
const maxItems = 5;

function isFull(array) {
    if (array.length >= maxItems) {
        return true;
    } else {
        return false;
    }
}
console.log(isFull(basket));
console.log(isFull(bag));
console.log(isFull(cart));

// 3. Update the required `addItem` function to:
// - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
// - If an item was added to the array, return `true`
// - If there was no room and the item could not be added return `false`


function updatedAddItem(item, array) {
    if (isFull(array) === false) {
        array.push(item);
        return true; 
    } else {
        return false;
    }
}

console.log(updatedAddItem(5, bag));
console.log(bag);
console.log(updatedAddItem('Chicken', basket));
console.log(basket);




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
