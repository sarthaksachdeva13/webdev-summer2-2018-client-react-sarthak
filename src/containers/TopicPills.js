import React, {Component} from "react";
import TopicPillItem from '../components/TopicPillItem';
import TopicCard from './TopicCard';
import TopicService from '../services/TopicServiceClient';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../stylesheet.css';

class TopicPills extends Component {
    constructor() {
        super();
        this.state = {
            moduleId: '',
            courseId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        };

        this.topicService = TopicService.instance;
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    }

    componentDidMount() {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId);
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setLessonId(newProps.lessonId);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    titleChanged(event) {
        this.setState({topic: {title: event.target.value}});
    }

    createTopic() {
        this.topicService.createTopic
        (this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() =>
                this.findAllTopicsForLesson
                (this.state.courseId, this.state.moduleId, this.state.lessonId));
    }

    deleteTopic(topicId) {
        let popupWindow = window.confirm("Are you sure you want to delete this topic?");
        if (popupWindow) {
            this.topicService
                .deleteTopic(topicId)
                .then(() => {
                    this.findAllTopicsForLesson
                    (this.state.courseId, this.state.moduleId, this.state.lessonId)
                });
        }
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) => this.setState({topics: topics}));
    }

    renderListOfTopics() {
        return this.state.topics.map((topic) =>
            <TopicPillItem key={topic.id}
                           moduleId={this.state.moduleId}
                           courseId={this.state.courseId}
                           lessonId={this.state.lessonId}
                           delete={this.deleteTopic}
                           topic={topic}/>);
    }

    render() {
        return (
                <div>
                    <div className="row">
                        <div className="input-group topicIn">
                            <input id="topicInput"
                                   className="form-control"
                                   placeholder="Enter topic title"
                                   onChange={this.titleChanged}
                                   value={this.state.topic.title}/>
                            <button id="topicBtn"
                                    className="btn btn-info"
                                    onClick={this.createTopic}>+
                            </button>
                        </div>
                        <div className="col-9">
                            <ul className="nav nav-pills">
                                {this.renderListOfTopics()}
                            </ul>
                        </div>
                    </div>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={TopicCard}>
                    </Route>
                </div>
        )
    }
}

export default TopicPills;