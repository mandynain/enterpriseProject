
//MANDEEP KAUR C0742602
//delete query for library collection
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var deleteData3 = {BookId:'b6'};


mydatabase.collection("library").deleteOne(deleteData3,function(err,response){
if (err)
throw err;

console.log("you delete data in library collection");
db.close();
});
//delete query for management collection
var deleteData4 = {name:'John'};


mydatabase.collection("management").deleteOne(deleteData4,function(err,response){
if (err)
throw err;

console.log("you delete data in management collection");
db.close();
});
//delete query for event collection
var deleteData5 = {eventName:'onam'};


mydatabase.collection("event").deleteOne(deleteData5,function(err,response){
if (err)
throw err;

console.log("you delete data in event collection");
db.close();
});
});