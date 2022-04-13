import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info';
import { clothData } from '../../data/cloth/cloth-data';
import express from 'express';

export class ClothService {

    async getClothMarksInfo(
        expressRequest: express.Request,
        user: string
    ): Promise<ClothMarkInfo[]> {
        const result = await clothData.getClothMarkAllInfo(expressRequest, user);
        return result
    }

    async postClothMarkInfo(
        expressRequest: express.Request,
        clothMarkInfo: ClothMarkInfo
    ): Promise<ClothMarkInfo> {
        const result = await clothData.postClothMarkInfo(expressRequest, clothMarkInfo);
        return result
    }
}

export const clothService = new ClothService();
