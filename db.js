const mysql=require('mysql')


function connect()
{
const connection= mysql.createConnection({
    host:'localhost',
    user:'dac1',
    password:'dac1234',
    database:'jdbc',
    port:'3306'
})
     connection.connect()
     return connection
}
module.exports={
    connect: connect
}