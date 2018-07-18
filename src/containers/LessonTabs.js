import React, {Component} from 'react';
import LessonService from '../services/LessonServiceClient';
import LessonListItem from '../components/LessonTabItem';
import LessonEditor from './LessonEditor';

class LessonTabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            courseId : '',
            moduleId : '',
            lesson : {title : ''},
            lessons : []
        };
        this.lessonService = LessonService.instance;
        this.createLesson = this.createLesson.bind(this);

    };



    render() {
        return (
            <h1>Lesson Tabs</h1>
        )
    }
}

export default LessonTabs;