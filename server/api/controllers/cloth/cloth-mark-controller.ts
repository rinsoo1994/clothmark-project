import { Get, Post, Body, Request, Route, Tags, Query } from 'tsoa';
import { BaseController } from '../base-controller';
import express from 'express';
import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model';
import { ClothMarkRequest } from '../../models/cloth/cloth-mark-request';

import { clothService } from '../../services/cloth/cloth-service';
import { ShoppingSuccessResponse } from '../../models/shopping-response';

@Tags('Cloth')
@Route('cloth')
export class ClothMarkController extends BaseController {
    @Get('all')
    async getClothMarkAll(
        @Request() request: express.Request,
        @Query() user: string
    ): Promise<ShoppingSuccessResponse<ClothMarkViewModel[]>> {
        const data = await clothService.getClothMarksInfo(request, user);
        console.log(data);
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }

    @Post('info')
    async postClothMarkInfo(
        @Body() requestBody: ClothMarkRequest,
        @Request() request: express.Request
    ): Promise<ShoppingSuccessResponse<ClothMarkRequest>> {
        console.log(requestBody);
        const data = await clothService.postClothMarkInfo(request, requestBody);
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }
}

