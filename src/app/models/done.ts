export class Done {

    constructor(
        private _id?:String,
        private _description?:String
    ){}

    get id(){return this._id;}
    set id(value){this._id=value;}

    get description(){return this._description;}
    set description(value){this._description=value;}

}
