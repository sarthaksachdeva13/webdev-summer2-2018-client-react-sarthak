import React, {Component} from 'react';
import CourseList from './CourseList'
import CourseEditor from './CourseEditor';
import '../stylesheet.css';
import {BrowserRouter as Router, Route}
    from 'react-router-dom';

class WhiteBoard extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>WhiteBoard</h1>
                    <Route path="/courses" component={CourseList}/>
                    <Route path="/course/:courseId" component={CourseEditor}/>
                </div>
            </Router>
        );
    }
}

export default WhiteBoard;