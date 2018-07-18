import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet.css';

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a id="lesson-tab" className="nav-link">
                <Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <span onClick={() => {
                    this.props.delete
                    (this.props.lesson.id)
                }}>
                    <i className="fa fa-trash"/>
                </span>
            </a>

        );
    }
}
