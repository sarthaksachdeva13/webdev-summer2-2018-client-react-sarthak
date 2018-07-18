import React from 'react'

class TopicPillItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li id="topic" className="nav-item">
                <a className="nav-link">
                    <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`
                              }>
                        {this.props.topic.title}
                    </Link>
                    <span>
                    <i className="fa fa-trash" onClick={() => this.props.delete(this.props.module.id)}/>
                </span>
                </a>
            </li>
        )
    }
}
export default TopicPillItem;