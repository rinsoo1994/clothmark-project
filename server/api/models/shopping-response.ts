class ResultAction {
    toastMessage: string;
    alertMessage: string;
    redirectUrl: string;
    redirectBody: string;
}

export interface ShoppingResponse<T> {
    data: T;
    resultCode: number;
    message: string;
}

export class ShoppingSuccessResponse<T> implements ShoppingResponse<T>{
    data: T;
    resultCode: number;
    message: string;

    constructor(data: T) {
        this.resultCode = 200;
        this.message = 'success';
        this.data = data;
    }
}