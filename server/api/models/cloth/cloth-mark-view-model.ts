import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info'
export class ClothMarkViewModel {

    constructor(clothMarkInfo: ClothMarkInfo) {
        this.id = clothMarkInfo.id;
        this.clothPriority = clothMarkInfo.clothPriority;
        this.clothUrl = clothMarkInfo.clothUrl;
        this.description = clothMarkInfo.description;
        this.title = clothMarkInfo.title;
        this.user = clothMarkInfo.user;
    }

    id: number;
    clothPriority: number;
    clothUrl: string;
    description: string;
    title: string;
    user: string;
}