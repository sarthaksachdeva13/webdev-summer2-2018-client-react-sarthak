import React, {Component} from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseServiceClient';


class CourseList extends Component {
    constructor() {
        super();
        this.state = {
            courses: []
        };
        this.courseService = CourseService.instance;
        this.formChanged = this.formChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.sortedCourses = this.sortedCourses.bind(this);
    }


    componentDidMount() {
        this.findAllCourses()
    }


    deleteCourse(courseId) {
        this.courseService.deleteCourse(courseId)
            .then(() => {
                this.findAllCourses();
            });
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


    sortedCourses() {
        this.courseService.sortedCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    renderRows() {
        return this.state.courses.map((course) =>
            <CourseRow key={course.id}
                       courseTitle={course.title}
                       delete={this.deleteCourse}
            />)
    }


    render() {
        return (
            <div>
                <div id="new-course" className="input-group mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Enter a course title"
                           aria-label="New Course" aria-describedby="basic-addon2"
                           onChange={this.formChanged}/>
                    <div className="input-group-append">
                        <button type="button"
                                className="btn btn-outline-primary"
                                onClick={this.createCourse}>Add
                        </button>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Last Created</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;