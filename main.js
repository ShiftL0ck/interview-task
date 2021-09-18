function openTile(tileName) {
    let elements = document.querySelectorAll("body > *");
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.add("display-none")
    }
    document.querySelector('.order-form').style.display = "flex";
    document.querySelector('.order-form').classList.add("pop-up");
    document.querySelector('.order-form__good-name').value = `${tileName}`;
}

function closeTile() {
    let elements = document.querySelectorAll("body > *");
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove("display-none")
    }
    document.querySelector('.order-form').style.display = "none";
    document.querySelector('.order-form').classList.remove("pop-up");
}

