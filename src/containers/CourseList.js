import React, {Component} from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseServiceClient'


class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.formChanged = this.formChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.state = {
            courses: []
        };
    }


    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId)
            .then(() => {
                this.findAllCourses();
            });
    }

    componentDidMount() {
        this.findAllCourses()
    }


    findAllCourses() {
        this.courseService.findAllCourses()
            .then(courses => this.setState({courses: courses}));
    }

    formChanged = (event) =>
        this.setState({course: {title: event.target.value}});

    createCourse() {
        this.courseService.createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    renderCourses() {
        return this.state.courses.map((course, index) =>
            <CourseRow key={index}
                       course={course}
                       delete={this.deleteCourse}
            />)
    }


    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th><input className="form-control"
                                   onChange={this.formChanged}
                                   id="titleFld"
                                   placeholder="Enter a course title"/>
                        </th>
                        <th>
                            <button className="btn btn-primary"
                                    onClick={this.createCourse}>Add
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>{this.renderCourses()}</tbody>
                </table>
            </div>

        )
    }
}

export default CourseList;