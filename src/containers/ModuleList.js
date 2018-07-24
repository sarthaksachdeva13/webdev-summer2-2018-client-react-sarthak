import React, {Component} from "react";
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Route} from 'react-router-dom'
import '../stylesheet.css';

class ModuleList extends Component {

    constructor() {
        super();
        this.state = {
            courseId: '',
            module:
                {
                    title: '',
                    moduleId: ''
                },
            modules: []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.updateModule = this.updateModule.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
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
        this.setState(
            {
                module:{
                    title:event.target.value,
                    moduleId:this.state.module.moduleId

                }
            }
        );
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
                    window.location.replace("/course/" + `${this.state.courseId}`);
                    this.findAllModulesForCourse
                    (this.state.courseId)
                });
        }
    }

    updateModule() {
        this.moduleService
            .updateModule(this.state.module.moduleId,
                this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    setModuleTitle(module,id) {
        this.setState({
            module: {
                moduleId:id,
                title: module.title
            }
        })
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
                            edit={this.setModuleTitle}
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
                               defaultValue={this.state.module.title}
                               value={this.state.module.title}/>
                        <button id="moduleBtn"
                                className="btn btn-success"
                                onClick={this.createModule}>+
                        </button>
                        <button id="moduleBtn"
                                onClick={this.updateModule}
                                className="fa fa-check btn btn-success">
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
