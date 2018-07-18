import React, {Component} from 'react';
import LessonService from '../services/LessonServiceClient';
import LessonListItem from '../components/LessonListItem';
import LessonEditor from './LessonEditor';

class LessonTabs extends Component {

    constructor(props){
        super(props);
        this.state = {
            courseId : '',
            moduleId : '',
            lesson : {title : '', id: ''},
            lessons : []
        };
        this.lessonService = LessonService.instance;
        this.createLesson = this.createLesson.bind(this);

    };



    render() {
        return (

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        )
    }
}

export default LessonTabs;