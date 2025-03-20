import './Contacts.css'
import React, {useRef, useState} from "react";


const Contacts = () =>  {

      const [activeHandler, setActiveHandler] = useState(null);

  const handleClick = (handlerId) => {
    if (activeHandler === handlerId) {
      // If the same handler is clicked again, close it
      setActiveHandler(null);
    } else {
      // Close the previously active handler (if any)
      if (activeHandler !== null) {
        switch (activeHandler) {
          case 1:
            setIsShown(false);
            break;
          case 2:
            setIsShown_2(false);
            break;
          case 3:
            setIsShown_3(false);
            break;
          case 4:
            setIsShown_4(false);
            break;
          default:
            break;
        }
      }

      // Open the clicked handler
      setActiveHandler(handlerId);
    }
  };

  const [isShown, setIsShown] = useState(false);
  const [isShown_2, setIsShown_2] = useState(false);
  const [isShown_3, setIsShown_3] = useState(false);
  const [isShown_4, setIsShown_4] = useState(false);

  const handleCloseClick = () => {
    setActiveHandler(null); // Закрыть блок
  };



  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}

    return(
        <html>
        <head>
         <title>Контакты</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        </head>
            <body>
        <div className='Contacts'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className={`supply_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
        <a href="/">
            <img className='logo-supply' src="/public/logo.png" alt='' />
        </a>
        <input className={`menu_supply ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white.png' onClick={() => handleClick(4)} alt=''/>
        {activeHandler === 4 && (
            <div className='menu_supply_activate'>
                <p className='menu_supply_activate_close' onClick={handleCloseClick}>Закрыть</p>
                <div className='menu_opacity_bgc'></div>
                <div className='menu_supply_activate_LI'>
                    <li className='menu_supply_activate_li'><a href="/">Главная</a></li>
                    <li className='menu_supply_activate_li'><a href="/project">Проекты</a></li>
                    <li className='menu_supply_activate_li'><a href="/about">О кампании</a></li>
                    <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                    <li className='menu_supply_activate_li_callback'><a href='/callback'>Связаться с нами</a></li>
                </div>
                <p className='menu_supply_activate_city'>г.Краснодар</p>
                <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
            </div>
        )}
        <h1 className='Contacts_title'>Контакты</h1>
          <div className='Contacts_info_glav'>
          <p className='Contacts_info'>350012</p>
          <p className='Contacts_info'>Краснодарский край</p>
          <p className='Contacts_info'>г. Краснодар</p>
          <p className='Contacts_info'>ул. Красных Партизан 1/4 к.9 офис 20</p>
          <p className='Contacts_info'>+ 7 (918) 331<span className='dop_1_span'>-</span>25<span className='dop_1_span'>-</span>57</p>
          <p className='Contacts_info'>mail@partner-krd.ru</p>
          <p className='Contacts_info_callback'>Связаться с нами</p>
          <iframe className='Contacts_card' src="https://yandex.ru/map-widget/v1/?um=constructor%3A34e162cd08a82e01ff38ac0c14372b9b29534f0b7c5a30aaa1defb6b19007a34&amp;source=constructor" frameBorder="0"></iframe>
          </div>
      </div>
    </div>
        </body>
        </html>
    );
}

export default Contacts