var link1 = document.getElementById('1');
var link2 = document.getElementById('2');
var link3 = document.getElementById('3');
var link4 = document.getElementById('4');
var link5 = document.getElementById('5');
var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');
var image4 = document.getElementById('img4');
var image5 = document.getElementById('img5');

function port1() {
  image1.style.zIndex = '10';
  image2.style.zIndex = '4';
  image3.style.zIndex = '3';
  image4.style.zIndex = '2';
  image5.style.zIndex = '1';
};

function port2() {
  image2.style.zIndex = '10';
  image1.style.zIndex = '4';
  image3.style.zIndex = '3';
  image4.style.zIndex = '2';
  image5.style.zIndex = '1';
};

function port3() {
  image3.style.zIndex = '10';
  image2.style.zIndex = '4';
  image1.style.zIndex = '3';
  image4.style.zIndex = '2';
  image5.style.zIndex = '1';
};

function port4() {
  image4.style.zIndex = '10';
  image2.style.zIndex = '4';
  image3.style.zIndex = '3';
  image1.style.zIndex = '2';
  image5.style.zIndex = '1';
};

function port5() {
  image5.style.zIndex = '10';
  image2.style.zIndex = '4';
  image3.style.zIndex = '3';
  image4.style.zIndex = '2';
  image1.style.zIndex = '1';
};
