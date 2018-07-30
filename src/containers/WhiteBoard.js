import React, {Component} from 'react';
import CourseList from './CourseList'
import CourseEditor from './CourseEditor';
import '../stylesheet.css';

import {BrowserRouter as Router, Route, Link}
    from 'react-router-dom';

class WhiteBoard extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <Link to="/courses">
                        <h1>WhiteBoard</h1>
                    </Link>
                    <Route path="/courses"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        );
    }
}
export default WhiteBoard;