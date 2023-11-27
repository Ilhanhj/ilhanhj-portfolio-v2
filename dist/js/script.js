// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const lis = navMenu.querySelectorAll("li a");

hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
  e.preventDefault();
});

for (li of lis) {
  li.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.classList.toggle("hamburger-active");
  });
}

// Chatbot Close
const chatBot = document.querySelector("#chatbot");
const openChatbot = document.querySelector("#chatbot-button");
const close = document.querySelector("#close");

openChatbot.addEventListener("click", (e) => {
  chatBot.classList.add("activate");
  chatBot.classList.remove("unactive");
  e.preventDefault();
});

close.addEventListener("click", (e) => {
  chatBot.classList.add("unactive");
  chatBot.classList.remove("activate");

  e.preventDefault();
});

// Chatbot Question & Answer
const chatHellos = document.querySelectorAll("#chat-hello");
const answerHello = document.querySelector("#answer-hello");
const question = document.querySelector("#question");
const chatHires = document.querySelectorAll("#chat-hire");
const chatConsults = document.querySelectorAll("#chat-consult");

for (chatHello of chatHellos) {
  chatHello.addEventListener("click", () => {
    setTimeout(userAnswerRight, 1000);
    setTimeout(userAnswerHello, 2000);
  });
}
for (chatHire of chatHires) {
  chatHire.addEventListener("click", () => {
    setTimeout(userAnswerRight2, 1000);
    setTimeout(userAnswerHire, 2000);
  });
}
for (chatConsult of chatConsults) {
  chatConsult.addEventListener("click", () => {
    setTimeout(userAnswerRight4, 1000);
    setTimeout(userAnswerConsult, 2000);
  });
}

function userAnswerRight() {
  const answerRight = document.createElement("div");
  answerRight.classList.add("flex");
  answerRight.classList.add("justify-end");
  answerRight.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-secondary rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot">
    <h1 class="text-white ">Just saying Hello !</h1>
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight);
}
function userAnswerRight2() {
  const answerRight2 = document.createElement("div");
  answerRight2.classList.add("flex");
  answerRight2.classList.add("justify-end");
  answerRight2.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-secondary rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500">
    <h1 class="text-white">I'd like to hire you !</h1>
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight2);
}
function userAnswerRight3() {
  const answerRight3 = document.createElement("div");
  answerRight3.classList.add("flex");
  answerRight3.classList.add("justify-end");
  answerRight3.innerHTML = `<div class="container m-4 mr-2 lg:mr-2 lg:m-2 w-2/5 lg:w-[40%] bg-secondary rounded-full flex items-center p-3" data-aos="fade-up"
  data-aos-duration="500">
    <h1 class="text-white ">Other options</h1>
    </div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight3);
}
function userAnswerRight4() {
  const answerRight4 = document.createElement("div");
  answerRight4.classList.add("flex");
  answerRight4.classList.add("justify-end");
  answerRight4.innerHTML = `<div id="chat-consult"
  class="container m-2 lg:m-2 w-3/5 bg-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
  data-aos-duration="500">
  <h1 class="text-white">Interested in Consultation</h1>
</div>`;
  document.querySelector("#question").classList.add("hidden");
  document.querySelector("#chat-area").appendChild(answerRight4);
}

function userAnswerHello() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `  <div
  class="container m-2 lg:m-2 w-20 h-14 bg-gray-50 rounded-xl flex justify-center items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-primaryOld">Hi ! 👋🏻 </h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-primaryOld">Thanks for saying hi !</h1>
</div>  
<div class="container m-2 lg:m-2 w-2/5 lg:w-1/2 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">  
  <h1 class="text-primaryOld"> I hope you enjoy browsing my work</h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
  <h1 class="text-primaryOld mr-1"> Can i help you with anything else ?
  </h1>
</div>

<div id="question">
  <div id="chat-hello"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <h1 class="text-secondary">Just saying Hello !</h1>
  </div>
  <div id="chat-consult"
                    class="container m-2 lg:m-2 w-3/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
                    data-aos-duration="2700"  data-aos-anchor="#chatbot" data-aos-delay="2700">
                    <h1 class="text-secondary">Interested in Consultation</h1>
                </div>
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-3/4 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-secondary">I'd like to collaborate with you !</h1>
  </div>
</div>`;

  const chatHellos = answerLeft.querySelectorAll("#chat-hello");
  for (chatHello of chatHellos) {
    chatHello.addEventListener("click", () => {
      setTimeout(userAnswerRight, 1000);
      setTimeout(userAnswerHello, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerHire() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `  
<div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-primaryOld">That's awesome !</h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 lg:w-1/2 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-primaryOld"> Let's elevate your digital experience into a masterpiece.</h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">
  <h1 class="text-primaryOld mr-1"> Drop me a message, let's chat further !
  </h1>
</div>

<div id="question">
<div id="chat-hire"
class="container m-2 lg:m-2 w-1/2 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
<a href="mailto:ilhanzuldan11@gmail.com?subject=Exciting%20Opportunity%20to%20Collaborate"
    class="flex text-secondary ml-2 text-base items-center">Send a message !
</a>
</div>
  <div id="chat-options"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500" >
      <h1 class="text-secondary">Other options ?</h1>
  </div>
</div>`;

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatOpts = answerLeft.querySelectorAll("#chat-options");
  for (chatOpt of chatOpts) {
    chatOpt.addEventListener("click", () => {
      setTimeout(userAnswerRight3, 1000);
      setTimeout(userAnswerOpt, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerConsult() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = `        <div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-primaryOld">Thanks for reaching out !</h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 lg:w-1/2 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
  <h1 class="text-primaryOld"> Yes, I provide consultation sessions. </h1>
</div>
<div class="container m-2 lg:m-2 w-1/2 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">
  <h1 class="text-primaryOld mr-1"> to better understand your project
      requirements.
  </h1>
</div>
<div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
  <h1 class="text-primaryOld mr-1">and ensure we align our goals.
  </h1>
</div>

<div id="question">
  <div id="chat-hire"
      class="container m-2 lg:m-2 w-1/2 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="2500"  data-aos-anchor="#chatbot" data-aos-delay="2500">
      <a href="mailto:ilhanzuldan11@gmail.com?subject=Exciting%20Opportunity%20to%20Collaborate"
          class="flex text-secondary ml-2 text-base items-center">Send a message !
      </a>
  </div>
  <div id="chat-options"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="3000"  data-aos-anchor="#chatbot" data-aos-delay="3000">
      <h1 class="text-secondary">Other options ?</h1>
  </div>
</div>`;

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatOpts = answerLeft.querySelectorAll("#chat-options");
  for (chatOpt of chatOpts) {
    chatOpt.addEventListener("click", () => {
      setTimeout(userAnswerRight3, 1000);
      setTimeout(userAnswerOpt, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

function userAnswerOpt() {
  const answerLeft = document.createElement("div");
  answerLeft.classList.add("flex");
  answerLeft.classList.add("flex-col");
  answerLeft.classList.add("justify-start");
  answerLeft.innerHTML = ` <div class="container m-2 lg:m-2 w-2/5 bg-gray-50 rounded-xl flex items-center p-3 dark:bg-darkSec" data-aos="fade-up"
  data-aos-duration="500"  data-aos-anchor="#chatbot" data-aos-delay="500">
  <h1 class="text-primary">Alright then</h1>
</div>
<div id="question">
  <div id="chat-hello"
      class="container m-2 lg:m-2 w-2/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
      data-aos-duration="1000"  data-aos-anchor="#chatbot" data-aos-delay="1000">
      <h1 class="text-secondary">Just saying Hello !</h1>
  </div>
  <div id="chat-consult"
  class="container m-2 lg:m-2 w-3/5 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
  data-aos-duration="1500"  data-aos-anchor="#chatbot" data-aos-delay="1500">
  <h1 class="text-secondary">Interested in Consultation</h1>
</div>
<div id="chat-hire"
class="container m-2 lg:m-2 w-3/4 bg-transparent border-2 border-secondary rounded-full flex items-center p-3 cursor-pointer" data-aos="fade-up"
data-aos-duration="2000"  data-aos-anchor="#chatbot" data-aos-delay="2000">
<h1 class="text-secondary" >I'd like to collaborate with you !</h1>
</div>
</div>`;

  const chatHellos = answerLeft.querySelectorAll("#chat-hello");
  for (chatHello of chatHellos) {
    chatHello.addEventListener("click", () => {
      setTimeout(userAnswerRight, 1000);
      setTimeout(userAnswerHello, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatConsults = answerLeft.querySelectorAll("#chat-consult");
  for (chatConsult of chatConsults) {
    chatConsult.addEventListener("click", () => {
      setTimeout(userAnswerRight4, 1000);
      setTimeout(userAnswerConsult, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  const chatHires = answerLeft.querySelectorAll("#chat-hire");
  for (chatHire of chatHires) {
    chatHire.addEventListener("click", () => {
      setTimeout(userAnswerRight2, 1000);
      setTimeout(userAnswerHire, 2000);
      answerLeft.querySelector("#question").classList.add("hidden");
    });
  }

  document.querySelector("#chat-area").appendChild(answerLeft);
}

// Dark Mode
const darkToggles = document.querySelectorAll("#darkmode");
const html = document.querySelector("html");

for (darkToggle of darkToggles) {
  darkToggle.addEventListener("click", function () {
    html.classList.toggle("dark");
  });
}
