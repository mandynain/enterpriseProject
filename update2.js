//MANDEEP KAUR C0742602
//4th library collection update
var mongodb = require ('mongodb').MongoClient;
var url = "mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}

var mydatabase=db.db('college');
var query4 = {BookName:'The Hobbit '};
var data4 = {$set: {PublisherName: 'Tolkien'}};


mydatabase.collection("library").updateOne(query4,data4,function(err,response){
if (err)
throw err;

console.log("you update data in 4th collection");
db.close();
});

//5th management collection update
var query5 = {name:'Rony'};
var data5 = {$set: {position:'principal'}};


mydatabase.collection("management").updateOne(query5,data5,function(err,response){
if (err)
throw err;

console.log("you update data in 5th collection");
db.close();
});

//6th event collection update
var query6 = {eventName:'Christmas'};
var data6 = {$set: {eventId:'e10'}};


mydatabase.collection("event").updateOne(query6,data6,function(err,response){
if (err)
throw err;

console.log("you update data in 6th collection");
db.close();
});
});

