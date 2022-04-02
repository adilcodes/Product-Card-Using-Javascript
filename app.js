let container = document.querySelector(".container");
let readMore = document.querySelector(".readMore");
let description = document.querySelector(".description");

function conHeight(){
    container.classList.toggle("large-con");
    description.classList.toggle("moreDescription");
    if(readMore.innerText == "Read More"){
        readMore.innerText = "Read Less";
    }else{
        readMore.innerText = "Read More"
    }
}

readMore.addEventListener("click", conHeight);