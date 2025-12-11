export declare enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD",
    OPTIONS = "OPTIONS"
}
export declare enum ApiCallType {
    PROVIDER_REQUEST = "PROVIDER_REQUEST",
    PROVIDER_CALLBACK = "PROVIDER_CALLBACK",
    MERCHANT_CALLBACK = "MERCHANT_CALLBACK",
    INTERNAL_SERVICE = "INTERNAL_SERVICE",
    OTHER = "OTHER"
}
export declare enum TransactionType {
    PAYMENT = "PAYMENT",
    RECURRING_PAYMENT = "RECURRING_PAYMENT"
}
export declare enum TransactionStatus {
    UNKNOWN = "UNKNOWN",
    INITIATED = "INITIATED",
    IN_PROGRESS = "IN_PROGRESS",
    ON_HOLD = "ON_HOLD",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED",
    DECLINED = "DECLINED",
    BLOCKED = "BLOCKED",
    FAILED = "FAILED",
    EXPIRED = "EXPIRED"
}
export declare enum TransactionStage {
    VERIFICATION = "VERIFICATION",
    PENDING = "PENDING",
    PREAUTH = "PREAUTH",
    CAPTURE = "CAPTURE",
    WRAP_UP = "WRAP_UP"
}
export declare enum PaymentOrderType {
    PAYIN = "PAYIN",
    PAYOUT = "PAYOUT",
    REFUND = "REFUND",
    CHARGEBACK = "CHARGEBACK"
}
export declare enum PaymentOperationType {
    AUTH = "AUTH",
    PREAUTH = "PREAUTH",
    CAPTURE = "CAPTURE",
    REFUND = "REFUND",
    CHARGEBACK = "CHARGEBACK",
    NOTIFY = "NOTIFY"
}
export declare enum PaymentVerificationStatus {
    UNKNOWN = "UNKNOWN",
    SUCCESS = "SUCCESS",
    WARNINGS = "WARNINGS",
    ERRORS = "ERRORS"
}
export declare enum MerchantType {
    OWNER = "OWNER",
    MERCHANT = "MERCHANT"
}
export declare enum MerchantApplicationType {
    STANDARD = "STANDARD"
}
export declare enum ResponseType {
    arraybuffer = "arraybuffer",
    blob = "blob",
    document = "document",
    json = "json",
    text = "text",
    stream = "stream"
}
export declare enum MerchantCallbackType {
    TRANSACTION_CREATED = "TRANSACTION_CREATED",
    TRANSACTION_CHANGED = "TRANSACTION_CHANGED",
    TRANSACTION_DELETED = "TRANSACTION_DELETED",
    TRANSACTION_STATUS_CHANGED = "TRANSACTION_STATUS_CHANGED",
    SUBSCRIPTION_CREATED = "SUBSCRIPTION_CREATED",
    SUBSCRIPTION_UPDATED = "SUBSCRIPTION_UPDATED",
    SUBSCRIPTION_CANCELLED = "SUBSCRIPTION_CANCELLED",
    PAYIN_DESTINATION_ACCOUNT_CREATED = "PAYIN_DESTINATION_ACCOUNT_CREATED",
    PAYIN_DESTINATION_ACCOUNT_UPDATED = "PAYIN_DESTINATION_ACCOUNT_UPDATED",
    PAYIN_DESTINATION_ACCOUNT_DELETED = "PAYIN_DESTINATION_ACCOUNT_DELETED",
    PAYIN_DESTINATION_ACCOUNT_STATUS_CHANGED = "PAYIN_DESTINATION_ACCOUNT_STATUS_CHANGED",
    PAYMENT_PROCESSING_EXCEPTION = "PAYMENT_PROCESSING_EXCEPTION",
    REFUND_CREATED = "REFUND_CREATED",
    REFUND_CHANGED = "REFUND_CHANGED",
    REFUND_DELETED = "REFUND_DELETED",
    REFUND_STATUS_CHANGED = "REFUND_STATUS_CHANGED",
    PAYOUT_CREATED = "PAYOUT_CREATED",
    PAYOUT_CHANGED = "PAYOUT_CHANGED",
    PAYOUT_DELETED = "PAYOUT_DELETED",
    PAYOUT_STATUS_CHANGED = "PAYOUT_STATUS_CHANGED",
    USER_CREATED = "USER_CREATED",
    USER_CHANGED = "USER_CHANGED",
    USER_DELETED = "USER_DELETED",
    RULE_CREATED = "RULE_CREATED",
    RULE_UPDATED = "RULE_UPDATED",
    RULE_DELETED = "RULE_DELETED",
    RULE_TRIGGERED = "RULE_TRIGGERED",
    ADMIN_MESSAGE = "ADMIN_MESSAGE",
    USER_MESSAGE = "USER_MESSAGE"
}
export declare enum MerchantCallbackResult {
    PENDING = "PENDING",
    DELIVERED = "DELIVERED",
    FAILED = "FAILED",
    DISABLED = "DISABLED"
}
export declare enum MerchantMode {
    SIMPLE = "SIMPLE",
    MULTI_APP = "MULTI_APP",
    AGENCY = "AGENCY"
}
export declare enum MerchantCategory {
    STANDARD = "STANDARD",
    CRYPTO = "CRYPTO",
    GAMING = "GAMING",
    MARKETPLACE = "MARKETPLACE",
    PSP = "PSP"
}
export declare enum MerchantRiskLevel {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export declare enum MerchantOrigin {
    ORIGINAL = "ORIGINAL",
    MIGRATED = "MIGRATED",
    IMPORTED = "IMPORTED"
}
export declare enum MerchantStatus {
    LIVE = "LIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
export declare enum MerchantPartyType {
    INDIVIDUAL = "INDIVIDUAL",
    BUSINESS = "BUSINESS"
}
export declare enum MerchantApplicationStatus {
    ENABLED = "ENABLED",
    DISABLED = "DISABLED"
}
export declare enum UserType {
    INDIVIDUAL = "INDIVIDUAL",
    BUSINESS = "BUSINESS"
}
export declare enum UserIdDocType {
    PASSPORT = "PASSPORT",
    FOREIGN_PASSPORT = "FOREIGN_PASSPORT",
    ID_CARD = "ID_CARD",
    DRIVERS_LICENSE = "DRIVERS_LICENSE",
    RESIDENCE_PERMIT = "RESIDENCE_PERMIT",
    OTHER = "OTHER"
}
export declare enum UserMode {
    SIMPLE = "SIMPLE"
}
export declare enum UserCategory {
    STANDARD = "STANDARD"
}
export declare enum UserOrigin {
    ORIGINAL = "ORIGINAL"
}
export declare enum UserStatus {
    LIVE = "LIVE",
    SUSPENDED = "SUSPENDED",
    DELETED = "DELETED"
}
export declare enum RiskLevel {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    UNACCEPTABLE = "UNACCEPTABLE"
}
export declare enum ScreeningStatus {
    GREEN = "GREEN",
    YELLOW = "YELLOW",
    RED = "RED"
}
export declare enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
export declare enum RuleOperator {
    EQUAL = "EQUAL",
    NOT_EQUAL = "NOT_EQUAL",
    LESS_THAN = "LESS_THAN",
    LESS_THAN_INCLUSIVE = "LESS_THAN_INCLUSIVE",
    GREATER_THAN = "GREATER_THAN",
    GREATER_THAN_INCLUSIVE = "GREATER_THAN_INCLUSIVE",
    CONTAINS = "CONTAINS",
    DOES_NOT_CONTAIN = "DOES_NOT_CONTAIN",
    STARTS_WITH = "STARTS_WITH",
    ENDS_WITH = "ENDS_WITH",
    IN = "IN",
    NOT_IN = "NOT_IN"
}
export declare enum RuleOperatorCombiner {
    ANY = "ANY",
    ALL = "ALL"
}
export declare enum RuleConditionType {
    CURRENCY_ACCEPTED_ARRAY = "CURRENCY_ACCEPTED_ARRAY",
    CURRENCY_DENIED_ARRAY = "CURRENCY_DENIED_ARRAY",
    AMOUNT_MIN = "AMOUNT_MIN",
    AMOUNT_MAX = "AMOUNT_MAX",
    USER_COUNTRY_ACCEPTED_ARRAY = "USER_COUNTRY_ACCEPTED_ARRAY",
    USER_COUNTRY_DENIED_ARRAY = "USER_COUNTRY_DENIED_ARRAY",
    PAYMENT_SYSTEM_ACCEPTED_ARRAY = "PAYMENT_SYSTEM_ACCEPTED_ARRAY",
    PAYMENT_SYSTEM_DENIED_ARRAY = "PAYMENT_SYSTEM_DENIED_ARRAY",
    PAYMENT_METHOD_ACCEPTED_ARRAY = "PAYMENT_METHOD_ACCEPTED_ARRAY",
    PAYMENT_METHOD_DENIED_ARRAY = "PAYMENT_METHOD_DENIED_ARRAY",
    DAY_TIME_ACCEPTED = "DAY_TIME_ACCEPTED",
    DAY_TIME_DENIED = "DAY_TIME_DENIED",
    CUSTOM = "CUSTOM",
    CUSTOM_ARRAY = "CUSTOM_ARRAY"
}
export declare enum ActionType {
    SIGNUP = "SIGNUP",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    CREATE = "CREATE",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    CALLBACK = "CALLBACK"
}
export declare enum ActionObjectType {
    SYSTEM = "SYSTEM",
    TRANSACTION = "TRANSACTION",
    PAYMENT_ORDER = "PAYMENT_ORDER",
    MERCHANT = "MERCHANT",
    USER = "USER"
}
export declare enum NotificationLevel {
    REQUEST = "REQUEST",
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}
export declare enum LoginStatus {
    SUCCESS = "SUCCESS",
    FAILURE = "FAILURE"
}
export declare enum PaymentMethod {
    BANK_TRANSFER = "BANK_TRANSFER",
    OPEN_BANKING = "OPEN_BANKING",
    E_PAYMENT = "E_PAYMENT",
    CREDIT_CARD = "CREDIT_CARD"
}
export declare enum PayIdType {
    ABN = "ABN",
    ACN = "ACN",
    Email = "Email",
    PhoneNumber = "PhoneNumber",
    OrganisationId = "OrganisationId"
}
export declare enum PayinDestinationType {
    STANDARD = "STANDARD",
    SUBSCRIPTION = "SUBSCRIPTION",
    VIRTUAL = "VIRTUAL",
    VIRTUAL_POOL = "VIRTUAL_POOL"
}
export declare enum PayoutDestinationType {
    PERSONAL = "PERSONAL",
    CORPORATE = "CORPORATE"
}
export declare enum ApiKeyType {
    FULL_ACCESS = "FULL_ACCESS",
    PAYMENT_ONLY = "PAYMENT_ONLY"
}
export declare enum FinancialAccountNameType {
    ACCOUNT_NAME = "ACCOUNT_NAME",
    ACCOUNT_HOLDER_NAME = "ACCOUNT_HOLDER_NAME",
    USER_IDENTIFIER = "USER_IDENTIFIER",
    NPP_DESCRIPTION = "NPP_DESCRIPTION",
    PAY_ID_NAME = "PAY_ID_NAME"
}
export declare enum FinancialAccountIdType {
    IBAN = "IBAN",
    ACCOUNT_NUMBER = "ACCOUNT_NUMBER",
    PAY_ID = "PAY_ID",
    CUSTOMER_REFERENCE_NUMBER = "CUSTOMER_REFERENCE_NUMBER",
    NPP_IDENTIFIER = "NPP_IDENTIFIER",
    EMAIL = "EMAIL",
    CLABE = "CLABE",
    VIRTUAL_ACCOUNT_ID = "VIRTUAL_ACCOUNT_ID",
    ROLL_NUMBER = "ROLL_NUMBER"
}
export declare enum FinancialInstitutionCodeType {
    BIC = "BIC",
    SWIFT_CODE = "SWIFT_CODE",
    SORT_CODE = "SORT_CODE",
    BSB_NUMBER = "BSB_NUMBER",
    PAY_ID_TYPE = "PAY_ID_TYPE",
    BILLER_CODE = "BILLER_CODE",
    BANK_IDENTIFIER = "BANK_IDENTIFIER",
    ABA = "ABA",
    BLZ = "BLZ",
    IFS = "IFS",
    NCC = "NCC"
}
export declare enum PayinDestinationPoolStatus {
    UNASSIGNED = "UNASSIGNED",
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    DISABLED = "DISABLED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayinDestinationAccountPoolStatus {
    UNASSIGNED = "UNASSIGNED",
    PENDING = "PENDING",
    ASSIGNED = "ASSIGNED",
    DISABLED = "DISABLED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayinDestinationGroupStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayinDestinationStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayinDestinationAccountStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DECLINED = "DECLINED",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayoutDestinationGroupStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayoutDestinationStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED",
    UNVERIFIED = "UNVERIFIED"
}
export declare enum PayoutDestinationAccountStatus {
    PENDING = "PENDING",
    ACTIVE = "ACTIVE",
    DISABLED = "DISABLED",
    CLOSED = "CLOSED"
}
export declare enum RequiredUserField {
    FIRST_NAME = "FIRST_NAME",
    LAST_NAME = "LAST_NAME",
    EMAIL = "EMAIL",
    PHONE = "PHONE",
    COUNTRY = "COUNTRY",
    TOWN = "TOWN",
    STREET = "STREET",
    SUB_STREET = "SUB_STREET",
    STATE_NAME = "STATE_NAME",
    BUILDING_NAME = "BUILDING_NAME",
    BUILDING_NUMBER = "BUILDING_NUMBER",
    FLAT_NUMBER = "FLAT_NUMBER",
    POSTAL_CODE = "POSTAL_CODE",
    DATE_OF_BIRTH = "DATE_OF_BIRTH",
    ID_DOC_TYPE = "ID_DOC_TYPE",
    ID_DOC_NUMBER = "ID_DOC_NUMBER",
    ID_DOC_EXPIRY_DATE = "ID_DOC_EXPIRY_DATE",
    ID_DOC_ISSUED_BY = "ID_DOC_ISSUED_BY",
    ID_DOC_ISSUE_DATE = "ID_DOC_ISSUE_DATE",
    ID_DOC_COUNTRY = "ID_DOC_COUNTRY",
    ID_DOC_ADDRESS_LINE = "ID_DOC_ADDRESS_LINE",
    COMPANY_LEGAL_NAME = "COMPANY_LEGAL_NAME",
    COMPANY_REG_NUMBER = "COMPANY_REG_NUMBER",
    COMPANY_LEGAL_TYPE = "COMPANY_LEGAL_TYPE"
}
export declare enum TransactionPurpose {
    UNKNOWN = "UNKNOWN",
    CRYPTO_RELATED = "CRYPTO_RELATED",
    BILL = "BILL",
    GOODS = "GOODS",
    SERVICES = "SERVICES",
    PERSON_TO_PERSON = "PERSON_TO_PERSON",
    DONATION = "DONATION",
    TEST = "TEST",
    REFUND = "REFUND",
    OTHER = "OTHER"
}
export declare enum AutoFixWebhookStrategy {
    REPLACE_ALL = "REPLACE_ALL",
    UPDATE_URLS_AND_ACTIVATE = "UPDATE_URLS_AND_ACTIVATE",
    EXTEND_AND_ACTIVATE = "EXTEND_AND_ACTIVATE",
    PRUNE_BASE_AND_ACTIVATE = "PRUNE_BASE_AND_ACTIVATE"
}
export declare enum Environment {
    SANDBOX = "SANDBOX",
    PROD = "PROD"
}
export declare enum MerchantLicenseType {
    TRIAL = "TRIAL",
    SUBSCRIPTION = "SUBSCRIPTION",
    ENTERPRISE = "ENTERPRISE",
    OWNER = "OWNER"
}
export declare enum MerchantLicenseStatus {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    CANCELED = "CANCELED",
    SUSPENDED = "SUSPENDED"
}
export declare enum SubscriptionStatus {
    UNKNOWN = "UNKNOWN",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    CANCELED = "CANCELED",
    INCOMPLETE = "INCOMPLETE",
    INCOMPLETE_EXPIRED = "INCOMPLETE_EXPIRED",
    TRIALING = "TRIALING",
    PAST_DUE = "PAST_DUE",
    UNPAID = "UNPAID"
}
export declare enum SubscriptionInterval {
    DAY = "DAY",
    WEEK = "WEEK",
    MONTH = "MONTH",
    YEAR = "YEAR",
    CUSTOM = "CUSTOM"
}
export declare enum Metric {
    SUCCESSFUL_TX = "SUCCESSFUL_TX",
    API_CALL = "API_CALL",
    WEBHOOK_OUT = "WEBHOOK_OUT"
}
export declare enum PlanBillingModel {
    BASE_FEE_PLUS_USAGE = "BASE_FEE_PLUS_USAGE",
    USAGE_ONLY = "USAGE_ONLY",
    FLAT_SUBSCRIPTION = "FLAT_SUBSCRIPTION"
}
export declare enum AddonBillingModel {
    FLAT_MONTHLY = "FLAT_MONTHLY",
    PER_UNIT_MONTHLY = "PER_UNIT_MONTHLY",
    METERED = "METERED"
}
export declare enum OveragePolicy {
    BLOCK = "BLOCK",
    CHARGE = "CHARGE",
    WARN_ONLY = "WARN_ONLY"
}
export declare enum SupportTier {
    EMAIL_48H = "EMAIL_48H",
    EMAIL_24H = "EMAIL_24H",
    EMAIL_8H = "EMAIL_8H",
    SLA_CUSTOM = "SLA_CUSTOM"
}
export declare enum MerchantAddonStatus {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED",
    SUSPENDED = "SUSPENDED"
}
export declare enum MerchantAddressType {
    REGISTERED = "REGISTERED",
    BILLING = "BILLING",
    MAILING = "MAILING"
}
export declare enum MerchantProfileContactRole {
    FINANCE = "FINANCE",
    LEGAL = "LEGAL",
    TECH = "TECH",
    SUPPORT = "SUPPORT",
    SALES = "SALES",
    COMPLIANCE = "COMPLIANCE",
    SECURITY = "SECURITY",
    OWNER = "OWNER",
    OTHER = "OTHER"
}
export declare enum TaxIdType {
    EU_VAT = "EU_VAT",
    EORI = "EORI",
    US_EIN = "US_EIN",
    US_ITIN = "US_ITIN",
    CA_BN = "CA_BN",
    CA_GST_HST = "CA_GST_HST",
    CA_QST = "CA_QST",
    AU_ABN = "AU_ABN",
    AU_ACN = "AU_ACN",
    UK_VAT = "UK_VAT",
    COMPANY_REG_NO = "COMPANY_REG_NO",
    OTHER = "OTHER"
}
export declare enum TaxCalcMode {
    PLATFORM = "PLATFORM",
    EXTERNAL = "EXTERNAL",
    NONE = "NONE"
}
export declare enum InvoiceLanguage {
    EN = "EN",
    ES = "ES",
    FR = "FR",
    DE = "DE",
    PT = "PT",
    IT = "IT"
}
export declare enum InvoiceSource {
    INTERNAL = "INTERNAL",
    EXTERNAL = "EXTERNAL",
    MANUAL = "MANUAL"
}
export declare enum InvoiceStatus {
    DRAFT = "DRAFT",
    ISSUED = "ISSUED",
    PARTIALLY_PAID = "PARTIALLY_PAID",
    PAID = "PAID",
    VOID = "VOID",
    CANCELED = "CANCELED",
    OPEN = "OPEN"
}
export declare enum InvoiceType {
    INVOICE = "INVOICE",
    CREDIT_NOTE = "CREDIT_NOTE"
}
export declare enum MerchantInvoiceLineKind {
    BASE_FEE = "BASE_FEE",
    SUCCESSFUL_TX_OVERAGE = "SUCCESSFUL_TX_OVERAGE",
    API_CALLS_OVERAGE = "API_CALLS_OVERAGE",
    WEBHOOKS_OVERAGE = "WEBHOOKS_OVERAGE",
    ADDON = "ADDON",
    SETUP_FEE = "SETUP_FEE",
    ADJUSTMENT = "ADJUSTMENT",
    DISCOUNT = "DISCOUNT",
    TAX = "TAX",
    REFUND = "REFUND",
    CHARGEBACK_FEE = "CHARGEBACK_FEE",
    OTHER = "OTHER"
}
export declare enum MerchantApplicationDomainPurpose {
    DASHBOARD = "DASHBOARD",
    CHECKOUT = "CHECKOUT",
    WEBHOOK = "WEBHOOK",
    ANY = "ANY"
}
export declare enum LicensePeriodStatus {
    OPEN = "OPEN",
    INVOICED = "INVOICED",
    DUE = "DUE",
    PAID = "PAID",
    OVERDUE = "OVERDUE",
    CANCELED = "CANCELED"
}
export declare enum LicensePeriodReason {
    SANDBOX = "SANDBOX",
    TRIAL = "TRIAL",
    RENEWAL = "RENEWAL",
    UPGRADE = "UPGRADE",
    DOWNGRADE = "DOWNGRADE",
    PLAN_CHANGE = "PLAN_CHANGE",
    MANUAL_ADJUSTMENT = "MANUAL_ADJUSTMENT"
}
export declare enum LicenseBillingStatus {
    OK = "OK",
    DUE_SOON = "DUE_SOON",
    DUE = "DUE",
    OVERDUE = "OVERDUE"
}
export declare enum SentEmailStatus {
    QUEUED = "QUEUED",
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    OPENED = "OPENED",
    CLICKED = "CLICKED",
    BOUNCED = "BOUNCED",
    FAILED = "FAILED"
}
export declare enum EmailCorrelationType {
    TRANSACTION = "TRANSACTION",
    USER = "USER",
    MERCHANT = "MERCHANT",
    KYC = "KYC",
    LICENSE = "LICENSE",
    SYSTEM = "SYSTEM",
    OTHER = "OTHER"
}
export declare enum EmailType {
    EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION",
    EMAIL_CHANGE_CONFIRMATION = "EMAIL_CHANGE_CONFIRMATION",
    DEVICE_CONFIRMATION = "DEVICE_CONFIRMATION",
    PASSWORD_RESET = "PASSWORD_RESET",
    PASSWORD_CHANGED = "PASSWORD_CHANGED",
    TWO_FACTOR_CODE = "TWO_FACTOR_CODE",
    SUSPICIOUS_LOGIN = "SUSPICIOUS_LOGIN",
    TRANSACTION_INFO = "TRANSACTION_INFO",
    PAYMENT_RECEIPT = "PAYMENT_RECEIPT",
    PAYMENT_FAILED = "PAYMENT_FAILED",
    PAYOUT_PROCESSED = "PAYOUT_PROCESSED",
    REFUND_ISSUED = "REFUND_ISSUED",
    USER_INFO = "USER_INFO",
    KYC_REQUEST = "KYC_REQUEST",
    KYC_APPROVED = "KYC_APPROVED",
    KYC_DECLINED = "KYC_DECLINED",
    LICENSE_INVOICE = "LICENSE_INVOICE",
    LICENSE_EXPIRY_WARNING = "LICENSE_EXPIRY_WARNING",
    SUBSCRIPTION_STARTED = "SUBSCRIPTION_STARTED",
    SUBSCRIPTION_RENEWAL = "SUBSCRIPTION_RENEWAL",
    SUBSCRIPTION_CANCELED = "SUBSCRIPTION_CANCELED",
    PLAN_CHANGED = "PLAN_CHANGED",
    WELCOME = "WELCOME",
    ACCOUNT_DELETED = "ACCOUNT_DELETED",
    PROFILE_UPDATED = "PROFILE_UPDATED",
    SYSTEM_ALERT = "SYSTEM_ALERT",
    MAINTENANCE_NOTICE = "MAINTENANCE_NOTICE",
    SYSTEM_OUTAGE = "SYSTEM_OUTAGE",
    DAILY_REPORT = "DAILY_REPORT",
    OTHER = "OTHER"
}
export declare enum ConfigValueType {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOLEAN = "BOOLEAN",
    JSON = "JSON",
    ARRAY_STRING = "ARRAY_STRING",
    ARRAY_NUMBER = "ARRAY_NUMBER"
}
