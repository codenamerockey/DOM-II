// Your code goes here

//1.MouseOver
const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);

logoHeading.addEventListener('mouseover', () => {
  logoHeading.style.transform = 'rotate(20deg)';
});

//2.Dbl Click

const headerImg = document.querySelector('.intro img');

headerImg.addEventListener('dblclick', () => {
  headerImg.classList.toggle('large');
});

//3.Copy event

const copy = document.querySelector('body > div > header > p');
copy.addEventListener('copy', () => {
  copy.textContent = 'HEY!!! This content is Copyright! Not copy/pasting.';
});

//4.OffSet X and Y

const body = document.querySelector('body');

body.addEventListener('mousemove', e => {
  body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 80)`;
});

//5.click
const button = document.querySelector(
  'body > div > section.content-pick > div:nth-child(1) > div'
);

button.addEventListener('click', () => {
  document.querySelector(
    'body > div > section.content-pick > div:nth-child(1) > h4'
  ).style.display = 'none';
});

//6.Mouseout
const secondButton = document.querySelector(
  'body > div > section.content-pick > div:nth-child(2) > div'
);

secondButton.addEventListener('mouseout', () => {
  secondButton.style.backgroundColor = 'purple';
});

//7.MouseDown
const toggle = document.querySelector(
  'body > div > section:nth-child(2) > div.text-content > p:nth-child(2)'
);
toggle.addEventListener('mousedown', () => {
  toggle.classList.toggle('mouseDown');
});

//8.Mouse up

const letsGoImg = document.querySelector('.img-content ');

letsGoImg.addEventListener('mouseup', () => {
  letsGoImg.style.transform = ' skew(20deg,10deg)';
});

//9.Wheel Event
const contentImg = document.querySelector('.content-destination img');

contentImg.addEventListener('wheel', e => {
  e.preventDefault();
});

//10.Select Event
const selection = document.getElementById('myText');
selection.addEventListener('select', () => {
  document.getElementById('demo').textContent =
    'Nice, I KNEW YOU WOULD GIVE IT A SHOT!';
});

//Navigation prevent Default
const navigation = document.querySelectorAll('a');

navigation.forEach(item => {
  item.addEventListener('click', e => {
    //prevents the page from refreshing if the link is pressed on the same page it is on.
    e.preventDefault();
  });
});

//Nest two similar events somewhere in the site and prevent the event propagation properly

const bottomContent = document.querySelector('.content-pick');
bottomContent.addEventListener('click', () => {
  stopPropagation(); //Stops this click event from firing when I use the click event from the button just below the paragraph.
  document.querySelector(
    'section.content-pick > div:nth-child(1) > p'
  ).style.lineHeight = '10rem';
});
console.log(bottomContent);
