import { useEffect, useState } from 'react';

const CardCarousel = () => {
    const [cards, setCards] = useState([]);
    const [container, setContainer] = useState(null);
    const [arrows, setArrows] = useState([]);
    let angle = 0;
    let chgtCard = 0;
    let canChange = true; //prevent spam
    let prevX;
    let prevY;
    let timeElapsed = 50;

    useEffect(() => {
        animateCards();
    }, []);
  
    function animateCards() {
        const cardElements = document.querySelectorAll('.carousel_card');
        setCards([...cardElements]);
        const containerElement = document.querySelector('.container');
        setContainer(containerElement);
        const arrowElements = document.querySelectorAll('.carousel_arrow');
        setArrows([...arrowElements]);

    cardElements.forEach((card, idx) => {
        setTimeout(() => {
            let divClassName;
            if (idx % 2 === 0) {
                divClassName = "card_on_left";
            } else {
                divClassName = "card_on_right";
            }
            card.classList.remove(divClassName);
            setTimeout(() => {
                card.classList.add("card_centered");
            }, 150 + cardElements.length * 150);
        }, timeElapsed);
        timeElapsed += 150;
    });
    }

    function changeCard(direction) {
        canChange = false;
    
        cards.forEach(card => {
            let pos = parseInt(card.dataset.pos, 10);
            let formerPos = pos;
            pos += direction;
            card.dataset.pos = pos;
            if (pos === 0) {
                setTimeout(() => {
                    card.dataset.pos = 8;
                    canChange = true;
                }, 500);
            } else if (pos === 9) {
                setTimeout(() => {
                    card.dataset.pos = 1;
                    canChange = true;
                }, 500);
            }
        });
    }

    // -A- change cards with wheel
    const handleWheel = (e) => {
        e.preventDefault();
        if (canChange) {
            const direction = Math.sign(e.deltaY);
            chgtCard += direction;
            if (Math.abs(chgtCard) > 5) {
                changeCard(direction);
                chgtCard = 0;
            }
        }
    }

    // -B- change cards with touches
    const handleTouchStart = (e) => {
        e.preventDefault();
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
    }

    const handleTouchMove = (e) => {
        e.preventDefault();
        if (canChange) {
            let direction;
            let newX = e.touches[0].clientX;
            let newY = e.touches[0].clientY;
            let deltaX = Math.abs(newX - prevX);
            let deltaY = Math.abs(newY - prevY);
            if (deltaX > 10 || deltaY > 10) {
                deltaX > deltaY ? ( direction = Math.sign(newX - prevX), prevX = newX ) 
                : (direction = Math.sign(newY - prevY), prevY = newY);
                
                changeCard(direction);
            }
        }
    }

    // -C- change cards with arrows
    const handleArrowClick = (e) => {
        changeCard(parseInt(e.target.dataset.dir));
    }

    return (
        <div className='container' onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            {/* Image Controller */}
            <h3>
                <span className="carousel_arrow" data-dir="-1" onClick={handleArrowClick}>⟻</span>
                &nbsp;&nbsp;&nbsp; View Images &nbsp;&nbsp;&nbsp;
                <span className="carousel_arrow" data-dir="1" onClick={handleArrowClick}>⟼</span>
            </h3>
            {/* Carousel Wrapper */}
            <div className="carousel">
                {/* Card 1 */}
                <div className="carousel_card card_on_left" data-pos="1">
                    <img src="https://picsum.photos/400" alt="Lorem Picsum" className="illustration"/>
                    <p className="card_name">Lorem Picsum</p>
                </div>
                {/* Card 2 */}
                <div className="carousel_card card_on_right" data-pos="2">
                    <img src="https://via.placeholder.com/400" alt="place holder" className="illustration"/>
                    <p className="card_name">Place Holder</p>
                </div>
                {/* Card 3 */}
                <div className="carousel_card card_on_left" data-pos="3">
                    <img src="https://placebear.com/400/400" alt="place Cage" className="illustration"/>
                    <p className="card_name">Place Bear</p>
                </div>
                {/* Card 4 */}
                <div className="carousel_card card_on_right"data-pos="4">
                    <img src="https://placebeard.it/400x400" alt="Place Beard" className="illustration"/>
                    <p className="card_name">Place Beard</p>
                </div>
                {/* Card 5 */}
                <div className="carousel_card card_on_left" data-pos="5">
                    <img src="https://baconmockup.com/400/400" alt="baconmockup" className="illustration"/>
                    <p className="card_name">Bacon Mockup</p>
                </div>
                {/* Card 6 */}
                <div className="carousel_card card_on_right" data-pos="6">
                    <img src="https://placebeard.it/400x400" alt="place beard" className="illustration"/>
                    <p className="card_name">Place Beard</p>
                </div>
                {/* Card 7 */}
                <div className="carousel_card card_on_left" data-pos="7">
                    <img src="https://loremflickr.com/400/400" alt="place img" className="illustration"/>
                    <p className="card_name">Lorem Picsum</p>
                </div>
                {/* Card 8 */}
                <div className="carousel_card card_on_right" data-pos="8">
                    <img src="http://placekitten.com/g/400/400" alt="Place Kitten" className="illustration"/>
                    <p className="card_name">Place Kitten</p>
                </div>
                
                {/* <div className="carousel_card card_on_left" data-pos="8">
                    <img src="http://placekitten.com/g/400/400" alt="Place Kitten" className="illustration"/>
                    <p className="card_name">Place Kitten</p>
                </div>

                <div className="carousel_card card_on_right" data-pos="8">
                    <img src="https://picsum.photos/400/400" alt="Lorem Picsum" className="illustration"/>
                    <p className="card_name">Lorem Picsum</p>
                </div> */}
            </div>

        </div>
    );
};

export default CardCarousel;
