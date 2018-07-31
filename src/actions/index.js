import * as constants from "../constants/index"


export const findAllWidgetsForTopic = (dispatch, topicId) => {
    fetch('https://sarthakwebdev.herokuapp.com/api/topic/' + topicId + "/widget")
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
export const changeHeadingName = (dispatch, widgetId, newHeadingName) => (
    dispatch({
        type: constants.CHANGE_HEADING_NAME,
        id: widgetId,
        name: newHeadingName
    })
);

export const changeHeadingText = (dispatch, widgetId, newHeadingText) => (
    dispatch({
        type: constants.CHANGE_HEADING_TEXT,
        id: widgetId,
        text: newHeadingText
    })
);
export const changeHeadingSize = (dispatch, widgetId, newHeadingSize) => (
    dispatch({
        type: constants.CHANGE_HEADING_SIZE,
        id: widgetId,
        size: newHeadingSize
    })
);


//Paragraph Actions
export const changeParagraphText = (dispatch, widgetId, newParagraphText) => (
    dispatch({
        type: constants.CHANGE_PARA_TEXT,
        id: widgetId,
        text: newParagraphText
    })
);

export const changeParagraphName = (dispatch, widgetId, newParagraphName) => (
    dispatch({
        type: constants.CHANGE_PARA_NAME,
        id: widgetId,
        name: newParagraphName
    })
);


// List Actions
export const changeListText = (dispatch, widgetId, newListText) => (

    dispatch({
        type: constants.CHANGE_LIST_TEXT,
        id: widgetId,
        text: newListText

    })
);

export const changeListName = (dispatch, widgetId, newListName) => (
    dispatch({
        type: constants.CHANGE_LIST_NAME,
        id: widgetId,
        name: newListName

    })

);
export const changeListType = (dispatch, widgetId, newListType) => (
    dispatch({
        type: constants.CHANGE_LIST_TYPE,
        id: widgetId,
        listType: newListType
    })
);


//Image Actions
export const changeImageText = (dispatch, widgetId, newImageText) => (
    dispatch({
        type: constants.CHANGE_IMAGE_TEXT,
        id: widgetId,
        text: newImageText
    })
);

export const changeImageName = (dispatch, widgetId, newImageName) => (
    dispatch({
        type: constants.CHANGE_IMAGE_NAME,
        id: widgetId,
        name: newImageName
    })
);


//Link Actions
export const changeLinkText = (dispatch, widgetId, newLinkText) => (
    dispatch({
        type: constants.CHANGE_LINK_TEXT,
        id: widgetId,
        text: newLinkText
    })
);

export const changeLinkDisplay = (dispatch, widgetId, newLinkDisplay) => (
    dispatch({
        type: constants.CHANGE_LINK_DISPLAY,
        id: widgetId,
        linkName: newLinkDisplay
    })
);

export const changeLinkName = (dispatch, widgetId, newLinkName) => (
    dispatch({
        type: constants.CHANGE_LINK_NAME,
        id: widgetId,
        name: newLinkName
    })
);

