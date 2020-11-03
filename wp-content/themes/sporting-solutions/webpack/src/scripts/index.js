import '../styles/index.scss';import 'slick-carousel/slick/slick';import 'bootstrap';import functions from './functions.js';import animation from './animations.js';class Main{constructor(){this.onDOMLoaded();this.onDocumentLoad();this.onResize();this.onScroll();window.jQuery=window.$=$;}
onDocumentLoad(){window.addEventListener("load",(event)=>{});}
onDOMLoaded(){document.addEventListener("DOMContentLoaded",(event)=>{functions.cookies();functions.mobileToggle();functions.iconSlider();functions.showPerson();functions.showMap();functions.checkRequest();functions.menuScroll();functions.createOrangeUnderline();functions.checkFormRadioButtons();functions.scrollArrow();functions.worldMapChange();animation.animateHomepage();});}
onResize(){window.addEventListener('resize',(event)=>{});}
onScroll(){window.addEventListener('scroll',(event)=>{});}}
new Main();