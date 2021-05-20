const sortPriseBtn = document.getElementById('sort-prise');
const sortAgeBtn = document.getElementById('sort-age');
const hearArr = document.querySelectorAll('.item-favorites');
const alertFavorites = document.querySelectorAll('.alert-favorites');
const itemBtnArr = document.querySelectorAll('.item-btn');
const anchors = document.querySelectorAll('a[href*="#"]');
const btnScrollTop = document.getElementById('btn-scroll');
const btnBurger = document.getElementById('btn-burger');
const nav = document.querySelector('.nav');

btnBurger.addEventListener('click', () => {
    nav.classList.toggle('active');
    btnBurger.classList.toggle('active');
});

sortPriseBtn.addEventListener('click', () => {
    sortPriseBtn.classList.toggle('active');
    let b = sortPriseBtn.classList.contains('active');
    sortPrise(b);
});

sortAgeBtn.addEventListener('click', () => {
    sortAgeBtn.classList.toggle('active');
    let b = sortAgeBtn.classList.contains('active');
    sortAge(b);
});

hearArr.forEach( (e, i) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active')
        alertFavorites[i].classList.toggle('active')
        // e.classList.contains('active') ? e.innerHTML = 'Продано':
        // e.innerHTML = 'Купить'
    });
});

itemBtnArr.forEach( e => {
    e.classList.contains('active') ? e.innerHTML = 'Продано':
    e.innerHTML = 'Купить'
});


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};

let scrollTop = pageYOffset;

window.addEventListener('scroll', function(){
  if (scrollTop > 800) { 
    btnScrollTop.classList.add('active')

  } else {
    btnScrollTop.classList.remove('active')
  }
  scrollTop = pageYOffset;
});


function sortPrise(boolean) {
    const offers = document.querySelector('#offers');

    if(boolean) {
        for(let i = 0; i < offers.children.length; i++) {
            for(let j = i; j < offers.children.length; j++) {
                if(+offers.children[i].getAttribute('data-price') > +offers.children[j].getAttribute('data-price')) {
                    replaceNode = offers.replaceChild(offers.children[j], offers.children[i]);
                    replaceOffers(replaceNode, offers.children[i])
                }
            }
        }
    } else {
        for(let i = 0; i < offers.children.length; i++) {
            for(let j = i; j < offers.children.length; j++) {
                if(+offers.children[i].getAttribute('data-price') < +offers.children[j].getAttribute('data-price')) {
                    replaceNode = offers.replaceChild(offers.children[j], offers.children[i]);
                    replaceOffers(replaceNode, offers.children[i])
                }
            }
        }
    }
}

function sortAge(boolean) {
    const offers = document.querySelector('#offers');

    if(boolean) {
        for(let i = 0; i < offers.children.length; i++) {
            for(let j = i; j < offers.children.length; j++) {
                if(+offers.children[i].getAttribute('data-age') > +offers.children[j].getAttribute('data-age')) {
                    replaceNode = offers.replaceChild(offers.children[j], offers.children[i]);
                    replaceOffers(replaceNode, offers.children[i])
                }
            }
        }
    } else {
        for(let i = 0; i < offers.children.length; i++) {
            for(let j = i; j < offers.children.length; j++) {
                if(+offers.children[i].getAttribute('data-age') < +offers.children[j].getAttribute('data-age')) {
                    replaceNode = offers.replaceChild(offers.children[j], offers.children[i]);
                    replaceOffers(replaceNode, offers.children[i])
                }
            }
        }
    }
}

function replaceOffers(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}