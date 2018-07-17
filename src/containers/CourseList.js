import React, {Component} from 'react';
import CourseRow from '../components/CourseRow'
import CourseService from '../services/CourseServiceClient'


class CourseList extends Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }


    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses});
            });
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
                    </thead>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                    <CourseRow/>
                </table>
            </div>

        )
    }
}

export default CourseList;