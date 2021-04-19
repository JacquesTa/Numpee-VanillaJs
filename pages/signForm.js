const switchers = [...document.querySelectorAll(".switcher")];
const loginButton = document.querySelectorAll(".btn-login");

switchers.forEach((item) => {
  item.addEventListener("click", function () {
    switchers.forEach((item) =>
      item.parentElement.classList.remove("is-active")
    );
    this.parentElement.classList.add("is-active");
  });
});

// loginButton.addEventListener("submit", function (e) {
//   e.preventDefault();
//   window.location("LandingPage.html");
// });

//////////
