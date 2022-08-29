export class Project {
    id?: number;
    title: string;
    description: string;
    hostURL?: string;
    imgURL?: string;

    constructor(title: string, description: string, hostURL: string, imgURL: string){
        this.title = title;
        this.description = description;
        this.hostURL = hostURL;
        this.imgURL = imgURL;
    }
}
