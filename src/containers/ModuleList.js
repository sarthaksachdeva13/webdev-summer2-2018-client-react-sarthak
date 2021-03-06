import React, {Component} from "react";
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../stylesheet.css';

class ModuleList extends Component {

    constructor() {
        super();
        this.state = {
            courseId: '',
            module: {title: ''},
            modules: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllModulesForCourse(newProps.courseId);
        this.setCourseId(newProps.courseId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId)
            });
    }

    deleteModule(moduleId) {
        let popupWindow = window.confirm("Are you sure you want to delete this module?");
        if (popupWindow) {
            this.moduleService
                .deleteModule(moduleId)
                .then(() => {
                    window.location.replace("/course/"+`${this.state.courseId}`);
                    this.findAllModulesForCourse
                    (this.state.courseId)
                });
        }
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) =>
                this.setState({modules: modules})
            );
    }

    renderListOfModules() {
        return this.state.modules.map((module) =>
            <ModuleListItem key={module.id}
                            delete={this.deleteModule}
                            courseId={this.state.courseId}
                            module={module}/>);
    }

    render() {
        return (
                <div className="row">
                    <div className="leftColumn">
                        <div className="input-group">
                            <input id="moduleInput"
                                   className="form-control"
                                   placeholder="Enter a name for the Module"
                                   onChange={this.titleChanged}
                                   value={this.state.module.title}/>
                            <button id="moduleBtn"
                                    className="btn btn-success"
                                    onClick={this.createModule}>+
                            </button>
                        </div>
                        <div className="nav flex-column nav-pills"
                             aria-orientation="vertical">
                            {this.renderListOfModules()}
                        </div>
                    </div>
                    <div className="rightColumn">
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        </Route>

                    </div>
                </div>
        );
    }

}

export default ModuleList;
