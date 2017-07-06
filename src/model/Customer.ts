import { IEntityItem } from '.';

export interface ICustomer extends IEntityItem {
    name?: string;
    contactName?: string;
}

export const Customer: ICustomer = {
    id: 0,
    name: '',
    contactName: ''
};