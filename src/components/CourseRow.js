import React from 'react';
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../stylesheet.css';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td><Link to={`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link></td>
                <td>{this.props.course.modified}</td>
                <td>

                    <span className="float-right" onClick={() => {
                        this.props.delete(this.props.course.id)
                    }}><i className="fa-2x fa fa-trash"/></span>
                </td>
            </tr>

        )
    }
}

export default CourseRow;