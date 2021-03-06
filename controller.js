function mainCtrl($scope){

	$scope.hello = "hello"; //first input text

}

angular.module('myApp', [])
    .directive('slider', function() {
    return {
        restrict:'A',
        link:function(scope,element,attrs){
           element.slider({
                min: 1,
                max: 3,
                value: 2,
                slide: function( event, ui ) {
                    if(ui.value == 3){
                        $(this).find('a').css('margin-left','-31%')
                    }else if(ui.value == 2){
                        $(this).find('a').css('margin-left','-15%')
                    }else if(ui.value == 1){
                        $(this).find('a').css('margin-left','0%')
                    }else{
                        $(this).find('a').css('margin-left','-15%')
                    }
            		if(event.target.id =="slider1"){
            			scope.hello = ui.value;	
            		}else if(event.target.id == "slider2"){
            			scope.goodbye = ui.value;
            		}
                scope.$apply();
            }
            });
        }
    };
});