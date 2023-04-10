import { Component } from '@angular/core';
export interface User {
  isSelected: boolean;
  id: number;
  paymenttype: string;
  accountnumber: number;
  date: string;
  amount: number;
  comments:string;

  isEdit: boolean;
} 
export
 const USER_DATA = [
  {
    id: 1,
    paymenttype: 'card',
    accountnumber: 123456789109,
    date: '2022-05-05',
    amount:120000,
    comments:'nice color',
    
  },
  {
    id: 2,
    paymenttype: 'card',
    accountnumber: 123456789109,
    date: '2022-05-05',
    amount:120000,
    comments:'nice color',
  },
  {
    id: 3,
    paymenttype: 'card',
    accountnumber: 123456789109,
    date: '2022-05-05',
    amount:120000,
    comments:'nice ',
  },
  {
    id: 4,
    paymenttype: 'card',
    accountnumber: 123456789109,
    date: '2022-05-05',
    amount:120000,
    comments:'nice color',
  },
];

export const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'paymenttype',
    type: 'string',
    label: 'Payment Type',
  },
  {
    key: 'accountnumber',
    type: 'number',
    label: 'Account/Invoice Number',
  },
  {
    key: 'date',
    type: 'date',
    label: 'Date ',
  },
  {
    key: 'amount',
    type: 'number',
    label: 'Amount',
  },
  {
    key: 'comments',
    type: 'string',
    label: 'Comments',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];