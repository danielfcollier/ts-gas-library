enum FinancialTransactionsType {
	Transactions = 'transactions',
	Chargeback = 'chargeback',
	Adjustment = 'adjustment'
}

type SignType = '+' | '-';

interface FinancialTransactions {
	date: string;
	id: string;
	type: FinancialTransactionsType;
	amount: number;
	sellerAmount: number;
	sign: SignType;
}

interface OrdesTransactions {
	paymentId: number;
	partnerUniqueId: number;
	customerEmail: string;
	paymentDate: string;
	amount: number;
	paymentStatus: TunaPaymentStatus;
	paymentMethodType: TunaPaymentMethod;
}

enum TunaStatusCode {
	Success = 1,
	Error = -1
}

enum TunaPaymentMethod {
    CreditCard = '1',
    DebitCard = '2',
    Boleto = '3',
    BankTransfer = '4',
    ThreeDSCredit = '5',
    ThreeDSDebit = '6',
    ThreeDS20Credit = '7',
    ThreeDS20Debit = '8',
    External = '9',
    GiftCard = 'A',
    Balance = 'B',
    CreditCardPrivateBrand = 'C',
    PIX = 'D'
};

enum TunaPaymentStatus {
    Started = '0',
    Authorized = '1',
    Captured = '2',
    Refunded = '3',
    Denied = '4',
    Cancelled = '5',
    Abandoned ='6',
    Chargeback= '7',
    MoneyReceived = '8',
    PartialRefunded = '9',
    Error = 'A',
    RedFlag = 'B',
    PendingCapture ='C',
    PendingCancel = 'D',
    Pending = 'P',
    NotProcessed = 'N'
}