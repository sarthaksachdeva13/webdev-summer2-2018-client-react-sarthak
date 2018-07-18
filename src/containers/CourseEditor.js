import React, {Component} from 'react';
import ModuleList from './ModuleList';

class CourseEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            courseTitle : ''
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setCourseTitle = this.setCourseTitle.bind(this);
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setCourseTitle(this.props.match.params.courseTitle);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setCourseTitle(newProps.props.match.params.courseTitle);
    }

    setCourseId(courseId){
        this.setState({courseId : courseId})
    }

    setCourseTitle(courseTitle){
        this.setState({courseTitle : courseTitle})
    }



    render() {
        return (
            <div>
                <h2>Course : {this.state.courseTitle} </h2>
                <ModuleList courseId={this.state.courseId}/>
            </div>
        );
    }


}

export default CourseEditor;