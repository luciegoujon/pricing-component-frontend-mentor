let toggle = document.getElementById("switch");
let year = document.getElementById("year");
let month = document.getElementById("month");

toggle.addEventListener("click", function() {
    if (this.checked) {
        month.style.display = "block";
        year.style.display = "none";
    }
    else {
        month.style.display = "none";
        year.style.display = "block";
    }
})