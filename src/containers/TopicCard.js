import React, {Component} from 'react';

class TopicCard
    extends Component {

    constructor(props) {
        super(props);

        this.state = {
            topicId: ''
        };

        this.setTopicId = this.setTopicId.bind(this);

    }


    componentDidMount() {
        this.setTopicId(this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setTopicId(newProps.match.params.topicId);
    }

    setTopicId(topicId) {
        this.setState({topicId: topicId});
    }

    render() {
        return (
            <div className="card bg-light mb-3">
                <div className="card-header">Topic {this.state.topicId}</div>
                <div className="card-body">
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis
                        sollicitudin enim id tincidunt. Fusce ultricies accumsan nisi, id lacinia ligula consequat in.
                        Curabitur aliquam, nisi et molestie imperdiet, magna turpis faucibus lectus, eu convallis sapien
                        urna et urna. Praesent vitae tristique tortor. Curabitur eu ipsum malesuada lacus tincidunt
                        sodales. In sagittis id erat sit amet facilisis. Cras ac convallis ipsum. Integer placerat non
                        nulla quis maximus. Integer viverra iaculis libero fringilla aliquet. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis mattis lacus
                        scelerisque consectetur venenatis. Ut efficitur suscipit felis, a vestibulum quam placerat quis.
                        Ut sed condimentum velit. Cras viverra nisi sit amet lorem laoreet ullamcorper.</p>
                </div>
            </div>

        )
    }
}

export default TopicCard;