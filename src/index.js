// Deliverables

//✅ See all ramen images in the div with the id of ramen-menu.
    //✅ When the page loads, request the data from the server to get all the ramen objects.
    //✅ Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

//✅ Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

//✅ Create a new ramen after submitting the new-ramen form.
    //✅ The new ramen should be added to the#ramen-menu div.
    //✅ The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.



// Assignments

const baseURL = 'http://localhost:3000';
const baseURLRamens = 'http://localhost:3000/ramens';
const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");
const detailImage = document.querySelector(".detail-image");
const detailName = document.querySelector(".name");
const detailRestaurant = document.querySelector(".restaurant");
const detailRating = document.querySelector("#rating-display");
const detailComment = document.querySelector("#comment-display");
const newRamenForm = document.querySelector("#new-ramen");
// console.log(detailRating)


// Fetches

function getRamens() {
    fetch (baseURLRamens)
    .then(resp => resp.json())
    .then(renderAllRamens)
}

function getDetails(e) {
    fetch (baseURLRamens + `/${e.target.id}`)
    .then(resp => resp.json())
    .then(ramenObj => renderDetails(ramenObj))
}


// Rendering

function renderAllRamens(ramenArr) {
    ramenArr.forEach(renderOneRamen)
}

function renderOneRamen(ramenObj) {
    const ramenDiv = document.createElement("img");
    ramenDiv.src = ramenObj.image;
    ramenDiv.id = ramenObj.id;
    ramenDiv.addEventListener('click', getDetails)
    ramenMenu.append(ramenDiv)
}

function renderDetails(ramenObj) {
    detailImage.src = ramenObj.image;
    detailName.innerText = ramenObj.name;
    detailRestaurant.innerText = ramenObj.restaurant;
    detailRating.innerText = ramenObj.rating;
    detailComment.innerText = ramenObj.comment;
}


// Initializers

const init = () => {
    getRamens();

newRamenForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamenObj = {};
    newRamenObj.name = document.querySelector("#new-name").value;
    newRamenObj.restaurant = document.querySelector("#new-restaurant").value;
    newRamenObj.image = document.querySelector("#new-image").value;
    newRamenObj.rating = document.querySelector("#new-rating").value;
    newRamenObj.comment = document.querySelector("#new-comment").value;
    renderOneRamen(newRamenObj)
})    
}

document.addEventListener("DOMContentLoaded", init)