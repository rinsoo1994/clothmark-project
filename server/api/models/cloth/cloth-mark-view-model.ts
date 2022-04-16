import { ClothMarkRequest } from './cloth-mark-request'
export class ClothMarkViewModel {

    constructor(clothMarkRequest: ClothMarkRequest, id: number) {
        this.id = id;
        this.clothPriority = clothMarkRequest.clothPriority;
        this.clothUrl = clothMarkRequest.clothUrl;
        this.description = clothMarkRequest.description;
        this.title = clothMarkRequest.title;
        this.user = clothMarkRequest.user;
    }

    id: number;
    clothPriority: number;
    clothUrl: string;
    description: string;
    title: string;
    user: string;
}