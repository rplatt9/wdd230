// get json file from repository
const requestURL =
  "https://rplatt9.github.io/wdd230/final/data/temple_data.json";
const cards = document.querySelector(".cards");

// assign as json file
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //uses json() method
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const temple = jsonObject["temple"];
    temple.forEach(displayTemple);
  });

function displayTemple(temple) {
  // Create elements to add to the document
  let card = document.createElement("section");
  card.setAttribute("class", "dicard");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  p.setAttribute("class", "diaddress");
  let p1 = document.createElement("p");
  p1.setAttribute("class", "diphone");
  let p2 = document.createElement("p");
  p2.setAttribute("class", "diwebpage");
  let logo = document.createElement("img");

  h2.textContent = `${temple.name}`;
  p.innerHTML = `${temple.address}</br>${temple.city}, ${temple.state} ${temple.zip}`;
  p1.innerHTML = `${temple.phone}`;
  p2.innerHTML = `${temple.website}`;

  // Build the image attributes
  logo.setAttribute("src", temple.imageurl);
  logo.setAttribute("alt", `logo of ${temple.name}}`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "dilogo");

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p1);
  card.appendChild(p2);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}