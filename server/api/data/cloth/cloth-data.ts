import { ClothMarkInfo } from './model/cloth-mark-info'
// import { response } from 'express';

let CLOTH_MARK_DICT: ClothMarkInfo[] = [];

/** 
 * 추후 db 사용하는 로직으로 변경
*/
async function response() {
    const clothInfo: ClothMarkInfo = {
        clothUrl: 'url',
        title: 'title',
        description: 'description',
        clothPriority: 1,
        user: 'surin'
    }
    return [clothInfo]
}


export class ClothData {
    async getClothMarkAllInfo(expressRequest: any, user: string): Promise<ClothMarkInfo[]> {
        try {
            const result = await response();
            return result;
        }
        catch (error) {
            console.error(`${error}`)
        }
        // 로직 개선 필요
        throw {

        }
    }
}

export const clothData = new ClothData();