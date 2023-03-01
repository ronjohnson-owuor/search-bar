//   get the input box
let searchBox = document.getElementById("searchBox");
let searchBTN= document.getElementById("searchBTN");
let searchInput = document.getElementById("search");

searchInput.style.display="none";
searchBox.style.padding="10px"


// when the search is clicked
searchBTN.addEventListener("click",()=>{
    searchInput.style.display="block";
    searchBox.style.padding="4px";
    searchBox.style.width="400px" ;
    searchBox.style.height="40px" ;
})


// when the form is blur
searchInput.addEventListener("blur",()=>{
    searchInput.style.display ="none";
    searchBox.style.width="30px" ;
    searchBox.style.height="30px" ;
})