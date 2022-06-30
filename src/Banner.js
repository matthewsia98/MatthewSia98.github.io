import home from './images/home.jpg';
import DropdownMenu from './DropdownMenu';

function Banner() {
    return (
        <div className="banner">
        <img src={ home } alt="background image" />
        <div className="banner-card">
          <div className="slogan-div"><p className="slogan">Limitless Learning</p></div>
          <div className="banner-inner-card">
            <p>Supercharge your learning by picking from our selection of over 5,000 courses and 150,000 videos</p>
            <div className="banner-buttons">
              <a><button className="light-button">Try for Free</button></a>
              <a><button id="popular-courses-btn" className="dark-button">Browse popular courses</button></a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Banner;