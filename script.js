const mainElement = document.getElementsByTagName('main')[0];

let recoverLocalStoreObject = JSON.parse(localStorage.getItem('options'));
if (recoverLocalStoreObject !== null) {
    document.body.style.backgroundColor = recoverLocalStoreObject.bgColor;
    mainElement.style.color = recoverLocalStoreObject.fontColor;
    mainElement.style.fontSize = recoverLocalStoreObject.fontSize;
    mainElement.style.lineHeight = recoverLocalStoreObject.lineHeight;
    mainElement.style.fontFamily = recoverLocalStoreObject.fontType;
};

document.body.addEventListener('click', () => {
    let localStorageObject = {
        bgColor: document.body.style.backgroundColor,
        fontColor: mainElement.style.color,
        fontSize: mainElement.style.fontSize,
        lineHeight: mainElement.style.lineHeight,
        fontType: mainElement.style.fontFamily,
    };

    localStorage.setItem('options', JSON.stringify(localStorageObject));
});

const bgColorButtons = document.querySelectorAll('#background-color button');
for (color of bgColorButtons){
    color.addEventListener('click', (event) => {
        document.body.style.backgroundColor = event.target.innerText;
    });
};

const fontColorButtons = document.querySelectorAll('#font-color button');
for (color of fontColorButtons){
    color.addEventListener('click', (event) => {
        mainElement.style.color = event.target.innerText;
    });
};

const fontSizeButtons = document.querySelectorAll('#font-size button');
for (size of fontSizeButtons){
    size.addEventListener('click', (event) => {
        mainElement.style.fontSize = event.target.innerText;
    });
};

const lineHeightButtons = document.querySelectorAll('#line-height button');
for (height of lineHeightButtons){
    height.addEventListener('click', (event) => {
        mainElement.style.lineHeight = event.target.innerText;
    });
};

const fontTypeButtons = document.querySelectorAll('#font-family button');
for (font of fontTypeButtons){
    font.addEventListener('click', (event) => {
        mainElement.style.fontFamily = event.target.innerText;
    });
};




