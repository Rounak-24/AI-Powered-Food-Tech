export interface IAccessDecodedPayload {
    _id:string,
    fullname:string,
    isActive: boolean,
    role: string
}

export interface IRefreshDecodedPayload {
    _id:string,
    fullname:string,
    isActive: boolean,
    role: string,
    phone: string
}