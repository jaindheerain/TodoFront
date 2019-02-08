app.factory('TodoService', function($http) {
    var service = {};
    var urlBase = 'http://localhost:3000';

    service.getTasks = function() {
        return $http.get(urlBase + '/todos/index');
    };

    service.editTask = function(id){
        return $http.post(urlBase + '/user/' + id);
    };

    service.deleteTasks = function(id){
        return $http.get(urlBase + '/user/' + id);
    };


    service.addNewTask = function(id){
        return $http.get(urlBase + '/user/' + id);
    };

    return service;

});