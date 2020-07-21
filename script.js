let toggle = document.getElementById("switch");
let year = document.querySelectorAll(".year");
let month = document.querySelectorAll(".month");

toggle.addEventListener("click", function() {
    if (this.checked) {
        month.forEach(element => {
            element.style.display = "block";
        });
        year.forEach(element => {
            element.style.display = "none";
        });
    }
    else {
        month.forEach(element =>{
            element.style.display = "none";
        });
        year.forEach(element => {
            element.style.display = "block";
        });  
    }
});