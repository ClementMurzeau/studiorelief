import './index.css';

/* import { initBg } from '$utils/bgGlobal'; */
import { fnContact } from '$utils/contact';
import { animateHero, animateLogo, animateProcess } from '$utils/home/gsap';
import { makeDraggable, triggerInte } from '$utils/home/hero';
import { reviewSwiper } from '$utils/home/swiper';
import { loadScript } from '$utils/loadScript';
import { scrollNav } from '$utils/navbar';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load Finsweet Attributes scripts
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-accordion@1/accordion.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-selectcustom@1/selectcustom.js'),
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
  ]);

  // Load contact jQuery
  fnContact();

  // Load reviewSwiper (→ on Home)
  reviewSwiper();

  // Load initBgRepeat (→ on Home)
  /* initBg(); */

  // Load scrollNav (→ on Home)
  scrollNav();

  // Load gsap scroll home (→ on Home)
  animateLogo();
  animateProcess();
  animateHero();

  // Load Draggable (→ on Home)
  triggerInte();
  makeDraggable();

  // Load home on Integration
  $(document).ready(function () {
    // Vérifiez si l'utilisateur est sur la page d'accueil
    if (window.location.pathname === '/' && window.location.hash !== '#integration') {
      window.location.hash = 'integration';
      const integrationElement = $('#integration');
      const offset = integrationElement.offset();
      if (offset) {
        window.scrollTo(0, offset.top);
      }
    }
  });
});
