export enum SortPhrase {
    DATE = 'DATE',
    BENEFICIARY = 'BENEFICIARY',
    AMOUNT = 'AMOUNT'
}

export enum SortOrder {
    DESC = 'DESC',
    ASC = 'ASC'
}

export interface SortCriteria {
    phrase: SortPhrase;
    order: SortOrder;
}