document.addEventListener('DOMContentLoaded', () => {
  // open/close popup

  const popup = document.querySelector('.popup');
  const popupContainer = document.querySelector('.popup__container');
  const popupTitle = document.querySelector('.popup__title');
  // const formSuccess = document.querySelector('.form__success-form');
  const close = document.querySelector('.popup__close');

  function positionPopup() {
    if (popupContainer.clientHeight > window.innerHeight) {
      popup.classList.remove('big');
    } else {
      popup.classList.add('big');
    }
  }

  positionPopup();

  window.addEventListener('resize', () => {
    positionPopup();
  })

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-popup')) {
      popup.classList.add('active');
      document.body.style.overflow = "hidden";

      if (e.target.classList.contains('btn-popup_contract')) {
        popupTitle.innerHTML = 'Для заключения договора оставьте контактные данные и&nbsp;наши специалисты свяжутся с&nbsp;вами!';
      } else {
        popupTitle.innerHTML = 'Оставьте ваши контактные данные и&nbsp;наши менеджеры свяжутся с&nbsp;вами!';
      }
    }
  })

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.style.overflow = "auto";
  })

  // mask phone

  const phones = document.getElementsByName('phone');

  for (const phone of phones) {
    phone.addEventListener('focus', () => {
      const maskOptions = {
        mask: '+7(000)000-00-00',
      }

      const mask = IMask(phone, maskOptions);
    })
  }

  // click form submit
  // const forms = document.querySelectorAll('.form__form');

  // for (const form of forms) {
  //   const formSuccess = form.querySelector('.form__success-form');

  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     sendToTg();
  //   });

  //   function sendToTg() {
  //     const name = form.querySelector(".form__name").value;
  //     const patro = form.querySelector(".form__patro").value;
  //     const phone = form.querySelector(".form__phone").value;
  //     const email = form.querySelector(".form__email").value;
  //     const descr = form.querySelector(".form__descr").value;

  //     const message =
  //       "Имя: " + name + ", Отчество: " + patro + ", Телефон: " + phone + ", Почта: " + email + ", Пожелания: " + descr;

  //     const url =
  //       "https://api.telegram.org/bot6824653689:AAGccVzR2V7kURugkg7MdiWjzcN7kz89qmM?chat_id=-1002047599406&text=" +
  //       message;

  //     fetchData(url, message);
  //   }

  //   async function fetchData(url, message) {
  //     try {
  //       const response = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ message }),
  //       });

  //       if (response.ok) {
  //         form.classList.add('hidden');
  //         formSuccess.classList.add('active');
  //         feedbackForm.reset();
  //         ym(95744709, "reachGoal", "lead");
  //         window.scrollTo({
  //           top: 0,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         console.error(
  //           `Ошибка при выполнении запроса: ${response.status} ${response.statusText}`,
  //         );
  //       }
  //     } catch (error) {
  //       console.error(`Ошибка при выполнении запроса: ${error}`);
  //     }
  //   }
  // }
})
