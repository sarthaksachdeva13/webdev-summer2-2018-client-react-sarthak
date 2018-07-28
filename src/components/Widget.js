import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import * as widgetConstant from '../constants';

let widgetContainerStyle =
    {
        border: "solid", borderWidth: "thin", width: "1000px", borderColor: "gray", borderRadius: "3px"
    };


//Heading Widget
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


const dispatchToPropertyMapperHeading = dispatch => ({
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

const stateToPropertyMapperHeading = state => (
    {
        preview: state.preview
    }
);


const HeadingContainer = connect(stateToPropertyMapperHeading, dispatchToPropertyMapperHeading)(Heading);


//Paragraph Widget

const Paragraph = ({widget, preview, changeParagraphText, changeParagraphName}) => {
    let paraInput, paraName;
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
        <textarea onChange={() => changeParagraphText(widget.id, paraInput.value)}
                  ref={node => paraInput = node}
                  value={widget.text} className="form-control">
    </textarea> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => changeParagraphName(widget.id, paraName.value)}
                                       value={widget.name}
                                       ref={node => paraName = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Paragraph Preview</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <p> {widget.text} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
};

const dispatchToPropertyMapperParagraph = dispatch =>
    ({
        changeParagraphText:
            (widgetId, newText) =>
                actions.changeParagraphText(dispatch, widgetId, newText),
        changeParagraphName:
            (widgetId, newName) =>
                actions.changeParagraphName(dispatch, widgetId, newName)
    });

const stateToPropertyMapperParagraph = state => (
    {
        preview: state.preview
    }
);

const ParaContainer = connect(stateToPropertyMapperParagraph, dispatchToPropertyMapperParagraph)(Paragraph)


//Image Widget

const Image = ({widget, preview, changeImageText, changeImageName}) => {
    let imageInput, imageName;
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
                                <input onChange={() => changeImageText(widget.id, imageInput.value)}
                                       ref={node3 => imageInput = node3}
                                       value={widget.text} className="form-control"
                                /> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => changeImageName(widget.id, imageName.value)}
                                       value={widget.name}
                                       ref={node => imageName = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <h4>Image Preview</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <div className="col-md-2">
                                <img src={widget.text} alt={widget.text}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>

    )
};


const dispatchToPropertyMapperImage = dispatch =>
    ({
        changeImageText:
            (widgetId, imageText) =>
                actions.changeImageText(dispatch, widgetId, imageText),
        changeImageName:
            (widgetId, imageName) =>
                actions.changeImageName(dispatch, widgetId, imageName)
    });

const stateToPropertyMapperImage = state => (
    {
        preview: state.preview
    }
);

const ImageContainer = connect(stateToPropertyMapperImage, dispatchToPropertyMapperImage)(Image);


//List Widget
const List = ({widget, preview, changeListText, changeListType, changeListName}) => {


    let listType, listInput, listName;
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
    <textarea onChange={() => changeListText(widget.id, listInput.value)}
              ref={node2 => listInput = node2}
              value={widget.text} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <select onChange={() => changeListType(widget.id, listType.value)}
                                        ref={node2 => listType = node2}
                                        value={widget.listType} className="form-control">
                                    <option value="ordered">Ordered List</option>
                                    <option value="unordered">Unordered List</option>
                                </select> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <input onChange={() => changeListName(widget.id, listName.value)}
                                       value={widget.name}
                                       ref={node => listName = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <h5> Preview</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {widget.listType === "ordered" && <div>{orderedText(widget.text)} </div>}
                        {widget.listType === "unordered" && <div> {unorderedText(widget.text)}</div>}
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>
    )
};


const orderedText = (text) => {
    let stringArray = text.split("\n");
    return (

        <ol className="list-group">
            {stringArray.map(line => (<li> {line} </li>))}
        </ol>
    )
};

const unorderedText = (text) => {
    let stringArray = text.split("\n");
    return (

        <ul className="list-group">
            {stringArray.map(line => (<li> {line} </li>))}
        </ul>
    )
};


const dispatchToPropertyMapperList = dispatch => (
    {
        changeListText:
            (widgetId, newListText) =>
                actions.changeListText(dispatch, widgetId, newListText),
        changeListName:
            (widgetId, newListName) =>
                actions.changeListName(dispatch, widgetId, newListName),
        changeListType:
            (widgetId, listType) =>
                actions.changeListType(dispatch, widgetId, listType)
    }
);

const stateToPropertyMapperList = state => (
    {
        preview: state.preview
    }
);


const ListContainer = connect(stateToPropertyMapperList, dispatchToPropertyMapperList)(List);


//Link Widget

const Link = ({widget, preview, changeLinkText, changeLinkName, changeLinkDisplay}) => {

    let linkInput, linkName, linkDisplay;
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
                                <input onChange={() => changeLinkText(widget.id, linkInput.value)}
                                       ref={node3 => linkInput = node3}
                                       value={widget.text} className="form-control"
                                /> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input onChange={() => changeLinkDisplay(widget.id, linkDisplay.value)}
                                       ref={node3 => linkDisplay = node3}
                                       value={widget.linkName} className="form-control"
                                /> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">

                                <input onChange={() => changeLinkName(widget.id, linkName.value)}
                                       value={widget.name}
                                       ref={node => linkName = node} className="form-control"/> <br/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <h4>Link Preview</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <a href={widget.text}>{widget.linkName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
        </html>


    )
};

const dispatchToPropertyMapperLink = dispatch =>
    ({
        changeLinkText:
            (widgetId, linkText) =>
                actions.changeLinkText(dispatch, widgetId, linkText),
        changeLinkDisplay:
            (widgetId, linkDispText) =>
                actions.changeLinkDisplay(dispatch, widgetId, linkDispText),
        changeLinkName:
            (widgetId, linkName) =>
                actions.changeLinkName(dispatch, widgetId, linkName)
    });

const stateToPropertyMapperLink = state => ({
    preview: state.preview
});

const LinkContainer = connect(stateToPropertyMapperLink, dispatchToPropertyMapperLink)(Link);


let widgetListStyle =
    {
        height: "37px", borderRadius: "3px"
    };

const Widget = ({widget, preview, dispatch, widgetLength}) => {
    let selectElement;
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
        <div hidden={preview}>
            <div className="container widget-container"
                 style={widgetContainerStyle}>
                <div className="row">
                    <div className="col-md-12 text-dark pt-2">
                        <div className="row flex-row pb-1">
                            <div className="col-md-3 d-inline-flex">
                                <h4>{widget.widgetType}</h4></div>
                            <div className="col-md-9">

                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({type: DELETE_WIDGET, id: widget.id})
                                    )} className="btn btn-danger"><i className="fas fa-times"/></button>
                                </div>


                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({
                                            type: widgetConstant.INCREASE_ORDER_WIDGET,
                                            widgetOrder: widget.widgetOrder
                                        })
                                    )} disabled={(widget.widgetOrder === widgetLength)} className="btn btn-warning"><i
                                        className="fas fa-arrow-down"/></button>
                                </div>


                                <div className="d-inline-flex pr-2 float-right">
                                    <button onClick={e => (
                                        dispatch({
                                            type: widgetConstant.DECREASE_ORDER_WIDGET,
                                            widgetOrder: widget.widgetOrder
                                        })
                                    )} disabled={(widget.widgetOrder === 1)} className="btn btn-warning"><i
                                        className="fas fa-arrow-up"/></button>
                                </div>
                                <div className="d-inline-flex pr-1 float-right my-auto" style={widgetListStyle}>
                                    <select value={widget.widgetType}
                                            onChange={e =>
                                                dispatch({
                                                    type: 'SELECT_WIDGET_TYPE',
                                                    id: widget.id,
                                                    widgetType: selectElement.value
                                                })} ref={node => selectElement = node}>
                                        <option>Heading</option>
                                        <option>Paragraph</option>
                                        <option>List</option>
                                        <option>Image</option>
                                        <option>Link</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
            {widget.widgetType === 'Paragraph' && <ParaContainer widget={widget}/>}
            {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
            {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
            {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
        </div>

        </body>
        </html>
    )
};

const WidgetContainer = connect(state => (
    {
        preview: state.preview
    }
))(Widget);

export default WidgetContainer;



