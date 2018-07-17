import React, {Component} from 'react';
import CourseService from '../services/CourseServiceClient';
import {Link} from 'react-router-dom';

class CourseRow extends Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
    }


    render() {
        return (

            <tr>
                <td>{this.props.course.title}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() =>
                            {this.props.delete(this.props.course.id)}}>
                    Delete
                    </button>
                </td>
                <Link to={`/course/${this.props.course.id}/edit`}>
                    {this.props.course.title}
                </Link>

            </tr>

        )
    }
}

export default CourseRow;


//
// {/*<tr id={this.props.course.id} key={this.props.courseId}>*/}
// {/*<td style={{"width": "50%"}}>*/}
// {/*<div>*/}
// {/*<i className="fa fa-files-o pr-2"/>*/}
// {/*<Link to={`/course/${this.props.course.id}`}>*/}
// {/*<span className="font-weight-bold text-black-50">{this.props.course.title}</span>*/}
// {/*</Link>*/}
// {/*</div>*/}
// {/*</td>*/}
// {/*<td style={{"width": "14%"}}>*/}
// {/*Sarthak*/}
// {/*</td>*/}
// {/*<td>*/}
// {/*<div>*/}
// {/*<span className="font-weight-bold text-black-50">{this.props.course.modified}</span>*/}
// {/*<i className="fa fa-times fa-2x float-right text-dark" style={{"hover": "cursor"}}*/}
// {/*onClick={() => this.props.deleteCourse(this.props.course.id)}/>*/}
// {/*</div>*/}
// {/*</td>*/}
// {/*</tr>*/}