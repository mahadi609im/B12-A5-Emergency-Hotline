# Assignment 5 - Emergency Hotline

### Dom related some questions : ⬇️

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


>### Question 3️⃣

What is **Event Bubbling** and how does it work ?

### Answer :  <br> 

**Event Bubbling** হলো child element-এ কোনো event ঘটলে সেটা ধাপে ধাপে তার **parent** → **grandparent** → **root document** পর্যন্ত উপরে উঠতে থাকে। <br>
মানে → event নিচ থেকে শুরু হয়ে উপরের দিকে যায়।
(ঠিক যেমন পানির বুদবুদ নিচ থেকে ওপরে উঠে আসে। তাই নাম "bubbling")


`—(capturing)—`  (find target) <br>
[Window] <br>
   ↓  <br>
[Document] <br>
   ↓ <br>
[Parent Div] <br>
   ↓ <br>
[Child Div] <br>
   ↓ <br>
[Button]  ← target (event ঘটল এখানে)

`—(bubbling)—` (target থেকে উপরে ওঠা) <br>
[Window] <br>
   ↑ <br>
[Document] <br>
   ↑ <br>
[Parent Div] <br>
   ↑ <br>
[Child Div] <br>
   ↑ <br>
[Button]  ← target (event ঘটল এখানে)

``` js
<body>
   <h1>Explore Event bubble</h1>
   <section class="sec" id="secs">
      <h3>List of Things</h3>
      <ul id="list-container">
         <li id="item-1">list item - 1.</li>
         <li id="item-2">list item - 2.</li>
         <li id="item-3">list item - 3.</li>
         <button id="btn">add items</button>
      </ul>
   </section>

   <script>
      document.getElementById('btn').addEventListener('click', () => {
         console.log('Add button clicked');
      });


      document.getElementById('list-container').addEventListener('click', () => {
         console.log('list container clicked');
      });


      document.getElementsByClassName('sec')[0].addEventListener('click', () => {
         console.log('section clicked');
      });


      document.getElementsByTagName('body')[0].addEventListener('click', () => {
         console.log('body te click');
      });

   </script>
</body>
```

👉 এখন যদি তুমি শুধু `add items` -এ ক্লিক করি :

```
Output হবে:
- Add button clicked
- list container clicked
- section clicked
- body te click
```
এটাই event bubbling.

#### `stopImmediatePropagation()` : 
stopImmediatePropagation এর মাধ্যমে যেখানে event trigger করবে, ওখানেই event থামানো যাবে।

---



>### Question 4️⃣

What is **Event Delegation** in JavaScript? Why is it useful?

### Answer :  <br> 
 
`Event delegation` হলো একটা parent element এ event listener লাগানো, তারপর সেই parent এর ভেতরে যেকোনো child element-এ event ঘটলে সেটা **bubbling-এর** মাধ্যমে ধরা।
মানে → অনেক child element এর জন্য আলাদা listener না দিয়ে, parent এ একটা listener দিলেই সব child এর event handle করা যায়।

**`🔹 Why is it useful ❓`** <br>
   - **কম কোড লাগে** → ১০০টা child থাকলেও parent এ একটাই listener।

   - **Dynamic element handle হয়** → পরে নতুন child add করলে তার জন্য আলাদা event লাগাতে হয় না।


- **পারফরম্যান্স ভালো হয়** → অনেকগুলো listener add না করেই কাজ হয়।

---


>### Question 5️⃣

What is the difference between **preventDefault() and stopPropagation()** methods? ?


### Answer :  <br> 

---
