import React, {Component} from "react";
import ModuleList from "./ModuleList";
import CourseService from '../services/CourseServiceClient';

class CourseEditor
    extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            courseTitle: '',
            course: ''
        };
        this.courseService = CourseService.instance;

        this.setCourseId = this.setCourseId.bind(this);
        this.findCourseById = this.findCourseById.bind(this);

    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
    }

    setCourseId(courseId) {
        this.findCourseById(courseId);
        this.setState({
            courseId: courseId
        });
    }


    findCourseById(courseId) {
        return this.courseService.findCourseById(
            courseId
        ).then((course) => {
            this.setState({
                course: course
            })

        });

    }


    render() {
        return (
            <div>
                <h3>Module List for Course {this.state.courseTitle}</h3>
                <ModuleList courseId={this.state.courseId}/>
            </div>

        );
    }
}

export default CourseEditor;