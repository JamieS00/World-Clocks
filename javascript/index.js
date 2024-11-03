//LOS ANGELES
let updateTime = () => {
  let laElement = document.querySelector("#los-angeles");

  if (laElement) {
    //date & time element : target the classes date and time withing the LA div
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");

    let LAdateFormat = moment.tz("America/Los_Angeles").format("MMMM Do YYYY");
    laDateElement.innerHTML = LAdateFormat;

    let LAtimeFormat = moment
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]");
    laTimeElement.innerHTML = LAtimeFormat;
  }

  //SYDNEY
  let sydneyElement = document.querySelector("#sydney");

  if (sydneyElement) {
    //date & time element : target the class date and time in the sydney div
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");

    let sydneydateFormat = moment.tz("Australia/Sydney").format("MMMM Do YYYY");
    sydneyDateElement.innerHTML = sydneydateFormat;

    let sydneytimeFormat = moment
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]A[</small>]");
    sydneyTimeElement.innerHTML = sydneytimeFormat;
  }
};

setInterval(updateTime, 1000);

let updateCity = (event) => {
  let cityTimeZone = event.target.value;
  //   console.log(cityTimeZone); //testing

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1]; //replces "_" w/ a space, then split into an array to get 2nd index[1]
  let cityTime = moment.tz(cityTimeZone).format("h:mm:ss");
  let amPm = moment.tz(cityTimeZone).format("A");
  let cityDate = moment.tz(cityTimeZone).format("MMMM Do YYYY");

  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime} <small>${amPm}</small></div>
  </div>
  `;
};

let citySelectElement = document.querySelector("#select-city");
//when a user select city call updateCity func
citySelectElement.addEventListener("change", updateCity);

// setInterval(updateCity, 1000);
