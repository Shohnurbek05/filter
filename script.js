const input = document.querySelector('.form-control');
const lists = document.querySelectorAll('.list-group-item');

input.addEventListener("input", () => {
    const inputValue = input.value.toLowerCase();

// 1 - USUL
    lists.forEach((elem) => {
        elementValue = elem.textContent.toLowerCase();
        if (!elementValue.includes(inputValue)) {
            elem.classList.add("hide");
        } else {
            elem.classList.remove("hide");
        }
    });

// 2 - USUL
    // lists.forEach((elem) => {
    //     elementValue = elem.textContent.toLowerCase();
    //     if (!elementValue.startsWith(inputValue)) {
    //         elem.classList.add("hide");
    //     } else {
    //         elem.classList.remove("hide");
    //     }
    // });

// 3 - USUL
    // lists.forEach((elem) => {
    //     elementValue = elem.textContent.toLowerCase();
    //     if (!elementValue.endsWith(inputValue)) {
    //         elem.classList.add("hide");
    //     } else {
    //         elem.classList.remove("hide");
    //     }
    // });

// 4 - USUL
    // lists.forEach((elem) => {
    //     elementValue = elem.textContent.toLowerCase();
    //     if (elementValue.indexOf(inputValue, -1)) {
    //         elem.classList.add("hide");
    //     } else {
    //         elem.classList.remove("hide");
    //     }
    // });

// 5 - USUL
    // lists.forEach((elem) => {
    //     elementValue = elem.textContent.toLowerCase();
    //     if (elementValue.indexOf(inputValue)) {
    //         elem.classList.add("hide");
    //     } else {
    //         elem.classList.remove("hide");
    //     }
    // });

// 6 - USUL
    // lists.forEach((elem) => {
    //     elementValue = elem.textContent.toLowerCase();
    //     if (!elementValue.match(inputValue)) {
    //         elem.classList.add("hide");
    //     } else {
    //         elem.classList.remove("hide");
    //     }
    // });

})