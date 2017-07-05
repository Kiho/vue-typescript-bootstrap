import { IEntityItem } from '.';

export interface ICompany extends IEntityItem {
    name?: string;
    contactName?: string;
}

export const Company: ICompany = {
    id: 0,
    name: '',
    contactName: ''
};