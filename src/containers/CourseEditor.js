import React, {Component} from 'react';
import CourseService from "../services/CourseServiceClient";
import ModuleList from './ModuleList';

class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {},
            courseId: ''
        };

        this.courseService = CourseService.instance;
        this.setCourse = this.setCourse.bind(this);
        this.selectCourse = this.selectCourse.bind(this);

    }

    componentDidMount() {
        this.selectCourse(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.selectCourse
        (newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    render() {
        return (
            <h3>Course {this.state.courseId}</h3>
        )
    }


}

export default CourseEditor;