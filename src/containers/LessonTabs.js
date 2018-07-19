import React, {Component} from 'react';
import LessonService from '../services/LessonServiceClient';
import LessonListItem from '../components/LessonTabItem';
import LessonEditor from './LessonEditor';

class LessonTabs extends Component {

    constructor() {
        super();
        this.state = {
            courseId: '',
            moduleId: '',
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
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
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

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then((lessons) =>
                this.setState({lessons: lessons})
            );
    }

    createLesson() {
        this.lessonService.createLesson(
            this.state.courseId, this.state.moduleId, this.state.lesson)
            .then(() =>
                this.findAllLessonsforModule(this.state.courseId, this.state.moduleId)
            );
    }


    deleteLesson(lessonId) {
        this.lessonService.deleteLesson(lessonId)
            .then(() => this.findAllLessonsforModule(this.state.courseId, this.state.moduleId)
            );
    }

    renderListOfLessons() {
        return this.state.lessons.map((lesson) =>
            <LessonListItem lesson={lesson}
                            key={lesson.id}
                            courseId={this.state.courseId}
                            moduleId={this.state.moduleId}
                            delete={this.deleteLesson}
            />
        );
    }


    render() {
        return (
            <Router>
                <div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="New Lesson Title..."
                               aria-label="New Lesson" aria-describedby="basic-addon2"
                               onChange={this.titleChanged} value={this.state.lesson.title}/>
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-primary" onClick={this.createLesson}>
                                +</button>
                        </div>
                    </div>
                    <ul className="nav nav-tabs">
                        {this.renderListOfLessons()}
                    </ul>
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           component={LessonEditor}>
                    </Route>
                </div>
            </Router>
        )
    }
}

export default LessonTabs;