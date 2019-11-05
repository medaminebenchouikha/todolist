export class Todo {
    constructor(
        private _id?:String,
        private _description?:String,
        private _idUser?:String
    ){}

    get id(){return this._id}
    set id(value){this._id=value}

    get description(){return this._description;}
    set description(value){this._description=value;}
}
