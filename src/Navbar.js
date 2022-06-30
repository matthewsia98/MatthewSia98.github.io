import CategoryDropdown from './CategoryDropdown';
import Searchbar from './Searchbar'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-links-div">
                <a id="skill-lab" href="/">SkillLab</a>
                <CategoryDropdown />
            </div>

            <Searchbar />

            <div className="right-links-div">
                <a className="right-links" href="/course">Online Degrees</a>
                <a className="right-links" href="https://www.gofundme.com/en-ca" target="_">Donate</a>
                <a className="login" href="/login"><button className="light-button">Log In</button></a>
            </div>
        </nav> 
    );
}

export default Navbar;