import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseServiceClient';
import '../stylesheet.css';

class CourseList extends React.Component {
    constructor() {
        super();
        this.state = {
            courses: [],
            course: {
                title: '',
                id: '',
                created: '',
                modified: ''
            },

        };
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.setCourse = this.setCourse.bind(this);
    }


    setCourse(id, title) {
        this.setState(
            {
                course: {
                    title: title,
                    id: id
                }
            }
        )
    }

    componentDidMount() {
        this.findAllCourses();
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
        this.setState(
            {
                course:
                    {
                        title: event.target.value,
                        id: this.state.course.id,
                        modified: new Date()
                    }
            }
        )
    }

    renderCourseRows() {
        return this.state.courses.map((course) =>
            <CourseRow key={course.id}
                       course={course}
                       courseTitle={course.title}
                       delete={this.deleteCourse}
                       edit={this.setCourse}/>
        );
    }

    updateCourse() {
        this.courseService
            .updateCourse(
                this.state.course.id,
                this.state.course
            ).then(() => {
            this.state.course.id = '';
            this.findAllCourses();
        });
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="input-group mb-3">
                    <input className="form-control"
                           placeholder="Enter a Course title"
                           onChange={this.titleChanged}
                           defaultValue={this.state.course.title}/>
                    <div className="input-group-append">
                        <button className="btn btn-primary"
                                onClick={this.createCourse}>Add
                        </button>
                        <button className="btn btn-success"
                                onClick={this.updateCourse}>Update
                        </button>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark theadClass">
                        <tr>
                            <th>Title</th>
                            <th>Last Modified</th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody>{this.renderCourseRows()}</tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CourseList;
