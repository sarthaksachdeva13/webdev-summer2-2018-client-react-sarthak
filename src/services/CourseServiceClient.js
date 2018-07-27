const COURSE_API_URL = 'http://localhost:8080/api/course';


let _singleton = Symbol();
class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function (response) {
                return response.json();
            });
    }

     createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        });
    }

     deleteCourse(courseId) {
        return fetch(COURSE_API_URL + "/" + courseId, {
            method: 'DELETE'
        }).then(function (response) {
            return response
        });
    }



    //Unused Functions
     findCourseById(id) {
        return fetch(COURSE_API_URL + "/" + id)
            .then(function (response) {
                return response.json();
            })
    }

     updateCourse(courseId, course) {
         return fetch(COURSE_API_URL + '/' + courseId, {
            body : JSON.stringify(course),
            method : 'PUT',
            headers: {
                'content-type':'application/json'
            }}).then(function (response) {
            return response.json();
        });
    }


}

export default CourseService;