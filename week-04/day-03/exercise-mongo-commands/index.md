-   to display the fields restaurant_id, name, borough and cuisine for all the
    documents in the collection restaurant.
 -  to display the fields restaurant_id, name, borough and cuisine, but exclude
    the field `_id` for all the documents in the collection restaurant.
 -  to display the fields restaurant_id, name, borough and zipcode, but exclude
    the field `_id` for all the documents in the collection restaurant.
 -  to display all the restaurant which is in the borough Bronx.
    - `db.restaurants.find( {'borough':'Bronx'})`
 -  to display the first 5 restaurant which is in the borough Bronx.
    - `db.restaurants.find( {'borough':'Bronx'}).limit(5)`
 -  to display the next 5 restaurants after skipping first 5 which are in the
    borough Bronx.
    - `db.restaurants.find( {'borough':'Bronx'}).skip(5).limit(5)`
 -  to find the restaurants who achieved a score more than 90.
    - `db.restaurants.find({'grades.score':{$gt:90}})`
 -  to find the restaurants that achieved a score, more than 80 but less than
    100.
 -  to find the restaurants which locates in latitude value less than
    -95.754168.
 -  to find the restaurants that does not prepare any cuisine of 'American' and
    their grade score more than 70 and latitude less than -65.754168.
    - ` db.restaurants.find( {'address.coord':{$lt:-65.754168},'cuisine':{$nin:['American']},'grades.score':{$gt:70}})`
 -  to find the restaurants which does not prepare any cuisine of 'American' and
    achieved a score more than 70 and not located in the longitude less than
    -65.754168.
 -  Note: Do this query without using $and operator.
    -  `db.restaurants.find( {'address.coord':{$gte:-65.754168},'cuisine':{$nin:['American']},'grades.score':{$gt:70}})`
 -  to find the restaurants which does not prepare any cuisine of 'American '
    and achieved a grade point 'A' not belongs to the borough Brooklyn. The
    document must be displayed according to the cuisine in descending order.
    -  `db.restaurants.find( {'borough':{$nin:['Brooklyn']},'cuisine':{$nin:['American ']},'grades.grade':'A'}).sort({borough: -1}).pretty()`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'Wil' as first three letters for its name.
     - `db.restaurants.find( {'name':/^Wil/},{'restaurant_id':1, 'name':1,'borough':1,'cuisine':1} )`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'ces' as last three letters for its name.
    - ` db.restaurants.find( {'name':/ces$/},{'restaurant_id':1, 'name':1,'borough':1,'cuisine':1} )`
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which contains 'Reg' as three letters somewhere in its name.
    - ` db.restaurants.find( {'name':/Reg/},{'restaurant_id':1, 'name':1,'borough':1,'cuisine':1} )`
 -  to find the restaurants which belongs to the borough Bronx and prepared
    either American or Chinese dish.
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which belongs to the borough Staten Island or Queens or Bronxor Brooklyn.
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which are not belonging to the borough Staten Island or Queens or Bronxor
    Brooklyn.
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which achieved a score which is not more than 10.
 -  to find the restaurant Id, name, borough and cuisine for those restaurants
    which prepared dish except 'American' and 'Chinees' or restaurant's name
    begins with letter 'Wil'.
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