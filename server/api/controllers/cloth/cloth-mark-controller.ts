import { Get, Post, Body, Request, Route, Tags, Query, Delete } from 'tsoa';
import { BaseController } from '../base-controller';
import express from 'express';
import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model';
import { ClothMarkRequest } from '../../models/cloth/cloth-mark-request';

import { clothService } from '../../services/cloth/cloth-service';
import { ShoppingSuccessResponse } from '../../models/shopping-response';
import { ClothMarkInfo } from '../../data/cloth/model/cloth-mark-info';

@Tags('Cloth')
@Route('cloth')
export class ClothMarkController extends BaseController {
    @Get('all')
    async getClothMarkAll(
        @Request() request: express.Request,
        @Query() user: string
    ): Promise<ShoppingSuccessResponse<ClothMarkViewModel[]>> {
        const data = await clothService.getClothMarksInfo(request, user);
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }

    @Post('info')
    async postClothMarkInfo(
        @Body() requestBody: ClothMarkRequest,
        @Request() request: express.Request
    ): Promise<ShoppingSuccessResponse<ClothMarkInfo>> {
        console.log(requestBody);
        const data = await clothService.postClothMarkInfo(request, requestBody);
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }

    @Delete('info')
    async deleteClothMarkInfo(@Request() request: express.Request) {

    }
}

