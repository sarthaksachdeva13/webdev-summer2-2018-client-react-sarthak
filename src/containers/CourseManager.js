import React,{Component} from 'react';
import TopicPills from './TopicPills';
import CourseCard from '../components/CourseCard'
import CourseEditor from './CourseEditor';
import '../stylesheet.css';

class CourseManager extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>WhiteBoard</h1>
                {/*<TopicPills/>*/}
                <CourseEditor/>
                <div className="card-deck">
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                </div>
            </div>
        );
    }
}

export default CourseManager;