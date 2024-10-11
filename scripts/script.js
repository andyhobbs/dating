window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const spinner = document.getElementById('spinner');
  
  setTimeout(() => {
    spinner.classList.remove('spinner');
    spinner.classList.add('success');
    spinner.innerHTML = '<span>100% cute</span><span class="click-text">click me</span>';
    
    spinner.addEventListener('click', () => {
      preloader.style.display = 'none';
      document.getElementById('screen1').classList.remove('hidden');
      document.getElementById('screen1').style.display = "flex";
      
      let audio = new Audio('audio/background.mp3');
      audio.play();
    });
  }, 3000);
});

const noButton = document.querySelector('#noBtn');

const moveNoButton = () => {
  var x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  var y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
}

$('a.like-button').on('click', function(e) {
  $(this).toggleClass('liked');

  setTimeout(() => {
      $(e.target).removeClass('liked')
  }, 1000)
});

noButton.addEventListener('click', moveNoButton);
noButton.addEventListener('mouseenter', moveNoButton);

document.getElementById('yesBtn').addEventListener('click', () => {
  setTimeout(() => {
      document.getElementById('screen1').style.display = "none";
      document.getElementById('screen2').style.display = "flex";
  }, 1000);
});

document.getElementById('nextScreen2').addEventListener('click', () => {
const selectedDate = document.getElementById('dateSelect').value;
const selectedTime = document.getElementById('timeSelect').value;

document.cookie = `selectedDate=${selectedDate};path=/;`;
document.cookie = `selectedTime=${selectedTime};path=/;`;

document.getElementById('screen2').style.display = "none";
document.getElementById('screen3').style.display = "flex";
});

document.getElementById('nextScreen3').addEventListener('click', () => {
  document.getElementById('screen3').style.display = "none";
  document.getElementById('screen4').style.display = "flex";
});

document.querySelectorAll(".selectable-image").forEach(function(image) {
  image.addEventListener("click", function() {
      document.querySelectorAll(".selectable-image").forEach(function(img) {
          img.classList.remove("selected");
      });
      this.classList.add("selected");
  });
});

document.getElementById('nextScreen4').addEventListener('click', () => {
  document.getElementById('screen4').style.display = "none";
  
  const selectedDate = getCookie('selectedDate');
  const selectedTime = getCookie('selectedTime');
  document.getElementById('selectedDate').textContent = selectedDate + ' ' + selectedTime;
  
  document.getElementById('screen5').style.display = "flex";
});

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
