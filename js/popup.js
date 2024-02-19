document.addEventListener('DOMContentLoaded', () => {
  // open/close popup

  const popup = document.querySelector('.popup');
  const popupContainer = document.querySelector('.popup__container');
  const popupTitle = document.querySelector('.popup__title');
  // const formSuccess = document.querySelector('.popup-form__success-form');
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

  const phone = document.getElementById('phone');

  phone.addEventListener('focus', () => {
    const maskOptions = {
      mask: '+7(000)000-00-00',
    }

    const mask = IMask(phone, maskOptions);
  })

  // click form submit

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   sendToTg();
  // });

  // function sendToTg() {
  //   const name = document.getElementById("name").value;
  //   const phone = document.getElementById("phone").value;

  //   const message =
  //     "Имя: " + name + ", Телефон: " + phone;

  //   const url =
  //     "https://api.telegram.org/bot/sendMessage?chat_id=&text=" +
  //     message;

  //   fetchData(url, message);
  // }

  // async function fetchData(url, message) {
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ message }),
  //     });

  //     if (response.ok) {
  //       form.classList.add('hidden');
  //       formSuccess.classList.add('active');
  //       feedbackForm.reset();
  //       ym(95744709, "reachGoal", "lead");
  //       window.scrollTo({
  //         top: 0,
  //         behavior: "smooth",
  //       });
  //     } else {
  //       console.error(
  //         `Ошибка при выполнении запроса: ${response.status} ${response.statusText}`,
  //       );
  //     }
  //   } catch (error) {
  //     console.error(`Ошибка при выполнении запроса: ${error}`);
  //   }
  // }
})
