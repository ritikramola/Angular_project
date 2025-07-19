export interface IRole {
    roleId: number;
    role: string;
}   

export interface IDesignition{
    designationId: number;
    designation: string;
}

export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}
