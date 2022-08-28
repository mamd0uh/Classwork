// Task 1.0

let mainEl = document.querySelector('main')

// Task 1.1

mainEl.style.backgroundColor='var(--main-bg)'

// Task 1.2

mainEl.innerHTML='<h1>SEI Rocks!</h1>'

// Task 1.3

mainEl.setAttribute('class','flex-ctr')

// Task 2.0

let topMenuEl = document.getElementById('top-menu')

// Task 2.1

topMenuEl.style.height = "100%"

// Task 2.2 

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3

topMenuEl.setAttribute("class", "flex-around")

// Task 3.0

// Task 5.0 - updated

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  // Task 3.1 

  for (let link of menuLinks) {
    let aEle = document.createElement('a')
    aEle.setAttribute('href', link.href)
    aEle.innerHTML=link.text
    topMenuEl.appendChild(aEle)
  }

  // Task 4.0

  let subMenuEl = document.getElementById('sub-menu')

  // Task 4.1

  subMenuEl.style.height = "100%"

  //Task 4.2

  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

  //Task 4.3

  subMenuEl.setAttribute("class", "flex-around")

  //Task 4.4

  subMenuEl.style.position = "absolute"

  //Task 4.5

  subMenuEl.style.top = "0"

  // Task 5.1

var topMenuLinks = topMenuEl.querySelectorAll('a')
console.log(topMenuLinks)

var showingSubMenu = false; 

  // Task 5.2

topMenuEl.addEventListener("click", (event) => {

  event.preventDefault();
  if (event.target.tagName !== "A") {
    return
  }

  console.log(event.target.textContent)
  
  //Task 5.3

  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  //Task 5.4
  for (let i = 0; i < topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove('active');
  }
  
  //Task 5.5

  event.target.classList.add('active')

  //Task 5.6

  var anchorText = event.target.textContent
  var link = menuLinks.find(link => link.text === anchorText)
  if (link.subLinks) {
      showingSubMenu = true
  }

  //Task 5.7

  if (showingSubMenu) {
    buildSubMenu(link.subLinks)
    subMenuEl.style.top = "100%"
  } else {
    subMenuEl.style.top = "0"
  }

  //Task 6.4
  if (event.target.textContent.toLowerCase() === "about") {
    mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  }

});

  // Task 5.8

function buildSubMenu (subLinks) {
  subMenuEl.innerHTML= "";

  for (let subLink of subLinks) {
    let aEle = document.createElement('a')
    aEle.setAttribute('href', subLink.href)
    aEle.innerHTML=subLink.text
    subMenuEl.appendChild(aEle)
  }

}

  // Task 6.0

subMenuEl.addEventListener("click", (event) => {

  event.preventDefault();
  if (event.target.tagName !== "A") {
    return
  }
  console.log(event.target)

  // Task 6.1

  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // Task 6.2

  for (let i = 0; i < topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove('active');
  }

  // Task 6.3
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
})
