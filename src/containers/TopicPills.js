import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopicService from '../services/TopicServiceClient';
import TopicPillItem from '../components/TopicPillItem';


class TopicPills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courseId: '',
            moduleId: '',
            lessonId: '',
            topic: {title: ''},
            topics: []
        }


    }





    render() {
        return (
            <h2>Topic Pills</h2>
        )
    }
}

export default TopicPills;