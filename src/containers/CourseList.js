import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseServiceClient';
import '../stylesheet.css';

class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: []
        };

        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentDidMount() {
        this.findAllCourses();
        this.setState({
            course: {
                title: "",
                created: new Date(),
                modified: new Date()
            }
        });
    }

    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() =>
                this.findAllCourses()
            );
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }

    titleChanged(event) {
        this.setState({
            course: {
                title: event.target.value,
                created: new Date(),
                modified: new Date()
            }
        });
    }

    renderCourseRows() {
        return this.state.courses.map((course) =>
            <CourseRow key={course.id}
                       course={course}
                       courseTitle={course.title}
                       delete={this.deleteCourse}/>
        );
    }


    render() {
        return (
            <div>
                <div className="input-group mb-3">
                    <input className="form-control"
                           placeholder="Enter a Course title"
                           onChange={this.titleChanged}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                                onClick={this.createCourse}>Add
                        </button>
                    </div>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Last Created</th>
                        <th scope="col">Last Modified</th>
                        <th scope="col">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>{this.renderCourseRows()}</tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;
