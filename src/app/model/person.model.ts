export class Person{
    id?: number;
    name: String;
    firstName: String;
    img: String

    constructor(name: String, firstName: String, img: String){
        this.name = name;
        this.firstName = firstName;
        this.img = img;
    }
}