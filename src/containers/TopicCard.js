import React, {Component} from 'react';

class TopicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topicId: ''
        };

        this.setTopicId = this.setTopicId.bind(this);
    }

    componentDidMount() {
        this.setTopicId(
            this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setTopicId(
            newProps.match.params.topicId);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    render() {
        return (
            <div className="card bg-light mb-3">
                <div className="card-header">Topic {this.state.topicId}</div>
                <div className="card-body">
                    <p className="card-text">RANDOMTEXTLOREMIPSUM</p>
                </div>
            </div>

        )
    }
}

export default TopicCard;