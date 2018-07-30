import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET} from "../constants/index"
import * as actions from '../actions'
import * as constants from '../constants'
import '../stylesheet.css';


const Widget = ({widget, preview, dispatch, widgetLength}) => {

    let widgetTypeSelector;

    return (
        <div>
            <div hidden={preview}>
                <div className="container widget-container widgetContainerDiv">
                    <div className="row widgetRow">
                        <div className="col-md-12 text-dark pt-2">
                            <div className="row flex-row pb-1">
                                <div className="col-md-3 d-inline-flex">
                                    <h4>{widget.widgetType}</h4></div>
                                <div className="col-md-9">

                                    <div className="d-inline-flex pr-2 float-right">
                                        <button onClick={e => (
                                            dispatch({type: DELETE_WIDGET, id: widget.id})
                                        )} className="btn btn-danger"><i className="fa fa-times"/></button>
                                    </div>


                                    <div className="d-inline-flex pr-2 float-right">
                                        <button onClick={e => (
                                            dispatch({type: constants.MOVE_WIDGET_UP, widgetOrder: widget.widgetOrder})
                                        )} disabled={(widget.widgetOrder == widgetLength)} className="btn btn-warning">
                                            <i
                                                className="fa fa-arrow-down"/></button>
                                    </div>


                                    <div className="d-inline-flex pr-2 float-right">
                                        <button onClick={e => (
                                            dispatch({
                                                type: constants.MOVE_WIDGET_DOWN,
                                                widgetOrder: widget.widgetOrder
                                            })
                                        )} disabled={(widget.widgetOrder == 1)} className="btn btn-warning"><i
                                            className="fa fa-arrow-up"/></button>
                                    </div>


                                    <div className="d-inline-flex pr-1 float-right my-auto dropdown" id="widgetListDiv">
                                        <select
                                            value={widget.widgetType}
                                                onChange={e =>
                                                    dispatch({
                                                        type: 'WIDGET_TYPE',
                                                        id: widget.id,
                                                        widgetType: widgetTypeSelector.value
                                                    })} ref={node => widgetTypeSelector = node}>
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
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
            </div>
        </div>

    )
};
const WidgetContainer = connect(state => (
        {
            preview: state.preview
        }
    )
)(Widget);


//Heading
const Heading = ({widget, preview, changeHeadingText, changeHeadingSize, changeHeadingName}) => {

    let headingSelector;
    let headingInput;
    let headingName;
    return (
        <div>
            <div className="container widget-container widgetContainerDiv">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group inputField">
                                    <input onChange={() => changeHeadingText(widget.id, headingInput.value)}
                                           value={widget.text}
                                           ref={node => headingInput = node} className="form-control"/> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <select onChange={() => changeHeadingSize(widget.id, headingSelector.value)}
                                            value={widget.size}
                                            ref={node => headingSelector = node} className="form-control">
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
                                    <h5>Heading Preview</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                {widget.size == 1 && <h1>{widget.text}</h1>}
                                {widget.size == 2 && <h2>{widget.text}</h2>}
                                {widget.size == 3 && <h3>{widget.text}</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
const dispatchToPropertyMapperHeading = dispatch => ({
    changeHeadingText: (widgetId, newText) =>
        actions.changeHeadingText(dispatch, widgetId, newText),
    changeHeadingName: (widgetId, newName) =>
        actions.changeHeadingName(dispatch, widgetId, newName),
    changeHeadingSize: (widgetId, newSize) =>
        actions.changeHeadingSize(dispatch, widgetId, newSize)
});

const stateToPropertyMapperHeading = state => ({
    preview: state.preview
});
const HeadingContainer = connect(stateToPropertyMapperHeading, dispatchToPropertyMapperHeading)(Heading)


//Paragraph
const Paragraph = ({widget, preview, changeParagraphText, changeParagraphName}) => {
    let paragraphInput;
    let paragraphName;
    return (
        <div>
            <div className="container widget-container widgetContainerDiv">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group inputField">
        <textarea onChange={() => changeParagraphText(widget.id, paragraphInput.value)}
                  ref={node => paragraphInput = node}
                  value={widget.text} className="form-control">
    </textarea> <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <input onChange={() => changeParagraphName(widget.id, paragraphName.value)}
                                           value={widget.name}
                                           ref={node => paragraphName = node} className="form-control"/> <br/>
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
        </div>
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

const stateToPropertyMapperParagraph = state => ({
    preview: state.preview
});

const ParaContainer = connect(stateToPropertyMapperParagraph, dispatchToPropertyMapperParagraph)(Paragraph);


//List
const List = ({widget, preview, changeListText, changeListType, changeListName}) => {
    let listTypeSelector;
    let listText;
    let listName;
    return (
        <div>
            <div className="container widget-container widgetContainerDiv">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group inputField">
                                <textarea onChange={() => changeListText(widget.id, listText.value)}
                                          ref={node2 => listText = node2}
                                          value={widget.text} className="form-control"/>
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <select onChange={() => changeListType(widget.id, listTypeSelector.value)}
                                            ref={node2 => listTypeSelector = node2}
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
                                    <h5>List Preview</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {widget.listType == "ordered" && <div>{textToOrderedList(widget.text)} </div>}
                            {widget.listType == "unordered" && <div> {textToUnorderedList(widget.text)}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


const stateToPropertyMapperList = state => ({
    preview: state.preview
});

const dispatchToPropertyMapperList = dispatch =>
    ({
        changeListText:
            (widgetId, newListText) =>
                actions.changeListText(dispatch, widgetId, newListText),
        changeListName:
            (widgetId, newListName) =>
                actions.changeListName(dispatch, widgetId, newListName),
        changeListType:
            (widgetId, listType) =>
                actions.changeListType(dispatch, widgetId, listType)
    });


const textToOrderedList = (text) => {
    let stringArray = text.split("\n");
    return (

        <ol className="list-group">
            {stringArray.map(line => (<li> {line} </li>))}
        </ol>
    )
};

const textToUnorderedList = (text) => {
    let stringArray = text.split("\n");
    return (

        <ul className="list-group">
            {stringArray.map(line => (<li> {line} </li>))}
        </ul>
    )
};


const ListContainer = connect(stateToPropertyMapperList, dispatchToPropertyMapperList)(List);


//Image

const Image = ({widget, preview, changeImageText, changeImageName}) => {
    let imageInput;
    let imageName;
    return (
        <div>
            <div className="container widget-container widgetContainerDiv">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12 ">
                                <div className="form-group inputField">
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
                                <div className="col-md-4">
                                    <img src={widget.text} alt={widget.text}/>
                                </div>
                                <div className="col-md-6">
                                    <h5>{widget.name}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const stateToPropertyMapperImage = state => ({
    preview: state.preview
});

const dispatchToPropertyMapperImage = dispatch =>
    ({
        changeImageText:
            (widgetId, imageText) =>
                actions.changeImageText(dispatch, widgetId, imageText),
        changeImageName:
            (widgetId, imageName) =>
                actions.changeImageName(dispatch, widgetId, imageName)
    });

const ImageContainer =
    connect(stateToPropertyMapperImage, dispatchToPropertyMapperImage)
    (Image);


//Link

const Link = ({widget, preview, changeLinkText, changeLinkName, changeLinkDisplay}) => {
    let linkInput;
    let linkName;
    let linkDisplay;

    return (
        <div>
            <div className="container widget-container widgetContainerDiv">
                <div className="col-md-12">
                    <div hidden={preview}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group inputField">
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
                                           placeholder="Enter URL (include https://)"
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
                                <a href={widget.linkName} target="_blank">{widget.text}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const stateToPropertyMapperLink = state => ({
    preview: state.preview
});

const dispatchToPropertyMapperLink = dispatch =>
    ({
        changeLinkText:
            (widgetId, linkText) =>
                actions.changeLinkText(dispatch, widgetId, linkText),
        changeLinkDisplay:
            (widgetId, linkDisplay) =>
                actions.changeLinkDisplay(dispatch, widgetId, linkDisplay),
        changeLinkName:
            (widgetId, linkName) =>
                actions.changeLinkName(dispatch, widgetId, linkName)
    });

const LinkContainer = connect(stateToPropertyMapperLink, dispatchToPropertyMapperLink)(Link);


export default WidgetContainer;