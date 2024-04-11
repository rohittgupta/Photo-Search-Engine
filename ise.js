const accesskey = "c5GnHAjTY6YIgn_wmJKi5FmJtcSR7BGLXhFmWmoIhck";

const searchform = document.getElementById("Search-form");
const searchBox = document.getElementById("search-box");
const sresult = document.getElementById("result");
const showmore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchimage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accesskey}&per_page=${12}`;

    const response = await fetch (url);
    const data = await response.json();

    const results = data.results;

    if(page === 1){
        sresult.innerHTML = "";
    }

//displaying the image using this function 
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        sresult.appendChild(imageLink);
    })
    showmore.style.display = "block";
}

searchform.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchimage();
})

showmore.addEventListener("click",()=>{
    page++;
    searchimage();
});














