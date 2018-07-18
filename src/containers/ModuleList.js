import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router} from 'react-router-dom'
import '../stylesheet.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {title: ''},
            courseId: '',
            module: {title: '', id: ''},
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
        this.moduleService = this.moduleService.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
    }

    renderListOfModules() {
        return this.state.modules
            .map((module) =>
                <ModuleListItem
                    module={module}
                    key={module.id}
                    delete={this.deleteModule}/>
            );
    }

    componentWillReceiveProps(newProps) {
        this.findAllModulesForCourse(newProps.courseId)
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setModules(modules)
            });
    }

    setModules(modules) {
        this.setState({modules: modules})
    }


    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() =>
                this.findAllModulesForCourse(this.state.courseId));
    }

    deleteModule(moduleId) {
        this.moduleService.deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId)
            });
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

