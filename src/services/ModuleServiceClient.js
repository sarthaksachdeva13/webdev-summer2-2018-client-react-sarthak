const MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_URL = 'http://localhost:8080/api/module/MID';


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

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            }).then(function (response) {
            return response.json();
        })
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    deleteModule(moduleId) {
        return fetch(MODULE_URL.replace
        ('MID', moduleId), {
            method: 'delete'
        })
    }


    //Unused Functions

    findAllModules() {
        return fetch(MODULE_URL)
            .then(function (response) {
                return response.json();
            });
    }

    findModuleById(moduleId) {
        return fetch(MODULE_URL.replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            });
    }
    updateModule(moduleId, module) {
        return fetch(MODULE_URL.replace('MID', moduleId), {
            body : JSON.stringify(module),
            method : 'PUT',
            headers: {
                'content-type':'application/json'
            }}).then(function (response) {
            return response.json();
        });
    }

}
