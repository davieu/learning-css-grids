const navSlide = () => {
  const burger = document.querySelector('.burger-lines');
  // const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  const linksWrapper = document.querySelector('.links-wrapper');
  const sideBar = document.querySelector('.side-bar');


  // linksWrapper.style.transition = 'width 0.5s ease-in';
  // linksWrapper.style.transition = 'none';
  // linksWrapper.style.transition = 'none';

  burger.addEventListener('click', () => {
    sideBar.classList.toggle('side-bar-active')
    // Toggle Nav
    // linksWrapper.classList.toggle('nav-active');

    // Animate Links
    // navLinks.forEach((link, index) => {
    //   if (link.style.animation) {
    //     link.style.animation = '';
    //   } else {
    //     link.style.animation = `navLinkFade 0.3s ease forwards ${index /7 + .3}s`
    //   }
    // });
    // Burger Animation
    burger.classList.toggle('toggle-burger')
  });
  // linksWrapper.style.transition = 'none';
}

const app = () => {
 navSlide();
}

app();