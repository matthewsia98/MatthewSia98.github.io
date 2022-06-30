import CourseStars from './CourseStars'

function CourseCard(props) {
    return (
        <div className="course-card">
            <div className="course-banner">
                <a href="/course"><img className="course-preview" src={ require(`${props.path}`) } /></a>
            </div>
            <div className="course-info">
                <h4>{ props.name }</h4>
                <p><a href="https://www.freecodecamp.org/" target="_">{ props.org }</a></p>
                <CourseStars />
            </div>
        </div>
    );
}

export default CourseCard;