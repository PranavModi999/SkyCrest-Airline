const $ = (selector) => document.querySelector(selector);
let isUserLogin = false;

function updateSignInButton() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser == null) {
    $(".sign-button").innerHTML = "Sign-in";
    isUserLogin = false;
  } else {
    $(".sign-button").innerHTML = "Logout";
    isUserLogin = true;
  }
}

const onSignClick = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser == null) window.location.href = "profile_screen.html";
  else {
    localStorage.setItem("currentUser", null);
    SnackBar({
      message: "You are now logged out of your account!",
      dismissible: true,
      status: "red",
      position: "bc",
    });
  }

  updateSignInButton();
};

function formatDate(inputDate) {
  let date = new Date(inputDate);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear().toString();
  let formattedDate = `${day}-${month}-${year}`;
  console.log("FORMATTED DATE: " + formattedDate);
  return formattedDate;
}
const onSearchClick = () => {
  const isLoggedIn =
    JSON.parse(localStorage.getItem("currentUser")) != null ? true : false;
  if (!isLoggedIn) {
    SnackBar({
      message: "You Must log in to access search!",
      dismissible: true,
      status: "orange",
      position: "bc",
    });
  } else {
    const searchCity = $("#location-input").value.trim() ?? "";
    const searchDestination = $("#Destination-input").value.trim() ?? "";
    const searchDeparture = formatDate($("#departure").value.trim()) ?? "";
    const searchArrival = formatDate($("#arrival").value.trim()) ?? "";
    let searchFlightDetails = null;
    if (
      searchCity != "" ||
      searchDestination != "" ||
      searchDeparture != "" ||
      searchArrival != ""
    ) {
      searchFlightDetails = new Flight(
        null,
        searchDeparture,
        searchArrival,
        searchDestination,
        searchCity
      );
      console.log("inside");
    }
    console.log(
      `DETS:${searchDeparture} ${searchArrival} ${searchDestination} ${searchCity}`
    );
    localStorage.setItem("searchDetails", JSON.stringify(searchFlightDetails));
    window.location.href = "flight_schedule_screen.html";
  }
};

const onPageOptionClick = (evt) => {
  console.log("here");
  const isLoggedIn =
    JSON.parse(localStorage.getItem("currentUser")) != null ? true : false;
  if (!isLoggedIn) {
    evt.preventDefault();
    SnackBar({
      message: "You Must log in to access search!",
      dismissible: true,
      status: "orange",
      position: "bc",
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  // localStorage.setItem('currentUser', null);
  updateSignInButton();
  $(".sign-button").addEventListener("click", onSignClick);
  $("#search-button").addEventListener("click", onSearchClick);
  document
    .querySelectorAll(".page-image")
    .forEach((element) => element.addEventListener("click", onPageOptionClick));
});
