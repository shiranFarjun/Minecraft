let isSelectAction = false;
let isSelectInventory = false;
let actionTools = "empty";
let backgroundAction;
let lastPic = " ";
//////////                                Create tool bar divs

let toolBar = document.querySelector('.toolBar');                                //class that already exists in html
let tools = ["pickaxe", "shovel", "axe", "change"];                           //Puts all the div inside the arr
for (let i = 0; i < tools.length; i++) {
    let tool = document.createElement('div');
    tool.classList.add("tool");
    tool.setAttribute("id", tools[i]);
    tool.addEventListener('click', getPosition);
    toolBar.appendChild(tool);
}
////////////////////////            Create card for toolBar      //////////////////////////////////                  

let imgTool = ["./img/pickaxe.png", "./img/shovel.png", "./img/axe.png", ""];
for (let i = 0; i < tools.length - 1; i++) {
    const tempDiv = document.getElementById(tools[i]);
    let tempImg = document.createElement('img');
    tempImg.src = imgTool[i];
    tempDiv.appendChild(tempImg);
    let tempDown = document.createElement('p');
    tempDown.innerHTML = tools[i];
    tempDiv.appendChild(tempDown);
};

//      /////////////////////           Get the name of action that clicked in the tool bar    /////////////////////

function getPosition(evt) {
    let path = (evt.composedPath && evt.composedPath()) || evt.path, target = evt.target;
    isSelectAction = true;
    switch (path[1].id) {
        case "pickaxe":
            actionTools = "pickaxe";
            break;
        case "shovel":
            actionTools = "shovel";
            break;
        case "axe":
            actionTools = "axe";
            break;
        case "change":
            actionTools = "change";
            evt.style.backgroundImage=url(lastPic);
            break;
    }
}
//////////////////////////////             Building the game board            //////////////////////////////////

let matrix = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2],
    [6, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 2, 2],
    [6, 6, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 6, 6, 2, 5, 2, 2, 2, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let containerGame = document.querySelector('.container-game');
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        let img = document.createElement('div');
        img.setAttribute("data-location", [row, col]);
        img.setAttribute("data-type", "tile");

        switch (matrix[row][col]) {
            case 0:
                img.setAttribute("class", "ground");
                break;
            case 1:
                img.setAttribute("class", "grass");
                break;
            case 2:
                img.setAttribute("class", "sky");
                break;
            case 3:
                img.setAttribute("class", "cloud");
                break;
            case 4:
                img.setAttribute("class", "Wood");
                break;
            case 5:
                img.setAttribute("class", "Tree-trunk");
                break;
            case 6:
                img.setAttribute("class", "rock");
                break;
        }
        containerGame.appendChild(img);
    }
}

//     Add Event Listener for all divs that they data-type = tile
let po = document.querySelectorAll('div[data-type ="tile"]');
po.forEach(el => {
    el.addEventListener('click', remove);
});


function remove(e) {
    let target = e.target || e.srcElement;
    let locationBorder = target.dataset.location;
    let claasNameLocation = target.className;
    if (isSelectAction) {
        switch (actionTools) {
            case "pickaxe":
                if (claasNameLocation === "rock") {
                    target.style.backgroundColor = (49, 11, 218);
                    target.className = "sky";
                    document.getElementsByClassName("toolBar").lastElementChild.src=target.getAttribute('src');
                    // backgroundAction.style.backgroundColor = (141, 191, 255);
                    // backgroundAction.style.filter = "opacity(50%)";

                }
                else {
                    console.log("your location is not good: ", claasNameLocation);
                    // backgroundAction.style.backgroundColor = (228, 13, 13);
                    // backgroundAction.style.filter = "opacity(50%)";
                }
                break;
            case "shovel":
                if (claasNameLocation === "ground" || claasNameLocation === "grass") {
                    target.className = "sky";
                    target.style.backgroundColor = (49, 11, 218);
                    document.getElementsByClassName("toolBar").lastElementChild.src=target.getAttribute('src');
                    // backgroundAction.style.backgroundColor = (141, 191, 255);
                    // backgroundAction.style.filter = "opacity(50%)";
                }
                else {
                    console.log("your location is not good: ", claasNameLocation);
                    // backgroundAction.style.backgroundColor = (228, 13, 13);
                    // element.style.filter = "opacity(50%)";
                }
                break;
            case "axe":
                if (claasNameLocation === "Wood" || claasNameLocation === "Tree-trunk") {
                    target.className = "sky";
                    document.getElementsByName("toolBar").lastElementChild.getElementsByName(img).src=target.getAttribute('src');
                    target.style.backgroundColor = (49, 11, 218);
                    // backgroundAction.style.backgroundColor = (141, 191, 255);
                    // backgroundAction.style.filter = "opacity(50%)";
                }
                else {
                    console.log("your location is not good: ", claasNameLocation);
                    backgroundAction.style.backgroundColor = (228, 13, 13);
                    backgroundAction.style.filter = "opacity(50%)";
                }
                break;
            case "change":
                console.log("NOT A VALID");
                break;
        }
    }
}
