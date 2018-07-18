import React, {Component} from 'react';

export default class ModuleEditor extends Component {


    constructor(props) {
        super(props);
        this.state =
            {
                moduleId: '',
                courseId: '',
                modules: []
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
            <h1>Module Editor</h1>
        )
    }
}
