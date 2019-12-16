//MANDEEP KAUR C0742602
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created event collections");
var mydatabase=db.db('college');
var mycol=[


{eventId:'e1',eventName:'Diwali', eventType:'religious',eventLocation:'Auditorium',eventDate:'15-12-2020'},
{eventId:'e2',eventName:'IT-event', eventType:'professional',eventLocation:'Library',eventDate:'20-12-2020'},
{eventId:'e3',eventName:'onam', eventType:'religious',eventLocation:'Auditorium',eventDate:'12-12-2020'},
{eventId:'e4',eventName:'ProjectManagement', eventType:'professional',eventLocation:'Library',eventDate:'17-01-2020'},
{eventId:'e5',eventName:'Christmas', eventType:'religious',eventLocation:'Auditorium',eventDate:'25-12-2019'}

]
mydatabase.collection("event").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});