

        var nm = angular.module("MyModule",[]).controller("pcApps",['$scope','$http',function pcApplications($scope,$http)
        {
            
            $scope.commands = ['iperf','ping'];
            $scope.name = "PC Application Welcomes YOU";
            $scope.selectionView = true;
            $scope.executionView = true;
            $scope.reportView = true;
            $scope.homeView = false;
            $scope.activatateSelection = activatateSelection;
            $scope.activatateExecution = activatateExecution;
            $scope.activateReport = activateReport;
            
            function activatateSelection()
            {
                $scope.homeView = true;
                $scope.selectionView = false;
                $scope.executionView = true;
                $scope.reportView = true;
                $scope.networkappSelected = ""
                $scope.save = function getResource() {
                    
                   
                    $http.get("http:/server").then(function (response) {
                    console.log("GET RESOURC RESPONSE : " + JSON.stringify(response));
                    
                    });
                    }
                
                
                
            }
            function activatateExecution(){
                $scope.homeView = true;
                $scope.selectionView = true;
                $scope.executionView = false;
                $scope.reportView = true;
                $scope.runTestCase = putResource
                function putResource() {
                    var put_url = "/resource/" + nodeID + "/" + resourceID + "/" + index;
                    //console.log("PUT RUN TEST : " + put_url + " : "+resource);
                    $http.put(put_url, resource, "").then(
                    function (response) {
                
                    // success callback
                    },
                    function (response) {
                
                    // success callback
                    }

                    );

                }
                
            }
            function activateReport(){
                $scope.homeView = true;
                $scope.selectionView = true;
                $scope.executionView = true;
                $scope.reportView = false;
                
            }
            
        }])
    