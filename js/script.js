// Menu Section
let menu = document.querySelector('.toggle-menu');
menu.addEventListener("click", () => {
  document.querySelector('header nav ul').classList.toggle('active')
})

// Change Landing Image In The Left and Right Buttons
let left = document.getElementById('left');
let right = document.getElementById('right');
let landing = document.getElementById('landing')
let index = 1;
right.addEventListener('click', () => {
  ++index;
  if (index > 3) index = 1;
  changeLiActive(index)
  landing.style.backgroundImage = `url(./images/landing${index}.png)`;
})
left.addEventListener('click', () => {
  --index;
  if (index < 1) index = 1;
  changeLiActive(index)
  landing.style.backgroundImage = `url(./images/landing${index}.png)`;
})
function changeLiActive(n){
  let bullets = document.querySelectorAll('.landing .bullets li');
  bullets.forEach(e => e.classList.remove('active'));
  bullets[n - 1].classList.add('active');
}
// Change Landing Image In The Left and Right li Buttons
let bullet = document.querySelector('.landing .bullets');
bullet.addEventListener('click', function(event){
  let target = event.target;

  switch(target.id) {
      case '1':
        changeLiActive(1)
        landing.style.backgroundImage = `url(./images/landing1.png)`;
          break;
      case '2':
        changeLiActive(2)
        landing.style.backgroundImage = `url(./images/landing2.png)`;
          break;
      case '3':
        changeLiActive(3)
        landing.style.backgroundImage = `url(./images/landing3.png)`;
          break;
  }
});

// Portfoilo Section
for (let i = 1 ; i <= 8; i++){

  let box = document.createElement('div');
  box.classList.add('box');

  let img = document.createElement('img');
  img.src = `images/shuffle-0${i}.jpg`;
  img.alt = 'Shuffle Image';

  let caption = document.createElement('div');
  caption.classList.add('caption');

  let h4 = document.createElement('h4');
  h4.innerText = 'Awesome Image';

  let p = document.createElement('p');
  p.innerText = 'Photography';

  caption.appendChild(h4);
  caption.appendChild(p);

  box.appendChild(img);
  box.appendChild(caption);

  let container = document.querySelector('.portfolio .imgs-container');
  container.appendChild(box)
}
let headersArray = ['Basic', 'Premium', 'Pro', 'Platinum'];
let price = [19, 29, 39, 49];
let features = ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'];

let pricing = document.querySelector('.pricing .container .plans');
for(let i = 0 ; i <= 3; i++){
  let plan = document.createElement('div');
  plan.classList.add('plan');
  
  let head = document.createElement('div');
  head.classList.add('head');
  let h4 = document.createElement('h4');
  h4.innerText = headersArray[i];

  let span = document.createElement('span');
  span.innerText = price[i];

  head.appendChild(h4);
  head.appendChild(span);
  plan.appendChild(head)

  let ul = document.createElement('ul');
  for (let j = 0 ; j <= 3; j++){
    let li = document.createElement('li');
    li.innerText = features[j];
    ul.appendChild(li)
  }
  plan.appendChild(ul);

  let foot = document.createElement('div');
  foot.classList.add('foot');

  let link = document.createElement('a');
  link.innerText = 'Buy Now';
  link.href = '#'
  foot.appendChild(link)
  plan.appendChild(foot)
  pricing.appendChild(plan)
}
