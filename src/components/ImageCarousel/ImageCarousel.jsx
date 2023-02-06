import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ImageCarousel(){
        return (
            <Carousel showArrows={true}>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                <div>
                    <img src="/banner.jpeg" />
                </div>
                
            </Carousel>
        );
    }