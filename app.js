var express=require('express');
var app=express();
var orderController=function(req,res)
{
console.log("invoking rest api")
var order=[
{id:1,Employee:"pritesh",salary:80000,status:"register"},
{id:2,Employee:"mayur",salary:60000,status:"register"}
];
res.send(order);
};
app.get('/order',orderController);
var server=app.listen(8087,function()
{
console.log("listening at http://localhost:8087")
})