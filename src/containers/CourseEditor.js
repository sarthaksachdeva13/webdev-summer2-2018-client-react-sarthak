import React, {Component} from 'react';
import ModuleList from './ModuleList';
import CourseService from "../services/CourseServiceClient";


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

    setCourse(course) {
        this.setState({course: course});
    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
        this.courseService.findCourseById(courseId)
            .then((course) => {
                this.setState({course: course})
            });
    }

    render() {
        return (
            <div className="container-fluid">
                <ModuleList courseId={this.state.courseId} course={this.state.course}/>
            </div>
        );
    }


}

export default CourseEditor;