const URL ="https://sarthakwebdev.herokuapp.com/api/";

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    saveWidgets(topicID,widgets){
        return fetch(URL +'topic/' + topicID + '/widget' ,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(widgets)
        }).then(function (response){
            return response.json();
        });
    }

    findAllWidgetsForTopic(topicID){
        return fetch(URL +'topic/' + topicID+ '/widget'
        ).then(function (response){
            return response.json();
        });
    }

    deleteWidgetByID(widgetId){
        return fetch(URL +'widget/' + widgetId,{
            method:'DELETE'
        });
    }
}