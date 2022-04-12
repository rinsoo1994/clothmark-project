// import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model';
import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info';
import { clothData } from '../../data/cloth/cloth-data';
import express from 'express';

export class ClothService {
    /**
     * Cloth marking CRUD
     */
    // ClothMarkViewModel()
    async getClothMarkInfo(expressRequest: express.Request, user: string): Promise<ClothMarkInfo[]> {
        const result = await clothData.getClothMarkAllInfo(expressRequest, user);
        return result
    }

    async putClothMarkInfo(expressRequest: express.Request, clothMarkInfo: ClothMarkInfo) {
        const result: ClothMarkInfo = await clothData.putClothMarkInfo(expressRequest, clothMarkInfo);
        return result
    }
}

export const clothService = new ClothService();