const TOPIC_API_URL = 'https://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_URL = 'https://localhost:8080/api/topic/TID';

let _singleton = Symbol();

export default class TopicService {
    constructor(singletonToken) {
        if (singletonToken !== _singleton) {
            throw new Error('Singleton!!!');
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    findAllTopics() {
        return fetch(TOPIC_URL)
            .then(function (response) {
                return response.json();
            });
    }

    findTopicById(topicId) {
        return fetch(TOPIC_URL.replace('TID', topicId))
            .then(function (response) {
                return response.json();
            });
    }


    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId),
            {
                body: JSON.stringify(topic),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }


    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        return fetch(
            TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            });
    }

    deleteTopic(topicId) {
        return fetch(TOPIC_URL.replace('TID', topicId), {
            method: 'delete'
        })
    }


    updateTopic(topicId, topic) {
        return fetch(TOPIC_URL.replace('TID', topicId),
            {
                method: 'PUT',
                body: JSON.stringify(topic),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            });
    }
}