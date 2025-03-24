import './Cadastr.css'
import React, {useEffect, useState, useRef} from "react";
import {Helmet} from "react-helmet";
import { HashLink } from "react-router-hash-link";

const Cadastr = () =>  {
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
         <title>Газификация</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    </head>
        <body className='custom-zoom-page_cs'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Helmet>
            <meta charSet="UTF-8"/>
            <title>Кадастровые работы - ПАРТНЕР</title>
            <meta name="description" content="Комплексные решения в области кадастровых работ. Получите консультацию сейчас!"/>
            <meta name="keywords" content="кадастр, кадастровые работы, межевание участка, межевание земельного участка, Снижение кадастровой стоимости"/>
            </Helmet>
        <div className='cadastr'>
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
                                <iframe src="http://partner-tech.ru/cadastr" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <HashLink to="/#uslugi">Услуги</HashLink>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_5' href='/'>+7 (901) 005-70-88</a>
                                <a className='header_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className='cadastr_for'>
                    <div className='cadastr_for_block'>
                        <p className='cadastr_for_img1'/>
                        <p className='cadastr_for_img2'/>
                        <p className='cadastr_for_img3'/>
                        <p className='cadastr_for_img4'/>
                        <p className='cadastr_for_img5'/>
                        <p className='cadastr_for_img6'/>
                        <div className='cadastr_for_block_org'>
                            <h2 className='cadastr_for_block_org_title'>Услуги для организации</h2>
                            <div className='cadastr_for_block_org_block'>
                                <p className='cadastr_for_block_org_text_1'>Проектирование газораспределительных пунктов</p>
                                <p className='cadastr_for_block_org_text_2'>Проектирование наружных газопроводов</p>
                                <p className='cadastr_for_block_org_text_3'>Проектирование котельной</p>
                                <p className='cadastr_for_block_org_text_4'>Проектирование газоснабжения котельной</p>
                                <p className='cadastr_for_block_org_text_5'>Проект газоснабжения промышленных предприятий</p>
                                <p className='cadastr_for_block_org_text_6'>Вынос газопроводов из под пятна строительства</p>
                                <p className='cadastr_for_block_org_text_7'>Разработка схемы газоснабжения объекта</p>
                                <p className='cadastr_for_block_org_text_8'>Инженерные изыскания</p>
                            </div>
                        </div>

                        <div className='cadastr_for_block_ur'>
                            <h2 className='cadastr_for_block_ur_title'>Услуги для частных лиц</h2>
                            <div className='cadastr_for_block_ur_block'>
                                <p className='cadastr_for_block_ur_text_1'>Газификация частного дома</p>
                                <p className='cadastr_for_block_ur_text_2'>Проект газоснабжения квартиры или переноса газопровода</p>
                                <p className='cadastr_for_block_ur_text_3'>Демонтаж газового оборудования</p>
                                <p className='cadastr_for_block_ur_text_4'>Топографическая съёмка для ТУ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cadastr_1'>
                    <h2 className='cadastr_1_title'>Кадастровые работы</h2>
                    <p className='cadastr_1_text'>Наша компания, используя многолетний опыт в этой сфере, предоставляет полный спектр услуг по кадастровому учету и землеустройству. Мы проводим все необходимые измерения и расчеты с учетом последних нормативных требований, обеспечивая точность и юридическую корректность всех кадастровых работ. </p>
                    <img className='cadastr_1_img' src='/public/cads.webp'/>
                    <img className='cadastr_fon_img' src='/public/fon_tochki.png' />
                </div>

            <div className='cadastr_2'>
                <h2 className='cadastr_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='cadastr_2_title_text'>Кадастровые работы и согласование кадастровых документов выполняются квалифицированными специалистами, обладающими необходимыми лицензиями и допусками на проведение данного вида деятельности.</p>
              <div className='cadastr_2_block'>
                  <p className='cadastr_2_block_img_1'/>
                  <p className='cadastr_2_block_img_2' />
                    <p className='cadastr_2_block_img_3' />
                  <p className='cadastr_2_block_img_4' />
                  <p className='cadastr_2_block_img_5' />
                <p className='cadastr_2_block_img_6' />
                  <p className='cadastr_2_block_img_7' />
                    <p className='cadastr_2_block_img_8' />
                    <p className='cadastr_2_block_img_9' />
                    <p className='cadastr_2_block_img_10' />
                      <p className='cadastr_2_block_img_11' />
                      <p className='cadastr_2_block_img_12' />
                      <p className='cadastr_2_block_img_13' />
                      <p className='cadastr_2_block_img_14' />
                      <p className='cadastr_2_block_img_15' />
                  <img className='transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='cadastr_2_block_1'>
                      <img className='cadastr_2_block_1_img_1' src='/public/ish.png'/>
                      <p className='cadastr_2_block_1_text_1'> Исходные данные</p>
                      <p className='cadastr_2_block_1_text_2'>получаем всю необходимую исходно- разрешительную документацию </p>
                      <p className='cadastr_2_block_1_text_3'>01</p>
                  </div>
                  <div className='cadastr_2_block_2'>
                       <img className='cadastr_2_block_1_img_2' src='/public/russia.png'/>
                      <p className='cadastr_2_block_1_text_1'>Изыскания</p>
                      <p className='cadastr_2_block_1_text_2'> получение топографо-геодезических изысканий и данных о рельефе местности.</p>
                      <p className='cadastr_2_block_2_text_3'>02</p>
                  </div>
                  <div className='cadastr_2_block_3'>
                    <img className='cadastr_2_block_1_img_3' src='/public/proekt.png'/>
                      <p className='cadastr_2_block_1_text_1'>Разработка проекта</p>
                      <p className='cadastr_2_block_1_text_2'>с техническими решениями обеспечивающими безопасную для жизни и здоровья среду</p>
                      <p className='cadastr_2_block_3_text_3'>03</p>
                  </div>
                  <div className='cadastr_2_block_4'>
                    <img className='cadastr_2_block_1_img_4' src='/public/sogl.png'/>
                      <p className='cadastr_2_block_1_text_1'>Согласование</p>
                      <p className='cadastr_2_block_1_text_2'>Согласование проекта со всеми организациями, инстанциями и структурами. </p>
                      <p className='cadastr_2_block_4_text_3'>04</p>
                  </div>
                  <div className='cadastr_2_block_5'>
                    <img className='cadastr_2_block_1_img_5' src='/public/exper.png'/>
                      <p className='cadastr_2_block_1_text_1'>Экспертиза</p>
                      <p className='cadastr_2_block_1_text_2'>Прохождение экспертизы промышленной безопасности проектной документации </p>
                      <p className='cadastr_2_block_5_text_3'>05</p>
                  </div>
                  <div className='cadastr_2_block_6'>
                    <img className='cadastr_2_block_1_img_6' src='/public/lupa.png'/>
                      <p className='cadastr_2_block_1_text_1'>Авторский надзор</p>
                      <p className='cadastr_2_block_1_text_2'>контроль соблюдения в процессе строительства требований проектной документации </p>
                      <p className='cadastr_2_block_6_text_3'>06</p>
                  </div>
              </div>





            </div>









              <div className='cadastr_uslugi'>
                <p className='cadastr_uslugi_title'>Наши услуги</p>
                <div className={`cadastr_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='cadastr_body_uslugi_box_title_1'>Межевание земельного участка</h2>
                    <img className='cadastr_body_box1_image' src='/public/box1.jpg'/>
                    <p className='cadastr_body_price'>от 6.000 руб.</p>
                    <p className='cadastr_body_text'>Установление границ и меток на участке для определения его площади и правовых ограничений</p>
                    <input className={`cadastr_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`cadastr_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='cadastr_body_uslugi_box_title_2'>Технический план ОКС</h2>
                    <img className='cadastr_body_box2_image' src='/public/box2.jpg'/>
                    <p className='cadastr_body_price2'>от 8.000 руб.</p>
                    <p className='cadastr_body_text2'>Составление документа характеристик и параметров строительных объектов с целью регистрации и учета в соответствии с законодательством</p>
                    <input className={`cadastr_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`cadastr_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_3'>Акт обследования</h2>
                   <img className='cadastr_body_box3_image' src='/public/box3.png'/>
                   <p className='cadastr_body_price3'>от 10.000 руб.</p>
                    <p className='cadastr_body_text3'>Документальное подтверждение результатов осмотра объекта или территории с указанием выявленных характеристик, состояния или проблем</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_4'>Формирование з/у и схема на КПТ</h2>
                   <img className='cadastr_body_box4_image' src='/public/box4.jpg'/>
                   <p className='cadastr_body_price4'>от 10.000 руб.</p>
                    <p className='cadastr_body_text4'>Услуги геодезической обработки и документирования земельных участков и их расположения на кадастровой карте</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_5'>Исправление кадастровых ошибок</h2>
                   <img className='cadastr_body_box5_image' src='/public/geo_camer.jpg'/>
                   <p className='cadastr_body_price5'>от 8.000 руб.</p>
                    <p className='cadastr_body_text5'>Коррекция и исправление недочетов или неточностей в кадастровых данных и документах для обеспечения их точности и актуальности</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`cadastr_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_6'>Межевание для выдела с/х долей</h2>
                   <img className='cadastr_body_box6_image' src='/public/geo_rap.jpg'/>
                   <p className='cadastr_body_price6'>от 12.000 руб.</p>
                    <p className='cadastr_body_text6'>Определение и оформление отдельных участков земли для с/x использования с соблюдением законодательных норм и требований</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`cadastr_body_uslugi_box7 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_7'>Снижение кадастровой стоимости</h2>
                   <img className='cadastr_body_box7_image' src='/public/geo_sopr.jpg'/>
                   <p className='cadastr_body_price7'>от 10.000 руб.</p>
                    <p className='cadastr_body_text7'>Уменьшение оценочной стоимости недвижимости или земельного участка, для снижения налоговых и иных финансовых обременений</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`cadastr_body_uslugi_box8 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='cadastr_body_uslugi_box_title_8'>Строительно-планировочное задание (СПЗ) </h2>
                   <img className='cadastr_body_box8_image' src='/public/v_grunt.jpg'/>
                   <p className='cadastr_body_price8'>от 7.000 руб.</p>
                    <p className='cadastr_body_text8'>Определение назначения земли, допустимые строительные работы и параметры объектов, которые могут быть построены на участке</p>
                    <input className={`cadastr_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
          </div>
            <div className={`cadastr_footer ${activeHandler === 1 ? 'cadastr_footer-shot_1_1' : '' || activeHandler === 2 ? 'cadastr_footer-shot_2_1' : '' || activeHandler === 3 ? 'cadastr_footer-shot_3_1' : '' || activeHandler === 4 ? 'cadastr_footer-shot_4_1' : '' || activeHandler === 5 ? 'cadastr_footer-shot_5_1' : '' || activeHandler === 6 ? 'cadastr_footer-shot_6_1' : '' || activeHandler === 7 ? 'cadastr_footer-shot_7_1' : '' || activeHandler === 8 ? 'cadastr_footer-shot_8_1' : '' || activeHandler === 9 ? 'cadastr_footer-shot_9_1' : ''  }`}>
                <div className='cadastr_footer_1'>
                    <img className='cadastr_footer_1_img' src='/public/logo_new.png'/>
                    <img className='cadastr_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='cadastr_footer_2'>
                    <p className='cadastr_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='cadastr_footer_2_text_2'>г.Краснодар ул.Красных Партизан 1/4 к9,<br/>офис 20</p>
                </div>
                <div className='cadastr_footer_4'>
                    <p className='cadastr_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='cadastr_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='cadastr_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='cadastr_footer_5'>
                    <p className='cadastr_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='cadastr_footer_2_text_2'>+7 (901) 005-70-88</p>
                    <p className='cadastr_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='cadastr_footer_6'>
                    <p className='cadastr_footer_2_text_1'>E-MAIL</p>
                    <p className='cadastr_footer_2_text_2'>info@partner-tech.ru</p>
                    <p className='cadastr_footer_2_text_3'>mail@partner-krd.ru</p>
                </div>
                <div className='cadastr_footer_7'>
                    <p className='cadastr_footer_2_text_1'>ИНФОРМАЦИЯ</p>
                    <p className='cadastr_footer_2_text_11' style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/about'} role="link">О компании</p>
                    <p className='cadastr_footer_2_text_21'></p>
                </div>

                </div>





        </div>
        </body>
      </html>
  );
}


export default Cadastr