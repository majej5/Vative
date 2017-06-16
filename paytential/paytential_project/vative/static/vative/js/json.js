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
{
  "employee_id": 1,
  "first_name": "Mccarty",
  "last_name": "Huffman",
  "manager_id": 1,
  "operational_unit": 1,
  "performance_rating": 3,
  "potential_rating": 3,
  "assigment": "Bus"
},
{
  "employee_id": 2,
  "first_name": "Sharpe",
  "last_name": "Crosby",
  "manager_id": 2,
  "operational_unit": 2,
  "performance_rating": 2,
  "potential_rating": 1,
  "assigment": "Adm"
},
{
  "employee_id": 3,
  "first_name": "Abby",
  "last_name": "Deleon",
  "manager_id": 3,
  "operational_unit": 3,
  "performance_rating": 1,
  "potential_rating": 2,
  "assigment": "Mgm"
},
{
  "employee_id": 4,
  "first_name": "Oneill",
  "last_name": "Bernard",
  "manager_id": 4,
  "operational_unit": 4,
  "performance_rating": 3,
  "potential_rating": 1,
  "assigment": "Bus"
},
{
  "employee_id": 5,
  "first_name": "Margaret",
  "last_name": "Mcfarland",
  "manager_id": 5,
  "operational_unit": 5,
  "performance_rating": 3,
  "potential_rating": 1,
  "assigment": "Mgm"
},
{
  "employee_id": 6,
  "first_name": "Webb",
  "last_name": "Gutierrez",
  "manager_id": 6,
  "operational_unit": 6,
  "performance_rating": 2,
  "potential_rating": 1,
  "assigment": "Mgm"
},
{
  "employee_id": 7,
  "first_name": "Reilly",
  "last_name": "Mccoy",
  "manager_id": 7,
  "operational_unit": 7,
  "performance_rating": 1,
  "potential_rating": 1,
  "assigment": "Adm"
},
{
  "employee_id": 8,
  "first_name": "Yang",
  "last_name": "Spears",
  "manager_id": 8,
  "operational_unit": 8,
  "performance_rating": 2,
  "potential_rating": 1,
  "assigment": "Bus"
},
{
  "employee_id": 9,
  "first_name": "Lacey",
  "last_name": "Lancaster",
  "manager_id": 9,
  "operational_unit": 9,
  "performance_rating": 2,
  "potential_rating": 2,
  "assigment": "Adm"
},
{
  "employee_id": 10,
  "first_name": "Consuelo",
  "last_name": "Thompson",
  "manager_id": 10,
  "operational_unit": 10,
  "performance_rating": 3,
  "potential_rating": 3,
  "assigment": "Bus"
},
{
  "employee_id": 11,
  "first_name": "Woodward",
  "last_name": "Walker",
  "manager_id": 11,
  "operational_unit": 11,
  "performance_rating": 3,
  "potential_rating": 1,
  "assigment": "Adm"
},
{
  "employee_id": 12,
  "first_name": "Judy",
  "last_name": "Saunders",
  "manager_id": 12,
  "operational_unit": 12,
  "performance_rating": 1,
  "potential_rating": 3,
  "assigment": "Bus"
},
{
  "employee_id": 13,
  "first_name": "Bernard",
  "last_name": "Key",
  "manager_id": 13,
  "operational_unit": 13,
  "performance_rating": 1,
  "potential_rating": 1,
  "assigment": "Mgm"
},
{
  "employee_id": 14,
  "first_name": "Harvey",
  "last_name": "Whitney",
  "manager_id": 14,
  "operational_unit": 14,
  "performance_rating": 2,
  "potential_rating": 3,
  "assigment": "Adm"
}


// var list = {all the json};
// reload the front end and type in the variable name, the json doesn't get stored. The page gets loads
