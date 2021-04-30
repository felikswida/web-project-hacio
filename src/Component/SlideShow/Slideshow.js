import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import hacioSlide from '../../image/Group 1.jpg'
const slideImages = [
    hacioSlide,
    hacioSlide,
    hacioSlide
  ];

export const Slideshow = () => {
    return (
        <Carousel
            infiniteLoop = {true}
            autoPlay = {true}
            showThumbs = {false}
        >
                <div>
                    <img src={slideImages[0]} />
                </div>
                <div>
                    <img src={slideImages[1]} />
                </div>
                <div>
                    <img src={slideImages[2]} />
                </div>
        </Carousel>
    )
}