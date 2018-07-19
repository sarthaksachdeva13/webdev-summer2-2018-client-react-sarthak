import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopicService from '../services/TopicServiceClient';
import TopicPillItem from '../components/TopicPillItem';
import TopicCard from './TopicCard';


class TopicPills extends Component {

    constructor() {
        super();

        this.state = {
            courseId: '',
            moduleId: '',
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
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, newProps.lessonId);
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
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


    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.topicService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then((topics) =>
                this.setState({topics: topics})
            );
    }

    createTopic() {
        this.topicService.createTopic
        (this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
            .then(() =>
                this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId)
            );
    }

    deleteTopic(topicId) {
        this.topicService
            .deleteTopic(topicId)
            .then(() =>
                this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId)
            );
    }


    renderListOfTopics() {
        return this.state.topics.map((topic) =>
            <TopicPillItem key={topic.id}
                           delete={this.deleteTopic}
                           moduleId={this.state.moduleId}
                           courseId={this.state.courseId}
                           lessonId={this.state.lessonId}
                           topic={topic}/>
        );
    }


    render() {
        return (
            <Router>
                <div>
                    <div id="topic-pills" className="row">
                        <div className="col-9">
                            <ul className="nav nav-pills">
                                {this.renderListOfTopics()}
                            </ul></div>
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="New Topic Title..."
                                       aria-label="New Topic" aria-describedby="basic-addon2"
                                       onChange={this.titleChanged} value={this.state.topic.title}/>
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-outline-primary" onClick={this.createTopic}>+</button>
                                </div>
                            </div> </div>
                    </div>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={TopicCard}>
                    </Route>
                </div>
            </Router>
        )
    }
}

export default TopicPills;