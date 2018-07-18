import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../stylesheet.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class ModuleList extends Component {
    constructor() {
        super();
        this.state = {
            courseId: '',
            module: {title: '', id: ''},
            modules: []
        };

        this.moduleService = ModuleService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
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

    renderListOfModules() {
        return this.state.modules
            .map((module) =>
                <ModuleListItem
                    module={module}
                    key={module.id}
                    courseId={this.state.courseId}
                    delete={this.deleteModule}/>
            );
    }


    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => this.setModules(modules));
    }

    setModules(modules) {
        this.setState({modules: modules})
    }


    titleChanged(event) {
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        this.moduleService.createModule(this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId);
            });
    }


    deleteModule(moduleId) {
        this.moduleService.deleteModule(moduleId)
            .then(() =>
                this.findAllModulesForCourse(this.state.courseId)
            );
    }


    render() {
        return (
            <Router>
                <div className="row">
                    <div id="module-list" className="col-4">
                        <div className="input-group mb-3">
                            <input className="form-control"
                                   placeholder="Enter a module"
                                   aria-label="New Module" aria-describedby="basic-addon2"
                                   onChange={this.titleChanged} value={this.state.module.title}/>
                            <div className="input-group-append">
                                <button onClick={this.createModule}
                                        className="btn btn-info">
                                    <i className="fa fa-plus"/>
                                </button>
                            </div>
                        </div>

                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                             aria-orientation="vertical">
                            {this.renderListOfModules()}
                        </div>
                    </div>
                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        </Route>

                    </div>
                </div>
            </Router>
        );
    }
}


export default ModuleList;