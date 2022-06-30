function DropdownOption(props) {
    if (props.arrow) {
        return (
            <div className="dropdown-option">
                <a className="dropdown-name" href="/course">{props.name}</a>
                <img className="dropdown-arrow" src={require("./icons/right-arrow.jpg")} />
            </div>
        );
    } else {
        return (
            <div className="dropdown-option">
                <a className="dropdown-name" href="/course">{props.name}</a>
            </div>
        );
    }
}

export default DropdownOption;