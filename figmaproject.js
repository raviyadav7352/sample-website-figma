let circleparent = document.getElementById("page2circle");

let circle = document.getElementsByClassName("circle")

circleparent.addEventListener("mouseover", function (event) {
    let element = event.target;
    let circledot = element.getAttribute("purpose");
    if (circledot == "circle") {
        let circleid = element.getAttribute("id");
        for (let i = 0; i < circle.length; i++) {
            // circle[i].style.backgroundColor ="white";
            circle[i].classList.remove("active");
            if (circleid == i) {
                circle[i].classList.add("active");
            }
        }
    }
})