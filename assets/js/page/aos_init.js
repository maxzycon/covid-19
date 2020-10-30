AOS.init();

if (localStorage.getItem("theme") == "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("theme", "dark");
  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });
  $(".mode").attr("checked", "");
} else {
  document.documentElement.setAttribute("data-theme", "light");
  localStorage.removeItem("theme");
}

$('.mode').change(function() {    
    if (this.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.removeItem("theme", "dark");
    }
 })