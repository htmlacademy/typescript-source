export interface GeneralLedgerEntry {
  generalLedgerId: number;
  posted: string;
  debitAccountId: string;
  creditAccountId: string;
  amount: number;
  referenceId: string;
}

export interface AccountDaily {
  date: string;
  debitDayTotal: number;
  creditDayTotal: number;
}

export type AccountDailyReducer = (accountId: string, ledger: unknown) => AccountDaily[];