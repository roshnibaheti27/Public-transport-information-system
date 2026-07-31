/*=========================================
        SMART TRANSIT
=========================================*/

// ======================
// STICKY NAVBAR
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

        document.querySelector(".logo h2").style.color = "#111827";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#111827";
        });

        document.querySelector(".menu").style.color = "#111827";

    } else {

        navbar.style.background = "rgba(17,24,39,.35)";
        navbar.style.boxShadow = "none";

        document.querySelector(".logo h2").style.color = "#ffffff";

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.style.color = "#ffffff";
        });

        document.querySelector(".menu").style.color = "#ffffff";
    }

});


// ======================
// MOBILE MENU
// ======================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

    navLinks.classList.toggle("showMenu");

});


// ======================
// BACK TO TOP
// ======================
const backBtn = document.getElementById("backToTop");

if(backBtn){

backBtn.style.display="none";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backBtn.style.display = "flex";

    }else{

        backBtn.style.display = "none";

    }

});
}

backBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ======================
// DARK MODE
// ======================

const darkBtn = document.getElementById("darkMode");

if(darkBtn){

darkBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});
}
// ================================
// SMART SEARCH RESULTS
// ================================

const searchBtn = document.querySelector(".search-btn");
const resultBox = document.getElementById("searchResults");

if (searchBtn && resultBox) {

searchBtn.addEventListener("click", function () {

   const from = document.getElementById("from").value.trim();

const to = document.getElementById("to").value.trim();

const date = document.getElementById("journeyDate").value;
    if (from === "" || to === "") {

        resultBox.innerHTML = `

        <div class="error-card">

            <h3>Please enter both locations.</h3>

        </div>

        `;

        return;

    }

    resultBox.innerHTML = `

<div class="bus-result">

<img src="images/bus1.jpg" alt="Bus">

<div class="bus-details">

<h3>🚌 Rajasthan Roadways</h3>

<p><strong>${from}</strong> ➜ <strong>${to}</strong></p>

<p>Departure : 08:30 AM</p>

<p>Arrival : 01:45 PM</p>

<p>Duration : 5 hrs 15 mins</p>

<p>⭐ 4.8 | AC | Wi-Fi | Charging</p>

<h2>₹399</h2>

<button class="book-btn">

Book Now

</button>

</div>

</div>

<div class="bus-result">

<img src="images/train.jpg" alt="Train">

<div class="bus-details">

<h3>🚆 Raj Express</h3>

<p><strong>${from}</strong> ➜ <strong>${to}</strong></p>

<p>Departure : 09:20 AM</p>

<p>Arrival : 02:30 PM</p>

<p>Duration : 5 hrs 10 mins</p>

<p>⭐ 4.7 | Pantry | Sleeper</p>

<h2>₹450</h2>

<button class="book-btn">

Book Now

</button>

</div>

</div>

<div class="bus-result">

<img src="images/metro.jpg" alt="Metro">

<div class="bus-details">

<h3>🚇 Metro Rapid</h3>

<p><strong>${from}</strong> ➜ <strong>${to}</strong></p>

<p>Departure : Every 10 Minutes</p>

<p>Travel Time : 40 Minutes</p>

<p>⭐ 4.9 | Air Conditioned</p>

<h2>₹60</h2>

<button class="book-btn">

Book Now

</button>

</div>

</div>

`;

    resultBox.scrollIntoView({

        behavior: "smooth"

    });

});
}


// ================================
// TRANSPORT CARD ACTIVE
// ================================

const transportCards = document.querySelectorAll(".transport-card");

transportCards.forEach(card => {

    card.addEventListener("click", function () {

        transportCards.forEach(item => {

            item.style.border = "none";

        });

        this.style.border = "3px solid #D84E55";

    });

});


// ================================
// BOOK BUTTON
// ================================

document.addEventListener("click", function (e) {

    if (e.target.classList.contains("book-btn")) {

        alert("🎉 Booking Successful!\n\nThank you for choosing SmartTransit.");

    }

});


// ================================
// NEWSLETTER
// ================================

const newsletter = document.querySelector(".newsletter-form");

if(newsletter){

newsletter.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you for subscribing!");

    newsletter.reset();

});
}
const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.innerText = count;

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".statistics");

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {

            startCounter();

            observer.disconnect();

        }

    });

    observer.observe(statsSection);

}