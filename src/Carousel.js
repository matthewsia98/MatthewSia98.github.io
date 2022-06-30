import leftArrow from './icons/left-arrow.jpg';
import rightArrow from './icons/right-arrow.jpg';
import CourseCard from './CourseCard';

function Carousel() {
    return (
        <div className="carousel">
            <a href="#"><img className="carousel-arrow" src={leftArrow} alt="left arrow" /></a>
            <div className="courses">
                <CourseCard path="./images/what-is-web-development.png" name="Introduction to Web Development" org="freeCodeCamp" />
                <CourseCard path="./images/making-your-first-web-app.png" name="Making your first web app" org="freeCodeCamp" />
                <CourseCard path="./images/html-for-beginners.png" name="HTML for beginners" org="freeCodeCamp" />
                <CourseCard path="./images/learn-bootstrap.png" name="Learn Bootstrap" org="freeCodeCamp" />
            </div>
            <a href="#"><img className="carousel-arrow" src={rightArrow} alt="right arrow" /></a>
        </div>
    );
}

export default Carousel;