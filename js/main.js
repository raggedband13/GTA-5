const Section1 = document.querySelector('.section_1');
const Section2 = document.querySelector('.section_2');

setTimeout ( () => {
    Section1.classList.add('active');
})

setTimeout( () => {
    Section1.classList.remove('active');

    setTimeout( () => {
        Section1.remove();
    }, 1000);

    Section2.classList.add('active');

}, 3300 );



const swiper = new Swiper('.swiper', {
    // Настройки слайдера
    slidesPerView: 1, // указывает сколько слайдов будет отображатся в видимой области
    spaceBetween: 80, // задает отступ между слайдами
    loop: true,
    autoplay: {
        delay: 5000,
    },
  
    /* Делает слайдер горизонтальным или вертикальным
        - horizontal - значение поумолчанию, горизонтальный слайдер
        - vertical - вертикальный слайдер
    */

    // Стрелочки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const mainCharacters = document.querySelectorAll('.main-characters');
const mainCharactersImg = document.querySelectorAll('.main_characters_img');
const mainName = document.querySelectorAll('.main_name');

mainCharacters.forEach(items => {
    items.addEventListener('mouseenter', () => {
        mainName.forEach(item => {
            item.style.opacity = 1;
            mainCharactersImg.forEach(img => {
                if(img) {
                    const mainImgFranklin = document.querySelector('.main_img_Franklin');
                    const mainImgTrevor = document.querySelector('.main_img_Trevor');
                    item = items;
                    img.style.boxShadow = '10px 10px 100px 6px #4cc9f0';
                    mainImgFranklin.style.boxShadow = '10px 10px 100px 6px #163C12';
                    mainImgTrevor.style.boxShadow = '10px 10px 100px 6px #E8980E';
                }
            });
        });
    });

    items.addEventListener('mouseleave', () => {
        mainName.forEach(item => {
            item.style.opacity = 0;
            mainCharactersImg.forEach(img => {
                if(img) {
                    item = items;
                    img.style.boxShadow = '';
                }
            });
        });
    });
});

const minorCharactersH1 = document.querySelector('.minor_characters_h1');

window.addEventListener('scroll', () => {
    if(window.scrollY >= minorCharactersH1.offsetTop / 2) {
        minorCharactersH1.style.transform = 'translate(0)';
        minorCharactersH1.style.transition = '3s';
    }

    const minorCharactersViki = document.querySelectorAll('.minor_characters_viki');

    minorCharactersViki.forEach(inf => {
        if(window.scrollY >= (inf.offsetTop - 350)) {
            
            inf.style.opacity = 1;
        }
    })
})

const minorCharacters = document.querySelector('.viki');

const xml1 = new XMLHttpRequest();
xml1.responseType = 'json';
xml1.open('GET', 'char.json');
xml1.send();

xml1.addEventListener('load', () => {
    xml1.response.forEach(item => {
        const viki = `
        <div class="minor_characters_viki">
            <div class="minor_characters_photo">
                <img class="minor_characters_img" src="${item.src}" alt="">
                <p class="minor_characters_name">${item.name}</p>
            </div>
            <p class="minor_characters_inf"><b class="minor_characters_name_b">${item.name}</b> ${item.inf}</p>
        </div>
        `;

        minorCharacters.insertAdjacentHTML('beforeend', viki);

    });
});


const secretContainer = document.querySelector('.secret_viki');

const xml2 = new XMLHttpRequest();
xml2.responseType = 'json';
xml2.open('GET', '../secr.json');
xml2.send();

xml2.addEventListener('load', () => {
    xml2.response.forEach(item2 => {
        const secret = `
        <div class="secret_viki">
            <h1 class="title_secret">${item2.title}</h1>
            <img class="img_secret" src="${item2.src}" alt="">
            <p class="secret_txt">${item2.text}</p>
        </div>
        `;
        secretContainer.insertAdjacentHTML('beforeend', secret);
    });
});


const consoles = document.querySelector('.consoles_buy');
const consolesPrice = document.querySelector('.all_consoles');
const PS = document.querySelector('.PS');
const PScontainer = document.querySelectorAll('.console_PS');
const xbox = document.querySelector('.XBOX');
const xboxContainer = document.querySelectorAll('.console_xbox');
const PC = document.querySelector('.PC');
const PCcontainer = document.querySelector('.console_PC');


PS.addEventListener('click', () => {
   PScontainer.forEach(itemPS => {
    itemPS.style.display = itemPS.style.display === 'none' ? 'flex' : 'none';
   })
});

xbox.addEventListener('click', () => {
   xboxContainer.forEach(itemXBOX => {
    itemXBOX.style.display = itemXBOX.style.display === 'none' ? 'flex' : 'none';
   })
});

PC.addEventListener('click', () => {
    PCcontainer.style.display = PCcontainer.style.display === 'none' ? 'flex' : 'none';
});