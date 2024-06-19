//array- Variables that hold multiple values(can be any data type)
//const array-name =['item 1','item 2'];
const cars = ["bmw", "volvo", "jeep"];
console.log(cars);

//1.filter method- a filter array creates a new array filled with elements  that pass a test provided by a function
//lets say we want to get things in this list that are less than or equal to a hundred dollars//
// a filter array creates a new array filled with elements  that pass a test provided by a function
const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Book", price: 200 },
];
const filteredItems = items.filter((item) => {
  return item.price <= 100;
  //this states that all items less than 100$ are going to be in our new filter array
});

console.log(filteredItems);
// real life example would be on a blog page, a tagging system that allow users to filter content and view desired posts

function filterPosts() {
  activePosts = posts;
  tagFilter.forEach((tag) => {
    activePosts = activePosts.filter((post) => tagDict[tag].includes(post));
  });
}
// This line  of code do much effort by going through each selected tag and
//call filter on active posts to remove any post that does not contain that tag

//reference:https://shaile.sh/codes/posts/2021/01/14/javascript-filter-in-real-life/

// 2.Map array - allows you to take over one array and convert it into a new array making items in the array look slightly new
// converting prices to another currency
const pricesInUSD = [10, 20, 30, 40, 50];
const conversionRate = 0.85; // USD to EUR

// Use map to convert prices to EUR
const pricesInEUR = pricesInUSD.map((price) => price * conversionRate);

console.log(pricesInEUR);
// Output: [8.5, 17, 25.5, 34, 42.5]
