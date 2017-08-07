var itemContainer = document.querySelector(".bodyContainer");

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jillianpichocki");
req.addEventListener("load", reqListener);
req.send();

function reqListener() {
    let data = JSON.parse(this.responseText);

    // let li = "";
    // let newObject = data.results;

    // for (let i = 0; i < newArray.length; i += 1) {

    itemContainer.innerHTML =
        `<div class="mainTitle">
        <h1>${data.name}</h1>
        </div>

     <div class="container">
            <div class="content">
            <h2>The Basics</h2>
            <p><span class="greenFont">Name:</span> ${data.name} </p>
            <p><span class="greenFont">GitHub URL: <a href=${data.html_url}>${data.login}</a></p>
            <p><span class="greenFont">Email: </span>${data.email}</p>
            <p><span class="greenFont">Company:</span> ${data.company} </p>
            <p><span class="greenFont">Website:</span> <a href=${data.blog}>${data.blog}</a></p>
            </div>

            <div class="content-2">
            <h2>The Story</h2>
            <p class="vertical-line">${data.bio}</p>
            </div>

            <div class="content-3">
            <img src=${data.avatar_url}>
            </div>
    </div> 
        `

    return itemContainer;
}


