const formInput = document.querySelector("form input");
const button = document.querySelector("form button");


button.onclick = () => {
  if (formInput.value === "") {

  } else {
    sessionStorage.setItem("searchTerm", formInput.value)
    window.location = "results.html"
  }
}
button.addEventListener("keyup", function(event) {

});


document.onkeyup = (e) => {
  // console.log(e.keyCode)

  if (e.keyCode === 13) {
    e.preventDefault();
    if (formInput.value === "") {

    } else {
      sessionStorage.setItem("searchTerm", formInput.value)
      window.location = "results.html"
    }
  }
}

document.querySelector("form").onkeyup = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    if (formInput.value === "") {

    } else {
      sessionStorage.setItem("searchTerm", formInput.value)
      window.location = "results.html"
    }
  }
}