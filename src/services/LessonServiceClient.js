const LESSON_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_URL = 'http://localhost:8080api/lesson/LID';

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_URL.replace
        ('LID', lessonId), {
            method: 'delete'
        })
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(
            LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    findAllLessons() {
        return fetch(LESSON_URL)
            .then(function (response) {
                return response.json();
            });
    }


    //Unused Functions
    findLessonById(lessonId) {
        return fetch(LESSON_URL.replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            });
    }

    updateLesson(lessonId, lesson) {
        return fetch(LESSON_URL.replace
            ('LID', lessonId),
            {
                method: 'PUT',
                body: JSON.stringify(lesson),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();

            });
    }
}