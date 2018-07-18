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

                <button onClick={() => {
                    this.props.delete(this.props.module.id)
                }}>
                    DELETE
                </button>
                <span className="pull-right">
                <i className="fa fa-trash"/>
                <i className="fa fa-pencil"/>
                 </span>
            </li>
        )
    }
}

export default ModuleListItem;