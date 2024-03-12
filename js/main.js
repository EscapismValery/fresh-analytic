document.addEventListener('DOMContentLoaded', () => {
  // бургер
  const burger = document.querySelector('.burger');
  const header = document.querySelector('.header');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
      header.classList.add('active');
      // document.body.style.overflow = "hidden";
    } else {
      header.classList.remove('active');
      // document.body.style.overflow = "auto";
    }
  })

  // window.addEventListener('resize', () => {
  //   if (window.innerWidth > 1400) {
  //     burger.classList.remove('active');
  //     navBurger.classList.remove('active');
  //   }
  // })



  // анимация графика
  const graph = document.querySelector('.about__graph');
  const graphItems = graph.querySelectorAll('.about__graph-height');

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY + window.innerHeight;

    if (scrollDistance > graph.offsetTop) {
      for (item of graphItems) {
        item.classList.add('about__graph-height_running');
      }
    }
  })

  // скролл вверх в мобилке и фиксированное меню при скролле вверх
  // const header = document.querySelector('.header');
  // const firstBlock = document.querySelector('.main');
  // const arrowScrollTop = document.querySelector('.footer__btn-scroll');

  // const headerHeight = header.offsetHeight;
  // let lastScrollTop = 0;

  // window.addEventListener('scroll', () => {
  //   let scrollDistance = window.scrollY;

  //   if (scrollDistance > lastScrollTop) {
  //     header.classList.remove('header-fixed');
  //     firstBlock.style.marginTop = null;
  //     arrowScrollTop.classList.remove('active');
  //   } else {
  //     header.classList.add('header-fixed');
  //     firstBlock.style.marginTop = `${headerHeight}px`;
  //     arrowScrollTop.classList.add('active');
  //   }

  //   if (scrollDistance === 0) {
  //     header.classList.remove('header-fixed');
  //     firstBlock.style.marginTop = null;
  //     arrowScrollTop.classList.remove('active');
  //   }

  //   lastScrollTop = scrollDistance;
  // })
})
