import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem'
import '../stylesheet.css';


class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678}
            ]
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    renderListOfModules() {
        return this.state.modules
            .map(function (module) {
                return <ModuleListItem
                    title={module.title}
                    key={module.id}/>
            });
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        console.log(this.state.module);
    }


    render() {
        return (
            <div>
                <div id="addModuleInputGroup" className="input-group">
                    <input className="form-control"
                           placeholder="Enter a module"
                           onChange={this.titleChanged}
                           value={this.state.module.title}/>
                    <div className="input-group-append">
                        <button onClick={this.createModule}
                                className="btn btn-info">
                            <i className="fa fa-plus"/>
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}


export default ModuleList;

