import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './stylesheet.css';
import ModuleList from './containers/ModuleList';
import LessonTabs from './containers/LessonTabs';
import TopicPills from './containers/TopicPills';


class CourseCard extends React.Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Card text.</p>
                    <a href="#" className="btn btn-primary">More...</a>
                </div>
            </div>
        )
    }
}

class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>WhiteBoard</h1>
                <TopicPills/>
                <LessonTabs/>
                <ModuleList/>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);