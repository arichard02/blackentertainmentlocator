let resturantLink = document.querySelector("#restaurant-link");
let eventLink = document.querySelector("#event-link");
let coffeeShopLink = document.querySelector("#coffeShop-link");
let healthBeautyLink = document.querySelector("#healthBeauty-link");
let nightLifeLink = document.querySelector("#nightlife-link");
let museumsLink = document.querySelector("#museums-link");

// Go to the DOM and
document.querySelector("#location").addEventListener("change", (e) => {
  console.log(e.target.value);
  let city = e.target.value;

  setCategoryLinks(city);
});

// Created new function to loop through all the cities
function setCategoryLinks(city) {
  let newResturantLink = `results/index.html?city=${city}&category=restaurant`;
  resturantLink.href = newResturantLink;

  let newEventLink = `results/index.html?city=${city}&category=events`;
  eventLink.href = newEventLink;

  let newCoffeeShopLink = `results/index.html?city=${city}&category=coffeeShop`;
  coffeeShopLink.href = newCoffeeShopLink;

  let newHealthBeautyLink = `results/index.html?city=${city}&category=healthBeauty`;
  healthBeautyLink.href = newHealthBeautyLink;

  let newnightLifeLink = `results/index.html?city=${city}&category=nightlife`;
  nightLifeLink.href = newnightLifeLink;

  let newMuseumsLink = `results/index.html?city=${city}&category=museums`;
  museumsLink.href = newMuseumsLink;
}

// When the page first loads go find the location select menu
// whatever is currently selected set all links to that location
setCategoryLinks(document.querySelector("#location").value);
