app.factory('TodoService', function($http) {
    var service = {};
    var urlBase = 'http://localhost:3000';

    var config = {headers:  {
            'Authorization': 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==',
            'Accept': 'application/json',
        }
    };

    service.getTasks = function() {
        return $http.get(urlBase + '/todos/index');
    };

    service.editTask = function(id){
        let body = new URLSearchParams();
        body.set('task', id.task);
        return $http.post(urlBase + '/todos/edit/'+id.id,body.toString() , {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}});
    };

    service.deleteTasks = function(id){
        let body = new URLSearchParams();
        body.set('task', id.task);
        return $http.post(urlBase + '/todos/delete/'+id.id,body.toString() , {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}});
    };


    service.addNewTask = function(id){
        let body = new URLSearchParams();
        body.set('task', id.task);
        return $http.post(urlBase + '/todos/',body.toString() , {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}});
    };

    return service;

});