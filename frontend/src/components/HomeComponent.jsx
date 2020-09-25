import React, { useEffect, useState, useRef } from 'react';
import ContainerDimensions from 'react-container-dimensions';

import Footer from './FooterComponent';
import {Button, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Col} from 'reactstrap';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
// import './styles.css';


const items = [
  { 
    src:"https://image.freepik.com/free-photo/happy-shopping-woman-yellow-background_33799-4555.jpg",
    altText: "Women's Product",
    caption: 'Shopping'
  },
  {
    src:"https://image.freepik.com/free-photo/portrait-shocked-little-girl-hat-skirt_171337-13779.jpg",
    altText: 'Dress',
    caption: 'Kurtas'
  },
  { 
    src:"https://freedesignfile.com/upload/2016/10/Pretty-happy-woman-holding-shopping-bags-on-a-yellow-background1.jpg",
    altText: 'Sarees',
    caption: 'Paithani'
  }
];

const HomeComponent = () => {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };

  // return (
  //   <>
  //       <ContainerDimensions>
  //         {({ width, height }) => (
  //           <Carousel
  //             activeIndex={index}
  //             direction={direction}
  //             onSelect={handleSelect}
  //             interval={null}
  //           >
  //             <CarouselItem>
  //               <img
  //                 className="img-obj-fit"
  //                 src={require(`../static/images/slide1.jpeg`)}
  //                 alt="First slide"
  //                 height="400px"
  //                 // width="1350px"
  //                 style={{ width }}
  //               />
  //               <div className="overlay"></div>
  //               <CarouselCaption>
  //                 <h3>First slide label</h3>
  //                 <p>
  //                   Nulla vitae elit libero, a pharetra augue mollis interdum.
  //                 </p>
  //                 <Button variant="success" className="my-2">
  //                   Shop now
  //                 </Button>
  //               </CarouselCaption>
  //             </CarouselItem>
  //             <CarouselItem>
  //               <img
  //                 className="img-obj-fit"
  //                 src={require(`../static/images/slide2.jpeg`)}
  //                 alt="Second slide"
  //                 height="400px"
  //                 style={{ width }}
  //               />
  //               <div className="overlay"></div>
  //               <CarouselCaption>
  //                 <h3>Second slide label</h3>
  //                 <p>
  //                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                 </p>
  //                 <Button variant="success" className="my-2">
  //                   Shop now
  //                 </Button>
  //               </CarouselCaption>
  //             </CarouselItem>
  //             <CarouselItem>
  //               <img
  //                 className="img-obj-fit"
  //                 src="https://rukminim1.flixcart.com/flap/50/50/image/7ef2d443b192a3aa.jpg?q=50"
  //                 alt="Third slide"
  //                 height="400px"
  //                 style={{ width }}
  //               />
  //               <div className="overlay"></div>
  //               <CarouselCaption>
  //                 <h3>Third slide label</h3>
  //                 <p>
  //                   Praesent commodo cursus magna, vel scelerisque nisl
  //                   consectetur.
  //                 </p>
  //                 <Button variant="success" className="my-2">
  //                   Shop now
  //                 </Button>
  //               </CarouselCaption>
  //             </CarouselItem>
  //           </Carousel>
  //         )}
  //       </ContainerDimensions>
  //   <Footer/>
  //   </>
  // );
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} className="custom-tag" alt={item.altText}
        />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 500%;
              height: 500px;
              background: black;
            }`
        }
      </style>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
  <Footer/>
  </div>

  );
};

export default HomeComponent;