
//application services for employee, employee details, and authetication service.

ibmApp.factory("EmployeeService", function ($http) {
    console.log(">> in EmployeeService ...");
    var employees = [];
    return {
        getEmployeeList: function () {
            /* Will be replaced with MFP WLResource Request to get employee list from the back-end */
            return $http.get('data/employee.json').then(function (response) {
                employees = response.data;
                return employees;
            });
        },
        getEmployee: function (index) {
            return employees[index];
        },

        getEmployeeById: function (id) {
            var _emp;
            console.log(">> getEmployeeById :" + id);
            angular.forEach(employees, function (emp) {
                console.log(">> getEmployeeById :" + id + " ==  " + emp._id);
                if (emp._id == id) {
                    _emp = emp;
                }
            });
            return _emp;
        }
    };
})

ibmApp.factory("EmployeeDetailsService", function ($http) {
    console.log(">> in EmployeeDetailsService ...");
    return {
        getEmployeeDetails: function (empId) {
            /* Will be replaced with MFP WLResource Request to get details from the back-end */
            return $http.get('data/details.json');
        }
    };
})

/* will be used to validate the username and password */
ibmApp.factory("AuthenticateUserService", function ($http, $q) {
    console.log(">> in AuthenticateUserService ...");
    return {
        authenticatUser: function (user) {            
            // Perform some asynchronous operation, resolve or reject the promise when appropriate.
            /* Will be replace with MFP WLResource Request to autenticate using back end*/                    
            // set the deferred 
            var deferred = $q.defer();
            setTimeout(function() {
                if(user.username == "demo" && user.password == "demo"){
                   deferred.resolve(true);
                }else{
                   deferred.reject(false);
                }                                
            }); 
            // return the deferred promise
            return deferred.promise;
        }
    };
})