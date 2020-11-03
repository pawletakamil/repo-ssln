import 'slick-carousel/slick/slick';

function cookies() {
    var cookieInfo = $('#cookies-info'),
        cookieClose = $('#cookies-info').find('.cookies-info__accept');
    checkCookie();

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + expires + "; path=/";

    };
    function getCookie(cname) {

        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return '';
    };

    function checkCookie() {
        var isExist = getCookie(document.domain + '-cookies-info');
        if (isExist != '') {
            cookieInfo.hide();
        }
        else {
            cookieInfo.show();
            cookieClose.on('click', function (e) {
                e.preventDefault();
                cookieInfo.hide();
                isExist = true;
                if (isExist != "" && isExist != null) {
                    setCookie(document.domain + '-cookies-info', isExist, 365);
                }
            });
        }
    };

};


function mobileToggle() {
    const mobileBtn = document.querySelector('[data-mobile-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mobileMenuClose = document.querySelector('[data-mobile-menu-close]');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

function iconSlider() {
    const iconSlider = document.querySelector('[data-icon-slider]');
    const windowWidth = window.innerWidth;
    if (iconSlider) {
        $('[data-icon-slider]').slick({
            swipeToSlide: true,
            slidesToShow: 7,
            arrows: true,
            nextArrow: '<span class="icon-slider__arrow icon-slider__arrow--next"></span>',
            prevArrow: '<span class="icon-slider__arrow icon-slider__arrow--prev"></span>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                        arrows: true,
                    }
                },
            ],
        });
    }
    const aboutUsSlider = document.querySelector('[data-slider-about-us]');
    if (aboutUsSlider && windowWidth < 992) {
        $('[data-slider-about-us]').slick({
            swipeToSlide: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            centerMode: true,
            variableWidth: true
        });
    }
    const relatedPostsSlider = document.querySelector('.post__related-slider');
    if (relatedPostsSlider && windowWidth < 992) {
        $('.post__related-slider').slick({
            swipeToSlide: true,
            infinite: false,
            slidesToShow: 1,
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: '15px',
        });
    }
    const worldMapSlider = document.querySelector('[data-world-map-slider]');
    if (worldMapSlider && windowWidth < 992) {
        $('[data-world-map-slider]').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.world-map__boxes'
        });
        $('.world-map__boxes').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '[data-world-map-slider]',
            centerMode: true,
            focusOnSelect: true,
            swipeToSlide: true,
            centerPadding: '15px',
            infinite: true,
            dots: true,
            variableWidth: true,
            arrows: false
        });
    }
    $('[data-slider-testimonial]').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });

}
function showPerson() {
    let personImages = document.querySelectorAll('[data-person-container]');
    let personContent = document.querySelectorAll('[data-person-content]');
    personImages.forEach(el => {
        el.addEventListener('click', () => {
            personContent.forEach(element => {
                if (el.dataset.personContainer == element.dataset.personContent) {
                    const person = el.querySelector('[data-person]');
                    removeActive();
                    person.classList.add('active');
                    element.classList.remove('d-none');
                }
            });
        });
    });
    function removeActive() {
        personImages.forEach(e => {
            const person = e.querySelector('[data-person]');
            person.classList.remove('active');
        });
        personContent.forEach(el => {
            el.classList.add('d-none');
        });
    }
}

function showMap() {
    let address = document.querySelectorAll('[data-address]');
    let mapImage = document.querySelectorAll('[data-map-image]');
    let addressContent = document.querySelectorAll('[data-map-content]');
    address.forEach(element => {
        element.addEventListener('click', e => {
            address.forEach(el => {
                el.classList.remove('active');
            });
            mapImage.forEach(el => {
                el.classList.add('d-none');
            });
            addressContent.forEach(el => {
                el.classList.add('d-none');
            });
            const currentMap = document.querySelector('[data-map-image="' + element.dataset.address + '"]');
            const currentAddressContent = document.querySelector('[data-map-content="' + element.dataset.address + '"]');
            currentMap.classList.remove('d-none');
            currentAddressContent.classList.remove('d-none');
            element.classList.add('active');
        });
    });
}

function checkRequest() {
    const noImageHero = document.querySelector('.no-image');
    if (noImageHero) {
        if (noImageHero.classList.contains('no-image')) {
            const requestDemo = document.querySelector('[data-request-demo]');
            requestDemo.classList.add('black');
        }
    }

}

function menuScroll() {
    let prevScrollpos = 0;
    const header = document.querySelector('header.header');
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollpos) {
            header.classList.add('on-scroll');
        } else {
            header.classList.remove('on-scroll');
        }
    };
}

function createOrangeUnderline() {
    const allOrangeText = document.querySelectorAll('.orange__text');
    allOrangeText.forEach(e => {
        let createdUnderline = document.createElement('span');
        createdUnderline.classList.add('orange-underline');
        e.appendChild(createdUnderline);
    });
}

function checkFormRadioButtons() {
    const contactPage = document.querySelector('.page-template-page-contact');
    const requestPage = document.querySelector('.page-template-page-request');
    if (contactPage || requestPage) {
        setTimeout(() => {
            const selectElement = document.querySelector('.eapps-form-element-input-dropdown');
            if (selectElement) {
                const formSent = document.querySelector('.eapps-form-sent');
                if(formSent){
                    checkFormRadioButtons();
                }
                let otherInput;
                if(requestPage){
                    otherInput = document.querySelector('input[name="other-4"]');
                } else {
                    otherInput = document.querySelector('input[name="other-5"]');
                }
                const otherInputWrapper = otherInput.parentElement.parentElement;
                otherInputWrapper.classList.add('d-none');
                if(contactPage) {
                    const radioButtons = document.querySelectorAll('.eapps-form-element-radio-options-item input');
                    radioButtons[0].parentElement.classList.add('checked');
                    radioButtons.forEach(e => {
                        e.addEventListener('change', () => {
                            radioButtons.forEach(el => {
                                el.parentElement.classList.remove('checked');
                            });
                            e.parentElement.classList.add('checked');
                        });
                    });
                }
                selectElement.addEventListener('change', e => {
                    const selectElementLabel = otherInputWrapper.querySelector('.eapps-form-element-label');
                    if (selectElement.value == "Other") {
                        selectElementLabel.innerHTML = 'Other';
                        otherInputWrapper.classList.remove('d-none');
                    } else if (selectElement.value == "Industry publication") {
                        selectElementLabel.innerHTML = 'Please specify';
                        otherInputWrapper.classList.remove('d-none');
                    } else {
                        otherInputWrapper.classList.add('d-none');
                    }
                });
            } else {
                checkFormRadioButtons();
            }
            const submitButton = document.querySelector('.eapps-form-actions-button.eapps-form-button');
            if(submitButton) {
                submitButton.addEventListener('click', () => {
                    setTimeout(()=>{
                        searchBtn();
                    }, 2000);
                });
            }
            function searchBtn(){
                const sentForm = document.querySelector('.eapps-form-sent');
                if(sentForm){
                    const successButton = document.querySelector('.eapps-form-success-button.eapps-form-button');
                    successButton.addEventListener('click', () => {
                        checkFormRadioButtons();
                    });
                } else {
                    setTimeout(()=>{
                      searchBtn();
                    }, 500);
                }
            }
        }, 300);
    }
}


function worldMapChange() {
    const worldBox = document.querySelectorAll('[data-world-map-box]');
    const wordlMaps = document.querySelectorAll('.world-map__single-world-map');
    const windowWidth = window.innerWidth;
    if (windowWidth < 992) {
        worldBox.forEach(e => {
            e.addEventListener('click', () => {
                wordlMaps.forEach(element => {
                    element.classList.remove('active');
                });
                worldBox.forEach(element => {
                    element.classList.remove('active');
                });
                e.classList.add('active');
                const worldMap = document.querySelector('[data-world-map="' + e.dataset.worldMapBox + '"]');
                worldMap.classList.add('active');
            });
        });
    } else {
        worldBox.forEach(e => {
            e.addEventListener('mouseover', () => {
                wordlMaps.forEach(element => {
                    element.classList.remove('active');
                });
                worldBox.forEach(element => {
                    element.classList.remove('active');
                });
                e.classList.add('active');
                const worldMap = document.querySelector('[data-world-map="' + e.dataset.worldMapBox + '"]');
                worldMap.classList.add('active');
            });
        });
    }
}


function scrollArrow() {
    let monitorHeight = window.innerHeight;
    const arrowButton = document.querySelector('.hero__arrow');
    if (arrowButton) {
        arrowButton.addEventListener('click', () => {
            window.scrollTo(0, monitorHeight);
        });
    }
}





export default { cookies, mobileToggle, iconSlider, showPerson, showMap, checkRequest, menuScroll, createOrangeUnderline, checkFormRadioButtons, worldMapChange, scrollArrow };