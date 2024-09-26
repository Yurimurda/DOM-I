const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.alt ="img-src";

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])
cta.alt= "owo";

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
cta.alt="middle image";

   

let navList = document.querySelectorAll("a");
navList.forEach(link =>{
for (i = 1; i < 8; i++)  link.length

Array.from(navList).forEach(link =>{
  console.log(link.tagName);
})
navList[0].textContent ="Services";
navList[1].textContent ="Product";
navList[2].textContent ="Vision";
navList[3].textContent ="Features";
navList[4].textContent ="About";
navList[5].textContent ="Contact";
 })
//test
console.log(navList)


let ctaH1 = document.querySelector("h1");
ctaH1.textContent = "DOM IS AWESOME";
console.log(ctaH1);

let button = document.querySelector("button");
button.textContent = "Get Started";


let h4List = document.querySelectorAll("h4");
h4List.forEach(header =>{
  for (i = 1; i < 7; i++) header.length
  Array.from(h4List).forEach(header =>{
    console.log(header.tagName);
  })
  h4List[0].textContent = "Features";
  h4List[1].textContent = "About";
  h4List[2].textContent = "Services";
  h4List[3].textContent = "Product";
  h4List[4].textContent = "Vision"; 
  h4List[5].textContent = "Contact";
})

let pList = document.querySelectorAll("p");
navList.forEach(paragraph =>{
  for (i = 1; i < 9; i++) paragraph.length
  Array.from(pList).forEach(header =>{
    console.log(header.tagName);
  })
  pList[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  pList[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  pList[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  pList[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
  pList[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."; 
  pList[5].textContent = "123 Way 456 Street Somewhere, USA";
  pList[6].textContent = "1 (888) 888-8888";
  pList[7].textContent = "sales@greatidea.io";
  pList[8].textContent = "Copyright Great Idea! 2018";
})




    
   
var newContent = document.createElement("a");    

newContent.textContent = "Append";

const secondaryContent = document.querySelector('nav');

secondaryContent.appendChild(newContent);


var newContent2 = document.createElement("a");    

newContent2.textContent = "Prepend";

const secondaryContent2 = document.querySelector('nav');

secondaryContent2.prepend(newContent2);
