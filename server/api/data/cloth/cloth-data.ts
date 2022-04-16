import { ClothMarkInfo } from './model/cloth-mark-info'
import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model'
import { ClothMarkRequest } from '../../models/cloth/cloth-mark-request';

const CLOTH_MARK_LIST: ClothMarkInfo[] = [];

// TODO: 추후 db 로 로직 변경
async function filterUserData(user: string): Promise<ClothMarkInfo[]> {
    // TODO 함수는 async라고 해놓긴 했는데 내부 코드가 그냥 도는 이것같은 경우 의미가 있는가?
    return CLOTH_MARK_LIST.filter(clothMarkData => clothMarkData.user == user);
}

// TODO: 추후 db 로 로직 변경
async function checkIsExists(info: ClothMarkInfo): Promise<boolean> {
    // TODO 함수는 async라고 해놓긴 했는데 내부 코드가 그냥 도는 이것같은 경우 의미가 있는가?
    for (var i in CLOTH_MARK_LIST) {
        if (CLOTH_MARK_LIST[i].clothUrl === info.clothUrl && CLOTH_MARK_LIST[i].user === info.user) {
            return true
        }
    }
    return false;
}

export class ClothData {
    async getClothMarkAllInfo(expressRequest: any, user: string): Promise<ClothMarkInfo[]> {
        try {
            const result = await filterUserData(user);
            return result;
        }
        catch (error) {
            console.error(`${error}`)
        }
        // TODO: 로직 개선 필요
        throw {
        }
    }

    async postClothMarkInfo(expressRequest: any, clothMarkRequest: ClothMarkRequest): Promise<ClothMarkInfo> {
        const clothMarkViewModel = new ClothMarkViewModel(clothMarkRequest, CLOTH_MARK_LIST.length);

        // 이미 들어있는 url은 ? 
        if (!await checkIsExists(clothMarkViewModel)) {
            CLOTH_MARK_LIST.push(clothMarkViewModel);
            return clothMarkViewModel
        }
        else {
            // TODO: 생각보다 모든 케이스에서 동일한 형식의 response를 내려야하는게 어떻게 해야할지 모르겠음? 
            // 이 케이스는 false를 넣고, 왜 실패했나 메세지를 추가하는게 나을듯!
            return clothMarkViewModel
        }
    }
}

export const clothData = new ClothData();