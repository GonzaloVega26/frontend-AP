export class Person{
    id?: number;
    name: string;
    title: string;
    about: string;
    imgURL: string;
    bannerURL: string;

    constructor(name: string, title: string, about: string, imgURL: string, bannerURL:string){
        this.name = name;
        this.title = title;
        this.about = about;
        this.imgURL = imgURL;
        this.bannerURL = bannerURL;
    }
}