import React, {Component} from 'react';
import LessonTabs from "./LessonTabs";

class ModuleEditor extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                moduleId: '',
                courseId: ''
            };
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
    }


    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }


    componentDidMount() {
        this.setModuleId(this.props.match.params.moduleId);
        this.setCourseId(this.props.match.params.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }

    render() {
        return (
            <div className="my-auto">
                <LessonTabs courseId={this.state.courseId}
                            moduleId={this.state.moduleId}/>
            </div>
        )
    }
}

export default ModuleEditor;
