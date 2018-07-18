import React, {Component} from "react";
import {Link} from 'react-router-dom'


class ModuleListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <span className="pull-right">
                    <i className="fa fa-trash" onClick={() => this.props.delete(this.props.module.id)}/>
                </span>
            </li>
        )
    }
}

export default ModuleListItem;