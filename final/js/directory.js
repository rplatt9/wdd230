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
    const business = jsonObject["business"];
    business.forEach(displayBusiness);
  });

function displayBusiness(business) {
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
  let p3 = document.createElement("p");
  p3.setAttribute("class", "info");

  h2.textContent = `${business.name}`;
  p.innerHTML = `${business.address}</br>${business.city}, ${business.state} ${business.zip}`;
  p1.innerHTML = `${business.phone}`;
  p2.innerHTML = `<a href=${business.website} target="_blank" rel="noopener noreferrer">Temple Website</a>`;
  p3.innerHTML = `Visit the temple website to learn more about services offered and the ordinance schedule`

  // Build the image attributes
  logo.setAttribute("src", business.imageurl);
  logo.setAttribute("alt", `logo of ${business.name}}`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("class", "dilogo");

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p1);
  card.appendChild(p3);
  card.appendChild(p2);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}