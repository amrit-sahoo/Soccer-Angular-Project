myApp.controller('statsController',['getService',function(getService){

var main=this;
 
//Intialing the objects that is to be used in the views
this.statsTable16_17=[];
this.statsTable15_16=[];

this.getStats16_17=function(){

     getService.get2016_17()
	    .then(function success(response){
            
             var allDetails16_17=response.data.rounds;
             console.log("All the matches of season 2016_17 are follows:");
             console.log(allDetails16_17);
        
             var allTeams16_17=main.separateInfo(allDetails16_17);
             console.log("Teams played in season 2016_17 are follows:");
             console.log(allTeams16_17);
             
             //calling the statsCalculator function assign the table to statsTable16_17
             main.statsTable16_17= main.statsCalculator(allDetails16_17,allTeams16_17); 
             console.log("Statistics table of season 2016_17:")
             console.log(main.statsTable16_17);
       
    },

	function error(response){
       alert("some error occured. See the console");
       console.log(response);
	});

}();// end and call the function getStats16_17

this.getStats15_16=function(){

     getService.get2015_16()
	    .then(function success(response){
            
             var allDetails15_16=response.data.rounds;
             console.log("All the matches of season 2016_17 are follows:");
             console.log(allDetails15_16);
        
             var allTeams15_16=main.separateInfo(allDetails15_16);
             console.log("Teams played in season 2016_17 are follows:");
             console.log(allTeams15_16);
             
             //calling the statsCalculator function assign the table to statsTable15_16
             main.statsTable15_16= main.statsCalculator(allDetails15_16,allTeams15_16);
              console.log("Statistics table of season 2015_16:")
             console.log(main.statsTable15_16);
       
    },

	function error(response){
       alert("some error occured. See the console");
       console.log(response);
	});

}();// end and call the function getStats15_16




//function to get all the teams played in a particular season and return the allteams array
this.separateInfo=function(season){
     
     var allteams=[];
     for(let match in season ){
     	   
     	     for(let info in season[match].matches ){
     	   	         
     	   	         allteams.push( season[match].matches[info].team1.name);
     	   	         allteams.push( season[match].matches[info].team2.name);

     	     }
     }

      allteams=_.uniq(allteams); 
      return allteams;
      
}// end separateInfo

//function to calculate the stats of a partcicular EPL season
this.statsCalculator=function(season,allTeams){
       
       var statsTable=[];
       
       for(let team in allTeams){

       	     var teamStats={};
       	     //intializing the values
       	     teamStats.played=0;
             teamStats.won=0;
             teamStats.lost=0;
             teamStats.draw=0;
             teamStats.goalCount=0;

             for(let match in season){
                 
                     for(let info in season[match].matches){
                         
                         //check if the teamname matches with team1's name and calculate the stats of the team 
                         if(allTeams[team]=== season[match].matches[info].team1.name){
                          	      teamStats.name=allTeams[team];
                          	      teamStats.played++;
                          	      teamStats.goalCount+=season[match].matches[info].score1;
                                  if(season[match].matches[info].score1>season[match].matches[info].score2){
                                  	   teamStats.won++;
                                  }
                                  else if(season[match].matches[info].score1<season[match].matches[info].score2){
                                        teamStats.lost++;
                                  }
                                  else{
                                        teamStats.draw++      	
                                  }

                         }//end if
                         
                         //check if the teamname matches with team2's name and calculate the stats of the team 
                         if(allTeams[team]===season[match].matches[info].team2.name){
                                  teamStats.name=allTeams[team];
                          	      teamStats.played++;
                          	      teamStats.goalCount+=season[match].matches[info].score2;
                                  if(season[match].matches[info].score2>season[match].matches[info].score1){
                                  	   teamStats.won++;
                                  }
                                  else if(season[match].matches[info].score2<season[match].matches[info].score1){
                                        teamStats.lost++;
                                  }
                                  else{
                                        teamStats.draw++      	
                                  }   
                          }//end if

                     }//end for(let info in season[match].matches) loop
 
             }//end for(let match in season) loop
        
         statsTable.push(teamStats);// pushing the teamStats object to statTable array;

      }// end for(let team in allTeams) loop

     return statsTable; // will return the table of passed season.

}// end function statsCalculator













}])//end controller