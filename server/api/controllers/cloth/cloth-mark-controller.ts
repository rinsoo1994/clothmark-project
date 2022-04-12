import { Get, Request, Route, Tags } from 'tsoa';
import express from 'express';
import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model';
import { clothService } from '../../services/cloth/cloth-service';

@Tags('Cloth')
@Route('cloth')
export class ClothMarkController {
    @Get('all')
    async getClothMarkAll(@Request() request: express.Request): Promise<ClothMarkViewModel[]> {
        const data = await clothService.getClothMarkInfo(request, "surin");
        return data;
    }
}