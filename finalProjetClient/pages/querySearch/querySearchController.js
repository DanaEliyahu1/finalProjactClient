angular.module("DoChaP")
.controller("querySearchController", function ($scope,webService) {
    // button click count
    self = this;



    self.search = function () {  
     var query= searchTextField.value;
     var file=chooseButton.value;
     

     if(query !=undefined){
         self.queryHandler(query);
     }
     else 
     if(file !=undefined){
         self.fileHandler(file);
     }
     
    else{
        window.alert('Fill One Of The Options')
    }

    }
    self.queryHandler= function(query){
        var re=new RegExp("^[a-zA-Z0-9]");
        if(re.test(query)){
            webService.queryHandler(query).then(function (response){
                window.alert(JSON.stringify(response))
            });
        }
        else{
            window.alert("Please Fix Your Query");
        }
    }
    
    self.fileHandler= function(file){
        if(file.exists){
            webService.fileHandler(file);
        }
        else{
            window.alert("Please Choose a Valid File");
        }
    }
    
});

