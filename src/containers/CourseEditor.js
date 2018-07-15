import React, {Component} from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

class CourseEditor extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-4">
                    <h2>Modules</h2><ModuleList/>
                </div>
                <div className="col-8">
                    <h2>Lessons</h2><LessonTabs/>
                </div>
            </div>
        )
    }
}

export default CourseEditor;