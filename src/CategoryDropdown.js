import down_arrow from './icons/down-arrow.png';
import DropdownMenu from './DropdownMenu';

function CategoryDropdown() {
    return (
        <div className="dropdown">
            <div className="categories">
                <a href="#">Categories</a>
                <a href="#"><img id="down-arrow" className="navbar-icon" src={ down_arrow } alt="down arrow" href="#"/></a>
            </div>
            <DropdownMenu />
        </div>
    );
}

export default CategoryDropdown;