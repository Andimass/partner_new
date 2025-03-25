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
                                    <img className='contacts_logo' src='/public/logo_new.png' alt='логотип'/>
                        </a>
                <div className={`contacts_menu_icon ${activeHandler === 11 ? 'menu_opacity' : ''}`} onClick={() => handleClick(11)}>
                    <div>
                        <p className='Header_menu_icon_1'></p>
                        <p className='Header_menu_icon_2'></p>
                        <p className='Header_menu_icon_3'></p>
                        <p className='Header_menu_icon_4'></p>
                        <p className='Header_menu_icon_5'></p>
                        <p className='Header_menu_icon_6'></p>
                    </div>
                </div>
                    {activeHandler === 11 && (
                        <div className='header_menu_supply_activate'>
                            <input className='header_menu_supply_activate_close' type="image" src='/public/close_2428586.png' onClick={handleCloseClick}></input>
                            <div className='header_menu_opacity_bgc'></div>
                            <div className="scaled-iframe-container">
                                <iframe src="http://partner-tech.ru" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <a className='header_menu_menu_3' href='/contacts'>Контакты</a>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_5' href='/'>+7 (901) 005-70-88</a>
                                <a className='header_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                    <div className='contacts_menu'>
                       <a href='/about'><p>О нас</p></a>
                        <p>info@partner-tech.ru</p>
                        <p>+7 (901) 005-70-88</p>
                        <div className='contacts_top'>
                            <img className='contacts_phone' src='/public/fone_1.png' alt='фон'/>

                        </div>
                    </div>
                    <p className='contacts_title'>Контакты</p>
                    <h1 className='Contacts_title'>Контакты</h1>
                          <div className='Contacts_info_glav'>
                              <p className='Contacts_info'>350012</p>
                              <p className='Contacts_info'>Краснодарский край</p>
                              <p className='Contacts_info'>г. Краснодар</p>
                              <p className='Contacts_info'>ул. Красных Партизан 1/4 к.9 офис 20</p>
                              <p className='Contacts_info'>+ 7 (918) 331<span className='dop_1_span'>-</span>25<span className='dop_1_span'>-</span>57</p>
                              <p className='Contacts_info'>info@partner-tech.ru</p>
                              <p className='Contacts_info_callback' style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&to=info@partner-tech.ru'} role="link">Связаться с нами</p>
                              <iframe className='Contacts_card' src="https://yandex.ru/map-widget/v1/?um=constructor%3A34e162cd08a82e01ff38ac0c14372b9b29534f0b7c5a30aaa1defb6b19007a34&amp;source=constructor" frameBorder="0"></iframe>
                            </div>
                        </div>
                </div>
        </body>
        </html>
    );
}

export default Contacts