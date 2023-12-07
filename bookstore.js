function Author(authorname,birthYear,nationality){
    this.authorname=authorname,
    this.birthyear=birthYear,
    this.nationality=nationality
}

function Book(title,authorobject,genre,price){
      this.title=title,
      this.author=authorobject,
      this.genre=genre,
      this.price=price
}
function bookinfo(){
    console.log(`${this.author.authorname}, ${this.price},${this.title}, ${this.genre}`);

};

Book.prototype.getBookinfo=bookinfo;
let a1= new Author("swarnava paul",2003,"Indian");
let b1=new Book("programming 01",a1,"kl",2100);

b1.getBookinfo()