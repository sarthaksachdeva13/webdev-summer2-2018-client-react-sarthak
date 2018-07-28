import * as widgetConstant from "../constants"


export const widgetReducer = (state = {widgets: [], preview: false}, action) => {
    let newState;
    switch (action.type) {


        case widgetConstant.FIND_ALL_WIDGETS_FOR_TOPIC:
            newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            return newState;


        case widgetConstant.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            };

        case widgetConstant.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: 'Enter Widget Text',
                        name: 'Enter Widget Name',
                        widgetType: 'Paragraph',
                        size: '2',
                        listType: 'ordered',
                        widgetOrder: state.widgets.length + 1
                    }
                ]
            };

        default:

            return state;


        case widgetConstant.WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            };
            return JSON.parse(JSON.stringify(newState));


        case widgetConstant.SAVE:
            fetch('http://localhost:8080/api/topic/' + action.topicId + "/widgets", {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return state;


        case widgetConstant.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            };



        //Heading Reducer

        case widgetConstant.CHANGE_HEADING_NAME:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            };

        case widgetConstant.CHANGE_HEADING_TEXT:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            };


        case widgetConstant.CHANGE_HEADING_SIZE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })

            };



        //List Reducer
        case widgetConstant.CHANGE_LIST_TEXT:
            let newState2 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState2));


        case widgetConstant.CHANGE_LIST_NAME:
            let newState7 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name

                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState7))

        case widgetConstant.CHANGE_LIST_TYPE: {
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
        case widgetConstant.CHANGE_IMAGE_TEXT:
            let newState4 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text;
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState4));

        case widgetConstant.CHANGE_IMAGE_NAME:
            let newState6 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState6));






        //Link Reducer
        case widgetConstant.CHANGE_LINK_TEXT:
            let newState9 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text

                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState9));


        case widgetConstant.CHANGE_LINK_DISPLAY:
            let newState10 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.linkName = action.linkName;
                            console.log(widget.linkName)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState10));


        case widgetConstant.CHANGE_LINK_NAME:
            let newState8 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState8));



        //Paragraph Reducer
        case widgetConstant.CHANGE_PARA_TEXT:
            let newState3 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.text = action.text;
                            console.log(widget.text)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState3));


        case widgetConstant.CHANGE_PARA_NAME:
            let newState5 =
                {

                    widgets: state.widgets.map(widget => {
                        if (widget.id === action.id) {
                            widget.name = action.name;
                            console.log(widget.name)
                        }

                        return Object.assign({}, widget);

                    })

                };
            return JSON.parse(JSON.stringify(newState5));



        case widgetConstant.MOVE_WIDGET_UP:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }

                    if(widget.widgetOrder === (action.widgetOrder+1)){
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function(a,b) {return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);} )
            };

        case widgetConstant.MOVE_WIDGET_DOWN:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.widgetOrder === action.widgetOrder) {
                        widget.widgetOrder = widget.widgetOrder - 1;
                        return Object.assign({}, widget)
                    }

                    if(widget.widgetOrder === (action.widgetOrder-1)){
                        widget.widgetOrder = widget.widgetOrder + 1;
                        return Object.assign({}, widget)
                    }
                    return Object.assign({}, widget)
                }).sort(function(a,b) {return (a.widgetOrder > b.widgetOrder) ? 1 : ((b.widgetOrder > a.widgetOrder) ? -1 : 0);} )
            }

    }
};