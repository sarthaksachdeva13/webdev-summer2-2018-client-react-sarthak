const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_URL = 'http://localhost:8080/api/module/MODULE_ID';

let _singleton = Symbol();


export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    static createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    static findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('COURSE_ID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_URL.replace
        ('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }

}