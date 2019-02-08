app.controller('MainController',function ($scope,TodoService) {
    $scope.list=[]
    $scope.editStuff


    var init = function () {
        TodoService.getTasks()
            .then(function successCallback(response){
                $scope.list=response
                console.log("Success");
            }, function errorCallback(response){
                console.log("Error");
            });
    };

    init();

    $scope.addTo=function () {
        $scope.list.push({task: $scope.addToDo,boolTask:true,boolEdit:false})
    }

    $scope.edit=function (index) {
        console.log("this")
        $scope.list[index].boolEdit=true;
        $scope.list[index].boolTask=false;

    }

    $scope.delete=function (index) {
        $scope.list.splice(index, 1);
    }

    $scope.done=function (index) {
        console.log($scope.list[index].task)
        $scope.list[index].task=$scope.list[index].task
        $scope.list[index].boolEdit=false;
        $scope.list[index].boolTask=true;
    }
    $scope.stuff=function () {
        $scope.editStuff=$scope.editStuff=$scope.addToDoEdit
    }
})
