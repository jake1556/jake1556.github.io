const displayedImg = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// image file names and alt text
const pics = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
  'pic1.jpg': 'San Fran',
  'pic2.jpg': 'Joggy Energy Drink',
  'pic3.jpg': 'Palisades-Tahoe',
  'pic4.jpg': 'Joggy Box',
  'pic5.jpg': 'Copper Mnt.'
};

// loop through each image and add to the thumbnail bar
for (let i = 0; i < pics.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = 'images/' + pics[i];
  newImg.alt = alts[pics[i]];
  thumbBar.appendChild(newImg);

  // change main image when thumbnail is clicked
  newImg.addEventListener('click', function () {
    displayedImg.src = 'images/' + pics[i];
    displayedImg.alt = alts[pics[i]];
  });
}

// toggle darken/lighten effect
btn.addEventListener('click', function () {
  const current = btn.className;
  if (current === 'dark') {
    btn.className = 'light';
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.className = 'dark';
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
