import { ClothMarkInfo } from './model/cloth-mark-info'
import { ClothMarkViewModel } from '../../models/cloth/cloth-mark-view-model'

const CLOTH_MARK_LIST: ClothMarkInfo[] = [];

// TODO: 추후 db 로 로직 변경
async function filterUserData(user: string): Promise<ClothMarkInfo[]> {
    // TODO 함수는 async라고 해놓긴 했는데 내부 코드가 그냥 도는 이것같은 경우 의미가 있는가?
    return CLOTH_MARK_LIST.filter(clothMarkData => clothMarkData.user == user);
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

    async postClothMarkInfo(expressRequest: any, clothMarkInfo: ClothMarkInfo): Promise<ClothMarkInfo> {
        const clothMarkViewModel = new ClothMarkViewModel(clothMarkInfo);
        CLOTH_MARK_LIST.push(clothMarkViewModel);
        return clothMarkViewModel
    }
}

export const clothData = new ClothData();