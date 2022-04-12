// import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model';
import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info';
import { clothData } from '../../data/cloth/cloth-data';


export class ClothService {
    /**
     * Cloth marking CRUD
     */
    // ClothMarkViewModel()
    async getClothMarkInfo(expressRequest: any, user: string): Promise<ClothMarkInfo[]> {
        const result = await clothData.getClothMarkAllInfo(expressRequest, user);
        return result
    }
}

export const clothService = new ClothService();