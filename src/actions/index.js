import * as constants from "../constants/index"


export const findAllWidgetsForTopic = (dispatch, topicId) => {
    fetch('http://localhost:8080/api/topic/' + topicId + "/widget")
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets
        }))
};


export const addWidget = dispatch => (
    dispatch({type: constants.ADD_WIDGET})
);
export const save = (dispatch, topicId) => (
    dispatch({
        type: constants.SAVE,
        topicId: topicId
    })
);
export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
);


// Heading Actions
export const changeHeadingName = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.CHANGE_HEADING_NAME,
        id: widgetId,
        name: newName
    })
);

export const changeHeadingText = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.CHANGE_HEADING_TEXT,
        id: widgetId,
        text: newText
    })
);
export const changeHeadingSize = (dispatch, widgetId, newSize) => (
    dispatch({
        type: constants.CHANGE_HEADING_SIZE,
        id: widgetId,
        size: newSize
    })
);


//Paragraph Actions
export const changeParagraphText = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.CHANGE_PARA_TEXT,
        id: widgetId,
        text: newText
    })
);

export const changeParagraphName = (dispatch, widgetId, newName) => (
    dispatch({
        type: constants.CHANGE_PARA_NAME,
        id: widgetId,
        name: newName
    })
);


// List Actions
export const changeListName = (dispatch, widgetId, newListText) => (

    dispatch({
        type: constants.CHANGE_LIST_TEXT,
        id: widgetId,
        text: newListText

    })
);

export const changeListText = (dispatch, widgetId, newListName) => (

    dispatch({
        type: constants.CHANGE_LIST_NAME,
        id: widgetId,
        name: newListName

    })

);
export const changeListType = (dispatch, widgetId, listType) => (
    dispatch({
        type: constants.CHANGE_LIST_TYPE,
        id: widgetId,
        listType: listType
    })
);


//Image Actions
export const changeImageText = (dispatch, widgetId, imageText) => (
    dispatch({
        type: constants.CHANGE_IMAGE_TEXT,
        id: widgetId,
        text: imageText
    })
);

export const changeImageName = (dispatch, widgetId, imageName) => (
    dispatch({
        type: constants.CHANGE_IMAGE_NAME,
        id: widgetId,
        name: imageName
    })
);


//Link Actions
export const changeLinkText = (dispatch, widgetId, linkText) => (
    dispatch({
        type: constants.CHANGE_LINK_TEXT,
        id: widgetId,
        text: linkText
    })
);

export const changeLinkDisplay = (dispatch, widgetId, linkDispText) => (
    dispatch({
        type: constants.CHANGE_LINK_DISPLAY,
        id: widgetId,
        linkName: linkDispText
    })
);

export const changeLinkName = (dispatch, widgetId, linkName) => (
    dispatch({
        type: constants.CHANGE_LINK_NAME,
        id: widgetId,
        name: linkName
    })
);

