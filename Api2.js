const baseURL ="https://calendarific.com/api/v2/holidays";
const key = "23a3878ec0db3c3bdede20150d8e532b927d7d02";
let url;

const searchTerm = document.querySelector("#search");
const searchForm = document.querySelector("form");
const holidayYear = document.querySelector(".holidayYear");
const countryOfHoliday = document.querySelector(".countryOfHoliday")

const section = document.querySelector("section");
searchForm.addEventListener("submit", fetchResults);

function fetchResults(event) {
    event.preventDefault ();
    console.log(searchTerm);
    url = `${baseURL}?api_key=${key}&country=${countryOfHoliday.value}&year=${holidayYear.value}`;
    //console.log(url);
    fetch (url, {
        method: "GET",
    })
    .then((results) => {
        return results.json();
    })
    .then((json) => {
        displayResults(json);
    });
}

function displayResults(results) {
    let holidayResults = results.response.holidays;
    for (i = 0; i <= 20; i++) {
        console.log(holidayResults[i]);
        let festival = holidayResults[i];
        section.style.display = "block";

        let searchResults = document.createElement("div");
        let name = document.createElement("h3");
        let date = document.createElement("h5")
        let type = document.createElement("h6");
        let locations = document.createElement("h6");
        let description = document.createElement("p");
        let card = document.createElement("div")



        name.textContent = festival.name;
        date.innerHTML = `<h5> Celebrated on: ${festival.date.iso}</h5>`;
        type.innerHTML = `<h6> Type of Holiday: ${festival.type}</h6>`;
        locations.innerHTML = `<h6> Celebrations Take Place in: ${festival.locations}</h6>`;
        description.textContent = festival.description;

        // card.setAttribute("class", "card");

        searchResults.appendChild(name);
        searchResults.appendChild(date);
        searchResults.appendChild(type);
        searchResults.appendChild(locations);
        searchResults.appendChild(description);
        section.appendChild(searchResults);

    }
}

