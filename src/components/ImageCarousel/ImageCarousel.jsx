import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ImageCarousel(){
        return (
            <Carousel showArrows={true}>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img src="/banner.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
                
            </Carousel>
        );
    }