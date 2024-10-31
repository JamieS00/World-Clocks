//LOS ANGELES
let updateTime = () => {
  let laElement = document.querySelector("#los-angeles");

  //date & time element : target the classes date and time withing the LA div
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");

  let LAdateFormat = moment.tz("America/Los_Angeles").format("MMMM Do YYYY");
  laDateElement.innerHTML = LAdateFormat;

  let LAtimeFormat = moment
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>]A[</small>]");
  laTimeElement.innerHTML = LAtimeFormat;

  //SYDNEY
  let sydneyElement = document.querySelector("#sydney");

  //date & time element : target the class date and time in the sydney div
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  let sydneydateFormat = moment.tz("Australia/Sydney").format("MMMM Do YYYY");
  sydneyDateElement.innerHTML = sydneydateFormat;

  let sydneytimeFormat = moment
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>]A[</small>]");
  sydneyTimeElement.innerHTML = sydneytimeFormat;
};

setInterval(updateTime, 1000);
