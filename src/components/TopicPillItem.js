import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../stylesheet.css';

class TopicPillItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id="topicPillItem" className="nav-item">
                <div className="nav-link">
                    <Link to={
                        `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`
                    }>
                        {this.props.topic.title}
                    </Link>
                    <span onClick={() => {
                        this.props.delete(this.props.topic.id)
                    }}>
                    <i className="fa fa-trash"/>
                </span>
                </div>
            </li>
        );
    }
}

export default TopicPillItem;