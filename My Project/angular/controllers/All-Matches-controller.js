myApp.controller('allMatchesController',['getService',function(getService){

var main=this;
this.allDetails16_17=[];
this.allDetails15_16=[];
this.allteams=[];
this.matchdays_temp=[];
this.matchdays=[]; 
this.team1_list=[];
this.team2_list=[];
this.getDetails2016_17=function(separateInfo){

	getService.get2016_17()
	.then(function success(response){
            
        main.allDetails16_17=response.data.rounds;
        console.log(response);
        console.log( main.allDetails16_17);
        
        main.separateInfo(main.allDetails16_17);
        
        

	},

	function error(response){
       alert("some error occured. See the console");
       console.log(response);
	});
}//end getDetails2016_17

this.getDetails2015_16=function(separateInfo){

	getService.get2015_16()
	.then(function success(response){
      
        main.allDetails15_16=response.data.rounds;
        console.log(response);
        console.log(main.allDetails15_16);
        
        main.separateInfo(main.allDetails15_16);
        
        console.log(main.matchdays_temp);
        main.matchdays=_.uniq(main.matchdays_temp);
        console.log(main.matchdays);
         
         console.log(main.team1_list);
         console.log(main.team2_list);  
         main.allteams=_.uniq(main.team1_list.concat(main.team2_list));
    
         console.log(main.allteams);


	},

	function error(response){
        alert("some error occured. See the console");
        console.log(response);
	});
}//end getDetails2016_17



this.separateInfo=function(season){
     
     for(let match in season ){
     	  main.matchdays_temp.push(season[match].name);
     	 
     	   for(let info in season[match].matches ){
     	   	   main.team1_list.push( season[match].matches[info].team1.name);
     	   	   main.team2_list.push( season[match].matches[info].team2.name);

     	   }
     }
}




this.getDetails2016_17(main.separateInfo);
this.getDetails2015_16(main.separateInfo);


$(function() {
            $( "#datepicker" ).datepicker({
               
               dateFormat:"yy-mm-dd",
               altField: "#datepicker",
               changeMonth: true,
               changeYear:true,
               autoSize: true,
               //defaultDate: "2015-08-08" //starting day of EPL 2015-16 
            });
         });








}]);//end controller