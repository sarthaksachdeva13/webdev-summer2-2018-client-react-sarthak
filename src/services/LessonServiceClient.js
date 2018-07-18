const LESSON_API_URL = 'https://localhost:8080/api/lesson';
const LESSON_URL = 'https://localhost:8080//api/course/CID/module/MID/lesson';

export default class LessonService {
    constructor(singletonToken) {
        if (singletonToken !== _singleton) {
            throw new Error("Singleton!!!");
        }
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(LESSON_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    findLessonById(lessonId) {
        return fetch(LESSON_API_URL + "/" + lessonId)
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId, lesson){
        return fetch(LESSON_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers:
                    {'content-type': 'application/json'},
                method: 'POST'
            }).then(function(response) {
            return response.json();
        });
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL + "/" + lessonId, {
            method: 'DELETE'
        }).then(function (response) {
            return response;
        });
    }

}




