import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import * as widgetConstant from '../constants';

const Heading = ({widget, preview, changeHeadingText, changeHeadingSize, changeHeadingName}) => {

    let headingSize, headingInput, headingName;

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
        <div className="container widget-container"
             style={widgetContainerStyle}>
            <div className="col-md-12">
                <div hidden={preview}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => changeHeadingText(widget.id, headingInput.value)}
                                       value={widget.text}
                                       ref={node => headingInput = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <select onChange={() => changeHeadingSize(widget.id, headingSize.value)}
                                        value={widget.size}
                                        ref={node => headingSize = node} className="form-control">
                                    <option value="1">Heading 1</option>
                                    <option value="2">Heading 2</option>
                                    <option value="3">Heading 3</option>
                                </select> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => changeHeadingName(widget.id, headingName.value)}
                                       value={widget.name}
                                       ref={node => headingName = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h5>Preview</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            {widget.size === 1 && <h1>{widget.text}</h1>}
                            {widget.size === 2 && <h2>{widget.text}</h2>}
                            {widget.size === 3 && <h3>{widget.text}</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
};


const dispatchToPropertyMapper = dispatch => ({
    changeHeadingText:
        (widgetId, newText) =>
            actions.changeHeadingText(dispatch, widgetId, newText),
    changeHeadingName:
        (widgetId, newName) =>
            actions.changeHeadingName(dispatch, widgetId, newName),
    changeHeadingSize:
        (widgetId, newSize) =>
            actions.changeHeadingSize(dispatch, widgetId, newSize)
});

const stateToPropsMapper = state => (
    {
        preview: state.preview
    }
);


const HeadingContainer = connect(stateToPropsMapper, dispatchToPropertyMapper)(Heading);