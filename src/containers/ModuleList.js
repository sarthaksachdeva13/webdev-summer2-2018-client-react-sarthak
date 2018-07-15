import React from 'react';

class ModuleListItem extends React.Component {
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

class ModuleList extends React.Component {
    render() {
        return (
            <div>
                <h1>Module List</h1>
                <ul className="list-group">
                    <ModuleListItem title="Module 1"/>
                    <ModuleListItem title="Module 2"/>
                    <ModuleListItem title="Module 3"/>
                    <ModuleListItem title="Module 4"/>
                </ul>

            </div>
        )
    }
}

export default ModuleList;