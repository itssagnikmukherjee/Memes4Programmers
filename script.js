let meme = document.getElementById('meme-img');
let text = document.getElementById('meme-text');
let button = document.getElementById('btn');

// The API

let url = "https://meme-api.herokuapp.com/gimme/ProgrammerHumor";

const newMeme = () => {
    fetch(url).then(resp => resp.json()).then(data => {
        console.log(data);
        let meme_Image = new Image();
        meme_Image.onload = () =>{
            meme.src = data.url;
            text.innerHTML = data.title;
        }
        meme_Image.src = data.url;
    });
};

// Toggle Menu

let menu = document.querySelector('.sharing-opts');
menu.style.display = 'none';
const toggleMenu = () => {
if(menu.style.display == 'none'){
    menu.style.display = 'block';
}
else if(menu.style.display == 'block'){
menu.style.display = 'none';
}
};