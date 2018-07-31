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
            <div>
                <div className="container pt-5 widgetTemplate">
                    <div className="row flex-row-reverse pr-2 pb-3">
                        <div>
                            <label className="switch m-auto">
                                <input type="checkbox" onClick={this.props.preview}/>
                                <span className="slider round"/>
                            </label>
                        </div>
                        <div className="d-flex pr-2">
                            <button className="btn btn-primary m-auto saveBtn" hidden={this.props.previewMode}
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
                    {console.log(this.props.widgets)}
                </div>
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="row flex-row-reverse">
                            <button className="btn btn-success addButton" onClick={this.props.addWidget}><i
                                className="fa fa-plus-square"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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