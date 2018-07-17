import React, {Component} from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

class CourseEditor extends Component{

    constructor(props){
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = { courseId : ''};
    }

    componentDidMount(){
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
    }

    selectCourse(courseId){
        this.setState({courseId: courseId});
    }

    render(){
        return(
            <h3>Course {this.state.courseId}</h3>
        )
    }


}

export default CourseEditor;