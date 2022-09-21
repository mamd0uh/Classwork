let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  let title = document.querySelector("#main-title");
  title.innerHTML = "<h1>Family</h1>"

  // Part 2
 
  let newBody = document.querySelector("body");
  newBody.style.backgroundColor = "#068CF9"

  // Part 3

  let removeItem = document.querySelector('#favorite-things')
  removeItem.removeChild(removeItem.lastElementChild);

  // Part 4

  let changeFont = document.querySelectorAll(".special-title")

  for (i = 0; i < changeFont.length ; i++) {
     changeFont[i].style.fontSize = "2rem";
  }

  // Part 5

  let races = document.querySelector('#past-races')
  races.removeChild(races.children[3])

  // Part 6

  let newCity = document.createElement("li")
  newCity.innerText = "Cairo"
  races.appendChild(newCity)
  
  // Part 7


  let cairo = document.createElement('div')

  cairo.classList.add('blog-post')
  cairo.classList.add('purple')

  // cairo.setAttribute("class","blog-post purple")

  cairo.innerHTML = '<h1>Cairo</h1> <p>I drifted around the Pyramids</p>';

  // newBody.appendChild(cairo)

  mainDev = document.getElementsByClassName("main")

  for ( let i=0; i < mainDev.length; i++)

  {
    mainDev[i].appendChild(cairo)    
  }

  // Part 8

  document.querySelector("#quote-title").addEventListener("click", randomQuote)


  // Part 9

  const blogs = document.querySelectorAll(".blog-post")

  for(let blog of blogs){
  
    blog.addEventListener("mouseout", function()
  {
  blog.classList.add("purple")
  blog.classList.remove("red")
  })
  
  blog.addEventListener("mouseover", function()
  {
  blog.classList.add("red")
  blog.classList.remove("purple")

})

}

});
