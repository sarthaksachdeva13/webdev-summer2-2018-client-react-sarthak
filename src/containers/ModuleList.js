import React, {Component} from 'react';
import ModuleListItem from '../components/ModuleListItem'
import ModuleService from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../stylesheet.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class ModuleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {title: ''},
            courseId: '',
            module: {title: '', id: ''},
            modules: []
        };
        this.moduleService = ModuleService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.setCourse = this.setCourse.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
    }


    setCourse(course) {
        this.setState({course: course});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
        this.setCourse(this.props.course);
    }

    componentWillReceiveProps(newProps) {
        this.findAllModulesForCourse(newProps.courseId);
        this.setCourseId(newProps.courseId);
        this.setCourse(newProps.course);
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
        this.moduleService.createModule(this.props.courseId, this.state.module)
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
            </Router>
        );
    }
}


export default ModuleList;

