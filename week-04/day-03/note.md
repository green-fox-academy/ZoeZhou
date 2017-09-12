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
- `db.name.update({'name': 'value'}, object)`: update info
- `db.name.remove({'name': 'value'})`: remove data
- `exit`: exit

## type
- null
- boolean
- number(64 bit float)
- string
- array
