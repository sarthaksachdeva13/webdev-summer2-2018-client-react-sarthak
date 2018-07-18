import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CourseRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr id={this.props.course.id} key={this.props.courseId}>
                <td style={{"width": "50%"}}>
                    <div>
                        <i className="fa fa-files-o pr-2"/>
                        <Link to={`/course/${this.props.course.id}`}>
                            <span className="font-weight-bold text-black-50">{this.props.course.title}</span>
                        </Link>
                    </div>
                </td>
                <td style={{"width": "14%"}}>
                    Sarthak
                </td>
                <td>
                    <div>
                        <span className="font-weight-bold text-black-50">{this.props.course.modified}</span>
                        <i className="fa fa-times fa-2x float-right text-dark" style={{"hover": "cursor"}}
                           onClick={() => this.props.deleteCourse(this.props.course.id)}/>
                    </div>
                </td>
            </tr>

        )
    }
}

export default CourseRow;
