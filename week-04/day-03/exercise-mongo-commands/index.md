-   to display the fields restaurant_id, name, borough and cuisine for all the
    documents in the collection restaurant.
    - `db.getCollection('restaurants').find({},{_id: 1, name: 1, borough: 1, cuisine: 1 })`
 -  to display the fields restaurant_id, name, borough and cuisine, but exclude
    the field `_id` for all the documents in the collection restaurant.
    - `db.getCollection('restaurants').find({},{_id: 0, name: 1, borough: 1, cuisine: 1 })`
 -  to display the fields restaurant_id, name, borough and zipcode, but exclude
    the field `_id` for all the documents in the collection restaurant.
    - `db.getCollection('restaurants').find({},{_id: 0, name: 1, borough: 1, 'address.zipcode': 1 })`
 -  to display all the restaurant which is in the borough Bronx.
    - `db.getCollection('restaurants').find({borough: 'Bronx'},{_id: 0, name: 1, borough: 1})`
 -  to display the first 5 restaurant which is in the borough Bronx.
    - `db.getCollection('restaurants').find({borough: 'Bronx'},{_id: 0, name: 1, borough: 1}).limit(5)`
 -  to display the next 5 restaurants after skipping first 5 which are in the
    borough Bronx.
    - `db.getCollection('restaurants').find({borough: 'Bronx'},{_id: 0, name: 1, borough: 1}).skip(5).limit(5)`
 -  to find the restaurants who achieved a score more than 90.
    - `db.getCollection('restaurants').find({'grades.score': {$gt: 90}},{_id: 0, name: 1, borough: 1, 'grades.score': 1})`
 -  to find the restaurants that achieved a score, more than 80 but less than
    100.
    - `db.getCollection('restaurants').find({'grades.score': {$gt: 80, $lt: 100}},{_id: 0, name: 1, borough: 1, 'grades.score': 1})`
 -  to find the restaurants which locates in latitude value less than
    -95.754168.
    - `db.getCollection('restaurants').find({'address.coord': {$lt: -95.754168}},{_id: 0, name: 1, 'address.coord': 1})`
 -  to find the restaurants that does not prepare any cuisine of 'American' and
    their grade score more than 70 and latitude less than -65.754168.
    - ` db.getCollection('restaurants').find({'cuisine': {$nin: ['American ']}, 'grades.score': {$gt: 70}, 'address.coord': {$lt :-65.754168}}, {_id: 0, name: 1, 'cuisine': 1, 'grades.score': 1, 'address.coord': 1})`
 -  to find the restaurants which does not prepare any cuisine of 'American' and
    achieved a score more than 70 and not located in the longitude less than
    -65.754168.
    - `db.getCollection('restaurants').find({'cuisine': {$nin: ['American ']}, 'grades.score': {$gt: 70}, 'address.coord': {$gte :-65.754168}}, {_id: 0, name: 1, 'cuisine': 1, 'grades.score': 1, 'address.coord': 1})`
 -  to find the restaurants which does not prepare any cuisine of 'American '
    and achieved a grade point 'A' not belongs to the borough Brooklyn. The
    document must be displayed according to the cuisine in descending order.
    -  `db.getCollection('restaurants').find({'cuisine': {$nin: ['American ']}, 'grades.grade': 'A', 'borough': {$nin : ['Brooklyn']}}, {_id: 0, 'cuisine': 1, 'grades.grade': 1, 'borough': 1}).sort({borough: -1})`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'Wil' as first three letters for its name.
     - `db.getCollection('restaurants').find( {'name': /^Wil/ }, { _id: 0, 'name': 1, 'borough':1 , 'cuisine' : 1 })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'ces' as last three letters for its name.
    - ` db.getCollection('restaurants').find( {'name': /ces$/ }, { _id: 0, 'name': 1, 'borough':1 , 'cuisine' : 1 })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'Reg' as three letters somewhere in its name.
    - ` db.getCollection('restaurants').find( {'name': /Reg/ }, { _id: 0, 'name': 1, 'borough':1 , 'cuisine' : 1 })`
 -  to find the restaurants which belongs to the borough Bronx and prepared
    either American or Chinese dish.
    - `db.getCollection('restaurants').find( {'borough': 'Bronx', 'cuisine' : {$in:['Chinese', 'American ']} }, { _id: 0, 'borough': 1, 'cuisine':1  })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which belongs to the borough Staten Island or Queens or Bronxor Brooklyn.
    - `db.getCollection('restaurants').find( {'borough': {$in:['Staten Island', 'Queens', 'Bronxor' , 'Brooklyn']},  }, { _id: 0, 'borough': 1 , name : 1, cuisine : 1 })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which are not belonging to the borough Staten Island or Queens or Bronxor
    Brooklyn.
    - `db.getCollection('restaurants').find( {'borough': {$nin:['Staten Island', 'Queens', 'Bronxor' , 'Brooklyn']},  }, { _id: 0, 'borough': 1 , name : 1, cuisine : 1 })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which achieved a score which is not more than 10.
    - `db.getCollection('restaurants').find( {'grades.score': {$lte:10} }, { _id: 0, 'borough': 1 , name : 1, cuisine : 1 })`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which prepared dish except 'American' and 'Chinees' or restaurant's name
    begins with letter 'Wil'.
    - `db.getCollection('restaurants').find({ 'cuisine': {$nin:['Chinese', 'American ']}, name: /^[^Wil]/},
{ _id: 0, 'borough': 1 , name : 1, cuisine : 1 })`
 -  to find the restaurant Id, name and grades for those restaurants which
    achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z"
    among many of survey dates..
 -  to find the restaurant Id, name and grades for those restaurants where 2nd
    element of grades array contains a grade of "A" and score 9 on an ISODate
    "2014-08-11T00:00:00Z".
 -  to find the restaurant Id, name, address and geographical location for those
    restaurants where 2nd element of coord array contains a value which is more
    than 42 and up to 52..
 -  to arrange the name of the restaurants in ascending order along with all
    the columns.
 -  to arrange the name of the restaurants in descending along with all the
    columns.
 -  to arranged the name of the cuisine in ascending order and for those same
    cuisine borough should be in descending order.
 -  to know whether all the addresses contains the street or not.
 -  which will select all documents in the restaurants collection where the
    coord field value is Double.
 -  which will select the restaurant Id, name and grades for those restaurants
    which returns 0 as a remainder after dividing the score by 7.
 -  to find the restaurant name, borough, longitude and attitude and cuisine for
    those restaurants which contains 'mon' as three letters somewhere in its
    name.
 -  to find the restaurant name, borough, longitude and latitude and cuisine for
    those restaurants which contains 'Mad' as first three letters of its name.