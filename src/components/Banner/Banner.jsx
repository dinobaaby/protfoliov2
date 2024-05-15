import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";
export default function Banner() {
    return (
        <Carousel className="banner">
            <Carousel.Item interval={1000}>
                <img src="banner1.jpeg" alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src="banner2.jpeg" alt="First slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="banner3.jpeg" alt="First slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
