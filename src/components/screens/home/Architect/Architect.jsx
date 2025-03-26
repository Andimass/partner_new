import './Architect.css'
import React, {useEffect, useState, useRef} from "react";
import { HashLink } from "react-router-hash-link";

const Architect = () =>  {
    const [activeHandler, setActiveHandler] = useState(0);

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
                    case 5:
                        setIsShown_5(false);
                        break;
                    case 6:
                        setIsShown_6(false);
                        break;
                    case 11:
                        setIsShown_11(false);
                        break;
                    default:
                        break;
                }
            }
            const UslugiBlock = () => {
                const [isHovered, setIsHovered] = useState(false);
                const [description, setDescription] = useState('');

                const handleMouseEnter = (desc) => {
                    setDescription(desc);
                    setIsHovered(true);
                };

                const handleMouseLeave = () => {
                    setDescription('');
                    setIsHovered(false);
                };
            }

            // Open the clicked handler
            setActiveHandler(handlerId);
        }
    };

    const [isShown, setIsShown] = useState(false);
    const [isShown_2, setIsShown_2] = useState(false);
    const [isShown_3, setIsShown_3] = useState(false);
    const [isShown_4, setIsShown_4] = useState(false);
    const [isShown_5, setIsShown_5] = useState(false);
    const [isShown_6, setIsShown_6] = useState(false);
    const [isShown_11, setIsShown_11] = useState(false);

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









  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}

window.addEventListener('scroll', function() {

    let scrollPosition = window.pageYOffset;

    let rotationDegree = scrollPosition / 10;


    document.querySelector('.transportir_1').style.transform = `rotate(${rotationDegree}deg)`;
    document.querySelector('.transportir_2').style.transform = `rotate(${rotationDegree}deg)`;
    // scrollTimeout = setTimeout(function() {
    //
    //     document.querySelector('.transportir_1').style.transition = 'none';
    //     document.querySelector('.transportir_2').style.transition = 'none';
    // }, 150);
});

         window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 0) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }

    if (scrollPosition >= 600) {
              document.querySelector('.header_black_square').style.backgroundColor = "#8DB2FB";
             document.querySelector('.header_black_square2').style.backgroundColor = "#8DB2FB";
    }

    if (scrollPosition >= 950) {
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
    }

        if (scrollPosition >= 1650) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }

            if (scrollPosition >= 2750) {
              document.querySelector('.header_black_square').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
             document.querySelector('.header_black_square2').style.backgroundColor = "rgba(246, 245, 245, 0.97)";
    }

                    if (scrollPosition >= 3150) {
              document.querySelector('.header_black_square').style.backgroundColor = "white";
             document.querySelector('.header_black_square2').style.backgroundColor = "white";
    }


             });



return (
      <html>
    <head>
         <title>Архитектура</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    </head>
        <body className='custom-zoom-page_cs '>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className='geologic'>
            <div className='header_header'>
                <a href="/">
                <img className='header_logo' src='/public/logo_new.png'/>
                </a>
                 <div className={`Header_menu_icon ${activeHandler === 11 ? 'menu_opacity' : ''}`} onClick={() => handleClick(11)}>
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
                                <iframe src="https://partner-tech.ru/architect" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <HashLink to="/contacts">Контакты</HashLink>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_5' href='/'>+7 (901) 005-70-88</a>
                                <a className='header_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className='geologic_1'>
                    <h2 className='geologic_1_title'>Архитектурные работы</h2>
                    <p className='geologic_1_text'>Наша компания, опираясь на многолетний опыт в сфере проектирования и строительства, предлагает широкий спектр услуг по созданию домов под ключ. Мы разрабатываем индивидуальные планировочные решения, создаем стильные дизайны фасадов и интерьеров, а также обеспечиваем архитектурный надзор на всех этапах строительства. Наши проекты гарантируют высокое качество, функциональность и эстетическую привлекательность каждого объекта.</p>
                    <img className='geologic_1_img'  src='/public/Arch (2).png'/>
                    <img className='geologic_fon_img' src='/public/fon_tochki.png' />
                </div>

            <div className='geologic_2'>
                <h2 className='geologic_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='geologic_2_title_text'>Архитектурные работы и согласование архитектурных документов выполняются квалифицированными специалистами, обладающими необходимыми лицензиями и допусками на проведение данного вида деятельности.</p>
              <div className='geologic_2_block'>
                  <p className='geologic_2_block_img_1'/>
                  <p className='geologic_2_block_img_2' />
                    <p className='geologic_2_block_img_3' />
                  <p className='geologic_2_block_img_4' />
                  <p className='geologic_2_block_img_5' />
                <p className='geologic_2_block_img_6' />
                  <p className='geologic_2_block_img_7' />
                    <p className='geologic_2_block_img_8' />
                    <p className='geologic_2_block_img_9' />
                    <p className='geologic_2_block_img_10' />
                      <p className='geologic_2_block_img_11' />
                      <p className='geologic_2_block_img_12' />
                      <p className='geologic_2_block_img_13' />
                      <p className='geologic_2_block_img_14' />
                      <p className='geologic_2_block_img_15' />
                  <img className='transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='geologic_2_block_1'>
                      <img className='geologic_2_block_1_img_1' src='/public/ish.png'/>
                      <p className='geologic_2_block_1_text_1'> Исходные данные</p>
                      <p className='geologic_2_block_1_text_2'>получаем всю необходимую исходно- разрешительную документацию </p>
                      <p className='geologic_2_block_1_text_3'>01</p>
                  </div>
                  <div className='geologic_2_block_2'>
                       <img className='geologic_2_block_1_img_2' src='/public/russia.png'/>
                      <p className='geologic_2_block_1_text_1'>Изыскания</p>
                      <p className='geologic_2_block_1_text_2'> получение топографо-геологических изысканий и данных о рельефе местности.</p>
                      <p className='geologic_2_block_2_text_3'>02</p>
                  </div>
                  <div className='geologic_2_block_3'>
                    <img className='geologic_2_block_1_img_3' src='/public/proekt.png'/>
                      <p className='geologic_2_block_1_text_1'>Разработка проекта</p>
                      <p className='geologic_2_block_1_text_2'>с техническими решениями обеспечивающими безопасную для жизни и здоровья среду</p>
                      <p className='geologic_2_block_3_text_3'>03</p>
                  </div>
                  <div className='geologic_2_block_4'>
                    <img className='geologic_2_block_1_img_4' src='/public/sogl.png'/>
                      <p className='geologic_2_block_1_text_1'>Согласование</p>
                      <p className='geologic_2_block_1_text_2'>Согласование проекта со всеми организациями, инстанциями и структурами. </p>
                      <p className='geologic_2_block_4_text_3'>04</p>
                  </div>
                  <div className='geologic_2_block_5'>
                    <img className='geologic_2_block_1_img_5' src='/public/exper.png'/>
                      <p className='geologic_2_block_1_text_1'>Экспертиза</p>
                      <p className='geologic_2_block_1_text_2'>Прохождение экспертизы промышленной безопасности проектной документации </p>
                      <p className='geologic_2_block_5_text_3'>05</p>
                  </div>
                  <div className='geologic_2_block_6'>
                    <img className='geologic_2_block_1_img_6' src='/public/lupa.png'/>
                      <p className='geologic_2_block_1_text_1'>Авторский надзор</p>
                      <p className='geologic_2_block_1_text_2'>контроль соблюдения в процессе строительства требований проектной документации </p>
                      <p className='geologic_2_block_6_text_3'>06</p>
                  </div>
              </div>





            </div>









              <div className='geologic_uslugi'>
                <p className='geologic_uslugi_title'>Наши услуги</p>
                  <div className='geologic_glav_box'>
                <div className={`geologic_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='geologic_body_uslugi_box_title_1'>Проект дома "Под ключ"</h2>
                    <img className='geologic_body_box1_image' src='/public/kluch (1).webp'/>
                    <p className='geologic_body_price'>от 24.000 руб.</p>
                    <p className='geologic_body_text'>Полное строительство дома с нуля до вручения ключей</p>
                    <input className={`geologic_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`geologic_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='geologic_body_uslugi_box_title_2'>Дизайн фасада дома</h2>
                    <img className='geologic_body_box2_image' src='/public/fasad (1).webp'/>
                    <p className='geologic_body_price2'>от 15.000 руб.</p>
                   <p className='geologic_body_text2'>Создание уникального внешнего вида здания.</p>
                    <input className={`geologic_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`geologic_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='geologic_body_uslugi_box_title_3'>Планировочные решения</h2>
                   <img className='geologic_body_box3_image' src='/public/planresh (1).webp'/>
                   <p className='geologic_body_price3'>от 10.000 руб.</p>
                    <p className='geologic_body_text3'>Оптимизация пространства для комфорта и функциональности.</p>
                    <input className={`geologic_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`geologic_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='geologic_body_uslugi_box_title_4'>Дизайн интерьера дома</h2>
                   <img className='geologic_body_box4_image' src='/public/intr (1).webp'/>
                   <p className='geologic_body_price4'>от 15.000 руб.</p>
                    <p className='geologic_body_text4'>Стильное и гармоничное оформление внутренних помещений.</p>
                    <input className={`geologic_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`geologic_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='geologic_body_uslugi_box_title_5'>Архитектурный надзор</h2>
                   <img className='geologic_body_box5_image' src='/public/nadzor (1).webp'/>
                   <p className='geologic_body_price5'>от 4.000 руб.</p>
                    <p className='geologic_body_text5'>Контроль за соответствием строительства проектной документации.</p>
                    <input className={`geologic_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`geologic_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geologic_body_uslugi_box_title_6'>Дизайн экстерьера</h2>
                   <img className='geologic_body_box6_image' src='/public/ecstr (1).webp'/>
                   <p className='geologic_body_price6'>от 15.000 руб.</p>
                    <p className='geologic_body_text6'>Оформление внешнего пространства, ландшафтный дизайн.</p>
                    <input className={`geologic_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
                  </div>
          </div>
            <div className={`geologic_footer ${activeHandler === 1 ? 'geologic_footer-shot_1_1' : '' || activeHandler === 2 ? 'geologic_footer-shot_2_1' : '' || activeHandler === 3 ? 'geologic_footer-shot_3_1' : '' || activeHandler === 4 ? 'geologic_footer-shot_4_1' : '' || activeHandler === 5 ? 'geologic_footer-shot_5_1' : '' || activeHandler === 6 ? 'geologic_footer-shot_6_1' : '' || activeHandler === 7 ? 'geologic_footer-shot_7_1' : '' || activeHandler === 8 ? 'geologic_footer-shot_8_1' : '' || activeHandler === 9 ? 'geologic_footer-shot_9_1' : ''  }`}>
                <div className='geologic_footer_1'>
                    <img className='geologic_footer_1_img' src='/public/logo_new.png'/>
                    <img className='geologic_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='geologic_footer_2'>
                    <p className='geologic_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='geologic_footer_2_text_2'>г.Краснодар ул.Красных Партизан 1/4 к9,<br/>офис 20</p>
                </div>
                <div className='geologic_footer_4'>
                    <p className='geologic_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='geologic_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='geologic_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='geologic_footer_5'>
                    <p className='geologic_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='geologic_footer_2_text_2'>+7 (901) 005-70-88</p>
                    <p className='geologic_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='geologic_footer_6'>
                    <p className='geologic_footer_2_text_1'>E-MAIL</p>
                    <p className='geologic_footer_2_text_2' style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&to=info@partner-tech.ru'} role="link">info@partner-tech.ru</p>
                    <p className='geologic_footer_2_text_3' style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&to=mailo@partner-krd.ru'} role="link">mail@partner-krd.ru</p>
                </div>
                <div className='geologic_footer_7'>
                    <p className='geologic_footer_2_text_1'>ИНФОРМАЦИЯ</p>
                    <p className='geologic_footer_2_text_11' style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/about'} role="link">О компании</p>
                    <p className='geologic_footer_2_text_21' style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/contacts'} role="link">Контакты</p>
                </div>

                </div>





        </div>
        </body>
      </html>
  );
}


export default Architect