let nameInfo = prompt('Lütfen adınızı giriniz');
let clockInfo = new Date().toLocaleString('tr-TR');

let textName = document.querySelector('#myName');
let textClok = document.querySelector('#myClock');

textName.innerHTML = nameInfo;
textClok.innerHTML = clockInfo;
