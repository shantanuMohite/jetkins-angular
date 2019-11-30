const express= require ('express')
const db=require('../db')
const utils=require('../utils')
const router= express.Router()

router.get('/',(request,response)=>
{
 const connection=db.connect()
 const statement = 'select id,name, email,address from employee'
 connection.query(statement,(error,data)=>
 {
     connection.end()
     response.send(utils.createResult(error,data))
 })
})


router.post('/',(request,response)=>
{
  const {name,email,address}=request.body
 const connection=db.connect()
 const statement = `insert into employee(name,email,address) values('${name}','${email}','${address}')`
 connection.query(statement,(error,data)=>
 {
     connection.end()
     response.send(utils.createResult(error,data))
 })

 router.put('/:id',(request,response)=>
{
    const id=request.params.id
    const {name,address,email}= request.body
 const connection=db.connect()
 const statement = `update employee set name='${name}', email='${email}',address ='${address}' where id='${id}'`
 connection.query(statement,(error,data)=>
 {
     connection.end()
     response.send(utils.createResult(error,data))
 })
})
 


router.delete('/:id',(request,response)=>
{
    const id=request.params.id
 const connection=db.connect()
 const statement = `delete from employee where id=${id}`
 connection.query(statement,(error,data)=>
 {
     connection.end()
     response.send(utils.createResult(error,data))
 })
})
})
module.exports=router