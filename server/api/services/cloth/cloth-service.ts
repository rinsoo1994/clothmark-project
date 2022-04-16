import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info';
import { ClothMarkRequest } from '../../models/cloth/cloth-mark-request';

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
        clothMarkRequest: ClothMarkRequest
    ): Promise<ClothMarkInfo> {
        const result = await clothData.postClothMarkInfo(expressRequest, clothMarkRequest);
        return result
    }
}

export const clothService = new ClothService();
