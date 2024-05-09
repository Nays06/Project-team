///////////////////////////////////////////////////NumberOpen
function OpenListenNumbers() {
  let arrowSet = document.getElementById("Arrow-Set-Number");
  let listOpen = document.getElementById("Number-List");

  arrowSet.classList.toggle("active");

  if (listOpen.clientHeight !== 0) {
    listOpen.style.height = "0";
  } else {
    listOpen.style.height = "120px";
  }
}
///////////////////////////////////////////////////NumberOpen

///////////////////////////////////////////////////////////////////////JavaScript Slider
// const slideWrappers = document.querySelectorAll(".slide-wrapper");
// const dots = document.querySelectorAll(".dot");

// let currentSlideIndex = 0;

// function showSlide(index) {
//   slideWrappers.forEach((wrapper) => wrapper.classList.remove("active"));
//   slideWrappers[index].classList.add("active");
//   dots.forEach((dot) => dot.classList.remove("active"));
//   dots[index].classList.add("active");
//   currentSlideIndex = index;
// }

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     showSlide(index);
//   });
// });

// showSlide(currentSlideIndex);

// setInterval(() => {
//   currentSlideIndex = (currentSlideIndex + 1) % slideWrappers.length;
//   showSlide(currentSlideIndex);
// }, 3000);




////////////////////////////////////////////////////////////////////////////JavaScript Slider

///////////////////////////////////////////////////Cards-System-JS
const products = [
  {
    id: 1,
    new: true,
    imgSrc: "img/Cards-Content/cardImg1.svg",
    productTitle: "Игровой компьютер Black Jesus, 2023",
    reviews: 0,
    productPrice: 64450,
    productCurrency: "руб.",
  },
  {
    id: 2,
    new: false,
    imgSrc: "img/Cards-Content/cardImg2.svg",
    productTitle: "Материнская плата, Gigabyte 8450M H",
    reviews: 0,
    productPrice: 6499,
    productCurrency: "руб.",
  },
  {
    id: 3,
    new: false,
    imgSrc: "img/Cards-Content/cardImg3.svg",
    productTitle: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    reviews: 0,
    productPrice: 12450,
    productCurrency: "руб.",
  },
  {
    id: 4,
    new: false,
    imgSrc: "img/Cards-Content/cardImg4.svg",
    productTitle: "Процессор intel core i5, 2.34 Ghz. ",
    reviews: 0,
    productPrice: 5600,
    productCurrency: "руб.",
  },
  {
    id: 5,
    new: false,
    imgSrc: "img/Cards-Content/cardImg5.svg",
    productTitle:
      "Игровая клавиатура, Oclick 5000, LED-Подсветка, не скользящий материал",
    reviews: 0,
    productPrice: 3500,
    productCurrency: "руб.",
  },
  {
    id: 6,
    new: false,
    imgSrc: "img/Cards-Content/cardImg6.svg",
    productTitle: "Видеокарта, GEFORCE GTX 1060, 8 ГБ",
    reviews: 0,
    productPrice: 9500,
    productCurrency: "руб.",
  },
  //Второй столб
  {
    id: 7,
    new: false,
    imgSrc: "img/Cards-Content/cardImg5.svg",
    productTitle:
      "Игровая клавиатура, Oclick 5000, LED-Подсветка, не скользящий материал",
    reviews: 0,
    productPrice: 3500,
    productCurrency: "руб.",
  },

  {
    id: 9,
    new: false,
    imgSrc: "img/Cards-Content/cardImg6.svg",
    productTitle: "Видеокарта, GEFORCE GTX 1060, 8 ГБ",
    reviews: 0,
    productPrice: 9500,
    productCurrency: "руб.",
  },
  {
    id: 8,
    new: false,
    imgSrc: "img/Cards-Content/cardImg2.svg",
    productTitle: "Материнская плата, Gigabyte 8450M H",
    reviews: 0,
    productPrice: 6499,
    productCurrency: "руб.",
  },
  {
    id: 10,
    new: true,
    imgSrc: "img/Cards-Content/cardImg1.svg",
    productTitle: "Игровой компьютер Black Jesus, 2023",
    reviews: 0,
    productPrice: 64450,
    productCurrency: "руб.",
  },
  {
    id: 11,
    new: false,
    imgSrc: "img/Cards-Content/cardImg3.svg",
    productTitle: 'Монитор 23.8" Acer K240YB, Black (UM.QE0EE.B01)',
    reviews: 0,
    productPrice: 12450,
    productCurrency: "руб.",
  },

  {
    id: 12,
    new: false,
    imgSrc: "img/Cards-Content/cardImg4.svg",
    productTitle: "Процессор intel core i5, 2.34 Ghz. ",
    reviews: 0,
    productPrice: 5600,
    productCurrency: "руб.",
  },
];

function createProductCards() {
  for (let i = 0; i < products.length; i++) {
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    productCard.id = "productCard" + i;
    productCard.innerHTML = `<div id="productCardHeader${i}" class="productCardHeader">
                                  <div id="newBlock${i}" class="newBlock">Новинка</div>
                                  <div class="cardHeadIcons">
                                      <img src="./img/"  alt="" />
                                      <img src="img/Cards-Content/vector.svg" class="flyToHeart" style="position: absolute;" />
                                  </div></div>
                              <img class="cardImg" src="${products[i].imgSrc}" alt="" />
                              <div class="productCardMain">
                                  <p class="productTitle">${products[i].productTitle}</p>
                                  <span class="productReviews">Отзывов: ${products[i].reviews}</span>
                              </div>
                              <div class="productCardFooter">
                                  <span class="productPrice">${products[i].productPrice}</span>
                                  <span class="productCurrency">${products[i].productCurrency}</span>
                                  <button class="buyBtn" >КУПИТЬ</button>
                              </div>`;
    document.querySelector(".conteiner").appendChild(productCard);

    const productCardHeader = document.getElementById(`productCardHeader${i}`);
    const newBlock = document.getElementById(`newBlock${i}`);
    if (products[i].new) {
      newBlock.style.opacity = "1";
    }
  }
}

createProductCards();

///////////////////////////////////////////////////Cards-System-JS

////////////////////////////////////////////////////Teleport-Product-Page
// function OpenTheProduct(){
// // window.location.href = '../Product-page/index.html'
//   console.log();
// }

let allBuyBtn = document.querySelectorAll(".buyBtn");

// document.querySelector(".buyBtn").addEventListener("click", () => {
//   console.log(document.querySelector(".buyBtn").closest(".productCard"));
// });

allBuyBtn.forEach((elem) => {
  elem.addEventListener("click", () => {
    localStorage.setItem(
      "productInfo",
      JSON.stringify([
        {
          title: elem.closest(".productCard").querySelector(".productTitle")
            .textContent,
          img: elem.closest(".productCard").querySelector(".cardImg").src,
          price: elem.closest(".productCard").querySelector(".productPrice")
            .textContent,
        },
      ])
    );

    window.location.href = "../Product-page/index.html";
  });
});

////////////////////////////////////////////////////Teleport-Product-Page






///////////////////////////////////////////////////NEW-SLIDER

const radioButtons = document.querySelectorAll('.Slider-Content-Div-Right input[type="radio"]');
let currentSlideIndex = 0;
document.querySelectorAll(".slider-btnn").forEach((elem, index) => {
  elem.addEventListener("click", () => {
    currentSlideIndex = index;
    elem.checked = true;
  });
});
function switchSlide() {
  radioButtons[currentSlideIndex].checked = true;
  currentSlideIndex = (currentSlideIndex + 1) % radioButtons.length;
}
setInterval(switchSlide, 2500);
switchSlide();



///////////////////////////////////////////////////NEW-SLIDER


