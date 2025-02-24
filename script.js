let imgs_folder = "./images/";

let carrousel_img = document.querySelector("#carrousel_img");
let carrousel_back = document.querySelector("#carrousel_back");
let carrousel_next = document.querySelector("#carrousel_next");
let showName = document.querySelector("#showName");

let tvshows = [
    {
        name : "Suits", 
        file : "suits.jpg"
    },
    {
        name: "Friends",
        file: "friends.jpg"
    },
    {
        name: "How To Get Away With Murder",
        file: "htgawm.jpg"
    },
    {
        name: "Grey's Anatomy",
        file: "greysAnatomy.jpg"
    },
    {
        name : "Prison Break", 
        file : "prisonBreak.jpg"
    }
]

let index_imgs = 0;

carrousel_img.src = imgs_folder + tvshows[index_imgs].file;
showName.innerText = tvshows[index_imgs].name;

let checker = () => {
    if (index_imgs == 0) {
        carrousel_back.disabled = true;
    } else if (index_imgs > 0 && index_imgs < tvshows.length - 1) {
        carrousel_back.disabled = false;
        carrousel_next.disabled = false;
    } else if (index_imgs == tvshows.length - 1) {
        carrousel_next.disabled = true;
    }
    return;
}


carrousel_next.addEventListener('click', () => {
    index_imgs++;
    carrousel_img.setAttribute('src', imgs_folder + tvshows[index_imgs].file);
    showName.innerText = tvshows[index_imgs].name;
    checker()
})

carrousel_back.addEventListener('click', () => {
    index_imgs--;
    carrousel_img.src = imgs_folder + tvshows[index_imgs].file;
    showName.innerText = tvshows[index_imgs].name;

    checker()
})