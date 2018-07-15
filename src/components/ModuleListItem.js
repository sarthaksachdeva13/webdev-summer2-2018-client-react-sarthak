import React, {Component} from "react";

class ModuleListItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <span className="pull-right">
                <i className="fa fa-trash"/>
                <i className="fa fa-pencil"/>
                 </span>
            </li>
        )
    }
}

export default ModuleListItem;