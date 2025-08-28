>### Question 1️⃣

What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll** ?

  
### Answer :  <br> 

1. `getElementById` : একটা নির্দিষ্ট Id এর element return করে । Id অবশ্যই *unique* হতে হবে । 

**Example** : 
``` js
let x = document.getElementById('heart-count')
console.log(x);
```

2. `getElementsByClassName` : একী class Name এর সব element return করে । HTMLCollection দেয়, array like object মানে দেখতে array এর মতো কিন্তু array না । 

`Live collection` dom update হলে automatic update হয়ে যায় । 

**Example** : 
``` js
let x = document.getElementsByClassName('card')
console.log(x);
```

3. `querySelector / querySelectorAll` : css selector এর মতো করে select করে যেমন Id হলে `#`, class হলে `.`, Tag `p` এরকম ভাবেই করা যায় । 

**`💠querySelector `** : CSS selector এর মাধ্যমে শুধু প্রথম matching element (*HTMLElement*) return করে ।

**Example** : 
``` js
// div element
let firstDiv = document.querySelector('div');

// class="box" element 
let firstBox = document.querySelector('.box');

// id="main-header" element 
let header = document.querySelector('#main-header');

```

**`💠querySelectorAll `** : CSS selector এর মাধ্যমে সব matching element (*NodeList*) return করে ।

**Example** : 
``` js
// div element
let firstDiv = document.querySelectorAll('div');

// class="box" element 
let firstBox = document.querySelectorAll('.box');

//  p element 
let header = document.querySelectorAll('p');

```
`Static collection` dom update হলে automatic update হয়ে না ।

---

> ### Question 2️⃣

How do you **create and insert a new element into the DOM**?

  
### Answer :  <br> 
 
``` js
<div id="card-container">
   <p id="discription">Lorem ipsum dolor sit amet.</p>
</div>

<script>
   // 1️⃣ Create new elements
   let cardTitle = document.createElement('h1');
   let button = document.createElement('button');

   // 2️⃣ Add content & style
   cardTitle.innerText = 'I am a beautyful Card';
   cardTitle.style.color = 'pink';
   button.innerText = 'click me';

   // 3️⃣ Insert into DOM
   let parent = document.getElementById('card-container');
   let discription = document.getElementById('discription');

   parent.insertBefore(cardTitle, discription); // insert before
   parent.appendChild(button); // after add parents
</script>
```
---
