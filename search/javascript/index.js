const formInput = document.querySelector("form input");
const button = document.querySelector("form button");


button.onclick = () => {
  if (formInput.value === "") {

  } else {
    sessionStorage.setItem("searchTerm", formInput.value)
    window.location = "results.html"
  }
}