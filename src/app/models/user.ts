export class User {
    
    constructor(
        private _id?:String,
        private _firstname?:String,
        private _lastname?:String,
        private _phone?:String,
        private _email?:String,
        private _password?:String,
        private _photo?:String
    ){}

    get id(){ return this._id;}
    set id(value){this._id=value;}

    get firstname(){ return this._firstname;}
    set firstname(value){this._firstname=value;}


    get lastname(){ return this._lastname;}
    set lastname(value){this._lastname=value;}

    get phone(){ return this._phone;}
    set phone(value){this._phone=value;}

    get email(){ return this._email;}
    set email(value){this._email=value;}

    
    get password(){ return this._password;}
    set password(value){this._password=value;}

    get photo(){ return this._photo;}
    set photo(value){this._photo=value;}
}
