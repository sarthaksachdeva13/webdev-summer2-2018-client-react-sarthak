import LessonTabItem from '../components/LessonTabItem';
import React, {Component} from "react";
import LessonService from '../services/LessonServiceClient';
import LessonEditor from './LessonEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class LessonTabs extends Component {
    constructor() {
        super();
        this.state = {
            moduleId: '',
            courseId: '',
            lesson: {title: ''},
            lessons: []
        };

        this.lessonService = LessonService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    titleChanged(event) {
        this.setState({lesson: {title: event.target.value}});
    }

    createLesson() {
        this.lessonService.createLesson
        (this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() => this.findAllLessonsForModule(this.state.courseId, this.state.moduleId));
        console.log(this.state.lesson);
    }

    deleteLesson(lessonId) {
        let popupWindow = window.confirm("Are you sure you want to delete this lesson?");
        if (popupWindow) {
            this.lessonService
                .deleteLesson(lessonId)
                .then(() => {
                    this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
                });
        }
    }

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) => this.setState({lessons: lessons}));
    }

    renderListOfLessons() {
        return this.state.lessons.map((lesson) =>
            <LessonTabItem key={lesson.id}
                           delete={this.deleteLesson}
                           moduleId={this.state.moduleId}
                           courseId={this.state.courseId}
                           lesson={lesson}/>);
    }

    render() {
        return (
            <div>
                <div className="input-group" id="lessonI">
                    <input id="lessonInput"
                           className="form-control"
                           placeholder="Enter Lesson Title"
                           onChange={this.titleChanged}
                           value={this.state.lesson.title}/>
                    <button id="lessonBtn"
                            className="btn btn-warning"
                            onClick={this.createLesson}>+
                    </button>
                </div>
                <ul className="nav nav-tabs">{this.renderListOfLessons()}</ul>
                <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                       component={LessonEditor}>
                </Route>
            </div>

        );
    }
}
