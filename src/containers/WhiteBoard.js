import React,{Component} from 'react';
import TopicPills from './TopicPills';
import CourseCard from '../components/CourseCard'
import CourseList from './CourseList'
import CourseEditor from './CourseEditor';
import '../stylesheet.css';

class WhiteBoard extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h1>WhiteBoard</h1>
                <CourseList/>
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

export default WhiteBoard;