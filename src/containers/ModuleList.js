import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem'
import '../stylesheet.css';


class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery'},
                {title: 'Module 2 - React'},
                {title: 'Module 3 - Redux'},
                {title: 'Module 4 - Angular'},
                {title: 'Module 5 - Node.js'},
                {title: 'Module 6 - MongoDB'}
            ],
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    renderListOfModules() {
        return this.state.modules
            .map((module, i) =>
                <ModuleListItem
                    title={module.title}
                    key={i}/>
            );
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

