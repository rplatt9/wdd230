const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('div.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Birthdate: ${prophet.birthdate} <br/>
                    Birth Place: ${prophet.birthplace}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');

    if (prophet.order == 1) {
        portrait.setAttribute(
          "alt",
          `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
        );
      } else if (prophet.order == 2) {
        portrait.setAttribute(
          "alt",
          `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
        );
      } else if (prophet.order == 3) {
        portrait.setAttribute(
          "alt",
          `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
        );
      } else {
        portrait.setAttribute(
          "alt",
          `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
        );
      }
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }


  