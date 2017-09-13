# MongoDB

## install & use
- Create data \ db at Disk C
- Path: 'C:\ Program Files \ MongoDB'
- open `C:\Program Files\MongoDB\Server\3.4\bin`
- add `path` at `Control Panel\All Control Panel Items\System` in Advanced system settings
- start server `mongod.exe`
- open a new terminal and type `mongo.exe`(use admin)

## commands
- `help`: show help commands and infos
- `db` will show the direct database
- `use name` will create a new database or switch database
- `db.name.insert(sth)`: insert something to your database
- `db.name.find()`: show infos in database
- `db.name.find().pretty()`: show infos in database and format
- `db.name.find({},{'name1': 1, 'name2': 1})`: show field you want
- `db.name.find({},{'name1': 1, 'name2': 1, 'name3': 0})`: exclude 0 field
- `db.restaurants.find( {'borough':'Bronx'}).pretty()`: find specified field item
- `db.restaurants.find( {'borough':'Bronx'}).limit(5)`: show first 5 items
- `db.restaurants.find( {'borough':'Bronx'}).skip(5).limit(5)`: skip first 5 items, than show next 5 items
- `db.restaurants.find({'grades.score':{$gt:90}})`: $gt> $gte>= $lt< $lte<=
- `db.restaurants.find({'grades.score':{$gt:80,$lt:100}})` : >80 && <100
- `db.name.update({'name': 'value'}, new object)`: update info
- `db.name.remove({'name': 'value'})`: remove data
- `exit`: exit

## type
- null
- boolean
- number(64 bit float)
- string
- array
