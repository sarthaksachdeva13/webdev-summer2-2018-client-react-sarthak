import * as constants from "../constants"


let initialState = {widgets: [], preview: false};

export const WidgetReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            return newState;


        case constants.WIDGET_TYPE:
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType;
                    }
                    return true;
                })
            };
            return JSON.parse(JSON.stringify(newState));


        case constants.SAVE:
            fetch('http://localhost:8080/api/topic/' + action.topicId + "/widgets", {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return state;

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            };

        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'Widget Text',
                        name: 'Widget Name',
                        widgetType: 'Paragraph',
                        size: '2',
                        listType: 'ordered',
                        widgetOrder: state.widgets.length + 1
                    }
                ]
            };

        default:
            return state;


        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            };


        case constants.MOVE_WIDGET_UP:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.widgetOrder == action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }

                    if (widget.widgetOrder == (action.widgetOrder + 1)) {
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function (a, b) {
                    return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);
                })
            };

        case constants.MOVE_WIDGET_DOWN:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.widgetOrder == action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }

                    if (widget.widgetOrder == (action.widgetOrder - 1)) {
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function (a, b) {
                    return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);
                })
            };




        //Heading Reducer
        case constants.CHANGE_HEADING_TEXT:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            };

        case constants.CHANGE_HEADING_NAME:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            };


        case constants.CHANGE_HEADING_SIZE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })

            };


        //Paragraph Reducer
        case constants.CHANGE_PARA_TEXT:
            let paraTextState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text;
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(paraTextState));

        case constants.CHANGE_PARA_NAME:
            let paraNameState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(paraNameState));


        //List Reducer
        case constants.CHANGE_LIST_TEXT:
            let listTextState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text;
                        }
                        return Object.assign({}, widget);
                    })

                };
            return JSON.parse(JSON.stringify(listTextState));

        case constants.CHANGE_LIST_NAME:
            let listNameState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name

                        }
                        return Object.assign({}, widget);
                    })

                };
            return JSON.parse(JSON.stringify(listNameState));


        case constants.CHANGE_LIST_TYPE: {
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType

                    }
                    return Object.assign({}, widget)
                })
            }
        }

        //Image Reducer
        case constants.CHANGE_IMAGE_TEXT:
            let imageTextState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text;
                        }
                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(imageTextState));

        case constants.CHANGE_IMAGE_NAME:
            let imageNameState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                        }
                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(imageNameState));


        //Link Reducer

        case constants.CHANGE_LINK_TEXT:
            let linkTextState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text

                        }
                        return Object.assign({}, widget);
                    })

                };
            return JSON.parse(JSON.stringify(linkTextState));


        case constants.CHANGE_LINK_DISPLAY:
            let linkDisplayState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.linkName = action.linkName;
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(linkDisplayState));

        case constants.CHANGE_LINK_NAME:
            let linkNameState =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                        }

                        return Object.assign({}, widget);
                    })
                };
            return JSON.parse(JSON.stringify(linkNameState));

    }
};