import React, {Component} from "react";
import {Link} from 'react-router-dom';

class ModuleListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" role="tab"
               aria-controls="v-pills-home" aria-selected="true">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <span className="pull-right">
                    <i className="fa fa-trash" onClick={() => this.props.delete(this.props.module.id)}/>
                </span>
            </a>
        );
    }
}

export default ModuleListItem;

