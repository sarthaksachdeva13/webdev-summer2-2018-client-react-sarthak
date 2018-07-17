import React, {Component} from 'react';
import CourseList from './CourseList'
import CourseEditor from './CourseEditor';
import '../stylesheet.css';
import {BrowserRouter as Router, Route}
    from 'react-router-dom';

class WhiteBoard extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>WhiteBoard</h1>
                    <Route path="/course"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default WhiteBoard;