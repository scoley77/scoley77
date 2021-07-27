window.onload = function() {
  document.getElementById('job1').style.opacity = 1;
  document.getElementById('job2').style.opacity = 1;
  document.getElementById('job3').style.opacity = 1;
}

function getRandomBoof() {
  var boofs = [
    'bork!',
    'borfbork!',
    'bark!',
    'boof.',
    'boof bark!',
    'bark bark!',
    'borf borpfborf.',
    'bork bork!',
    'barkbark bark!'
  ];

  return boofs[Math.floor(Math.random() * boofs.length)];
  
};

var bisk = document.getElementById('Biscuit');
var barkClick = function() {
  var speak = document.getElementById('bark');
  speak.style.top = Math.floor(Math.random() * 400) + 690 + 'px';
  speak.style.left = Math.floor(Math.random() * 600) + 480 + 'px';
  speak.textContent = getRandomBoof();
};
bisk.addEventListener('click', barkClick)

var msg = document.getElementById('sub-message');
var subBtn = document.getElementById('con-sub');
function contactMessage() {
  
  subBtn.style.opacity = 0;
  msg.style.opacity = 1;
};
