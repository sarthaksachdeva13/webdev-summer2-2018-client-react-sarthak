import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import {Link} from
        'react-router-dom'
import '../stylesheet.css';

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="lessonTab" className="nav-link">
                <Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <span className="float-right" onClick={() => {
                    this.props.delete(this.props.lesson.id)
                }}><i className="fa fa-trash"/></span>
            </div>

        );
    }
}

