// Task 1.0

let mainEl = document.querySelector('main')

// Task 1.1

mainEl.style.backgroundColor='var(--main-bg)'

// Task 1.2

mainEl.innerHTML='<h1>SEI Rocks!</h1>'

// Task 1.3

mainEl.setAttribute('class','flex-ctr')

// Task 2.0

let topMenuE1 = document.getElementById('top-menu')

// Task 2.1

topMenuE1.style.height = "100%"

// Task 2.2 

topMenuE1.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3

topMenuE1.setAttribute("class", "flex-around")

// Task 3.0

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  // Task 3.1 

  for (let link of menuLinks) {
    let aEle = document.createElement('a')
    aEle.setAttribute('href', link.href)
    aEle.innerHTML=link.text
    topMenuE1.appendChild(aEle)
  }