import React, {Component} from 'react';
import TopicPills from './TopicPills';

class LessonEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: ''
        };

        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.props.match.params.courseId);
        this.setModuleId(newProps.props.match.params.moduleId);
        this.setLessonId(newProps.props.match.params.lessonId);
    }

    render(){
        return(
            <TopicPills courseId={this.state.courseId}
                        moduleId={this.state.moduleId}
                        lessonId={this.state.lessonId}/>
        );
    }

}

export default LessonEditor;