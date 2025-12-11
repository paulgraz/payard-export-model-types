export var ApiMethod;
(function (ApiMethod) {
    ApiMethod["GET"] = "GET";
    ApiMethod["POST"] = "POST";
    ApiMethod["PUT"] = "PUT";
    ApiMethod["DELETE"] = "DELETE";
    ApiMethod["PATCH"] = "PATCH";
    ApiMethod["HEAD"] = "HEAD";
    ApiMethod["OPTIONS"] = "OPTIONS";
})(ApiMethod || (ApiMethod = {}));
export var ApiCallType;
(function (ApiCallType) {
    ApiCallType["PROVIDER_REQUEST"] = "PROVIDER_REQUEST";
    ApiCallType["PROVIDER_CALLBACK"] = "PROVIDER_CALLBACK";
    ApiCallType["MERCHANT_CALLBACK"] = "MERCHANT_CALLBACK";
    ApiCallType["INTERNAL_SERVICE"] = "INTERNAL_SERVICE";
    ApiCallType["OTHER"] = "OTHER";
})(ApiCallType || (ApiCallType = {}));
export var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["RECURRING_PAYMENT"] = "RECURRING_PAYMENT";
})(TransactionType || (TransactionType = {}));
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["UNKNOWN"] = "UNKNOWN";
    TransactionStatus["INITIATED"] = "INITIATED";
    TransactionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TransactionStatus["ON_HOLD"] = "ON_HOLD";
    TransactionStatus["COMPLETED"] = "COMPLETED";
    TransactionStatus["CANCELED"] = "CANCELED";
    TransactionStatus["DECLINED"] = "DECLINED";
    TransactionStatus["BLOCKED"] = "BLOCKED";
    TransactionStatus["FAILED"] = "FAILED";
    TransactionStatus["EXPIRED"] = "EXPIRED";
})(TransactionStatus || (TransactionStatus = {}));
export var TransactionStage;
(function (TransactionStage) {
    TransactionStage["VERIFICATION"] = "VERIFICATION";
    TransactionStage["PENDING"] = "PENDING";
    TransactionStage["PREAUTH"] = "PREAUTH";
    TransactionStage["CAPTURE"] = "CAPTURE";
    TransactionStage["WRAP_UP"] = "WRAP_UP";
})(TransactionStage || (TransactionStage = {}));
export var PaymentOrderType;
(function (PaymentOrderType) {
    PaymentOrderType["PAYIN"] = "PAYIN";
    PaymentOrderType["PAYOUT"] = "PAYOUT";
    PaymentOrderType["REFUND"] = "REFUND";
    PaymentOrderType["CHARGEBACK"] = "CHARGEBACK";
})(PaymentOrderType || (PaymentOrderType = {}));
export var PaymentOperationType;
(function (PaymentOperationType) {
    PaymentOperationType["AUTH"] = "AUTH";
    PaymentOperationType["PREAUTH"] = "PREAUTH";
    PaymentOperationType["CAPTURE"] = "CAPTURE";
    PaymentOperationType["REFUND"] = "REFUND";
    PaymentOperationType["CHARGEBACK"] = "CHARGEBACK";
    PaymentOperationType["NOTIFY"] = "NOTIFY";
})(PaymentOperationType || (PaymentOperationType = {}));
export var PaymentVerificationStatus;
(function (PaymentVerificationStatus) {
    PaymentVerificationStatus["UNKNOWN"] = "UNKNOWN";
    PaymentVerificationStatus["SUCCESS"] = "SUCCESS";
    PaymentVerificationStatus["WARNINGS"] = "WARNINGS";
    PaymentVerificationStatus["ERRORS"] = "ERRORS";
})(PaymentVerificationStatus || (PaymentVerificationStatus = {}));
export var MerchantType;
(function (MerchantType) {
    MerchantType["OWNER"] = "OWNER";
    MerchantType["MERCHANT"] = "MERCHANT";
})(MerchantType || (MerchantType = {}));
export var MerchantApplicationType;
(function (MerchantApplicationType) {
    MerchantApplicationType["STANDARD"] = "STANDARD";
})(MerchantApplicationType || (MerchantApplicationType = {}));
export var ResponseType;
(function (ResponseType) {
    ResponseType["arraybuffer"] = "arraybuffer";
    ResponseType["blob"] = "blob";
    ResponseType["document"] = "document";
    ResponseType["json"] = "json";
    ResponseType["text"] = "text";
    ResponseType["stream"] = "stream";
})(ResponseType || (ResponseType = {}));
export var MerchantCallbackType;
(function (MerchantCallbackType) {
    MerchantCallbackType["TRANSACTION_CREATED"] = "TRANSACTION_CREATED";
    MerchantCallbackType["TRANSACTION_CHANGED"] = "TRANSACTION_CHANGED";
    MerchantCallbackType["TRANSACTION_DELETED"] = "TRANSACTION_DELETED";
    MerchantCallbackType["TRANSACTION_STATUS_CHANGED"] = "TRANSACTION_STATUS_CHANGED";
    MerchantCallbackType["SUBSCRIPTION_CREATED"] = "SUBSCRIPTION_CREATED";
    MerchantCallbackType["SUBSCRIPTION_UPDATED"] = "SUBSCRIPTION_UPDATED";
    MerchantCallbackType["SUBSCRIPTION_CANCELLED"] = "SUBSCRIPTION_CANCELLED";
    MerchantCallbackType["PAYIN_DESTINATION_ACCOUNT_CREATED"] = "PAYIN_DESTINATION_ACCOUNT_CREATED";
    MerchantCallbackType["PAYIN_DESTINATION_ACCOUNT_UPDATED"] = "PAYIN_DESTINATION_ACCOUNT_UPDATED";
    MerchantCallbackType["PAYIN_DESTINATION_ACCOUNT_DELETED"] = "PAYIN_DESTINATION_ACCOUNT_DELETED";
    MerchantCallbackType["PAYIN_DESTINATION_ACCOUNT_STATUS_CHANGED"] = "PAYIN_DESTINATION_ACCOUNT_STATUS_CHANGED";
    MerchantCallbackType["PAYMENT_PROCESSING_EXCEPTION"] = "PAYMENT_PROCESSING_EXCEPTION";
    MerchantCallbackType["REFUND_CREATED"] = "REFUND_CREATED";
    MerchantCallbackType["REFUND_CHANGED"] = "REFUND_CHANGED";
    MerchantCallbackType["REFUND_DELETED"] = "REFUND_DELETED";
    MerchantCallbackType["REFUND_STATUS_CHANGED"] = "REFUND_STATUS_CHANGED";
    MerchantCallbackType["PAYOUT_CREATED"] = "PAYOUT_CREATED";
    MerchantCallbackType["PAYOUT_CHANGED"] = "PAYOUT_CHANGED";
    MerchantCallbackType["PAYOUT_DELETED"] = "PAYOUT_DELETED";
    MerchantCallbackType["PAYOUT_STATUS_CHANGED"] = "PAYOUT_STATUS_CHANGED";
    MerchantCallbackType["USER_CREATED"] = "USER_CREATED";
    MerchantCallbackType["USER_CHANGED"] = "USER_CHANGED";
    MerchantCallbackType["USER_DELETED"] = "USER_DELETED";
    MerchantCallbackType["RULE_CREATED"] = "RULE_CREATED";
    MerchantCallbackType["RULE_UPDATED"] = "RULE_UPDATED";
    MerchantCallbackType["RULE_DELETED"] = "RULE_DELETED";
    MerchantCallbackType["RULE_TRIGGERED"] = "RULE_TRIGGERED";
    MerchantCallbackType["ADMIN_MESSAGE"] = "ADMIN_MESSAGE";
    MerchantCallbackType["USER_MESSAGE"] = "USER_MESSAGE";
})(MerchantCallbackType || (MerchantCallbackType = {}));
export var MerchantCallbackResult;
(function (MerchantCallbackResult) {
    MerchantCallbackResult["PENDING"] = "PENDING";
    MerchantCallbackResult["DELIVERED"] = "DELIVERED";
    MerchantCallbackResult["FAILED"] = "FAILED";
    MerchantCallbackResult["DISABLED"] = "DISABLED";
})(MerchantCallbackResult || (MerchantCallbackResult = {}));
export var MerchantMode;
(function (MerchantMode) {
    MerchantMode["SIMPLE"] = "SIMPLE";
    MerchantMode["MULTI_APP"] = "MULTI_APP";
    MerchantMode["AGENCY"] = "AGENCY";
})(MerchantMode || (MerchantMode = {}));
export var MerchantCategory;
(function (MerchantCategory) {
    MerchantCategory["STANDARD"] = "STANDARD";
    MerchantCategory["CRYPTO"] = "CRYPTO";
    MerchantCategory["GAMING"] = "GAMING";
    MerchantCategory["MARKETPLACE"] = "MARKETPLACE";
    MerchantCategory["PSP"] = "PSP";
})(MerchantCategory || (MerchantCategory = {}));
export var MerchantRiskLevel;
(function (MerchantRiskLevel) {
    MerchantRiskLevel["LOW"] = "LOW";
    MerchantRiskLevel["MEDIUM"] = "MEDIUM";
    MerchantRiskLevel["HIGH"] = "HIGH";
})(MerchantRiskLevel || (MerchantRiskLevel = {}));
export var MerchantOrigin;
(function (MerchantOrigin) {
    MerchantOrigin["ORIGINAL"] = "ORIGINAL";
    MerchantOrigin["MIGRATED"] = "MIGRATED";
    MerchantOrigin["IMPORTED"] = "IMPORTED";
})(MerchantOrigin || (MerchantOrigin = {}));
export var MerchantStatus;
(function (MerchantStatus) {
    MerchantStatus["LIVE"] = "LIVE";
    MerchantStatus["SUSPENDED"] = "SUSPENDED";
    MerchantStatus["DELETED"] = "DELETED";
})(MerchantStatus || (MerchantStatus = {}));
export var MerchantPartyType;
(function (MerchantPartyType) {
    MerchantPartyType["INDIVIDUAL"] = "INDIVIDUAL";
    MerchantPartyType["BUSINESS"] = "BUSINESS";
})(MerchantPartyType || (MerchantPartyType = {}));
export var MerchantApplicationStatus;
(function (MerchantApplicationStatus) {
    MerchantApplicationStatus["ENABLED"] = "ENABLED";
    MerchantApplicationStatus["DISABLED"] = "DISABLED";
})(MerchantApplicationStatus || (MerchantApplicationStatus = {}));
export var UserType;
(function (UserType) {
    UserType["INDIVIDUAL"] = "INDIVIDUAL";
    UserType["BUSINESS"] = "BUSINESS";
})(UserType || (UserType = {}));
export var UserIdDocType;
(function (UserIdDocType) {
    UserIdDocType["PASSPORT"] = "PASSPORT";
    UserIdDocType["FOREIGN_PASSPORT"] = "FOREIGN_PASSPORT";
    UserIdDocType["ID_CARD"] = "ID_CARD";
    UserIdDocType["DRIVERS_LICENSE"] = "DRIVERS_LICENSE";
    UserIdDocType["RESIDENCE_PERMIT"] = "RESIDENCE_PERMIT";
    UserIdDocType["OTHER"] = "OTHER";
})(UserIdDocType || (UserIdDocType = {}));
export var UserMode;
(function (UserMode) {
    UserMode["SIMPLE"] = "SIMPLE";
})(UserMode || (UserMode = {}));
export var UserCategory;
(function (UserCategory) {
    UserCategory["STANDARD"] = "STANDARD";
})(UserCategory || (UserCategory = {}));
export var UserOrigin;
(function (UserOrigin) {
    UserOrigin["ORIGINAL"] = "ORIGINAL";
})(UserOrigin || (UserOrigin = {}));
export var UserStatus;
(function (UserStatus) {
    UserStatus["LIVE"] = "LIVE";
    UserStatus["SUSPENDED"] = "SUSPENDED";
    UserStatus["DELETED"] = "DELETED";
})(UserStatus || (UserStatus = {}));
export var RiskLevel;
(function (RiskLevel) {
    RiskLevel["LOW"] = "LOW";
    RiskLevel["MEDIUM"] = "MEDIUM";
    RiskLevel["HIGH"] = "HIGH";
    RiskLevel["UNACCEPTABLE"] = "UNACCEPTABLE";
})(RiskLevel || (RiskLevel = {}));
export var ScreeningStatus;
(function (ScreeningStatus) {
    ScreeningStatus["GREEN"] = "GREEN";
    ScreeningStatus["YELLOW"] = "YELLOW";
    ScreeningStatus["RED"] = "RED";
})(ScreeningStatus || (ScreeningStatus = {}));
export var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (Gender = {}));
export var RuleOperator;
(function (RuleOperator) {
    RuleOperator["EQUAL"] = "EQUAL";
    RuleOperator["NOT_EQUAL"] = "NOT_EQUAL";
    RuleOperator["LESS_THAN"] = "LESS_THAN";
    RuleOperator["LESS_THAN_INCLUSIVE"] = "LESS_THAN_INCLUSIVE";
    RuleOperator["GREATER_THAN"] = "GREATER_THAN";
    RuleOperator["GREATER_THAN_INCLUSIVE"] = "GREATER_THAN_INCLUSIVE";
    RuleOperator["CONTAINS"] = "CONTAINS";
    RuleOperator["DOES_NOT_CONTAIN"] = "DOES_NOT_CONTAIN";
    RuleOperator["STARTS_WITH"] = "STARTS_WITH";
    RuleOperator["ENDS_WITH"] = "ENDS_WITH";
    RuleOperator["IN"] = "IN";
    RuleOperator["NOT_IN"] = "NOT_IN";
})(RuleOperator || (RuleOperator = {}));
export var RuleOperatorCombiner;
(function (RuleOperatorCombiner) {
    RuleOperatorCombiner["ANY"] = "ANY";
    RuleOperatorCombiner["ALL"] = "ALL";
})(RuleOperatorCombiner || (RuleOperatorCombiner = {}));
export var RuleConditionType;
(function (RuleConditionType) {
    RuleConditionType["CURRENCY_ACCEPTED_ARRAY"] = "CURRENCY_ACCEPTED_ARRAY";
    RuleConditionType["CURRENCY_DENIED_ARRAY"] = "CURRENCY_DENIED_ARRAY";
    RuleConditionType["AMOUNT_MIN"] = "AMOUNT_MIN";
    RuleConditionType["AMOUNT_MAX"] = "AMOUNT_MAX";
    RuleConditionType["USER_COUNTRY_ACCEPTED_ARRAY"] = "USER_COUNTRY_ACCEPTED_ARRAY";
    RuleConditionType["USER_COUNTRY_DENIED_ARRAY"] = "USER_COUNTRY_DENIED_ARRAY";
    RuleConditionType["PAYMENT_SYSTEM_ACCEPTED_ARRAY"] = "PAYMENT_SYSTEM_ACCEPTED_ARRAY";
    RuleConditionType["PAYMENT_SYSTEM_DENIED_ARRAY"] = "PAYMENT_SYSTEM_DENIED_ARRAY";
    RuleConditionType["PAYMENT_METHOD_ACCEPTED_ARRAY"] = "PAYMENT_METHOD_ACCEPTED_ARRAY";
    RuleConditionType["PAYMENT_METHOD_DENIED_ARRAY"] = "PAYMENT_METHOD_DENIED_ARRAY";
    RuleConditionType["DAY_TIME_ACCEPTED"] = "DAY_TIME_ACCEPTED";
    RuleConditionType["DAY_TIME_DENIED"] = "DAY_TIME_DENIED";
    RuleConditionType["CUSTOM"] = "CUSTOM";
    RuleConditionType["CUSTOM_ARRAY"] = "CUSTOM_ARRAY";
})(RuleConditionType || (RuleConditionType = {}));
export var ActionType;
(function (ActionType) {
    ActionType["SIGNUP"] = "SIGNUP";
    ActionType["LOGIN"] = "LOGIN";
    ActionType["LOGOUT"] = "LOGOUT";
    ActionType["CREATE"] = "CREATE";
    ActionType["UPDATE"] = "UPDATE";
    ActionType["DELETE"] = "DELETE";
    ActionType["CALLBACK"] = "CALLBACK";
})(ActionType || (ActionType = {}));
export var ActionObjectType;
(function (ActionObjectType) {
    ActionObjectType["SYSTEM"] = "SYSTEM";
    ActionObjectType["TRANSACTION"] = "TRANSACTION";
    ActionObjectType["PAYMENT_ORDER"] = "PAYMENT_ORDER";
    ActionObjectType["MERCHANT"] = "MERCHANT";
    ActionObjectType["USER"] = "USER";
})(ActionObjectType || (ActionObjectType = {}));
export var NotificationLevel;
(function (NotificationLevel) {
    NotificationLevel["REQUEST"] = "REQUEST";
    NotificationLevel["DEBUG"] = "DEBUG";
    NotificationLevel["INFO"] = "INFO";
    NotificationLevel["WARNING"] = "WARNING";
    NotificationLevel["ERROR"] = "ERROR";
})(NotificationLevel || (NotificationLevel = {}));
export var LoginStatus;
(function (LoginStatus) {
    LoginStatus["SUCCESS"] = "SUCCESS";
    LoginStatus["FAILURE"] = "FAILURE";
})(LoginStatus || (LoginStatus = {}));
export var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethod["OPEN_BANKING"] = "OPEN_BANKING";
    PaymentMethod["E_PAYMENT"] = "E_PAYMENT";
    PaymentMethod["CREDIT_CARD"] = "CREDIT_CARD";
})(PaymentMethod || (PaymentMethod = {}));
export var PayIdType;
(function (PayIdType) {
    PayIdType["ABN"] = "ABN";
    PayIdType["ACN"] = "ACN";
    PayIdType["Email"] = "Email";
    PayIdType["PhoneNumber"] = "PhoneNumber";
    PayIdType["OrganisationId"] = "OrganisationId";
})(PayIdType || (PayIdType = {}));
export var PayinDestinationType;
(function (PayinDestinationType) {
    PayinDestinationType["STANDARD"] = "STANDARD";
    PayinDestinationType["SUBSCRIPTION"] = "SUBSCRIPTION";
    PayinDestinationType["VIRTUAL"] = "VIRTUAL";
    PayinDestinationType["VIRTUAL_POOL"] = "VIRTUAL_POOL";
})(PayinDestinationType || (PayinDestinationType = {}));
export var PayoutDestinationType;
(function (PayoutDestinationType) {
    PayoutDestinationType["PERSONAL"] = "PERSONAL";
    PayoutDestinationType["CORPORATE"] = "CORPORATE";
})(PayoutDestinationType || (PayoutDestinationType = {}));
export var ApiKeyType;
(function (ApiKeyType) {
    ApiKeyType["FULL_ACCESS"] = "FULL_ACCESS";
    ApiKeyType["PAYMENT_ONLY"] = "PAYMENT_ONLY";
})(ApiKeyType || (ApiKeyType = {}));
export var FinancialAccountNameType;
(function (FinancialAccountNameType) {
    FinancialAccountNameType["ACCOUNT_NAME"] = "ACCOUNT_NAME";
    FinancialAccountNameType["ACCOUNT_HOLDER_NAME"] = "ACCOUNT_HOLDER_NAME";
    FinancialAccountNameType["USER_IDENTIFIER"] = "USER_IDENTIFIER";
    FinancialAccountNameType["NPP_DESCRIPTION"] = "NPP_DESCRIPTION";
    FinancialAccountNameType["PAY_ID_NAME"] = "PAY_ID_NAME";
})(FinancialAccountNameType || (FinancialAccountNameType = {}));
export var FinancialAccountIdType;
(function (FinancialAccountIdType) {
    FinancialAccountIdType["IBAN"] = "IBAN";
    FinancialAccountIdType["ACCOUNT_NUMBER"] = "ACCOUNT_NUMBER";
    FinancialAccountIdType["PAY_ID"] = "PAY_ID";
    FinancialAccountIdType["CUSTOMER_REFERENCE_NUMBER"] = "CUSTOMER_REFERENCE_NUMBER";
    FinancialAccountIdType["NPP_IDENTIFIER"] = "NPP_IDENTIFIER";
    FinancialAccountIdType["EMAIL"] = "EMAIL";
    FinancialAccountIdType["CLABE"] = "CLABE";
    FinancialAccountIdType["VIRTUAL_ACCOUNT_ID"] = "VIRTUAL_ACCOUNT_ID";
    FinancialAccountIdType["ROLL_NUMBER"] = "ROLL_NUMBER";
})(FinancialAccountIdType || (FinancialAccountIdType = {}));
export var FinancialInstitutionCodeType;
(function (FinancialInstitutionCodeType) {
    FinancialInstitutionCodeType["BIC"] = "BIC";
    FinancialInstitutionCodeType["SWIFT_CODE"] = "SWIFT_CODE";
    FinancialInstitutionCodeType["SORT_CODE"] = "SORT_CODE";
    FinancialInstitutionCodeType["BSB_NUMBER"] = "BSB_NUMBER";
    FinancialInstitutionCodeType["PAY_ID_TYPE"] = "PAY_ID_TYPE";
    FinancialInstitutionCodeType["BILLER_CODE"] = "BILLER_CODE";
    FinancialInstitutionCodeType["BANK_IDENTIFIER"] = "BANK_IDENTIFIER";
    FinancialInstitutionCodeType["ABA"] = "ABA";
    FinancialInstitutionCodeType["BLZ"] = "BLZ";
    FinancialInstitutionCodeType["IFS"] = "IFS";
    FinancialInstitutionCodeType["NCC"] = "NCC";
})(FinancialInstitutionCodeType || (FinancialInstitutionCodeType = {}));
export var PayinDestinationPoolStatus;
(function (PayinDestinationPoolStatus) {
    PayinDestinationPoolStatus["UNASSIGNED"] = "UNASSIGNED";
    PayinDestinationPoolStatus["PENDING"] = "PENDING";
    PayinDestinationPoolStatus["ASSIGNED"] = "ASSIGNED";
    PayinDestinationPoolStatus["DISABLED"] = "DISABLED";
    PayinDestinationPoolStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationPoolStatus || (PayinDestinationPoolStatus = {}));
export var PayinDestinationAccountPoolStatus;
(function (PayinDestinationAccountPoolStatus) {
    PayinDestinationAccountPoolStatus["UNASSIGNED"] = "UNASSIGNED";
    PayinDestinationAccountPoolStatus["PENDING"] = "PENDING";
    PayinDestinationAccountPoolStatus["ASSIGNED"] = "ASSIGNED";
    PayinDestinationAccountPoolStatus["DISABLED"] = "DISABLED";
    PayinDestinationAccountPoolStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationAccountPoolStatus || (PayinDestinationAccountPoolStatus = {}));
export var PayinDestinationGroupStatus;
(function (PayinDestinationGroupStatus) {
    PayinDestinationGroupStatus["PENDING"] = "PENDING";
    PayinDestinationGroupStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationGroupStatus["DISABLED"] = "DISABLED";
    PayinDestinationGroupStatus["CLOSED"] = "CLOSED";
    PayinDestinationGroupStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationGroupStatus || (PayinDestinationGroupStatus = {}));
export var PayinDestinationStatus;
(function (PayinDestinationStatus) {
    PayinDestinationStatus["PENDING"] = "PENDING";
    PayinDestinationStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationStatus["DISABLED"] = "DISABLED";
    PayinDestinationStatus["CLOSED"] = "CLOSED";
    PayinDestinationStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationStatus || (PayinDestinationStatus = {}));
export var PayinDestinationAccountStatus;
(function (PayinDestinationAccountStatus) {
    PayinDestinationAccountStatus["PENDING"] = "PENDING";
    PayinDestinationAccountStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationAccountStatus["DECLINED"] = "DECLINED";
    PayinDestinationAccountStatus["DISABLED"] = "DISABLED";
    PayinDestinationAccountStatus["CLOSED"] = "CLOSED";
    PayinDestinationAccountStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationAccountStatus || (PayinDestinationAccountStatus = {}));
export var PayoutDestinationGroupStatus;
(function (PayoutDestinationGroupStatus) {
    PayoutDestinationGroupStatus["PENDING"] = "PENDING";
    PayoutDestinationGroupStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationGroupStatus["DISABLED"] = "DISABLED";
    PayoutDestinationGroupStatus["CLOSED"] = "CLOSED";
    PayoutDestinationGroupStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayoutDestinationGroupStatus || (PayoutDestinationGroupStatus = {}));
export var PayoutDestinationStatus;
(function (PayoutDestinationStatus) {
    PayoutDestinationStatus["PENDING"] = "PENDING";
    PayoutDestinationStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationStatus["DISABLED"] = "DISABLED";
    PayoutDestinationStatus["CLOSED"] = "CLOSED";
    PayoutDestinationStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayoutDestinationStatus || (PayoutDestinationStatus = {}));
export var PayoutDestinationAccountStatus;
(function (PayoutDestinationAccountStatus) {
    PayoutDestinationAccountStatus["PENDING"] = "PENDING";
    PayoutDestinationAccountStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationAccountStatus["DISABLED"] = "DISABLED";
    PayoutDestinationAccountStatus["CLOSED"] = "CLOSED";
})(PayoutDestinationAccountStatus || (PayoutDestinationAccountStatus = {}));
export var RequiredUserField;
(function (RequiredUserField) {
    RequiredUserField["FIRST_NAME"] = "FIRST_NAME";
    RequiredUserField["LAST_NAME"] = "LAST_NAME";
    RequiredUserField["EMAIL"] = "EMAIL";
    RequiredUserField["PHONE"] = "PHONE";
    RequiredUserField["COUNTRY"] = "COUNTRY";
    RequiredUserField["TOWN"] = "TOWN";
    RequiredUserField["STREET"] = "STREET";
    RequiredUserField["SUB_STREET"] = "SUB_STREET";
    RequiredUserField["STATE_NAME"] = "STATE_NAME";
    RequiredUserField["BUILDING_NAME"] = "BUILDING_NAME";
    RequiredUserField["BUILDING_NUMBER"] = "BUILDING_NUMBER";
    RequiredUserField["FLAT_NUMBER"] = "FLAT_NUMBER";
    RequiredUserField["POSTAL_CODE"] = "POSTAL_CODE";
    RequiredUserField["DATE_OF_BIRTH"] = "DATE_OF_BIRTH";
    RequiredUserField["ID_DOC_TYPE"] = "ID_DOC_TYPE";
    RequiredUserField["ID_DOC_NUMBER"] = "ID_DOC_NUMBER";
    RequiredUserField["ID_DOC_EXPIRY_DATE"] = "ID_DOC_EXPIRY_DATE";
    RequiredUserField["ID_DOC_ISSUED_BY"] = "ID_DOC_ISSUED_BY";
    RequiredUserField["ID_DOC_ISSUE_DATE"] = "ID_DOC_ISSUE_DATE";
    RequiredUserField["ID_DOC_COUNTRY"] = "ID_DOC_COUNTRY";
    RequiredUserField["ID_DOC_ADDRESS_LINE"] = "ID_DOC_ADDRESS_LINE";
    RequiredUserField["COMPANY_LEGAL_NAME"] = "COMPANY_LEGAL_NAME";
    RequiredUserField["COMPANY_REG_NUMBER"] = "COMPANY_REG_NUMBER";
    RequiredUserField["COMPANY_LEGAL_TYPE"] = "COMPANY_LEGAL_TYPE";
})(RequiredUserField || (RequiredUserField = {}));
export var TransactionPurpose;
(function (TransactionPurpose) {
    TransactionPurpose["UNKNOWN"] = "UNKNOWN";
    TransactionPurpose["CRYPTO_RELATED"] = "CRYPTO_RELATED";
    TransactionPurpose["BILL"] = "BILL";
    TransactionPurpose["GOODS"] = "GOODS";
    TransactionPurpose["SERVICES"] = "SERVICES";
    TransactionPurpose["PERSON_TO_PERSON"] = "PERSON_TO_PERSON";
    TransactionPurpose["DONATION"] = "DONATION";
    TransactionPurpose["TEST"] = "TEST";
    TransactionPurpose["REFUND"] = "REFUND";
    TransactionPurpose["OTHER"] = "OTHER";
})(TransactionPurpose || (TransactionPurpose = {}));
export var AutoFixWebhookStrategy;
(function (AutoFixWebhookStrategy) {
    AutoFixWebhookStrategy["REPLACE_ALL"] = "REPLACE_ALL";
    AutoFixWebhookStrategy["UPDATE_URLS_AND_ACTIVATE"] = "UPDATE_URLS_AND_ACTIVATE";
    AutoFixWebhookStrategy["EXTEND_AND_ACTIVATE"] = "EXTEND_AND_ACTIVATE";
    AutoFixWebhookStrategy["PRUNE_BASE_AND_ACTIVATE"] = "PRUNE_BASE_AND_ACTIVATE";
})(AutoFixWebhookStrategy || (AutoFixWebhookStrategy = {}));
export var Environment;
(function (Environment) {
    Environment["SANDBOX"] = "SANDBOX";
    Environment["PROD"] = "PROD";
})(Environment || (Environment = {}));
export var MerchantLicenseType;
(function (MerchantLicenseType) {
    MerchantLicenseType["TRIAL"] = "TRIAL";
    MerchantLicenseType["SUBSCRIPTION"] = "SUBSCRIPTION";
    MerchantLicenseType["ENTERPRISE"] = "ENTERPRISE";
    MerchantLicenseType["OWNER"] = "OWNER";
})(MerchantLicenseType || (MerchantLicenseType = {}));
export var MerchantLicenseStatus;
(function (MerchantLicenseStatus) {
    MerchantLicenseStatus["ACTIVE"] = "ACTIVE";
    MerchantLicenseStatus["EXPIRED"] = "EXPIRED";
    MerchantLicenseStatus["CANCELED"] = "CANCELED";
    MerchantLicenseStatus["SUSPENDED"] = "SUSPENDED";
})(MerchantLicenseStatus || (MerchantLicenseStatus = {}));
export var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["UNKNOWN"] = "UNKNOWN";
    SubscriptionStatus["ACTIVE"] = "ACTIVE";
    SubscriptionStatus["PAUSED"] = "PAUSED";
    SubscriptionStatus["CANCELED"] = "CANCELED";
    SubscriptionStatus["INCOMPLETE"] = "INCOMPLETE";
    SubscriptionStatus["INCOMPLETE_EXPIRED"] = "INCOMPLETE_EXPIRED";
    SubscriptionStatus["TRIALING"] = "TRIALING";
    SubscriptionStatus["PAST_DUE"] = "PAST_DUE";
    SubscriptionStatus["UNPAID"] = "UNPAID";
})(SubscriptionStatus || (SubscriptionStatus = {}));
export var SubscriptionInterval;
(function (SubscriptionInterval) {
    SubscriptionInterval["DAY"] = "DAY";
    SubscriptionInterval["WEEK"] = "WEEK";
    SubscriptionInterval["MONTH"] = "MONTH";
    SubscriptionInterval["YEAR"] = "YEAR";
    SubscriptionInterval["CUSTOM"] = "CUSTOM";
})(SubscriptionInterval || (SubscriptionInterval = {}));
export var Metric;
(function (Metric) {
    Metric["SUCCESSFUL_TX"] = "SUCCESSFUL_TX";
    Metric["API_CALL"] = "API_CALL";
    Metric["WEBHOOK_OUT"] = "WEBHOOK_OUT";
})(Metric || (Metric = {}));
export var PlanBillingModel;
(function (PlanBillingModel) {
    PlanBillingModel["BASE_FEE_PLUS_USAGE"] = "BASE_FEE_PLUS_USAGE";
    PlanBillingModel["USAGE_ONLY"] = "USAGE_ONLY";
    PlanBillingModel["FLAT_SUBSCRIPTION"] = "FLAT_SUBSCRIPTION";
})(PlanBillingModel || (PlanBillingModel = {}));
export var AddonBillingModel;
(function (AddonBillingModel) {
    AddonBillingModel["FLAT_MONTHLY"] = "FLAT_MONTHLY";
    AddonBillingModel["PER_UNIT_MONTHLY"] = "PER_UNIT_MONTHLY";
    AddonBillingModel["METERED"] = "METERED";
})(AddonBillingModel || (AddonBillingModel = {}));
export var OveragePolicy;
(function (OveragePolicy) {
    OveragePolicy["BLOCK"] = "BLOCK";
    OveragePolicy["CHARGE"] = "CHARGE";
    OveragePolicy["WARN_ONLY"] = "WARN_ONLY";
})(OveragePolicy || (OveragePolicy = {}));
export var SupportTier;
(function (SupportTier) {
    SupportTier["EMAIL_48H"] = "EMAIL_48H";
    SupportTier["EMAIL_24H"] = "EMAIL_24H";
    SupportTier["EMAIL_8H"] = "EMAIL_8H";
    SupportTier["SLA_CUSTOM"] = "SLA_CUSTOM";
})(SupportTier || (SupportTier = {}));
export var MerchantAddonStatus;
(function (MerchantAddonStatus) {
    MerchantAddonStatus["ACTIVE"] = "ACTIVE";
    MerchantAddonStatus["CANCELED"] = "CANCELED";
    MerchantAddonStatus["SUSPENDED"] = "SUSPENDED";
})(MerchantAddonStatus || (MerchantAddonStatus = {}));
export var MerchantAddressType;
(function (MerchantAddressType) {
    MerchantAddressType["REGISTERED"] = "REGISTERED";
    MerchantAddressType["BILLING"] = "BILLING";
    MerchantAddressType["MAILING"] = "MAILING";
})(MerchantAddressType || (MerchantAddressType = {}));
export var MerchantProfileContactRole;
(function (MerchantProfileContactRole) {
    MerchantProfileContactRole["FINANCE"] = "FINANCE";
    MerchantProfileContactRole["LEGAL"] = "LEGAL";
    MerchantProfileContactRole["TECH"] = "TECH";
    MerchantProfileContactRole["SUPPORT"] = "SUPPORT";
    MerchantProfileContactRole["SALES"] = "SALES";
    MerchantProfileContactRole["COMPLIANCE"] = "COMPLIANCE";
    MerchantProfileContactRole["SECURITY"] = "SECURITY";
    MerchantProfileContactRole["OWNER"] = "OWNER";
    MerchantProfileContactRole["OTHER"] = "OTHER";
})(MerchantProfileContactRole || (MerchantProfileContactRole = {}));
export var TaxIdType;
(function (TaxIdType) {
    TaxIdType["EU_VAT"] = "EU_VAT";
    TaxIdType["EORI"] = "EORI";
    TaxIdType["US_EIN"] = "US_EIN";
    TaxIdType["US_ITIN"] = "US_ITIN";
    TaxIdType["CA_BN"] = "CA_BN";
    TaxIdType["CA_GST_HST"] = "CA_GST_HST";
    TaxIdType["CA_QST"] = "CA_QST";
    TaxIdType["AU_ABN"] = "AU_ABN";
    TaxIdType["AU_ACN"] = "AU_ACN";
    TaxIdType["UK_VAT"] = "UK_VAT";
    TaxIdType["COMPANY_REG_NO"] = "COMPANY_REG_NO";
    TaxIdType["OTHER"] = "OTHER";
})(TaxIdType || (TaxIdType = {}));
export var TaxCalcMode;
(function (TaxCalcMode) {
    TaxCalcMode["PLATFORM"] = "PLATFORM";
    TaxCalcMode["EXTERNAL"] = "EXTERNAL";
    TaxCalcMode["NONE"] = "NONE";
})(TaxCalcMode || (TaxCalcMode = {}));
export var InvoiceLanguage;
(function (InvoiceLanguage) {
    InvoiceLanguage["EN"] = "EN";
    InvoiceLanguage["ES"] = "ES";
    InvoiceLanguage["FR"] = "FR";
    InvoiceLanguage["DE"] = "DE";
    InvoiceLanguage["PT"] = "PT";
    InvoiceLanguage["IT"] = "IT";
})(InvoiceLanguage || (InvoiceLanguage = {}));
export var InvoiceSource;
(function (InvoiceSource) {
    InvoiceSource["INTERNAL"] = "INTERNAL";
    InvoiceSource["EXTERNAL"] = "EXTERNAL";
    InvoiceSource["MANUAL"] = "MANUAL";
})(InvoiceSource || (InvoiceSource = {}));
export var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["DRAFT"] = "DRAFT";
    InvoiceStatus["ISSUED"] = "ISSUED";
    InvoiceStatus["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    InvoiceStatus["PAID"] = "PAID";
    InvoiceStatus["VOID"] = "VOID";
    InvoiceStatus["CANCELED"] = "CANCELED";
    InvoiceStatus["OPEN"] = "OPEN";
})(InvoiceStatus || (InvoiceStatus = {}));
export var InvoiceType;
(function (InvoiceType) {
    InvoiceType["INVOICE"] = "INVOICE";
    InvoiceType["CREDIT_NOTE"] = "CREDIT_NOTE";
})(InvoiceType || (InvoiceType = {}));
export var MerchantInvoiceLineKind;
(function (MerchantInvoiceLineKind) {
    MerchantInvoiceLineKind["BASE_FEE"] = "BASE_FEE";
    MerchantInvoiceLineKind["SUCCESSFUL_TX_OVERAGE"] = "SUCCESSFUL_TX_OVERAGE";
    MerchantInvoiceLineKind["API_CALLS_OVERAGE"] = "API_CALLS_OVERAGE";
    MerchantInvoiceLineKind["WEBHOOKS_OVERAGE"] = "WEBHOOKS_OVERAGE";
    MerchantInvoiceLineKind["ADDON"] = "ADDON";
    MerchantInvoiceLineKind["SETUP_FEE"] = "SETUP_FEE";
    MerchantInvoiceLineKind["ADJUSTMENT"] = "ADJUSTMENT";
    MerchantInvoiceLineKind["DISCOUNT"] = "DISCOUNT";
    MerchantInvoiceLineKind["TAX"] = "TAX";
    MerchantInvoiceLineKind["REFUND"] = "REFUND";
    MerchantInvoiceLineKind["CHARGEBACK_FEE"] = "CHARGEBACK_FEE";
    MerchantInvoiceLineKind["OTHER"] = "OTHER";
})(MerchantInvoiceLineKind || (MerchantInvoiceLineKind = {}));
export var MerchantApplicationDomainPurpose;
(function (MerchantApplicationDomainPurpose) {
    MerchantApplicationDomainPurpose["DASHBOARD"] = "DASHBOARD";
    MerchantApplicationDomainPurpose["CHECKOUT"] = "CHECKOUT";
    MerchantApplicationDomainPurpose["WEBHOOK"] = "WEBHOOK";
    MerchantApplicationDomainPurpose["ANY"] = "ANY";
})(MerchantApplicationDomainPurpose || (MerchantApplicationDomainPurpose = {}));
export var LicensePeriodStatus;
(function (LicensePeriodStatus) {
    LicensePeriodStatus["OPEN"] = "OPEN";
    LicensePeriodStatus["INVOICED"] = "INVOICED";
    LicensePeriodStatus["DUE"] = "DUE";
    LicensePeriodStatus["PAID"] = "PAID";
    LicensePeriodStatus["OVERDUE"] = "OVERDUE";
    LicensePeriodStatus["CANCELED"] = "CANCELED";
})(LicensePeriodStatus || (LicensePeriodStatus = {}));
export var LicensePeriodReason;
(function (LicensePeriodReason) {
    LicensePeriodReason["SANDBOX"] = "SANDBOX";
    LicensePeriodReason["TRIAL"] = "TRIAL";
    LicensePeriodReason["RENEWAL"] = "RENEWAL";
    LicensePeriodReason["UPGRADE"] = "UPGRADE";
    LicensePeriodReason["DOWNGRADE"] = "DOWNGRADE";
    LicensePeriodReason["PLAN_CHANGE"] = "PLAN_CHANGE";
    LicensePeriodReason["MANUAL_ADJUSTMENT"] = "MANUAL_ADJUSTMENT";
})(LicensePeriodReason || (LicensePeriodReason = {}));
export var LicenseBillingStatus;
(function (LicenseBillingStatus) {
    LicenseBillingStatus["OK"] = "OK";
    LicenseBillingStatus["DUE_SOON"] = "DUE_SOON";
    LicenseBillingStatus["DUE"] = "DUE";
    LicenseBillingStatus["OVERDUE"] = "OVERDUE";
})(LicenseBillingStatus || (LicenseBillingStatus = {}));
export var SentEmailStatus;
(function (SentEmailStatus) {
    SentEmailStatus["QUEUED"] = "QUEUED";
    SentEmailStatus["SENT"] = "SENT";
    SentEmailStatus["DELIVERED"] = "DELIVERED";
    SentEmailStatus["OPENED"] = "OPENED";
    SentEmailStatus["CLICKED"] = "CLICKED";
    SentEmailStatus["BOUNCED"] = "BOUNCED";
    SentEmailStatus["FAILED"] = "FAILED";
})(SentEmailStatus || (SentEmailStatus = {}));
export var EmailCorrelationType;
(function (EmailCorrelationType) {
    EmailCorrelationType["TRANSACTION"] = "TRANSACTION";
    EmailCorrelationType["USER"] = "USER";
    EmailCorrelationType["MERCHANT"] = "MERCHANT";
    EmailCorrelationType["KYC"] = "KYC";
    EmailCorrelationType["LICENSE"] = "LICENSE";
    EmailCorrelationType["SYSTEM"] = "SYSTEM";
    EmailCorrelationType["OTHER"] = "OTHER";
})(EmailCorrelationType || (EmailCorrelationType = {}));
export var EmailType;
(function (EmailType) {
    EmailType["EMAIL_CONFIRMATION"] = "EMAIL_CONFIRMATION";
    EmailType["EMAIL_CHANGE_CONFIRMATION"] = "EMAIL_CHANGE_CONFIRMATION";
    EmailType["DEVICE_CONFIRMATION"] = "DEVICE_CONFIRMATION";
    EmailType["PASSWORD_RESET"] = "PASSWORD_RESET";
    EmailType["PASSWORD_CHANGED"] = "PASSWORD_CHANGED";
    EmailType["TWO_FACTOR_CODE"] = "TWO_FACTOR_CODE";
    EmailType["SUSPICIOUS_LOGIN"] = "SUSPICIOUS_LOGIN";
    EmailType["TRANSACTION_INFO"] = "TRANSACTION_INFO";
    EmailType["PAYMENT_RECEIPT"] = "PAYMENT_RECEIPT";
    EmailType["PAYMENT_FAILED"] = "PAYMENT_FAILED";
    EmailType["PAYOUT_PROCESSED"] = "PAYOUT_PROCESSED";
    EmailType["REFUND_ISSUED"] = "REFUND_ISSUED";
    EmailType["USER_INFO"] = "USER_INFO";
    EmailType["KYC_REQUEST"] = "KYC_REQUEST";
    EmailType["KYC_APPROVED"] = "KYC_APPROVED";
    EmailType["KYC_DECLINED"] = "KYC_DECLINED";
    EmailType["LICENSE_INVOICE"] = "LICENSE_INVOICE";
    EmailType["LICENSE_EXPIRY_WARNING"] = "LICENSE_EXPIRY_WARNING";
    EmailType["SUBSCRIPTION_STARTED"] = "SUBSCRIPTION_STARTED";
    EmailType["SUBSCRIPTION_RENEWAL"] = "SUBSCRIPTION_RENEWAL";
    EmailType["SUBSCRIPTION_CANCELED"] = "SUBSCRIPTION_CANCELED";
    EmailType["PLAN_CHANGED"] = "PLAN_CHANGED";
    EmailType["WELCOME"] = "WELCOME";
    EmailType["ACCOUNT_DELETED"] = "ACCOUNT_DELETED";
    EmailType["PROFILE_UPDATED"] = "PROFILE_UPDATED";
    EmailType["SYSTEM_ALERT"] = "SYSTEM_ALERT";
    EmailType["MAINTENANCE_NOTICE"] = "MAINTENANCE_NOTICE";
    EmailType["SYSTEM_OUTAGE"] = "SYSTEM_OUTAGE";
    EmailType["DAILY_REPORT"] = "DAILY_REPORT";
    EmailType["OTHER"] = "OTHER";
})(EmailType || (EmailType = {}));
export var ConfigValueType;
(function (ConfigValueType) {
    ConfigValueType["STRING"] = "STRING";
    ConfigValueType["NUMBER"] = "NUMBER";
    ConfigValueType["BOOLEAN"] = "BOOLEAN";
    ConfigValueType["JSON"] = "JSON";
    ConfigValueType["ARRAY_STRING"] = "ARRAY_STRING";
    ConfigValueType["ARRAY_NUMBER"] = "ARRAY_NUMBER";
})(ConfigValueType || (ConfigValueType = {}));
