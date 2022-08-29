export class Skills {
    id?: number;
    name: string;
    percentage: number;
    color: string;
    
    constructor(name: string, percentage: number, color:string){
        this.name = name;
        this.percentage = percentage;
        this.color = color;
    }
}
