// Deliverables

//✅ See all ramen images in the div with the id of ramen-menu.
    //✅ When the page loads, request the data from the server to get all the ramen objects.
    //✅ Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

// Create a new ramen after submitting the new-ramen form.
    // The new ramen should be added to the#ramen-menu div.
    // The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.



// Assignments



const baseURL = 'http://localhost:3000';
const baseURLRamens = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById("ramen-menu")
// console.log(ramenMenu)


// DOMContentLoaded



// Fetches

function getRamens() {
    fetch (baseURLRamens)
    .then(resp => resp.json())
    .then(renderAllRamens)
}




// Rendering

function renderAllRamens(ramenArr) {
    ramenArr.forEach(renderOneRamen)
    // console.log("ramen array", ramenArr)
}


function renderOneRamen(ramenObj) {
    const ramenDiv = document.createElement("img");
    // console.log(ramenObj)
    ramenDiv.src = ramenObj.image;
    ramenMenu.append(ramenDiv)
}



// Event Handlers



// Initializers

const init = () => {
    getRamens()
}

document.addEventListener("DOMContentLoaded", init)