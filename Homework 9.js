

//     Homework 9




//        1






class Author {
    constructor( name = 'No name' , email = 'No email' , gender = 'No gender') {
        this.name = name ;
        this.email = email ;
        this.gender = gender ;
    }

    get name () {
        return this._name ;
    }

    get email () {
        return this._email ;
    }

    get gender () {
        return this._gender ;
    }

    set name ( value ) {
        this._name = value ;
    }

    set email ( value ) {
        this._email = value ;
    }

    set gender ( value ) {
        this._gender = value ;
    }

    toString() {
        return `Name is '${this.name}'
Email is '${this.email}'
Gender is '${this.gender}'`
    } ;
}

class Book {
    constructor( title = 'No title' , price = 0 , quantity = 0 ) {
        this.title = title ;
        this.price = price ;
        this.quantity = quantity ;
        this.author = new Author ( 'Grigor' , 'g.r.abrahamyan@gmail.com' , 'male' ) ;
    }

    get title() {
        return this._title ;
    }

    get price() {
        return this._price ;
    }

    get quantity() {
        return this._quantity ;
    }

    get author() {
        return this._author ;
    }

    set title( value ) {
        this._title = value ;
    }

    set price( value ) {
        this._price = `${value}$` ;
    }

    set quantity( value ) {
        this._quantity = value ;
    }

    set author(value) {
        this._author = value ;
        this._author._name = value.name ;
        this._author._email = value.email ;
        this._author._gender = value.gender ;
    }

    getProfit() {
        return `Profit from the <<${this.title}>> ${parseFloat(this.price) * this.quantity}$!` ;
    }

    toString() {
        return `Title book is ${this.title}
Price is ${this.price}
Quantity is ${this.quantity}
${this.author.toString()}` ;
    }
}

let book = new Book( 'New book' , 100 , 5 ) ;

console.log( book.toString() ) ;
console.log( book.getProfit() ) ;






//          2







class Account {
    constructor ( id , name , balance ) {
        this.id = id ;
        this.name = name ;
        this.balance = balance ;
    }

    set name (value) {
        this._name = value ;
    }

    set balance (value) {
        this._balance = `${value}$` ;
    }

    set id (value) {
        this._id = value ;
    }

    get id () {
        return this._id ; 
    }

    get name () {
        return this._name ;
    }

    get balance () {
        return this._balance ;
    }

    credit(amount) {
        debugger ;
        return this.balance = parseFloat(this.balance) + amount ;
    }

    debit( amount ) {
        if ( parseFloat(this.balance) - amount < 0 ) {
            console.log( 'Amount exceeded balance.' ) ;
        } else {
            return this.balance = parseFloat(this.balance) - amount ;
        }
    }

    transferTo(amount , anotherAccount = 0 ) {
        if ( parseFloat(this.balance) - amount < 0 ) {
            console.log( 'Amount exceeded balance.' ) ;
        } else {
            anotherAccount = `${parseFloat(this.balance) - amount}$` ;
            this.balance = parseFloat(this.balance) - amount ;
        }
    }

    identifyAccounts(accountFirst = {}, accountSecond = {}) {
        let arrFirst = [] ;
        let arrSecond = [] ;
        for ( let value in accountFirst ) {
            arrFirst.push( arrFirst[value] ) ;
        }

        for ( let value in accountSecond ) {
            arrSecond.push( arrFirst[value] ) ;
        }

        if ( arrFirst.length !== arrSecond.length ) {
            return 'Not same' ;
        }

        for ( let i = 0 ; i < arrFirst.length ; i++ ) {
            if ( arrFirst[i] !== arrSecond[i] ) {
                return 'Not same' ;
            }
        }
        return 'The same' ;
    }

    toString() {
        console.log( `Id is ${this.id}
Name is ${this.name}
Balance is ${this.balance}
Metod Credit is ${this.credit.toString()}
Metod debit is ${this.debit.toString()}
Metod TransverTo is ${this.transferTo.toString()}
Metod IdentifyAccounts is ${this.identifyAccounts.toString()}` ) ;
    }
}

let account = new Account( 50 , 'Grigor' , 500 ) ;
account.toString() ;




//           3





class Person {
    constructor( firstName = 'Write firstname', lastName = 'Write lastname', gender = 'Write gender', age = 'Write age' ) {
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.gender = gender ;
        this.age = age ;
    }

    get firstName () {
        return this._firstName ;
    }

    get lastName () {
        return this._lastName ;
    }

    get gender () {
        return this._gender ;
    }

    get age () {
        return this._age ;
    }

    set firstName ( value ) {
        this._firstName = value ;
    }

    set lastName ( value ) {
        this._lastName = value ;
    }

    set gender ( value ) {
        this._gender = value ;
    }

    set age ( value ) {
        this._age = value ;
    }

    toString() {
        console.log( `Person firstname is ${this.firstName}
Person lastname is ${this.lastName}
Person gender is ${this.gender}
Person age is ${this.age}` ) ;
    }
}

let person = new Person( 'Grigor' , 'Abrahamyan' , 'male' , '28' ) ;

person.toString() ;

class Students extends Person {
    constructor(firstName = 'Write firstname', lastName = 'Write lastname', gender = 'Write gender', age = 'Write age') {
        super( firstName , lastName , gender , age ) ;
        this.program = ['ProgramOne' , 'ProgramTwo' , 'PrograThree'] ;
        this.year = 2019 ;
        this.fee = 600 + '.' + '000' + 'AMD' ;
    }

    get program () {
        return this._program ;
    }

    get year () {
        return this._year ;
    }

    get fee () {
        return this._fee ;
    }

    set program (value) {
        this._program = value ;
    }

    set year (value) {
        this._year = value ;
    }

    set fee (value) {
        this._fee = value ;
    }

    passExam( program, grade ) {
        if ( grade >= 50 && program ) {
            return this.year++ ;
        }
    }

    toString() {
        console.log( `Student firstname is ${this.firstName}
Student lastname is ${this.lastName}
Student gender is ${this.gender}
Student age is ${this.age}
Student program is ${this.program.toString()}
Student year is ${this.year}
Student fee is ${this.fee}
Student metod passExam is ${this.passExam.toString()}` ) ;
    }
}

let student = new Students('Grigor' , 'Abrahamyan' , 'male' , '28') ;
student.passExam( student.program[0] , 70 ) ;
console.log( student ) ;
student.toString() ;

class Teacher extends Person {
    constructor( firstName = 'Write firstname', lastName = 'Write lastname', gender = 'Write gender', age = 'Write age' ) {
        super( firstName , lastName , gender , age ) ;
        this.pay = '500$' ;
        this.program = 'Program-tiacher' ;
    }

    get pay() {
        return this._pay ;
    }

    get program() {
        return this._program ;
    }

    set pay(value) {
        this._pay = value ;
    }

    set program(value) {
        this._program = value ;
    }

    toString() {
        console.log( `Teacher firstname is ${this.firstName}
        Teacher lastname is ${this.lastName}
        Teacher gender is ${this.gender}
        Teacher age is ${this.age}
        Teacher program is ${this.program}
        Student pay is ${this.pay})` )
    }
}

let teacher = new Teacher( 'Grigor' , 'Abrahmayan' , 'male' , '28' ) ;
teacher.toString() ;






























































































































