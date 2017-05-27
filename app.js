
/* add in logic here */





/* user data

note that pValue is set for the performance Value of the individual
this annotates the first value in the set of (3-3,3-2,3-1) where 3 is the pValue
and 3,2,1 are the "zones"


*/


var user1 = {
    
    firstName: "Tony",
    lastName: "Stark",
    pValue: 3,
    zone: 3
    }
var user2 = {
    
    firstName: "Thor",
    lastName: "Odin",
    pValue: 3,
    zone: 2
    }
var user3 = {
    
    firstName: "Bruce",
    lastName: "Banner",
    pValue: 3,
    zone: 1
    }
    var user4 = {
    
    firstName: "John",
    lastName: "Rodgers",
    pValue: 1,
    zone: 3
    }
    var user5 = {
    
    firstName: "Peter",
    lastName: "Parker",
    pValue: 1,
    zone: 2
    }
    var user6 = {
    
    firstName: "Charles",
    lastName: "Xavier",
    pValue: 1,
    zone: 1
    }
    var user7 = {
    
    firstName: "Tasha",
    lastName: "Romanov",
    pValue: 2,
    zone: 3
    }
    var user8 = {
    
    firstName: "Bruce",
    lastName: "Wayne",
    pValue: 2,
    zone: 2
    }
    var user9 = {
    
    firstName: "Clark",
    lastName: "Kent",
    pValue: 2,
    zone: 1
    }

    var user10 = {
    
    firstName: "Luke",
    lastName: "Skywalker",
    pValue: 3,
    zone: 3
    
    }
	
	var boxes = document.getElementsByClassName("box")
for(var i=0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function(){userCheck(this.getAttribute('id').split('subBox')[1])});
}
   
var users = [user1,user2,user3,user4,user5,user6,user7,user8,user9, user10];
var userCheck = function(boxNum){
	console.log(boxNum)
	var elementToBeAppendedTo = document.getElementById('z' + boxNum);
    
    document.getElementById('view').style.visibility = 'hidden';
    for(i=0;i<users.length; i++){
		populate(boxNum, elementToBeAppendedTo)
    } 
}
	
	function populate(num, thing) {
		if(users[i].pValue === grid[num][0] && users[i].zone === grid[num][1]){thing.insertAdjacentHTML('beforeend', "<br>" + users[i].firstName);}
	}
	
	var grid = {1: [3,3],
				2: [3,2], 
				3: [3,1],
				4: [2,3],
				5: [2,2],
				6: [2,1],
				7: [1,3],
				8: [1,2],
				9: [1,1]
	}
    
    /*Append to the innerHtml, and create nine of these conditional statements. 
    Once that stuff is creted, a vatiable can be created so that the href can lead to the apple pic showing up etc.. */




    
