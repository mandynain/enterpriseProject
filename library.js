//MANDEEP KAUR C0742602
var mongodb = require ('mongodb').MongoClient;
var url ="mongodb+srv://gurjit:gurjit@cluster0-vdfpb.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, {useUnifiedTopology: true}, function ( err, db){
if (err)
{
throw err; // return console.log ('fix the err');
}
console.log("you created library collections");
var mydatabase=db.db('college');
var mycol=[

{BookId:'b1',BookName:'Harry Potter and the Sorcerers Stone ', PublisherName:'J. K. Rowling'},
{BookId:'b2',BookName:'The Hobbit ', PublisherName:'J. R. R. Tolkien'},
{BookId:'b3',BookName:'Harry Potter and the Goblet of Fire', PublisherName:'J. K. Rowling '},
{BookId:'b4',BookName:'Harry Potter and the Half-Blood Prince', PublisherName:'J. K. Rowling '},
{BookId:'b5',BookName:'The Lord of the Rings', PublisherName:'J. R. R. Tolkien'},
{BookId:'b6',BookName:'The Fellowship of the Ring', PublisherName:'J. R. R. Tolkien'}


]
mydatabase.collection("library").insertMany(mycol,function(err,response){
if (err)
throw err;

console.log("you insert data in ur collection");
db.close();
});
});