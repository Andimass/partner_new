
import './Header.scss'
import React, {useEffect, useState, useRef} from "react";
import $ from "jquery";
import p5 from "p5";
import {Helmet} from "react-helmet";

let currentRotation = 60; // Текущий угол поворота
function rotateCircles() {
    currentRotation += 60; // Увеличиваем текущий угол на 60
    // document.querySelectorAll('.circle_img_2').forEach(circle => {
    //     circle.style.transform = `rotate(${-currentRotation}deg)`; // Применяем новый угол поворота
    // });
    document.querySelectorAll('.header_circle_three_color').forEach(circle => {
        circle.style.transform = `rotate(${currentRotation}deg)`; // Применяем новый угол поворота
    });

    if (currentRotation === 60) {
        document.querySelector('.header_container_5_text_1').style.display = 'block';
        document.querySelector('.header_container_5_img_1').style.display = 'block';
        document.querySelector('.header_container_5_text_2').style.display = 'none';
        document.querySelector('.header_container_5_img_2').style.display = 'none';
        document.querySelector('.header_container_5_text_3').style.display = 'none';
        document.querySelector('.header_container_5_img_3').style.display = 'none';
        document.querySelector('.header_container_5_text_4').style.display = 'none';
        document.querySelector('.header_container_5_img_4').style.display = 'none';
        document.querySelector('.header_container_5_text_5').style.display = 'none';
        document.querySelector('.header_container_5_img_5').style.display = 'none';
        document.querySelector('.header_container_5_text_6').style.display = 'none';
        document.querySelector('.header_container_5_img_6').style.display = 'none';
    }
    else if (currentRotation === 120) {
        document.querySelector('.header_container_5_text_1').style.display = 'none';
        document.querySelector('.header_container_5_img_1').style.display = 'none';
        document.querySelector('.header_container_5_text_2').style.display = 'block';
        document.querySelector('.header_container_5_img_2').style.display = 'block';
        document.querySelector('.header_container_5_text_3').style.display = 'none';
        document.querySelector('.header_container_5_img_3').style.display = 'none';
        document.querySelector('.header_container_5_text_4').style.display = 'none';
        document.querySelector('.header_container_5_img_4').style.display = 'none';
        document.querySelector('.header_container_5_text_5').style.display = 'none';
        document.querySelector('.header_container_5_img_5').style.display = 'none';
        document.querySelector('.header_container_5_text_6').style.display = 'none';
        document.querySelector('.header_container_5_img_6').style.display = 'none';
    }

    else if (currentRotation === 180) {
        document.querySelector('.header_container_5_text_1').style.display = 'none';
        document.querySelector('.header_container_5_img_1').style.display = 'none';
        document.querySelector('.header_container_5_text_2').style.display = 'none';
        document.querySelector('.header_container_5_img_2').style.display = 'none';
        document.querySelector('.header_container_5_text_3').style.display = 'block';
        document.querySelector('.header_container_5_img_3').style.display = 'block';
        document.querySelector('.header_container_5_text_4').style.display = 'none';
        document.querySelector('.header_container_5_img_4').style.display = 'none';
        document.querySelector('.header_container_5_text_5').style.display = 'none';
        document.querySelector('.header_container_5_img_5').style.display = 'none';
        document.querySelector('.header_container_5_text_6').style.display = 'none';
        document.querySelector('.header_container_5_img_6').style.display = 'none';
    }

    else if (currentRotation === 240) {
        document.querySelector('.header_container_5_text_1').style.display = 'none';
        document.querySelector('.header_container_5_img_1').style.display = 'none';
        document.querySelector('.header_container_5_text_2').style.display = 'none';
        document.querySelector('.header_container_5_img_2').style.display = 'none';
        document.querySelector('.header_container_5_text_3').style.display = 'none';
        document.querySelector('.header_container_5_img_3').style.display = 'none';
        document.querySelector('.header_container_5_text_4').style.display = 'block';
        document.querySelector('.header_container_5_img_4').style.display = 'block';
        document.querySelector('.header_container_5_text_5').style.display = 'none';
        document.querySelector('.header_container_5_img_5').style.display = 'none';
        document.querySelector('.header_container_5_text_6').style.display = 'none';
        document.querySelector('.header_container_5_img_6').style.display = 'none';
    }

    else if (currentRotation === 300) {
        document.querySelector('.header_container_5_text_1').style.display = 'none';
        document.querySelector('.header_container_5_img_1').style.display = 'none';
        document.querySelector('.header_container_5_text_2').style.display = 'none';
        document.querySelector('.header_container_5_img_2').style.display = 'none';
        document.querySelector('.header_container_5_text_3').style.display = 'none';
        document.querySelector('.header_container_5_img_3').style.display = 'none';
        document.querySelector('.header_container_5_text_4').style.display = 'none';
        document.querySelector('.header_container_5_img_4').style.display = 'none';
        document.querySelector('.header_container_5_text_5').style.display = 'block';
        document.querySelector('.header_container_5_img_5').style.display = 'block';
        document.querySelector('.header_container_5_text_6').style.display = 'none';
        document.querySelector('.header_container_5_img_6').style.display = 'none';
    }

    else if (currentRotation === 360) {
        document.querySelector('.header_container_5_text_1').style.display = 'none';
        document.querySelector('.header_container_5_img_1').style.display = 'none';
        document.querySelector('.header_container_5_text_2').style.display = 'none';
        document.querySelector('.header_container_5_img_2').style.display = 'none';
        document.querySelector('.header_container_5_text_3').style.display = 'none';
        document.querySelector('.header_container_5_img_3').style.display = 'none';
        document.querySelector('.header_container_5_text_4').style.display = 'none';
        document.querySelector('.header_container_5_img_4').style.display = 'none';
        document.querySelector('.header_container_5_text_5').style.display = 'none';
        document.querySelector('.header_container_5_img_5').style.display = 'none';
        document.querySelector('.header_container_5_text_6').style.display = 'block';
        document.querySelector('.header_container_5_img_6').style.display = 'block';
        if (currentRotation === 360) {
            currentRotation = 0
        }
    }
}


const Header = () => {


    const [activeHandler, setActiveHandler] = useState(1);

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
                    case 111:
                        setIsShown_111(false);
                        break;
                    case 112:
                        setIsShown_112(false);
                        break;
                    case 113:
                        setIsShown_113(false);
                        break;
                    case 114:
                        setIsShown_114(false);
                        break;
                    case 115:
                        setIsShown_115(false);
                        break;
                    case 116:
                        setIsShown_116(false);
                        break;
                    case 117:
                        setIsShown_117(false);
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

    useEffect(() => {
    if (activeHandler === null) {
        // Откройте первый обработчик по умолчанию
        setIsShown(true);
        setActiveHandler(1);
    }
}, [activeHandler]);

    const [isShown, setIsShown] = useState(false);
    const [isShown_2, setIsShown_2] = useState(false);
    const [isShown_3, setIsShown_3] = useState(false);
    const [isShown_4, setIsShown_4] = useState(false);
    const [isShown_5, setIsShown_5] = useState(false);
    const [isShown_6, setIsShown_6] = useState(false);
    const [isShown_11, setIsShown_11] = useState(false);
    const [isShown_111, setIsShown_111] = useState(false);
    const [isShown_112, setIsShown_112] = useState(false);
    const [isShown_113, setIsShown_113] = useState(false);
    const [isShown_114, setIsShown_114] = useState(false);
    const [isShown_115, setIsShown_115] = useState(false);
    const [isShown_116, setIsShown_116] = useState(false);
    const [isShown_117, setIsShown_117] = useState(false);
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

    const [currentNumber, setCurrentNumber] = useState(0);
    const [incrementing, setIncrementing] = useState(false);
    const targetNumber = 10283;
    const animationDuration = 2000; // Продолжительность анимации в миллисекундах
    const frameDuration = 1000 / 60; // Продолжительность одного кадра (60 FPS)

    const totalFrames = Math.round(animationDuration / frameDuration);
    const increment = Math.ceil(targetNumber / totalFrames);
    const dop_number = 1;

    // Функция для отправки запроса на сервер для обновления значения
    const updateNumberInDatabase = (newValue) => {
        // Здесь вы можете использовать Fetch API или другую библиотеку для отправки запроса на сервер
        // Пример Fetch API:
        fetch('/your-api-endpoint', {
            method: 'POST', // Метод запроса для обновления значения
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({value: newValue}), // Отправляем новое значение на сервер
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Значение успешно обновлено в базе данных.');
                } else {
                    console.error('Произошла ошибка при обновлении значения в базе данных.');
                }
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
            });
    };

    useEffect(() => {
        let frame = 0;
        const interval = setInterval(() => {
            if (frame < totalFrames) {
                setCurrentNumber((prevNumber) => prevNumber + increment);
                frame++;
            } else {
                setCurrentNumber(targetNumber);
                clearInterval(interval);
                setIncrementing(true); // Установка флага для увеличения на 1
                updateNumberInDatabase(targetNumber); // Отправляем окончательное значение на сервер
            }
        }, frameDuration);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (incrementing) {
            const incrementInterval = setInterval(() => {
                setCurrentNumber((prevNumber) => {
                    const newNumber = prevNumber + dop_number;
                    updateNumberInDatabase(newNumber); // Отправляем новое значение на сервер
                    return newNumber;
                });
            }, 3000); // Каждую секунду увеличиваем число на 1

            return () => {
                clearInterval(incrementInterval);
            };
        }
    }, [incrementing]);

    function restartAnimation(element) {
        element.style.animation = 'none';
        element.offsetHeight; // Требуется перерендерить элемент
        element.style.animation = null;
    }



    const containerRef = useRef();

//   useEffect(() => {
//     const sketch = (p) => {
//       let balls = [];
//       let img;
//       let imageSizes = [
//           {width: 100, height: 25},
//           {width: 100, height: 55},
//           {width: 75, height: 75},
//           {width: 200, height: 91},
//           {width: 190, height: 150},
//           {width: 100, height: 20},
//           {width: 117, height: 82},
//           {width: 132, height: 92},
//           {width: 82, height: 93},
//           {width: 93, height: 83}
//         ];
//
//       p.preload = () => {
//         img = [];
//           for (let i = 0; i < 10; i++) {
//             img[i] = p.loadImage('./public/part' + (i + 1) + '.png');  // предполагая, что у вас есть изображения part1.png, part2.png и т.д.
//           }
//       };
//
// p.setup = () => {
//   if (document.querySelector('.Header').style.Width === 390) {
//     p.createCanvas(1, 1); // Создание холста размером 1x1 пиксель для маленьких экранов
//   }
//   else {
//     p.createCanvas(2480, 600); // Стандартный размер для больших экранов
//   }
//
//   // После создания холста, инициализируйте остальные элементы
//   for (let i = 0; i < 10; i++) {
//     balls.push(new Ball(p.random(p.width), p.random(p.height), p.random(125, 320), p, i));
//   }
// };
//
//         p.draw = () => {
//             p.background(255);
//
//             for (let i = 0; i < balls.length; i++) {
//                 balls[i].update();
//                 balls[i].display();
//                 balls[i].checkEdges();
//                 balls[i].checkCollision(balls);
//                 balls[i].handleMouseInteraction();  // Добавьте эту строку
//             }
//         };
//
//       class Ball {
//           constructor(x, y, diameter, p, imgIndex) {  // imgIndex - индекс изображения
//               this.x = x;
//               this.y = y;
//               this.diameter = diameter;
//               this.img = img[imgIndex];
//               this.imgWidth = imageSizes[imgIndex].width;
//               this.imgHeight = imageSizes[imgIndex].height;
//               this.speedX = p.random(-2, 2);
//               this.speedY = p.random(-2, 2);
//               this.p = p;
//               this.initialSpeedX = this.speedX;
//               this.initialSpeedY = this.speedY;
//           }
//
//           getBorderRadius() {
//               let offset = 39;
//               return Math.max(this.imgWidth, this.imgHeight) / 2 + offset;
//           }
//
//           update() {
//               this.x += this.speedX;
//               this.y += this.speedY;
//           }
//
//           display() {
//               this.p.imageMode(this.p.CENTER);
//               this.p.image(this.img, this.x, this.y, this.imgWidth, this.imgHeight);
//
//               // Обводка
//               let offset = 73;
//               let maxDimension = Math.max(this.imgWidth, this.imgHeight) + offset;
//               this.p.stroke(0); // Цвет обводки (в этом случае черный)
//               this.p.strokeWeight(1); // Толщина обводки
//               this.p.noFill(); // Убедитесь, что круг пустой внутри
//               this.p.ellipse(this.x, this.y, maxDimension);
//           }
//
//           checkEdges() {
//               let radius = this.getBorderRadius();
//
//               if (this.x > this.p.width - radius) {
//                   this.x = this.p.width - radius;
//                   this.speedX *= -1;
//               } else if (this.x < radius) {
//                   this.x = radius;
//                   this.speedX *= -1;
//               }
//
//               if (this.y > this.p.height - radius) {
//                   this.y = this.p.height - radius;
//                   this.speedY *= -1;
//               } else if (this.y < radius) {
//                   this.y = radius;
//                   this.speedY *= -1;
//               }
//           }
//
//           handleMouseInteraction() {
//               let d = this.p.dist(this.x, this.y, this.p.mouseX, this.p.mouseY);
//               let minDist = this.getBorderRadius() + 15;  // 50 - это радиус "отталкивания" от курсора
//               if (d < minDist) {
//                   let angle = this.p.atan2(this.y - this.p.mouseY, this.x - this.p.mouseX);
//                   let overlap = minDist - d;
//                   let ax = this.p.cos(angle) * overlap;
//                   let ay = this.p.sin(angle) * overlap;
//                   this.x += ax;
//                   this.y += ay;
//                   this.speedX = this.p.cos(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;
//                   this.speedY = this.p.sin(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;
//
//                   setTimeout(() => {
//                       this.speedX = this.initialSpeedX;
//                       this.speedY = this.initialSpeedY;
//                   }, 3000)
//               }
//           }
//
//           checkCollision(balls) {
//               for (let i = 0; i < balls.length; i++) {
//                   let other = balls[i];
//                   if (this !== other) {
//                       let d = this.p.dist(this.x, this.y, other.x, other.y);
//                       let minDist = this.getBorderRadius() + other.getBorderRadius(); // учитываем обводку
//
//                       if (d < minDist) {
//                           let angle = Math.atan2(other.y - this.y, other.x - this.x);
//                           let overlap = minDist - d;
//                           let ax = Math.cos(angle) * overlap * 0.5;
//                           let ay = Math.sin(angle) * overlap * 0.5;
//
//                           this.x -= ax;
//                           this.y -= ay;
//                           other.x += ax;
//                           other.y += ay;
//
//                           this.speedX = -this.speedX;
//                           this.speedY = -this.speedY;
//                           other.speedX = -other.speedX;
//                           other.speedY = -other.speedY;
//                       }
//                   }
//               }
//           }
//       }
//     };

  //   const myP5 = new p5(sketch, containerRef.current);
  //
  //   return () => {
  //     myP5.remove();
  //   };
  // }, []);

  window.addEventListener('scroll', function() {
    // Получите текущую позицию прокрутки
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Определите уровень прокрутки, на котором вы хотите изменить цвет. Например, 300px.
    if (scrollPosition > 1100 && scrollPosition < 1730) {
        document.querySelector('.header_black_square').style.backgroundColor = 'rgb(246,245,245)';  // Новый цвет для header_black_square
        document.querySelector('.header_black_square2').style.backgroundColor = 'rgb(246,245,245)'; // Новый цвет для header_black_square2
    }
    else {
        document.querySelector('.header_black_square').style.backgroundColor = 'rgba(255, 255, 255)';  // Оригинальный цвет для header_black_square
        document.querySelector('.header_black_square2').style.backgroundColor = 'rgba(255, 255, 255)'; // Оригинальный цвет для header_black_square2
    }
});

          const numberOfImages = 12;
             const radius = 360; // radius of the circle in pixels
          const images = ['/public/vec1.png', '/public/vec2.png', '/public/vec3.png', '/public/vec4.png', '/public/vec5.png', '/public/vec6.png', '/public/vec7.png', '/public/vec8.png', '/public/vec9.png', '/public/vec10.png', '/public/vec11.png', '/public/vec12.png'];

        const calculatePositionAndRotation = (index) => {
            const angle = (360 / numberOfImages) * index - 90;
            const angleInRadians = angle * (Math.PI / 180);
            const x = Math.cos(angleInRadians) * radius;
            const y = Math.sin(angleInRadians) * radius;
            return {
                positionStyle: {
                    transform: `translate(${x}px, ${y}px)`
                },
                imageStyle: {
                    transform: `rotate(${-angle-30}deg)`
                }
            };
        }
            const gifImageRef = useRef(null);

            useEffect(() => {
                const resetGif = () => {
                    const currentSrc = gifImageRef.current.src;
                    gifImageRef.current.src = ''; // Сброс src
                    gifImageRef.current.src = currentSrc; // Повторная установка src для перезагрузки GIF
                };

                const hoverAreas = [];

        for (let i = 1; i <= 7; i++) {
            const hoverArea = document.querySelector(`.header_top_comp_2_title_${i}`);
            if (hoverArea) {
                hoverArea.addEventListener('mouseenter', resetGif);
                hoverAreas.push(hoverArea); // Сохраняем для последующего удаления обработчика
            }
        }

        // Очистка при размонтировании компонента
        return () => {
            hoverAreas.forEach(hoverArea => {
                hoverArea.removeEventListener('mouseenter', resetGif);
            });
        };
    }, []);

        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_5');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_8');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_5');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_8');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_1');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);


        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_11');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_7');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_11');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_7');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_2');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };

    }, []);

        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_10');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_6');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_10');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_6');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_3');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);

                useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_11');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_4');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_11');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_4');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_4');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);

        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_12');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_6');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_1');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_12');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_6');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_5');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);

        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_8');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_9');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_2');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_8');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_9');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_6');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);

        useEffect(() => {
        // Функция для изменения стиля
        const applyStyle = () => {
            const circle = document.querySelector('.header_top_circle_3');
            if (circle) {
                circle.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_2 = document.querySelector('.header_top_circle_5');
            if (circle_2) {
                circle_2.style.filter = 'url(#ambilight) grayscale(0%)';
            }
            const circle_3 = document.querySelector('.header_top_circle_8');
            if (circle_3) {
                circle_3.style.filter = 'url(#ambilight) grayscale(0%)';
            }
        };

        // Функция для сброса стиля
        const resetStyle = () => {
            const circle = document.querySelector('.header_top_circle_3');
            if (circle) {
                circle.style.filter = '';
            }
            const circle_2 = document.querySelector('.header_top_circle_5');
            if (circle_2) {
                circle_2.style.filter = '';
}            const circle_3 = document.querySelector('.header_top_circle_8');
            if (circle_3) {
                circle_3.style.filter = '';
            }

        };

        // Получаем элемент для наведения
        const titleElement = document.querySelector('.header_top_comp_2_title_7');
        if (titleElement) {
            titleElement.addEventListener('mouseenter', applyStyle);
            titleElement.addEventListener('mouseleave', resetStyle);
        }

        // Очистка при размонтировании компонента
        return () => {
            if (titleElement) {
                titleElement.removeEventListener('mouseenter', applyStyle);
                titleElement.removeEventListener('mouseleave', resetStyle);
            }
        };
    }, []);


    const [number, setNumber] = useState(12683); // Начальное значение

    useEffect(() => {
        const interval = setInterval(() => {
            setNumber(prevNumber => prevNumber + 1); // Увеличиваем число на 1 каждую секунду
        }, 1000); // Устанавливаем интервал в 1000 мс (1 секунда)

        return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
    }, []);


      const handleMouseEnter = () => {
        const hoverImage = document.getElementById('hoverImage');
        hoverImage.style.display = 'block';
        };


        const handleMouseLeave = () => {
            const hoverImage = document.getElementById('hoverImage');
            hoverImage.style.display = 'none';
        };


        const handleMouseMove = (e) => {
            const hoverImage = document.getElementById('hoverImage');
            const offset = -300; // Отступ от курсора
            const onset = 160;
        };


        const handleMouseMove_2 = (e) => {
            const hoverImage = document.getElementById('hoverImage_2');
            const offset = 560; // Отступ от курсора
             const onset = 160; // Отступ от курсора
            const imageWidth = hoverImage.offsetWidth; // Ширина картинки

            // Позиционируем картинку слева от курсора
        };

        const handleMouseEnter_2 = () => {
            const hoverImage = document.getElementById('hoverImage_2');
            hoverImage.style.display = 'block';
        };
        const handleMouseLeave_2 = () => {
            const hoverImage = document.getElementById('hoverImage_2');
            hoverImage.style.display = 'none';
        };

                const handleMouseMove_3 = (e) => {
            const hoverImage = document.getElementById('hoverImage_3');
            const offset = -700; // Отступ от курсора
           const onset = 160; // Отступ от курсора
            const imageWidth = hoverImage.offsetWidth; // Ширина картинки

            // Позиционируем картинку слева от курсора
        };

        const handleMouseEnter_3 = () => {
            const hoverImage = document.getElementById('hoverImage_3');
            hoverImage.style.display = 'block';
        };
        const handleMouseLeave_3 = () => {
            const hoverImage = document.getElementById('hoverImage_3');
            hoverImage.style.display = 'none';
        };

        const handleMouseMove_4 = (e) => {
            const hoverImage = document.getElementById('hoverImage_4');
            const offset = 560; // Отступ от курсора
            const onset = -60; // Отступ от курсора
        };

        const handleMouseEnter_4 = () => {
        const hoverImage = document.getElementById('hoverImage_4');
        hoverImage.style.display = 'block';
        };
        const handleMouseLeave_4 = () => {
            const hoverImage = document.getElementById('hoverImage_4');
            hoverImage.style.display = 'none';
        };

        const handleMouseMove_5 = (e) => {
            const hoverImage = document.getElementById('hoverImage_5');
            const offset = -300; // Отступ от курсора
            const onset = -60;
        };

        const handleMouseEnter_5 = () => {
        const hoverImage = document.getElementById('hoverImage_5');
        hoverImage.style.display = 'block';
        };
        const handleMouseLeave_5 = () => {
            const hoverImage = document.getElementById('hoverImage_5');
            hoverImage.style.display = 'none';
        };

        const handleMouseMove_6 = (e) => {
            const hoverImage = document.getElementById('hoverImage_6');
            const offset = -300; // Отступ от курсора
            const onset = -60;
        };

        const handleMouseEnter_6 = () => {
        const hoverImage = document.getElementById('hoverImage_6');
        hoverImage.style.display = 'block';
        };
        const handleMouseLeave_6 = () => {
            const hoverImage = document.getElementById('hoverImage_6');
            hoverImage.style.display = 'none';
        };

        return (
        <html>
        <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
            <Helmet>
            <meta charSet="UTF-8"/>
            <title>Проектирование газоснабжения и энергоснабжения, геодезические и кадастровые работы - ПАРТНЕР</title>
            <meta name="yandex-verification" content="ee98594a3963c95e" />
            <meta name="description" content="Комплексные решения в области проектирования систем газоснабжения и энергоснабжения. Профессиональные геодезические и кадастровые услуги для вашего проекта. Получите консультацию сейчас!"/>
            <meta name="keywords" content="проектирование, проектирование газоснабжения, энергоснабжение, геодезические услуги, кадастровые работы, инженерные изыскания, кадастр недвижимости"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Helmet>
            </head>
            <body className="custom-zoom-page">
            <div className='Header'>
<svg width="0" height="0">
    <filter
        id="ambilight"
        width="300%"
        height="300%"
        x="-0.75"
        y="-0.75"
        colorInterpolationFilters="sRGB"
    >
        <feOffset in="SourceGraphic" result="source-copy"/>
        <feColorMatrix
            in="source-copy"
            type="saturate"
            values="1"
            result="saturated-copy"
        />
        <feColorMatrix
            in="saturated-copy"
            type="matrix"
            values="1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        33 33 33 101 -100"
            result="bright-colors"
        />
        <feMorphology
            in="bright-colors"
            operator="dilate"
            radius="1"
            result="spread"
        />
        <feGaussianBlur
            in="spread"
            stdDeviation="15"
            result="ambilight-light"
        />
        <feOffset in="SourceGraphic" result="source"/>
        <feComposite in="source" in2="ambilight-light" operator="over"/>
    </filter>
</svg>
            <div className='header_header'>
                <img className='header_logo' src='/public/logo_new.png' alt='логотип'/>
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
                                <iframe src="http://partner-tech.ru" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <a className='header_menu_menu_3' href='/contacts'>Контакты</a>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_5' href='/'>+7 (901) 005-70-88</a>
                                <a className='header_menu_menu_6' href='/'>info.partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                    <div className='header_menu'>
                        <a href='/contacts'><p>Контакты</p></a>
                       <a href='/about'><p>О нас</p></a>
                        <p>info.partner-tech.ru</p>
                        <p>+7 (901) 005-70-88</p>
                        <div className='header_top'>
                            <img className='header_phone' src='/public/fone_1.png' alt='фон'/>
                            <img className='circle_img' src='/public/logo_big.png' alt='логотип'/>
                        </div>
                    </div>
                       <div className='header_top_2'>
                           <div className='header_top_circle'>
                              {images.map((src, index) => {
                                const { positionStyle, imageStyle } = calculatePositionAndRotation(index);
                                return (
                                  <div key={index} className={`wrapper_div_${index + 1}`} style={positionStyle}>
                                    <img className={`header_top_circle_${index + 1}`} src={src} alt={`Image ${index + 1}`} style={imageStyle} />
                                  </div>
                                );
                              })}
                            </div>
                           {/*<img className='logo_circle' src='/public/logo2.png'/>*/}
                                <p className='header_top_2_title'>Предоставляем юридическим лицам и гражданам широкий спектр услуг</p>
                               <a href='/geodezic' className={`header_top_comp_2_title_1 ${activeHandler === 111 ? 'faq_1_1' : ''}`}>Инженерные изыскания</a>
                                <input className={`header_top_comp_2_title_1_strela1 ${activeHandler === 111 ? 'strela-digris': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(111)} alt=''/>
                                {activeHandler === 111 && (
                                <div className='faq_1_1'>
                                    <p className='header_top_comp_2_title_1_text'>Геодезические, геологические и экологические изыскания для выполнения работ по подготовке проектной документации, строительству и реконструкции объектов капитального строительства</p>
                                    </div>
                                  )}

                                <a href='/communication_system' className={`header_top_comp_2_title_2 ${activeHandler === 112 ? 'faq_1_2' : ''} ${activeHandler === 111 ? 'faq_1_2_1' : ''}`} >Проектирование энергообъектов электроэнергетики</a>
                                <input className={`header_top_comp_2_title_1_strela2 ${activeHandler === 112 ? 'strela-digris_2': ''} ${activeHandler === 111 ? 'faq_1_2_1' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(112)} alt=''/>
                                {activeHandler === 112 && (
                                <div className='faq_1_2'>
                                    <p className='header_top_comp_2_title_2_text'>Разработка проектных решений по кабельным и воздушным линиям электропередачи, трансформаторным подстанциям, генераторам и иным видам оборудования классом напряжения 0,4-35 кВ</p>
                                    </div>
                                  )}

                                <div><a href='/gazification' className={`header_top_comp_2_title_3 ${activeHandler === 113 ? 'faq_1_3' : ''} ${activeHandler === 112 ? 'faq_1_2_1' : ''} ${activeHandler === 111 ? 'faq_1_2_2_1' : ''}`}>Проектирование газораспределения и газопотребления</a>
                                </div>
                                <input className={`header_top_comp_2_title_1_strela3 ${activeHandler === 113 ? 'strela-digris_3': ''} ${activeHandler === 112 ? 'faq_1_3_1' : ''} ${activeHandler === 111 ? 'faq_1_3_2' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(113)} alt=''/>
                                {activeHandler === 113 && (
                                <div className='faq_1_3'>
                                    <p className='header_top_comp_2_title_3_text'>Оказываем услуги по расчету потребления газа, разработке проектной и рабочей документации: котельных, пунктов редуцирования газа, сетей газопотребления и газораспределения</p>
                                    </div>
                                  )}

                                <div className='header_top_comp_2_title_311'>
                                    <p className='header_top_comp_2_title_31'>Оказываем услуги по расчету потребления газа, разработке проектной и рабочей документации: котельных, пунктов редуцирования газа, сетей газопотребления и газораспределения</p>
                                </div>

                                <a href='/architect' className={`header_top_comp_2_title_4 ${activeHandler === 114 ? 'faq_1_4' : ''} ${activeHandler === 112 ? 'faq_1_4_1' : ''} ${activeHandler === 111 ? 'faq_1_4_2' : ''}`}>Архитектура</a>
                               <input className={`header_top_comp_2_title_1_strela4 ${activeHandler === 114 ? 'strela-digris_4': ''} ${activeHandler === 112 ? 'faq_1_4_1' : ''} ${activeHandler === 111 ? 'faq_1_4_2' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(114)} alt=''/>
                                    {activeHandler === 114 && (
                                    <div className='faq_1_4'>
                                        <p className='header_top_comp_2_title_4_text'>Проектирование современных архитектурных решений.</p>
                                        </div>
                                      )}
                                <div className='header_top_comp_2_title_411'>
                                    <p className='header_top_comp_2_title_41'>Проектирование современных архитектурных решений.</p>
                                </div>
                                <div><a href='/water' className={`header_top_comp_2_title_5 ${activeHandler === 115 ? 'faq_1_5' : ''}  ${activeHandler === 114 ? 'faq_1_5_2' : ''}`}>Проектирование водопровода и канализации</a>
                                    </div>
                                <input className={`header_top_comp_2_title_1_strela5 ${activeHandler === 115 ? 'strela-digris_5': ''} ${activeHandler === 112 ? 'faq_1_4_1' : ''} ${activeHandler === 114 ? 'faq_1_5_1' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(115)} alt=''/>
                                    {activeHandler === 115 && (
                                    <div className='faq_1_5'>
                                        <p className='header_top_comp_2_title_5_text'>Комплексное проектирование и расчет наружних инженерных канализационных и водопроводных систем любой сложности. Центральное и индивидуальное водоснабжение и водоотведение.</p>
                                        </div>
                                      )}
                                <div className='header_top_comp_2_title_511'>
                                    <p className='header_top_comp_2_title_51'>Комплексное проектирование и расчет наружних инженерных канализационных и водопроводных систем любой сложности. Центральное и индивидуальное водоснабжение и водоотведение.</p>
                                </div>


                            <div><a href='/cadastral_works' className={`header_top_comp_2_title_6 ${activeHandler === 116 ? 'faq_1_6' : ''}  ${activeHandler === 114 ? 'faq_1_6_1' : ''} ${activeHandler === 115 ? 'faq_1_6_2' : ''}`}>Кадастровые работы</a>
                          </div>
                                <div className='header_top_comp_2_title_611'>
                                    <p className='header_top_comp_2_title_61'>Подготовка документов содержаших полный перечень сведений, используемых для оформления на кадастровый учет недвижимости в специальных государственных органах</p>
                                </div>
                            <input className={`header_top_comp_2_title_1_strela6 ${activeHandler === 116 ? 'strela-digris_6': ''} ${activeHandler === 114 ? 'faq_1_6_1' : ''} ${activeHandler === 115 ? 'faq_1_6_2' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(116)} alt=''/>
                                    {activeHandler === 116 && (
                                    <div className='faq_1_6'>
                                        <p className='header_top_comp_2_title_6_text'>Подготовка документов содержаших полный перечень сведений, используемых для оформления на кадастровый учет недвижимости в специальных государственных органах</p>
                                        </div>
                                      )}

                           <div><a href='/project' className={`header_top_comp_2_title_7 ${activeHandler === 117 ? 'faq_1_7' : ''} ${activeHandler === 112 ? 'faq_1_7_1' : ''} ${activeHandler === 111 ? 'faq_1_7_2' : ''} ${activeHandler === 113 ? 'faq_1_7_3' : ''}`}>Геологические услуги</a>
                           </div>
                           <input className={`header_top_comp_2_title_1_strela7 ${activeHandler === 117 ? 'strela-digris_7': ''} ${activeHandler === 112 ? 'faq_1_7_1' : ''} ${activeHandler === 111 ? 'faq_1_7_2' : ''} ${activeHandler === 113 ? 'faq_1_7_3' : ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(117)} alt=''/>
                                {activeHandler === 117 && (
                                <div className='faq_1_7'>
                                    <p className='header_top_comp_2_title_7_text'>Подготовка документов содержаших полный перечень сведений, используемых для оформления на кадастровый учет недвижимости в специальных государственных органах</p>
                                    </div>
                                  )}
                                {/*<div className='header_top_comp_2_title_711'>*/}
                                {/*    <p className='header_top_comp_2_title_71'>Подготовка документов содержаших полный перечень сведений, используемых для оформления на кадастровый учет недвижимости в специальных государственных органах</p>*/}
                                {/*</div>*/}
                        </div>
                    <div className='header_container_1'>
                        <p className='header_container_1_title'>Мы предлагаем комплексное решение задач от начальных замеров и разработки проектной документации до поддержки на всех этапах реализации проекта и последующей эксплуатации объектов.</p>
                        <p className='header_container_1_year'>8 лет</p>
                        <p className='header_container_1_prod'>Продуктивной работы</p>
                        <p className='header_container_1_num'>{number}</p>
                        <p className='header_container_1_num_dop'>+1</p>
                        <p className='header_container_1_proekt'>Разработанных проектов</p>
                        <p className='header_container_1_bolee'>Более 50</p>
                        <p className='header_container_1_spec'>Cпециалистов</p>
                        <p className='header_container_1_sobs'>Собственные</p>
                        <p className='header_container_1_it'>IT разработки</p>
                        <img className='header_container_1_strela_1' src='/public/прогресс.png'/>

                        <img className='header_container_1_man_1' src='/public/сотрудник.png'/>


                        <img className='header_container_1_list_1' src='/public/проекты.png'/>

                        <img className='header_container_1_comp_1' src='/public/разработки.png'/>
                    </div>

                    <div className='header_container_2'>
                        <div className='header_container_2_2'>
                            <img className='header_container_2_2_auto' src='/public/car_5713611.png'/>
                        <h2 className='header_container_2_title'>Как мы работаем</h2>
                            <div className='header_container_2_etap_1_1'>
                        <img className='header_container_2_etap_1_img' src='/public/feedback_9805563.png'/>
                        <p className='header_container_2_etap_1'>Ваше обращение</p>
                                </div>
                            <div className='header_container_2_etap_2_1'>
                         <img className='header_container_2_etap_2_img' src='/public/workflow_9805572.png'/>
                        <p className='header_container_2_etap_2'>Заключение договора</p>
                                </div>
                            <div className='header_container_2_etap_3_1'>
                                <p className='header_container_2_etap_3_img_border'></p>
                         <img className='header_container_2_etap_3_img' src='/public/range_10396504.png'/>
                        <p className='header_container_2_etap_3'>Выезд представителя</p>
                            </div>
                            <div className='header_container_2_etap_4_1'>
                                <p className='header_container_2_etap_4_img_border'></p>
                        <img className='header_container_2_etap_4_img' src='/public/mapping_2738969.png'/>
                                <div className='header_container_2_etap_4_img_1'></div>
                        <p className='header_container_2_etap_4'>Выезд геодезиста</p>
                        </div>
                            <div className='header_container_2_etap_5_1'>
                                <p className='header_container_2_etap_5_img_border'></p>
                        <img className='header_container_2_etap_5_img' src='/public/planning-strategy_8293767.png'/>
                        <p className='header_container_2_etap_5'>Проектирование</p>
                        <p className='header_container_2_etap_5_1'></p>
                            </div>
                            <div className='header_container_2_etap_6_1'>
                                <p className='header_container_2_etap_6_img_border'></p>
                        <img className='header_container_2_etap_6_img' src='/public/checklist_8790330.png'/>
                        <p className='header_container_2_etap_6'>Согласование</p>
                            </div>
                            <div className='header_container_2_etap_7_1'>
                        <img className='header_container_2_etap_7_img' src='/public/product_9805570.png'/>
                        <p className='header_container_2_etap_7'>Передача результата</p>
                            </div>
                        </div>

                    </div>
                    <div className='container_container_3' ref={containerRef}>
                        <h2 className='header_our_partner'>Наши партнеры</h2>
                        <div className='partners_container'>
                            <div className='partners_group'>
                                <img className='partner_1' src='/public/part1.png' alt='P 1'/>
                                <img className='partner_2' src='/public/part2.png' alt='P 2'/>
                                <img className='partner_3' src='/public/part3.png' alt='P 3'/>
                                <img className='partner_4' src='/public/part4.png' alt='P 4'/>
                                <img className='partner_5' src='/public/part5.png' alt='P 5'/>
                                <img className='partner_6' src='/public/part6.png' alt='P 6'/>
                                <img className='partner_7' src='/public/part7.png' alt='P 7'/>
                                <img className='partner_9' src='/public/part9.png' alt='P 9'/>
                            </div>
                            <div className='partners_group'>
                                <img className='partner_1' src='/public/part1.png' alt='ellPadding?: number | string | undefined;'/>
                                <img className='partner_2' src='/public/part2.png' alt='P 2'/>
                                <img className='partner_3' src='/public/part3.png' alt='P 3'/>
                                <img className='partner_4' src='/public/part4.png' alt='P 4'/>
                                <img className='partner_5' src='/public/part5.png' alt='P 5'/>
                                <img className='partner_6' src='/public/part6.png' alt='P 6'/>
                                <img className='partner_7' src='/public/part7.png' alt='P 7'/>
                                <img className='partner_9' src='/public/part9.png' alt='P 9'/>
                            </div>
                        </div>
                    </div>
                    <div className='header_container_4'>
                        <p className='header_our_prem'>Наши преимущества</p>

                        <div className="feature-container">
                            <div className="feature">
                                <h3>Материальное обеспечение</h3>
                                <p>Для успешной и качественной реализации проектов ООО "Партнер" использует современное материально-техническое обеспечение, что позволяет держать высокую планку качества в сфере инженерных изысканий.</p>
                            </div>
                            <div className="feature feature-image" style={{ backgroundImage: "url('/public/материальное_обеспечение_Монтажная_область_1.jpg')" }}>

                            </div>
                            <div className="feature">
                                <h3>Ответственность</h3>
                                <p>Структура компании и четкий последовательный алгоритм производственных процессов не является только частью успеха<br/> ООО «Партнер».</p>
                            </div>
                            <div className="feature feature-image" style={{ backgroundImage: "url('/public/ответствнность_Монтажная_область_1_копия_2.jpg')" }}>

                            </div>
                            <div className="feature">
                                <h3>Логистика</h3>
                                <p>Работа в условиях пандемии COVID-19 наглядно показала положительные и негативные стороны удаленной работы. ООО «Партнер» постарался найти компромисс и использовать лучшее.</p>
                            </div>
                            <div className="feature feature-image" style={{ backgroundImage: "url('/public/логистика_Монтажная_область_1_копия.jpg')" }}>

                            </div>
                            <div className="feature">
                                <h3>Опыт</h3>
                                <p>Опыт компании зависит не только от количества выполненных работ и даты регистрации Общества. Кадры решают все! Навык работы с исполнительной документацией, предыдущая работа в строительно-монтажной компании и другие факторы, позволяющие в полной мере понимать технологический процесс строительства объекта.</p>
                            </div>
                            <div className="feature feature-image" style={{ backgroundImage: "url('/public/опыт_Монтажная область 1 копия 3.jpg')" }}>

                            </div>
                        </div>


                       <div className='header_our_uslugi_obol' >






                        <div className={`header_our_uslugi_1 ${activeHandler === 1 ? 'black-grey_1' : ''} ${activeHandler >= 2 && activeHandler <= 6 ? 'dop_black-grey' : ''}`} onClick={() => handleClick(1)}>
                            <p className='header_our_uslugi_geo_3'>Цифровые навыки</p>
                            {activeHandler === 1 && (
                        <div className='dop_1'>
                            <p className='header_our_uslugi_geo_2'>Цифровые навыки</p>
                            <p className='header_our_uslugi_geo'>Цифровые навыки</p>
                            <img className='header_our_uslugi_geo_img' src='/public/IMG_4233_6_11zon%20(1).jpg'/>
                            <p className='dop_1_geo_1'>Наша компания уделяет особое внимание рабочему месту сотрудника. Непосредственно, как скальпель для хирурга и кисть для художника, сотрудники выполняют проектную работу на современном цифровом рабочем месте. <br/> Мощные компьютеры и 4K мониторы позволяют видеть более объемным проект и снизить утомляемость персонала. Применение собственных разработок в части программного обеспечения для расчетов, построения трасс и профилей положительно сказываются на качестве проектной документации.<br/> Цифровая система критериев на базе искусственного интеллекта координирует распределение объектов между персоналом и сигнализирует об отклонениях в сроках реализации. В совокупности данные мероприятия позволяют значительно сэкономить время производства без потери качества.</p>
                            {/*<a className='dop_1_href' href='/geo'>Больше услуг</a>*/}
                            <a className='dop_1_button' href='/about#about_1'>Подробнее</a>
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_2 ${activeHandler === 2 ? 'black-grey_2' : ''} ${activeHandler === 1 ? 'dop_blue-white' : ''} ${ activeHandler === 3 || activeHandler === 4 || activeHandler === 5 || activeHandler === 6 ? 'dop_blue-white_1_1' : ''}`} onClick={() => handleClick(2)} >
                                <p className='header_our_uslugi_cadastr'>Материальное обеспечение</p>
                        {activeHandler === 2 && (
                        <div className='dop_2'>
                            <p className='header_our_uslugi_cadastr_2'>Материальное обеспечение</p>
                            <p className='header_our_uslugi_cadastr_3'>Материальное обеспечение</p>
                            <img className='header_our_uslugi_cadastr_img' src='/public/car_1.png'/>
                            <p className='dop_2_1'>Для успешной и качественной реализации проектов ООО "Партнер" использует современное материально-техническое обеспечение, что позволяет держать высокую планку качества в сфере инженерных изысканий. Тахеометр, нивелир, GPS оборудование позволяет выполнить работу с минимальной погрешностью в любых ландшафтных условиях. Наше компания располагает собственным укомплектованным парком автотранспорта разной проходимости. В том числе имеется резерв на случаи технологической поломки или неисправности.</p>
                            <a className='dop_2_button' href='/about#about_2'>Подробнее</a>
                        </div>
                          )}
                        </div>
                         <div className={`header_our_uslugi_3 ${activeHandler === 3 ? 'black-grey_3' : '' } ${activeHandler === 1  || activeHandler === 2  ? 'dop_blue-white_2' : ''} ${ activeHandler === 4 || activeHandler === 5 || activeHandler === 6 ? 'dop_blue-white_1_2' : ''}`} onClick={() => handleClick(3)}>
                                <p className='header_our_uslugi_proekt'>Работа с персоналом</p>
                        {activeHandler === 3 && (
                        <div className='dop_3'>
                            <p className='header_our_uslugi_proekt_2'>Работа с персоналом</p>
                            <p className='header_our_uslugi_proekt_3'>Работа с персоналом</p>
                            <img className='header_our_uslugi_proekt_img' src='/public/IMG_4148-2_3_11zon%20(1).jpg'/>
                            <p className='dop_3_1'>В современном мире профессиональные навыки, полученные в процессе получения образования, быстро устаревают, поэтому обучение и повышение квалификации становятся важнейшими элементами профессионального роста. В ООО «Партнер» помимо классических инструктажей и самоподготовки с персоналом проводятся семинары, на которых опытные наставники детально разбирают актуальные редакции нормативно технических документов и индивидуальные замечания сотрудников, допущенных вследствие дополнительных персональных требований Заказчика</p>
                            <a className='dop_3_button' href='/about#about_3'>Подробнее</a>
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_4 ${activeHandler === 4 ? 'black-grey_4' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 ? 'dop_blue-white_3' : ''} ${activeHandler === 5 || activeHandler === 6 ? 'dop_blue-white_1_3' : ''}`} onClick={() => handleClick(4)}>
                                <p className='header_our_uslugi_proekt_gaz'>Ответственность</p>
                        {activeHandler === 4 && (
                        <div className='dop_4'>
                            <p className='header_our_uslugi_proekt_gaz_2'>Ответственность</p>
                            <p className='header_our_uslugi_proekt_gaz_3'>Ответственность</p>
                            <img className='header_our_uslugi_proekt_gaz_img' src='/public/IMG_4428.jpg'/>
                            <p className='dop_4_1'>Структура компании и четкий последовательный алгоритм производственных процессов не является только частью успеха ООО «Партнер». Коллективная и личная ответственность каждого позволяют достичь истинного баланса. Учитывая линейность процесса разработки проектной документации любой из сотрудников, понимает, что непосредственно от него зависит итоговый результат и репутация компании. Ответственное исполнение каждого этапа: получение исходных данных, сверка в натуре, инженерные изыскания, разработка проектной и рабочей документации, согласование и закрытие позволяют достичь максимальной эффективности.</p>
                            <a className='dop_4_button' href='/about#about_4'>Подробнее</a>
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_5 ${activeHandler === 5 ? 'black-grey_5' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 || activeHandler === 4 ? 'dop_blue-white_4' : ''} ${activeHandler === 6 ? 'dop_blue-white_1_4' : ''}`} onClick={() => handleClick(5)}>
                                <p className='header_our_uslugi_proekt_set'>Логистика</p>
                        {activeHandler === 5 && (
                        <div className='dop_5'>
                            <p className='header_our_uslugi_proekt_set_2'>Логистика</p>
                            <p className='header_our_uslugi_proekt_set_3'>Логистика</p>
                            <img className='header_our_uslugi_proekt_set_img' src='/public/IMG_4434.jpg'/>
                            <p className='dop_5_1'>Работа в условиях пандемии COVID-19 наглядно показала положительные и негативные стороны удаленной работы. ООО «Партнер» постарался найти компромисс и использовать лучшее. Тема Краснодарских пробок - одна из самых популярных для обсуждения. Открытие небольших офисов в разных частях города позволило уменьшить время персонала, бесцельно расходуемого на дорогу до работы. А подбор специалистов отрасли инженерных изысканий с разных районов Краснодарского края и Республики Адыгея сократить время на производство. Многие сотрудники так и работают удаленно, ведь главное качественный результат.</p>
                            <a className='dop_5_button' href='/about#about_5'>Подробнее</a>
                        </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_6 ${activeHandler === 6 ? 'black-grey_6' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 || activeHandler === 4 || activeHandler === 5 ? 'dop_blue-white_5' : ''}`} onClick={() => handleClick(6)}>
                                <p className='header_our_uslugi_proekt_wat'>Опыт</p>
                        {activeHandler === 6 && (
                        <div className='dop_6'>
                            <p className='header_our_uslugi_proekt_wat_2'>Опыт</p>
                            <p className='header_our_uslugi_proekt_wat_3'>Опыт</p>
                            <img className='header_our_uslugi_proekt_wat_img' src='/public/IMG_4423 (1).jpg'/>
                            <p className='dop_6_1'>Опыт компании зависит не только от количества выполненных работ и даты регистрации Общества. Кадры решают все! Навык работы с исполнительной документацией, предыдущая работа в строительно-монтажной компании и другие факторы, позволяющие в полной мере понимать технологический процесс строительства объекта по разработанной проектной документации, один из основополагающих факторов трудоустройства в коллектив ООО "Партнер". Персонал обладает опытом работы не только "по учебникам" а практическим навыкам, что позволяет разрабатывать нестандартные решения и адаптироваться под местные условия Заказчика.</p>
                            </div>
                          )}
                        </div>
                    </div>




                    </div>

                <div id='uslugi' className='header_container_5'>
                    <img className='circle_img_2' src='/public/logo_big.png'/>
                    <button className={`circle_button`} onClick={(rotateCircles)}>Дальше</button>
                    <div className='header_container_5_text'>
                        <div className='header_container_5_text_1'>
                            <h2>Инженерно-геодезические изыскания</h2>
                            <p>Ситуационный план</p>
                            <p>Вынос границ земельного участка в натуру</p>
                            <p>Топографическая съемка и топоплан</p>
                            <p>Геодезические изыскания</p>
                            <p>Камерально геодезические работы</p>
                            <p>Координирование реперов</p>
                        </div>
                        <img className='header_container_5_img_1' src='/public/инженерные%20изыскания.jpg'/>
                        <div className='header_container_5_text_2'>
                            <h2>Газораспределения и газопотребления</h2>
                            <p>Проектирование газопроводов низкого давления</p>
                            <p>Проектирование газопроводов среднего давления</p>
                            <p>Проектирование газопроводов высокого давления</p>
                            <p>Переустройство газопроводов из под пятна строительства</p>
                            <p>Проектирование газоснабжения котельной</p>
                        </div>
                        <img className='header_container_5_img_2' src='/public/truba.jpg'/>
                        <div className='header_container_5_text_3'>
                          <h2>Проектирование энергообъектов электроэнергетики</h2>
                            <p>Проектирование воздушных линий электропередач - 0.4/10 кВ</p>
                            <p>Проектирование кабельных линий электропередач - 0.4/10 кВ</p>
                            <p>Проектирование трансформаторных подстанций - 10/0.4 кВ</p>
                            <p>Проектирование РТП, КРУН, БКРТП - 10/0.4 кВ</p>
                            <p>Электрификация частного дома</p>
                        </div>
                        <img className='header_container_5_img_3' src='/public/энергообьект.jpg'/>
                        <div className='header_container_5_text_4'>
                            <h2>Архитектура</h2>
                            <p>Проектирование дома "Под ключ"</p>
                            <p>Проектирование дизайна фасада дома</p>
                            <p>Проектирование планировочных решения</p>
                            <p>Проектирование дизайна интерьера дома</p>
                            <p>Архитектрный надзор</p>
                            <p>Дизайн экстерьера</p>
                        </div>
                        <img className='header_container_5_img_4' src='/public/geodezia.webp'/>
                        <div className='header_container_5_text_5'>
                            <h2>Проектирование водопровода и канализации</h2>
                            <p>Проектирвание фикальных канализаций</p>
                            <p>Проектирование ливневых канализаций (дождевых)</p>
                            <p>Проектирование водопроводов низкого давления</p>
                            <p>Проектирование водопроводов среднего давления</p>
                            <p>Проектирование водопроводов высокого давления</p>
                            <p>Проектирование бытовых канализаций</p>
                        </div>
                        <img className='header_container_5_img_5' src='/public/водопровод.jpg'/>
                        <div className='header_container_5_text_6'>
                            <h2>Кадастровые работы</h2>
                            <p>Межевание земельного участка</p>
                            <p>Технический план ОКС</p>
                            <p>Акт обследования</p>
                            <p>Формирование з/у и схема на КПТ</p>
                            <p>Исправление кадастровых ошибок</p>
                            <p>Межевание для выдела с/х долей</p>
                        </div>
                        <img className='header_container_5_img_6' src='/public/cadastr1.jpg'/>




                    </div>
                    <div className='header_circle_three_color'>
                        <div className="circle-container">
                            <div className="circle-outer"></div>
                            <div className="circle-inner"></div>
                        </div>
                        <div className="circle-container_2">
                            <div className="circle-outer_2"></div>
                            <div className="circle-inner_2"></div>
                        </div>
                        <div className="circle-container_3">
                            <div className="circle-outer_3"></div>
                            <div className="circle-inner_3"></div>
                        </div>
                        <div className="circle-container_4">
                            <div className="circle-outer_4"></div>
                            <div className="circle-inner_4"></div>
                        </div>
                        <div className="circle-container_5">
                            <div className="circle-outer_5"></div>
                            <div className="circle-inner_5"></div>
                        </div>
                        <div className="circle-container_6">
                            <div className="circle-outer_6"></div>
                            <div className="circle-inner_6"></div>
                        </div>
                    </div>
                </div>

                <div className='header_container_6'>
                    <p className='header_container_6_title'>Наши проекты</p>

                    <div className='header_container_6_block'>
                        <div className='header_container_6_block_1'>
                              <div className='header_container_6_block_1_fon' onMouseMove={handleMouseMove_3} onMouseEnter={handleMouseEnter_3} onMouseLeave={handleMouseLeave_3}>
                                <img className='header_container_6_block_1_img_1' src='/public/Group 109.png'/>
                              <img id="hoverImage_3" className='hover-image_3' src='/public/gaz_project.png' style={{ display: 'none', position: 'absolute' }}/></div>
                              <p className='header_container_6_block_1_text_1'>Распределительные сети 10кв от центра питания пс 110 икеа </p>
                            <p className='header_container_6_block_1_text_2'>Август 2023 </p>
                        </div>

                        <div className='header_container_6_block_2'>
                              <div className='header_container_6_block_2_fon' onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <img className='header_container_6_block_2_img_1' src='/public/Group 110.png'/>
                                    <img id="hoverImage" className='hover-image' src='/public/voda_project.png' style={{ display: 'none', position: 'absolute' }}/>
                                </div>
                              <p className='header_container_6_block_2_text_1'>Система отопления, вентиляции и кондиционирования.
Подземная автостоянка</p>
                            <p className='header_container_6_block_2_text_2'>Март 2024 </p>
                        </div>

                        <div className='header_container_6_block_3'>
                              <div className='header_container_6_block_3_fon' onMouseMove={handleMouseMove_2} onMouseEnter={handleMouseEnter_2} onMouseLeave={handleMouseLeave_2}>
                            <img className='header_container_6_block_3_img_1' src='/public/Group 111.png'/>
                              <img id="hoverImage_2" className='hover-image_2' src='/public/volt.png' style={{ display: 'none', position: 'absolute' }}/></div>
                              <p className='header_container_6_block_3_text_1'>«ЛЭП-10 кВ от КРУН-10 кВ ПС 110 кВ «Усть-Лабинская тяговая» до ТП 10/0,4 кВ проектируемой на территории ООО «УК «Индустриальный парк «Кубань»</p>
                            <p className='header_container_6_block_3_text_2'>Май 2024 </p>
                        </div>

                        <div className='header_container_6_block_4'>
                              <div className='header_container_6_block_4_fon' onMouseMove={handleMouseMove_4} onMouseEnter={handleMouseEnter_4} onMouseLeave={handleMouseLeave_4}>
                            <img className='header_container_6_block_4_img_1' src='/public/Group 112.png'/>
                              <img id="hoverImage_4" className='hover-image_4' src='/public/energo.png' style={{ display: 'none', position: 'absolute' }}/></div>
                              <p className='header_container_6_block_4_text_1'>Подвес проектируемого волоконно-оптического кабеля филиала ПАО «Россети Кубань» Краснодарские электрические
сети (ВЛ-0,4 кВ, ВЛ-10 кВ)</p>
                            <p className='header_container_6_block_4_text_2'>Август 2023 </p>
                        </div>

                        <div className='header_container_6_block_5'>
                              <div className='header_container_6_block_5_fon' onMouseMove={handleMouseMove_5} onMouseEnter={handleMouseEnter_5} onMouseLeave={handleMouseLeave_5}>
                            <img className='header_container_6_block_5_img_1' src='/public/Group 125.png'/>
                              <img id="hoverImage_5" className='hover-image_5' src='/public/geo_project.png' style={{ display: 'none', position: 'absolute' }}/></div>
                              <p className='header_container_6_block_5_text_1'>Камеральные работы по проектируемой на территории ООО «УК «Индустриальный парк
«Кубань» ЛЭП-10 кВ </p>
                            <p className='header_container_6_block_5_text_2'>Апрель 2023 </p>
                        </div>

                        <div className='header_container_6_block_6'>
                              <div className='header_container_6_block_6_fon' onMouseMove={handleMouseMove_6} onMouseEnter={handleMouseEnter_6} onMouseLeave={handleMouseLeave_6}>
                            <img className='header_container_6_block_6_img_1' src='/public/Group 126.png'/>
                              <img id="hoverImage_6" className='hover-image_6' src='/public/geo_project.png' style={{ display: 'none', position: 'absolute' }}/></div>
                              <p className='header_container_6_block_6_text_1'>Распределительные сети 10кв от центра питания пс 110 икеа </p>
                            <p className='header_container_6_block_6_text_2'>Август 2023 </p>
                        </div>
                    </div>






                </div>
                <div className='header_footer'>
                <div className='communication_footer_1'>
                    <img className='communication_footer_1_img' src='/public/logo_new.png'/>
                    <img className='communication_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='communication_footer_2'>
                    <p className='communication_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='communication_footer_2_text_2'>г.Краснодар ул.Красных Партизан 1/4 к9<br/>офис 20</p>
                </div>
                <div className='communication_footer_4'>
                    <p className='communication_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='communication_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='communication_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='communication_footer_5'>
                    <p className='communication_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='communication_footer_2_text_2'>+7 (901) 005-70-88</p>
                    <p className='communication_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='communication_footer_6'>
                    <p className='communication_footer_2_text_1'>E-MAIL</p>
                    <p className='communication_footer_2_text_2' style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&to=info@partner-tech.ru'} role="link">info@partner-tech.ru</p>
                    <p className='communication_footer_2_text_3' style={{ cursor: 'pointer' }} onClick={() => window.location.href = 'https://mail.google.com/mail/?view=cm&to=mail@partner-krd.ru'} role="link">mail@partner-krd.ru</p>
                </div>
                <div className='communication_footer_7'>
                    <p className='communication_footer_2_text_1'>ИНФОРМАЦИЯ</p>
                    <p className='communication_footer_2_text_21' style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/about'} role="link">О компании</p>
                </div>

                </div>




            </div>


            </div>
            </body>
        </html>
        );
}
export default Header
