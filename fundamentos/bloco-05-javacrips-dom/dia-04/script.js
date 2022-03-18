const loreText = document.getElementById('text');
let bgBtnWhite = document.getElementsByTagName('button')[0];
let bgBtnGray = document.getElementsByTagName('button')[1];
let bgBtnPink = document.getElementsByTagName('button')[2];
let txtBtnBlack = document.getElementsByTagName('button')[3];
let txtBtnWhite = document.getElementsByTagName('button')[4];
let txtBtnBlue = document.getElementsByTagName('button')[5];
let fntBtnSmall = document.getElementsByTagName('button')[6];
let fntBtnMedium = document.getElementsByTagName('button')[7];
let fntBtnLarge = document.getElementsByTagName('button')[8];
let spaceBtnSmall = document.getElementsByTagName('button')[9];
let spaceBtnMedium = document.getElementsByTagName('button')[10];
let spaceBtnLarge = document.getElementsByTagName('button')[11];
let fontBtnArial = document.getElementsByTagName('button')[12];
let fontBtnTnr = document.getElementsByTagName('button')[13];
let fontBtnCour = document.getElementsByTagName('button')[14];

function bgColorG() {
    document.body.style.backgroundColor = bgBtnGray.innerText;
    localStorage.setItem('Background Color', bgBtnGray.innerText);
}
bgBtnGray.addEventListener('click', bgColorG);
function bgColorW() {
    document.body.style.backgroundColor = bgBtnWhite.innerText;
    localStorage.setItem('Background Color', bgBtnWhite.innerText);
}
bgBtnWhite.addEventListener('click', bgColorW);
function bgColorP() {
    document.body.style.backgroundColor = '#F283B6';
    localStorage.setItem('Background Color', '#F283B6');
}
bgBtnPink.addEventListener('click', bgColorP);
function textColorB() {
    loreText.style.color = txtBtnBlack.innerText;
    localStorage.setItem('Text Color', txtBtnBlack.innerText);
}
txtBtnBlack.addEventListener('click', textColorB);
function textColorW() {
    loreText.style.color = txtBtnWhite.innerText;
    localStorage.setItem('Text Color', txtBtnWhite.innerText);
}
txtBtnWhite.addEventListener('click', textColorW);
function textColorBS() {
    loreText.style.color = '#15616D';
    localStorage.setItem('Text Color', '#15616D');
}
txtBtnBlue.addEventListener('click', textColorBS);
function textSizeS() {
    loreText.style.fontSize = 'small';
    localStorage.setItem('Font Size', 'small');

}
fntBtnSmall.addEventListener('click', textSizeS);
function textSizeM() {
    loreText.style.fontSize = 'medium';
    localStorage.setItem('Font Size', 'medium');
}
fntBtnMedium.addEventListener('click', textSizeM);
function textSizeL() {
    loreText.style.fontSize = 'large';
    localStorage.setItem('Font Size', 'large');
}
fntBtnLarge.addEventListener('click', textSizeL);
function lineSpacingS() {
    loreText.style.lineHeight = '1';
    localStorage.setItem('Line Height', '1');
}
spaceBtnSmall.addEventListener('click', lineSpacingS);
function lineSpacingM() {
    loreText.style.lineHeight = '1.5';
    localStorage.setItem('Line Height', '1.5');
}
spaceBtnMedium.addEventListener('click', lineSpacingM);
function lineSpacingL() {
    loreText.style.lineHeight = '2';
    localStorage.setItem('Line Height', '2');
}
spaceBtnLarge.addEventListener('click', lineSpacingL);
function fontFamilyA() {
    loreText.style.fontFamily = 'Arial';
    localStorage.setItem('Font Family', 'Arial');
}
fontBtnArial.addEventListener('click', fontFamilyA);

function fontFamilyTnr() {
    loreText.style.fontFamily = 'Times New Roman';
    localStorage.setItem('Font Family', 'Times New Roman');
}
fontBtnTnr.addEventListener('click', fontFamilyTnr);

function fontFamilyC() {
    loreText.style.fontFamily = 'Courier New';
    localStorage.setItem('Font Family', 'Courier New');
}
fontBtnCour.addEventListener('click', fontFamilyC);
window.onload = function() {
    document.body.style.backgroundColor = window.localStorage.getItem('Background Color');
loreText.style.color = window.localStorage.getItem('Text Color');
loreText.style.fontSize = window.localStorage.getItem('Font Size');
loreText.style.lineHeight = window.localStorage.getItem('Line Height');
loreText.style.fontFamily = window.localStorage.getItem('Font Family');
}