const tabs = document.querySelectorAll(".tab")
const pages = document.querySelectorAll(".view-pager .page");


tabs.forEach((v, i) => {
  v.onclick = () => {
    tabs.forEach((val, idx) => {
      val.classList.remove("active")
      $(pages[idx]).fadeOut(500)

    })
    v.classList.add("active");
    $(pages[i]).fadeIn(500);
  }
})