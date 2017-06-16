$(document).ready(function() {
  emp={};
  $.ajax({
    type:'GET',
    url: 'json_employees',
    success: function(data) {
      emp= JSON.parse(data);
    }
  }).done(
  ('#employee_list').append('<li> ' + employee_id[0].first_name + '</li>'),
)

})
var emp = [
  user1= {
    "employee_id": 0,
    "first_name": "Stone",
    "last_name": "Holt",
    "manager_id": 0,
    "operational_unit": 0,
    "performance_rating": 3,
    "potential_rating": 2,
    "assigment": "Bus"
  },
  
  ];



// var list = {all the json};
// reload the front end and type in the variable name, the json doesn't get stored. The page gets loads
