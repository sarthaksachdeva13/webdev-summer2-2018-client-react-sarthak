import * as constants from '../constants/index';

export const findAllWidgetsForTopic = (dispatch,topicId) => {
    fetch('http://localhost:8080/api/topic/'+ topicId + "/widget")
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets }))
};

// Heading Actions
export const changeHeadingName = (dispatch, widgetId, headingName) => (
    dispatch({
        type: constants.CHANGE_HEADING_NAME,
        id: widgetId,
        name: headingName
    })
);

export const changeHeadingText = (dispatch, widgetId, headingText) => (
    dispatch({
        type: constants.CHANGE_HEADING_TEXT,
        id: widgetId,
        text: headingText
    })
);
export const changeHeadingSize = (dispatch, widgetId, headingSize) => (
    dispatch({
        type: constants.CHANGE_HEADING_SIZE,
        id: widgetId,
        size: headingSize
    })
);


// List Actions
export const changeListName = (dispatch, widgetId, listName) => (
    dispatch({
        type: constants.CHANGE_LIST_NAME,
        id: widgetId,
        name: listName
    })
);

export const changeListText = (dispatch,widgetId,listText) =>(

    dispatch({
        type : constants.CHANGE_LIST_TEXT,
        id: widgetId,
        text: listText

    })

);

export const changeListType = (dispatch,widgetId,listType) =>(
    dispatch({
        type : constants.CHANGE_LIST_TYPE,
        id: widgetId,
        listType: listType
    })
);



// Paragraph Actions
export const changeParagraphText = (dispatch,widgetId, paraText) =>(
    dispatch({
        type : constants.CHANGE_PARA_TEXT,
        id: widgetId,
        text: paraText
    })
);

export const changeParagraphName = (dispatch,widgetId, paraName) =>(
    dispatch({
        type : constants.CHANGE_PARA_NAME,
        id: widgetId,
        name: paraName
    })
);



// Image Actions
export const changeImageText = (dispatch,widgetId,imageText) =>(
    dispatch({
        type : constants.CHANGE_IMAGE_TEXT,
        id: widgetId,
        text: imageText
    })
);

export const changeImageName = (dispatch,widgetId,imageName) =>(
    dispatch({
        type : constants.CHANGE_IMAGE_NAME,
        id: widgetId,
        name: imageName
    })
);


//Link Actions
export const changeLinkText = (dispatch,widgetId,linkText) =>(
    dispatch({
        type : constants.CHANGE_LINK_TEXT,
        id: widgetId,
        text: linkText
    })
);

export const changeLinkDisplay = (dispatch,widgetId,linkDisplay) =>(
    dispatch({
        type : constants.CHANGE_LINK_DISPLAY,
        id: widgetId,
        linkName: linkDisplay
    })
);

export const changeLinkName = (dispatch,widgetId,linkName) =>(
    dispatch({
        type : constants.CHANGE_LINK_NAME,
        id: widgetId,
        name: linkName
    })
);


// Misc
export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);
export const save = (dispatch,topicId) => (
    dispatch({type: constants.SAVE,
        topicId : topicId})
);
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);
