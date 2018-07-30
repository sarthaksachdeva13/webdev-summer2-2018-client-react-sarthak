import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from "../actions"
import WidgetComponent from '../components/Widget'
import '../stylesheet.css';


class WidgetList extends Component {
    constructor(props) {
        super(props);
        this.state = {topicId: ''};
        this.setTopic = this.setTopic.bind(this);
        this.saveFunction = this.saveFunction.bind(this);
    }


    componentDidMount() {
        this.setTopic(this.props.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setTopic
        (newProps.topicId);
        if (this.props.topicId !== newProps.topicId) {
            this.props.findAllWidgetsForTopic(newProps.topicId);
        }
    }

    setTopic(topicId) {
        this.setState({topicId: topicId});
    }

    saveFunction() {
        this.props.save(this.state.topicId);
    }

    render() {
        return (
            <html>
            <head>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                      integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
                      crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
                        integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
                        crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
                      integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
                      crossOrigin="anonymous"/>

            </head>
            <body>
            <div className="container pt-5 widgetTemplate">
                <div className="row flex-row-reverse pr-2 pb-3">
                    <div>
                        <label className="switch m-auto">
                            <input type="checkbox" onClick={this.props.preview}/>
                            <span className="slider round"/>
                        </label>
                    </div>
                    <div className="d-flex pr-2">
                        <button className="btn btn-success m-auto" hidden={this.props.previewMode}
                                onClick={this.saveFunction}>
                            Save
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {this.props.widgets.map(widget => (
                    <WidgetComponent widget={widget}
                                     preview={this.props.previewMode}
                                     key={widget.widgetOrder}
                                     widgetLength={this.props.widgets.length}/>
                ))}
            </div>
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="row flex-row-reverse">
                        <button className="btn btn-danger" onClick={this.props.addWidget}><i
                            className="fas fa-plus-square"/>
                        </button>
                    </div>
                </div>
            </div>
            </body>
            </html>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});

const dispatchToPropertyMapper = dispatch =>
    (
        {
            findAllWidgetsForTopic: (topicId) => actions.findAllWidgetsForTopic(dispatch, topicId),
            addWidget: () => actions.addWidget(dispatch),
            save: (topicId) => actions.save(dispatch, topicId),
            preview: () => actions.preview(dispatch)
        }
    );

export const WidgetListContainer =
    connect(stateToPropertyMapper, dispatchToPropertyMapper)
    (WidgetList);