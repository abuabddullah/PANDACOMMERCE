// ১. নতুন একটা স্ক্রিপ্ট ফাইল খুলবে। সেটাকে index.html এর সাথে কানেক্ট করতে পারো কিনা?
console.log('Hello World');



// ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 
let titleCategory = document.querySelectorAll('.categoryTitle')
for (const title of titleCategory) {

    title.style.color = 'lightblue ';
}



// ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
let backpacks = document.querySelector('#bagpack').style.background = 'tomato ';


// ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
let cards = document.querySelectorAll('section .container .row .col .card');
for (const card of cards) {

    card.style = 'border-radius: 30px !important';
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো applied on line 296 on index.html file

function toAlert() {
    alert('Hello World');
}



// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 
let buyNow = document.querySelectorAll('.card-footer button');
for (const buyNowBtn of buyNow) {
    buyNowBtn.addEventListener('click', function () {
        buyNowBtn.remove();
    });
}


// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না। 

let specialForm = document.querySelector('#specialForm');
// console.log(specialForm);
let specialInput = document.querySelector('#specialForm input');
// console.log(specialInput);
let speciaBtn = document.querySelector('#specialForm button');
// console.log(speciaBtn);

speciaBtn.setAttribute('disabled', true);

specialInput.addEventListener('keyup', function () {
    if (specialInput.value == ".com") {
        speciaBtn.removeAttribute('disabled');
    } else {
        speciaBtn.setAttribute('disabled', true);
    }
});

// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। applied on index.html line 84]]


let image = document.querySelector("#myImg");
// console.log(image);
image.addEventListener("mouseenter", function () {
    image.src = "./images/shoes/shoe-3.png";
});
image.addEventListener("mouseleave", function () {
    image.src = "./images/shoes/shoe-1.png";
});


// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 
let emptySpace = document.querySelector("#signUp");
console.log(emptySpace);
emptySpace.addEventListener("dblclick", function () {
    emptySpace.style.background = "yellow";
});