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
        const data = await clothService.getClothMarkInfo(request, user);
        //  구조가 이상하긴 함. list 형태이고싶으면 안쪽에서 만들어주는것? 필요한가? 
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }

    @Post('info')
    async putClothMarkInfo(
        @Body() requestBody: ClothMarkRequest,
        @Request() request: express.Request
    ): Promise<ShoppingSuccessResponse<ClothMarkRequest>> {
        const data = await clothService.putClothMarkInfo(request, requestBody);
        const shoppingSuccessResponse = new ShoppingSuccessResponse(data);
        return shoppingSuccessResponse;
    }

}

