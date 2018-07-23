import React, {Component} from 'react';

class TopicCard
    extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topicId: '',
            topicTitle: ''
        };

        this.setTopicId = this.setTopicId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
    }

    componentDidMount() {
        this.setTopicId(this.props.match.params.topicId);
        this.setTopicTitle(this.props.match.params.topicTitle);

    }

    componentWillReceiveProps(newProps) {
        this.setTopicId(newProps.match.params.topicId);
        this.setTopicTitle(newProps.match.params.topicTitle);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    setTopicTitle(topicTitle) {
        this.setState({topicTitle: topicTitle});
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">Topic Content // ID: {this.state.topicId}</div>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis
                        sollicitudin enim id tincidunt. Fusce ultricies accumsan nisi, id lacinia ligula consequat in.
                        Curabitur aliquam, nisi et molestie imperdiet, magna turpis faucibus lectus, eu convallis sapien
                        urna et urna. Praesent vitae tristique tortor. Curabitur eu ipsum malesuada lacus tincidunt
                        sodales. In sagittis id erat sit amet facilisis.</p>
                </div>
            </div>

        )
    }
}

export default TopicCard;