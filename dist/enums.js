"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginStatus = exports.NotificationLevel = exports.ActionObjectType = exports.ActionType = exports.ProviderSelectionMode = exports.RuleCascadeOverride = exports.MerchantPaymentProviderCascadeOverride = exports.LoadBalancingStrategy = exports.RuleConditionType = exports.RuleOperatorCombiner = exports.RuleOperator = exports.PaymentProviderRuleHandlingStatus = exports.Gender = exports.ScreeningStatus = exports.RiskLevel = exports.UserStatus = exports.UserOrigin = exports.UserCategory = exports.UserMode = exports.UserIdDocType = exports.UserType = exports.MerchantApplicationStatus = exports.MerchantPartyType = exports.MerchantStatus = exports.MerchantOrigin = exports.MerchantRiskLevel = exports.MerchantCategory = exports.MerchantMode = exports.TelegramNotificationStatus = exports.TelegramNotificationChannel = exports.MerchantCallbackResult = exports.MerchantCallbackType = exports.ResponseType = exports.MerchantApplicationType = exports.MerchantType = exports.ChargebackLegalStatus = exports.PaymentOrderReversalScope = exports.PaymentOrderReversalType = exports.PaymentVerificationStatus = exports.PaymentOperationType = exports.PaymentOrderType = exports.PaymentOrderStage = exports.TransactionStage = exports.PayoutStatus = exports.PaymentOperationStatus = exports.PaymentOrderStatus = exports.TransactionStatus = exports.TransactionType = exports.ApiCallType = exports.ApiMethod = void 0;
exports.ConfigValueType = exports.CardCaptureSessionStatus = exports.PayoutSourceType = exports.EmailType = exports.EmailCorrelationType = exports.SentEmailStatus = exports.LicenseBillingStatus = exports.LicensePeriodReason = exports.LicensePeriodStatus = exports.MerchantApplicationDomainPurpose = exports.MerchantInvoiceLineKind = exports.InvoiceType = exports.InvoiceStatus = exports.InvoiceSource = exports.InvoiceLanguage = exports.TaxCalcMode = exports.TaxIdType = exports.MerchantProfileContactRole = exports.MerchantAddressType = exports.MerchantAddonStatus = exports.SupportTier = exports.OveragePolicy = exports.AddonBillingModel = exports.PlanBillingModel = exports.Metric = exports.SubscriptionInterval = exports.SubscriptionStatus = exports.MerchantLicenseStatus = exports.MerchantLicenseType = exports.Environment = exports.AutoFixWebhookStrategy = exports.TransactionPurpose = exports.RequiredUserField = exports.PayoutDestinationAccountStatus = exports.PayoutDestinationStatus = exports.PayoutDestinationGroupStatus = exports.PayinDestinationAccountStatus = exports.PayinDestinationStatus = exports.PayinDestinationGroupStatus = exports.PayinDestinationAccountPoolStatus = exports.PayinDestinationPoolStatus = exports.FinancialInstitutionCodeType = exports.FinancialAccountIdType = exports.FinancialAccountNameType = exports.ApiKeyType = exports.PayoutDestinationType = exports.PayinDestinationType = exports.PayIdType = exports.PaymentMethod = void 0;
var ApiMethod;
(function (ApiMethod) {
    ApiMethod["GET"] = "GET";
    ApiMethod["POST"] = "POST";
    ApiMethod["PUT"] = "PUT";
    ApiMethod["DELETE"] = "DELETE";
    ApiMethod["PATCH"] = "PATCH";
    ApiMethod["HEAD"] = "HEAD";
    ApiMethod["OPTIONS"] = "OPTIONS";
})(ApiMethod || (exports.ApiMethod = ApiMethod = {}));
var ApiCallType;
(function (ApiCallType) {
    ApiCallType["PROVIDER_REQUEST"] = "PROVIDER_REQUEST";
    ApiCallType["PROVIDER_CALLBACK"] = "PROVIDER_CALLBACK";
    ApiCallType["MERCHANT_CALLBACK"] = "MERCHANT_CALLBACK";
    ApiCallType["INTERNAL_SERVICE"] = "INTERNAL_SERVICE";
    ApiCallType["OTHER"] = "OTHER";
})(ApiCallType || (exports.ApiCallType = ApiCallType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["PAYMENT"] = "PAYMENT";
    TransactionType["RECURRING_PAYMENT"] = "RECURRING_PAYMENT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
var TransactionStatus;
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
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var PaymentOrderStatus;
(function (PaymentOrderStatus) {
    PaymentOrderStatus["UNKNOWN"] = "UNKNOWN";
    PaymentOrderStatus["INITIATED"] = "INITIATED";
    PaymentOrderStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PaymentOrderStatus["ON_HOLD"] = "ON_HOLD";
    PaymentOrderStatus["COMPLETED"] = "COMPLETED";
    PaymentOrderStatus["CANCELED"] = "CANCELED";
    PaymentOrderStatus["DECLINED"] = "DECLINED";
    PaymentOrderStatus["BLOCKED"] = "BLOCKED";
    PaymentOrderStatus["FAILED"] = "FAILED";
    PaymentOrderStatus["EXPIRED"] = "EXPIRED";
    PaymentOrderStatus["IN_REFUND"] = "IN_REFUND";
    PaymentOrderStatus["REFUNDED"] = "REFUNDED";
    PaymentOrderStatus["PARTIALLY_REFUNDED"] = "PARTIALLY_REFUNDED";
    PaymentOrderStatus["IN_DISPUTE"] = "IN_DISPUTE";
    PaymentOrderStatus["DISPUTED"] = "DISPUTED";
    PaymentOrderStatus["PARTIALLY_CHARGEBACKED"] = "PARTIALLY_CHARGEBACKED";
    PaymentOrderStatus["CHARGEBACKED"] = "CHARGEBACKED";
})(PaymentOrderStatus || (exports.PaymentOrderStatus = PaymentOrderStatus = {}));
var PaymentOperationStatus;
(function (PaymentOperationStatus) {
    PaymentOperationStatus["UNKNOWN"] = "UNKNOWN";
    PaymentOperationStatus["INITIATED"] = "INITIATED";
    PaymentOperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PaymentOperationStatus["ON_HOLD"] = "ON_HOLD";
    PaymentOperationStatus["COMPLETED"] = "COMPLETED";
    PaymentOperationStatus["CANCELED"] = "CANCELED";
    PaymentOperationStatus["DECLINED"] = "DECLINED";
    PaymentOperationStatus["BLOCKED"] = "BLOCKED";
    PaymentOperationStatus["FAILED"] = "FAILED";
    PaymentOperationStatus["EXPIRED"] = "EXPIRED";
})(PaymentOperationStatus || (exports.PaymentOperationStatus = PaymentOperationStatus = {}));
var PayoutStatus;
(function (PayoutStatus) {
    PayoutStatus["UNKNOWN"] = "UNKNOWN";
    PayoutStatus["INITIATED"] = "INITIATED";
    PayoutStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PayoutStatus["ON_HOLD"] = "ON_HOLD";
    PayoutStatus["COMPLETED"] = "COMPLETED";
    PayoutStatus["CANCELED"] = "CANCELED";
    PayoutStatus["DECLINED"] = "DECLINED";
    PayoutStatus["BLOCKED"] = "BLOCKED";
    PayoutStatus["FAILED"] = "FAILED";
    PayoutStatus["EXPIRED"] = "EXPIRED";
})(PayoutStatus || (exports.PayoutStatus = PayoutStatus = {}));
var TransactionStage;
(function (TransactionStage) {
    TransactionStage["VERIFICATION"] = "VERIFICATION";
    TransactionStage["PENDING"] = "PENDING";
    TransactionStage["PREAUTH"] = "PREAUTH";
    TransactionStage["CAPTURE"] = "CAPTURE";
    TransactionStage["WRAP_UP"] = "WRAP_UP";
})(TransactionStage || (exports.TransactionStage = TransactionStage = {}));
var PaymentOrderStage;
(function (PaymentOrderStage) {
    PaymentOrderStage["VERIFICATION"] = "VERIFICATION";
    PaymentOrderStage["PENDING"] = "PENDING";
    PaymentOrderStage["PREAUTH"] = "PREAUTH";
    PaymentOrderStage["CAPTURE"] = "CAPTURE";
    PaymentOrderStage["WRAP_UP"] = "WRAP_UP";
})(PaymentOrderStage || (exports.PaymentOrderStage = PaymentOrderStage = {}));
var PaymentOrderType;
(function (PaymentOrderType) {
    PaymentOrderType["PAYIN"] = "PAYIN";
    PaymentOrderType["PAYOUT"] = "PAYOUT";
})(PaymentOrderType || (exports.PaymentOrderType = PaymentOrderType = {}));
var PaymentOperationType;
(function (PaymentOperationType) {
    PaymentOperationType["AUTH"] = "AUTH";
    PaymentOperationType["PREAUTH"] = "PREAUTH";
    PaymentOperationType["CAPTURE"] = "CAPTURE";
    PaymentOperationType["REFUND"] = "REFUND";
    PaymentOperationType["CHARGEBACK"] = "CHARGEBACK";
    PaymentOperationType["NOTIFY"] = "NOTIFY";
})(PaymentOperationType || (exports.PaymentOperationType = PaymentOperationType = {}));
var PaymentVerificationStatus;
(function (PaymentVerificationStatus) {
    PaymentVerificationStatus["UNKNOWN"] = "UNKNOWN";
    PaymentVerificationStatus["SUCCESS"] = "SUCCESS";
    PaymentVerificationStatus["WARNINGS"] = "WARNINGS";
    PaymentVerificationStatus["ERRORS"] = "ERRORS";
})(PaymentVerificationStatus || (exports.PaymentVerificationStatus = PaymentVerificationStatus = {}));
var PaymentOrderReversalType;
(function (PaymentOrderReversalType) {
    PaymentOrderReversalType["NONE"] = "NONE";
    PaymentOrderReversalType["REFUND"] = "REFUND";
    PaymentOrderReversalType["CHARGEBACK"] = "CHARGEBACK";
})(PaymentOrderReversalType || (exports.PaymentOrderReversalType = PaymentOrderReversalType = {}));
var PaymentOrderReversalScope;
(function (PaymentOrderReversalScope) {
    PaymentOrderReversalScope["NONE"] = "NONE";
    PaymentOrderReversalScope["PARTIAL"] = "PARTIAL";
    PaymentOrderReversalScope["FULL"] = "FULL";
})(PaymentOrderReversalScope || (exports.PaymentOrderReversalScope = PaymentOrderReversalScope = {}));
var ChargebackLegalStatus;
(function (ChargebackLegalStatus) {
    ChargebackLegalStatus["NONE"] = "NONE";
    ChargebackLegalStatus["DISPUTE_OPEN"] = "DISPUTE_OPEN";
    ChargebackLegalStatus["REPRESENTING"] = "REPRESENTING";
    ChargebackLegalStatus["ARBITRATION"] = "ARBITRATION";
    ChargebackLegalStatus["WON_MERCHANT"] = "WON_MERCHANT";
    ChargebackLegalStatus["LOST_MERCHANT"] = "LOST_MERCHANT";
})(ChargebackLegalStatus || (exports.ChargebackLegalStatus = ChargebackLegalStatus = {}));
var MerchantType;
(function (MerchantType) {
    MerchantType["OWNER"] = "OWNER";
    MerchantType["MERCHANT"] = "MERCHANT";
})(MerchantType || (exports.MerchantType = MerchantType = {}));
var MerchantApplicationType;
(function (MerchantApplicationType) {
    MerchantApplicationType["STANDARD"] = "STANDARD";
})(MerchantApplicationType || (exports.MerchantApplicationType = MerchantApplicationType = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType["arraybuffer"] = "arraybuffer";
    ResponseType["blob"] = "blob";
    ResponseType["document"] = "document";
    ResponseType["json"] = "json";
    ResponseType["text"] = "text";
    ResponseType["stream"] = "stream";
})(ResponseType || (exports.ResponseType = ResponseType = {}));
var MerchantCallbackType;
(function (MerchantCallbackType) {
    MerchantCallbackType["TRANSACTION_CREATED"] = "TRANSACTION_CREATED";
    MerchantCallbackType["TRANSACTION_CHANGED"] = "TRANSACTION_CHANGED";
    MerchantCallbackType["TRANSACTION_DELETED"] = "TRANSACTION_DELETED";
    MerchantCallbackType["TRANSACTION_STATUS_CHANGED"] = "TRANSACTION_STATUS_CHANGED";
    MerchantCallbackType["SUBSCRIPTION_CREATED"] = "SUBSCRIPTION_CREATED";
    MerchantCallbackType["SUBSCRIPTION_UPDATED"] = "SUBSCRIPTION_UPDATED";
    MerchantCallbackType["SUBSCRIPTION_CANCELLED"] = "SUBSCRIPTION_CANCELLED";
    MerchantCallbackType["PAYIN_DESTINATION_CREATED"] = "PAYIN_DESTINATION_CREATED";
    MerchantCallbackType["PAYIN_DESTINATION_UPDATED"] = "PAYIN_DESTINATION_UPDATED";
    MerchantCallbackType["PAYIN_DESTINATION_DELETED"] = "PAYIN_DESTINATION_DELETED";
    MerchantCallbackType["PAYIN_DESTINATION_STATUS_CHANGED"] = "PAYIN_DESTINATION_STATUS_CHANGED";
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
    MerchantCallbackType["CASCADE_NEW_PAYMENT_PROVIDER_ASSIGNED"] = "CASCADE_NEW_PAYMENT_PROVIDER_ASSIGNED";
    MerchantCallbackType["ADMIN_MESSAGE"] = "ADMIN_MESSAGE";
    MerchantCallbackType["USER_MESSAGE"] = "USER_MESSAGE";
})(MerchantCallbackType || (exports.MerchantCallbackType = MerchantCallbackType = {}));
var MerchantCallbackResult;
(function (MerchantCallbackResult) {
    MerchantCallbackResult["PENDING"] = "PENDING";
    MerchantCallbackResult["DELIVERED"] = "DELIVERED";
    MerchantCallbackResult["FAILED"] = "FAILED";
    MerchantCallbackResult["DISABLED"] = "DISABLED";
})(MerchantCallbackResult || (exports.MerchantCallbackResult = MerchantCallbackResult = {}));
var TelegramNotificationChannel;
(function (TelegramNotificationChannel) {
    TelegramNotificationChannel["TRANSACTION_FAILED"] = "TRANSACTION_FAILED";
    TelegramNotificationChannel["LICENSE_RENEWAL"] = "LICENSE_RENEWAL";
    TelegramNotificationChannel["LICENSE_CREATED"] = "LICENSE_CREATED";
    TelegramNotificationChannel["DEBUG"] = "DEBUG";
    TelegramNotificationChannel["INFO"] = "INFO";
    TelegramNotificationChannel["WARNING"] = "WARNING";
    TelegramNotificationChannel["ERROR"] = "ERROR";
    TelegramNotificationChannel["PAYOUT_FAILED"] = "PAYOUT_FAILED";
    TelegramNotificationChannel["REFUND_FAILED"] = "REFUND_FAILED";
})(TelegramNotificationChannel || (exports.TelegramNotificationChannel = TelegramNotificationChannel = {}));
var TelegramNotificationStatus;
(function (TelegramNotificationStatus) {
    TelegramNotificationStatus["ENABLED"] = "ENABLED";
    TelegramNotificationStatus["DISABLED"] = "DISABLED";
})(TelegramNotificationStatus || (exports.TelegramNotificationStatus = TelegramNotificationStatus = {}));
var MerchantMode;
(function (MerchantMode) {
    MerchantMode["SIMPLE"] = "SIMPLE";
    MerchantMode["MULTI_APP"] = "MULTI_APP";
    MerchantMode["AGENCY"] = "AGENCY";
})(MerchantMode || (exports.MerchantMode = MerchantMode = {}));
var MerchantCategory;
(function (MerchantCategory) {
    MerchantCategory["STANDARD"] = "STANDARD";
    MerchantCategory["CRYPTO"] = "CRYPTO";
    MerchantCategory["GAMING"] = "GAMING";
    MerchantCategory["MARKETPLACE"] = "MARKETPLACE";
    MerchantCategory["PSP"] = "PSP";
})(MerchantCategory || (exports.MerchantCategory = MerchantCategory = {}));
var MerchantRiskLevel;
(function (MerchantRiskLevel) {
    MerchantRiskLevel["LOW"] = "LOW";
    MerchantRiskLevel["MEDIUM"] = "MEDIUM";
    MerchantRiskLevel["HIGH"] = "HIGH";
})(MerchantRiskLevel || (exports.MerchantRiskLevel = MerchantRiskLevel = {}));
var MerchantOrigin;
(function (MerchantOrigin) {
    MerchantOrigin["ORIGINAL"] = "ORIGINAL";
    MerchantOrigin["MIGRATED"] = "MIGRATED";
    MerchantOrigin["IMPORTED"] = "IMPORTED";
})(MerchantOrigin || (exports.MerchantOrigin = MerchantOrigin = {}));
var MerchantStatus;
(function (MerchantStatus) {
    MerchantStatus["LIVE"] = "LIVE";
    MerchantStatus["SUSPENDED"] = "SUSPENDED";
    MerchantStatus["DELETED"] = "DELETED";
})(MerchantStatus || (exports.MerchantStatus = MerchantStatus = {}));
var MerchantPartyType;
(function (MerchantPartyType) {
    MerchantPartyType["INDIVIDUAL"] = "INDIVIDUAL";
    MerchantPartyType["BUSINESS"] = "BUSINESS";
})(MerchantPartyType || (exports.MerchantPartyType = MerchantPartyType = {}));
var MerchantApplicationStatus;
(function (MerchantApplicationStatus) {
    MerchantApplicationStatus["ENABLED"] = "ENABLED";
    MerchantApplicationStatus["DISABLED"] = "DISABLED";
})(MerchantApplicationStatus || (exports.MerchantApplicationStatus = MerchantApplicationStatus = {}));
var UserType;
(function (UserType) {
    UserType["INDIVIDUAL"] = "INDIVIDUAL";
    UserType["BUSINESS"] = "BUSINESS";
})(UserType || (exports.UserType = UserType = {}));
var UserIdDocType;
(function (UserIdDocType) {
    UserIdDocType["PASSPORT"] = "PASSPORT";
    UserIdDocType["FOREIGN_PASSPORT"] = "FOREIGN_PASSPORT";
    UserIdDocType["ID_CARD"] = "ID_CARD";
    UserIdDocType["DRIVERS_LICENSE"] = "DRIVERS_LICENSE";
    UserIdDocType["RESIDENCE_PERMIT"] = "RESIDENCE_PERMIT";
    UserIdDocType["OTHER"] = "OTHER";
})(UserIdDocType || (exports.UserIdDocType = UserIdDocType = {}));
var UserMode;
(function (UserMode) {
    UserMode["SIMPLE"] = "SIMPLE";
})(UserMode || (exports.UserMode = UserMode = {}));
var UserCategory;
(function (UserCategory) {
    UserCategory["STANDARD"] = "STANDARD";
})(UserCategory || (exports.UserCategory = UserCategory = {}));
var UserOrigin;
(function (UserOrigin) {
    UserOrigin["ORIGINAL"] = "ORIGINAL";
})(UserOrigin || (exports.UserOrigin = UserOrigin = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["LIVE"] = "LIVE";
    UserStatus["SUSPENDED"] = "SUSPENDED";
    UserStatus["DELETED"] = "DELETED";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var RiskLevel;
(function (RiskLevel) {
    RiskLevel["LOW"] = "LOW";
    RiskLevel["MEDIUM"] = "MEDIUM";
    RiskLevel["HIGH"] = "HIGH";
    RiskLevel["UNACCEPTABLE"] = "UNACCEPTABLE";
})(RiskLevel || (exports.RiskLevel = RiskLevel = {}));
var ScreeningStatus;
(function (ScreeningStatus) {
    ScreeningStatus["GREEN"] = "GREEN";
    ScreeningStatus["YELLOW"] = "YELLOW";
    ScreeningStatus["RED"] = "RED";
})(ScreeningStatus || (exports.ScreeningStatus = ScreeningStatus = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (exports.Gender = Gender = {}));
var PaymentProviderRuleHandlingStatus;
(function (PaymentProviderRuleHandlingStatus) {
    PaymentProviderRuleHandlingStatus["NOT_HANDLED"] = "NOT_HANDLED";
    PaymentProviderRuleHandlingStatus["HANDLED"] = "HANDLED";
    PaymentProviderRuleHandlingStatus["ERROR"] = "ERROR";
})(PaymentProviderRuleHandlingStatus || (exports.PaymentProviderRuleHandlingStatus = PaymentProviderRuleHandlingStatus = {}));
var RuleOperator;
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
})(RuleOperator || (exports.RuleOperator = RuleOperator = {}));
var RuleOperatorCombiner;
(function (RuleOperatorCombiner) {
    RuleOperatorCombiner["ANY"] = "ANY";
    RuleOperatorCombiner["ALL"] = "ALL";
})(RuleOperatorCombiner || (exports.RuleOperatorCombiner = RuleOperatorCombiner = {}));
var RuleConditionType;
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
})(RuleConditionType || (exports.RuleConditionType = RuleConditionType = {}));
var LoadBalancingStrategy;
(function (LoadBalancingStrategy) {
    LoadBalancingStrategy["ROUND_ROBIN"] = "ROUND_ROBIN";
    LoadBalancingStrategy["WEIGHTED_RANDOM"] = "WEIGHTED_RANDOM";
    LoadBalancingStrategy["LEAST_LOADED"] = "LEAST_LOADED";
    LoadBalancingStrategy["WEIGHTED_ROUND_ROBIN"] = "WEIGHTED_ROUND_ROBIN";
})(LoadBalancingStrategy || (exports.LoadBalancingStrategy = LoadBalancingStrategy = {}));
var MerchantPaymentProviderCascadeOverride;
(function (MerchantPaymentProviderCascadeOverride) {
    MerchantPaymentProviderCascadeOverride["USE_GLOBAL"] = "USE_GLOBAL";
    MerchantPaymentProviderCascadeOverride["OVERRIDE"] = "OVERRIDE";
})(MerchantPaymentProviderCascadeOverride || (exports.MerchantPaymentProviderCascadeOverride = MerchantPaymentProviderCascadeOverride = {}));
var RuleCascadeOverride;
(function (RuleCascadeOverride) {
    RuleCascadeOverride["USE_GLOBAL"] = "USE_GLOBAL";
    RuleCascadeOverride["FORCE_ENABLED"] = "FORCE_ENABLED";
    RuleCascadeOverride["FORCE_DISABLED"] = "FORCE_DISABLED";
})(RuleCascadeOverride || (exports.RuleCascadeOverride = RuleCascadeOverride = {}));
var ProviderSelectionMode;
(function (ProviderSelectionMode) {
    ProviderSelectionMode["STATIC"] = "STATIC";
    ProviderSelectionMode["DYNAMIC"] = "DYNAMIC";
})(ProviderSelectionMode || (exports.ProviderSelectionMode = ProviderSelectionMode = {}));
var ActionType;
(function (ActionType) {
    ActionType["SIGNUP"] = "SIGNUP";
    ActionType["LOGIN"] = "LOGIN";
    ActionType["LOGOUT"] = "LOGOUT";
    ActionType["CREATE"] = "CREATE";
    ActionType["UPDATE"] = "UPDATE";
    ActionType["DELETE"] = "DELETE";
    ActionType["CALLBACK"] = "CALLBACK";
})(ActionType || (exports.ActionType = ActionType = {}));
var ActionObjectType;
(function (ActionObjectType) {
    ActionObjectType["SYSTEM"] = "SYSTEM";
    ActionObjectType["TRANSACTION"] = "TRANSACTION";
    ActionObjectType["PAYMENT_ORDER"] = "PAYMENT_ORDER";
    ActionObjectType["MERCHANT"] = "MERCHANT";
    ActionObjectType["USER"] = "USER";
})(ActionObjectType || (exports.ActionObjectType = ActionObjectType = {}));
var NotificationLevel;
(function (NotificationLevel) {
    NotificationLevel["REQUEST"] = "REQUEST";
    NotificationLevel["DEBUG"] = "DEBUG";
    NotificationLevel["INFO"] = "INFO";
    NotificationLevel["WARNING"] = "WARNING";
    NotificationLevel["ERROR"] = "ERROR";
})(NotificationLevel || (exports.NotificationLevel = NotificationLevel = {}));
var LoginStatus;
(function (LoginStatus) {
    LoginStatus["SUCCESS"] = "SUCCESS";
    LoginStatus["FAILURE"] = "FAILURE";
})(LoginStatus || (exports.LoginStatus = LoginStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["BANK_TRANSFER"] = "BANK_TRANSFER";
    PaymentMethod["OPEN_BANKING"] = "OPEN_BANKING";
    PaymentMethod["E_PAYMENT"] = "E_PAYMENT";
    PaymentMethod["CREDIT_CARD"] = "CREDIT_CARD";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PayIdType;
(function (PayIdType) {
    PayIdType["ABN"] = "ABN";
    PayIdType["ACN"] = "ACN";
    PayIdType["EMAIL"] = "EMAIL";
    PayIdType["PHONE_NUMBER"] = "PHONE_NUMBER";
    PayIdType["ORGANIZATION_ID"] = "ORGANIZATION_ID";
})(PayIdType || (exports.PayIdType = PayIdType = {}));
var PayinDestinationType;
(function (PayinDestinationType) {
    PayinDestinationType["STANDARD"] = "STANDARD";
    PayinDestinationType["SUBSCRIPTION"] = "SUBSCRIPTION";
    PayinDestinationType["VIRTUAL"] = "VIRTUAL";
    PayinDestinationType["VIRTUAL_POOL"] = "VIRTUAL_POOL";
})(PayinDestinationType || (exports.PayinDestinationType = PayinDestinationType = {}));
var PayoutDestinationType;
(function (PayoutDestinationType) {
    PayoutDestinationType["PERSONAL"] = "PERSONAL";
    PayoutDestinationType["CORPORATE"] = "CORPORATE";
})(PayoutDestinationType || (exports.PayoutDestinationType = PayoutDestinationType = {}));
var ApiKeyType;
(function (ApiKeyType) {
    ApiKeyType["FULL_ACCESS"] = "FULL_ACCESS";
    ApiKeyType["PAYMENT_ONLY"] = "PAYMENT_ONLY";
})(ApiKeyType || (exports.ApiKeyType = ApiKeyType = {}));
var FinancialAccountNameType;
(function (FinancialAccountNameType) {
    FinancialAccountNameType["ACCOUNT_NAME"] = "ACCOUNT_NAME";
    FinancialAccountNameType["ACCOUNT_HOLDER_NAME"] = "ACCOUNT_HOLDER_NAME";
    FinancialAccountNameType["USER_IDENTIFIER"] = "USER_IDENTIFIER";
    FinancialAccountNameType["NPP_DESCRIPTION"] = "NPP_DESCRIPTION";
    FinancialAccountNameType["PAY_ID_NAME"] = "PAY_ID_NAME";
})(FinancialAccountNameType || (exports.FinancialAccountNameType = FinancialAccountNameType = {}));
var FinancialAccountIdType;
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
})(FinancialAccountIdType || (exports.FinancialAccountIdType = FinancialAccountIdType = {}));
var FinancialInstitutionCodeType;
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
})(FinancialInstitutionCodeType || (exports.FinancialInstitutionCodeType = FinancialInstitutionCodeType = {}));
var PayinDestinationPoolStatus;
(function (PayinDestinationPoolStatus) {
    PayinDestinationPoolStatus["UNASSIGNED"] = "UNASSIGNED";
    PayinDestinationPoolStatus["PENDING"] = "PENDING";
    PayinDestinationPoolStatus["ASSIGNED"] = "ASSIGNED";
    PayinDestinationPoolStatus["DISABLED"] = "DISABLED";
    PayinDestinationPoolStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationPoolStatus || (exports.PayinDestinationPoolStatus = PayinDestinationPoolStatus = {}));
var PayinDestinationAccountPoolStatus;
(function (PayinDestinationAccountPoolStatus) {
    PayinDestinationAccountPoolStatus["UNASSIGNED"] = "UNASSIGNED";
    PayinDestinationAccountPoolStatus["PENDING"] = "PENDING";
    PayinDestinationAccountPoolStatus["ASSIGNED"] = "ASSIGNED";
    PayinDestinationAccountPoolStatus["DISABLED"] = "DISABLED";
    PayinDestinationAccountPoolStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationAccountPoolStatus || (exports.PayinDestinationAccountPoolStatus = PayinDestinationAccountPoolStatus = {}));
var PayinDestinationGroupStatus;
(function (PayinDestinationGroupStatus) {
    PayinDestinationGroupStatus["PENDING"] = "PENDING";
    PayinDestinationGroupStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationGroupStatus["DISABLED"] = "DISABLED";
    PayinDestinationGroupStatus["CLOSED"] = "CLOSED";
    PayinDestinationGroupStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationGroupStatus || (exports.PayinDestinationGroupStatus = PayinDestinationGroupStatus = {}));
var PayinDestinationStatus;
(function (PayinDestinationStatus) {
    PayinDestinationStatus["PENDING"] = "PENDING";
    PayinDestinationStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationStatus["DISABLED"] = "DISABLED";
    PayinDestinationStatus["CLOSED"] = "CLOSED";
    PayinDestinationStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationStatus || (exports.PayinDestinationStatus = PayinDestinationStatus = {}));
var PayinDestinationAccountStatus;
(function (PayinDestinationAccountStatus) {
    PayinDestinationAccountStatus["PENDING"] = "PENDING";
    PayinDestinationAccountStatus["ACTIVE"] = "ACTIVE";
    PayinDestinationAccountStatus["DECLINED"] = "DECLINED";
    PayinDestinationAccountStatus["DISABLED"] = "DISABLED";
    PayinDestinationAccountStatus["CLOSED"] = "CLOSED";
    PayinDestinationAccountStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayinDestinationAccountStatus || (exports.PayinDestinationAccountStatus = PayinDestinationAccountStatus = {}));
var PayoutDestinationGroupStatus;
(function (PayoutDestinationGroupStatus) {
    PayoutDestinationGroupStatus["PENDING"] = "PENDING";
    PayoutDestinationGroupStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationGroupStatus["DISABLED"] = "DISABLED";
    PayoutDestinationGroupStatus["CLOSED"] = "CLOSED";
    PayoutDestinationGroupStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayoutDestinationGroupStatus || (exports.PayoutDestinationGroupStatus = PayoutDestinationGroupStatus = {}));
var PayoutDestinationStatus;
(function (PayoutDestinationStatus) {
    PayoutDestinationStatus["PENDING"] = "PENDING";
    PayoutDestinationStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationStatus["DISABLED"] = "DISABLED";
    PayoutDestinationStatus["CLOSED"] = "CLOSED";
    PayoutDestinationStatus["UNVERIFIED"] = "UNVERIFIED";
})(PayoutDestinationStatus || (exports.PayoutDestinationStatus = PayoutDestinationStatus = {}));
var PayoutDestinationAccountStatus;
(function (PayoutDestinationAccountStatus) {
    PayoutDestinationAccountStatus["PENDING"] = "PENDING";
    PayoutDestinationAccountStatus["ACTIVE"] = "ACTIVE";
    PayoutDestinationAccountStatus["DISABLED"] = "DISABLED";
    PayoutDestinationAccountStatus["CLOSED"] = "CLOSED";
})(PayoutDestinationAccountStatus || (exports.PayoutDestinationAccountStatus = PayoutDestinationAccountStatus = {}));
var RequiredUserField;
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
})(RequiredUserField || (exports.RequiredUserField = RequiredUserField = {}));
var TransactionPurpose;
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
})(TransactionPurpose || (exports.TransactionPurpose = TransactionPurpose = {}));
var AutoFixWebhookStrategy;
(function (AutoFixWebhookStrategy) {
    AutoFixWebhookStrategy["REPLACE_ALL"] = "REPLACE_ALL";
    AutoFixWebhookStrategy["UPDATE_URLS_AND_ACTIVATE"] = "UPDATE_URLS_AND_ACTIVATE";
    AutoFixWebhookStrategy["EXTEND_AND_ACTIVATE"] = "EXTEND_AND_ACTIVATE";
    AutoFixWebhookStrategy["PRUNE_BASE_AND_ACTIVATE"] = "PRUNE_BASE_AND_ACTIVATE";
})(AutoFixWebhookStrategy || (exports.AutoFixWebhookStrategy = AutoFixWebhookStrategy = {}));
var Environment;
(function (Environment) {
    Environment["SANDBOX"] = "SANDBOX";
    Environment["PROD"] = "PROD";
})(Environment || (exports.Environment = Environment = {}));
var MerchantLicenseType;
(function (MerchantLicenseType) {
    MerchantLicenseType["TRIAL"] = "TRIAL";
    MerchantLicenseType["SUBSCRIPTION"] = "SUBSCRIPTION";
    MerchantLicenseType["ENTERPRISE"] = "ENTERPRISE";
    MerchantLicenseType["OWNER"] = "OWNER";
})(MerchantLicenseType || (exports.MerchantLicenseType = MerchantLicenseType = {}));
var MerchantLicenseStatus;
(function (MerchantLicenseStatus) {
    MerchantLicenseStatus["ACTIVE"] = "ACTIVE";
    MerchantLicenseStatus["EXPIRED"] = "EXPIRED";
    MerchantLicenseStatus["CANCELED"] = "CANCELED";
    MerchantLicenseStatus["SUSPENDED"] = "SUSPENDED";
})(MerchantLicenseStatus || (exports.MerchantLicenseStatus = MerchantLicenseStatus = {}));
var SubscriptionStatus;
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
})(SubscriptionStatus || (exports.SubscriptionStatus = SubscriptionStatus = {}));
var SubscriptionInterval;
(function (SubscriptionInterval) {
    SubscriptionInterval["DAY"] = "DAY";
    SubscriptionInterval["WEEK"] = "WEEK";
    SubscriptionInterval["MONTH"] = "MONTH";
    SubscriptionInterval["YEAR"] = "YEAR";
    SubscriptionInterval["CUSTOM"] = "CUSTOM";
})(SubscriptionInterval || (exports.SubscriptionInterval = SubscriptionInterval = {}));
var Metric;
(function (Metric) {
    Metric["SUCCESSFUL_TX"] = "SUCCESSFUL_TX";
    Metric["API_CALL"] = "API_CALL";
    Metric["WEBHOOK_OUT"] = "WEBHOOK_OUT";
})(Metric || (exports.Metric = Metric = {}));
var PlanBillingModel;
(function (PlanBillingModel) {
    PlanBillingModel["BASE_FEE_PLUS_USAGE"] = "BASE_FEE_PLUS_USAGE";
    PlanBillingModel["USAGE_ONLY"] = "USAGE_ONLY";
    PlanBillingModel["FLAT_SUBSCRIPTION"] = "FLAT_SUBSCRIPTION";
})(PlanBillingModel || (exports.PlanBillingModel = PlanBillingModel = {}));
var AddonBillingModel;
(function (AddonBillingModel) {
    AddonBillingModel["FLAT_MONTHLY"] = "FLAT_MONTHLY";
    AddonBillingModel["PER_UNIT_MONTHLY"] = "PER_UNIT_MONTHLY";
    AddonBillingModel["METERED"] = "METERED";
})(AddonBillingModel || (exports.AddonBillingModel = AddonBillingModel = {}));
var OveragePolicy;
(function (OveragePolicy) {
    OveragePolicy["BLOCK"] = "BLOCK";
    OveragePolicy["CHARGE"] = "CHARGE";
    OveragePolicy["WARN_ONLY"] = "WARN_ONLY";
})(OveragePolicy || (exports.OveragePolicy = OveragePolicy = {}));
var SupportTier;
(function (SupportTier) {
    SupportTier["EMAIL_48H"] = "EMAIL_48H";
    SupportTier["EMAIL_24H"] = "EMAIL_24H";
    SupportTier["EMAIL_8H"] = "EMAIL_8H";
    SupportTier["SLA_CUSTOM"] = "SLA_CUSTOM";
})(SupportTier || (exports.SupportTier = SupportTier = {}));
var MerchantAddonStatus;
(function (MerchantAddonStatus) {
    MerchantAddonStatus["ACTIVE"] = "ACTIVE";
    MerchantAddonStatus["CANCELED"] = "CANCELED";
    MerchantAddonStatus["SUSPENDED"] = "SUSPENDED";
})(MerchantAddonStatus || (exports.MerchantAddonStatus = MerchantAddonStatus = {}));
var MerchantAddressType;
(function (MerchantAddressType) {
    MerchantAddressType["REGISTERED"] = "REGISTERED";
    MerchantAddressType["BILLING"] = "BILLING";
    MerchantAddressType["MAILING"] = "MAILING";
})(MerchantAddressType || (exports.MerchantAddressType = MerchantAddressType = {}));
var MerchantProfileContactRole;
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
})(MerchantProfileContactRole || (exports.MerchantProfileContactRole = MerchantProfileContactRole = {}));
var TaxIdType;
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
})(TaxIdType || (exports.TaxIdType = TaxIdType = {}));
var TaxCalcMode;
(function (TaxCalcMode) {
    TaxCalcMode["PLATFORM"] = "PLATFORM";
    TaxCalcMode["EXTERNAL"] = "EXTERNAL";
    TaxCalcMode["NONE"] = "NONE";
})(TaxCalcMode || (exports.TaxCalcMode = TaxCalcMode = {}));
var InvoiceLanguage;
(function (InvoiceLanguage) {
    InvoiceLanguage["EN"] = "EN";
    InvoiceLanguage["ES"] = "ES";
    InvoiceLanguage["FR"] = "FR";
    InvoiceLanguage["DE"] = "DE";
    InvoiceLanguage["PT"] = "PT";
    InvoiceLanguage["IT"] = "IT";
})(InvoiceLanguage || (exports.InvoiceLanguage = InvoiceLanguage = {}));
var InvoiceSource;
(function (InvoiceSource) {
    InvoiceSource["INTERNAL"] = "INTERNAL";
    InvoiceSource["EXTERNAL"] = "EXTERNAL";
    InvoiceSource["MANUAL"] = "MANUAL";
})(InvoiceSource || (exports.InvoiceSource = InvoiceSource = {}));
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["DRAFT"] = "DRAFT";
    InvoiceStatus["ISSUED"] = "ISSUED";
    InvoiceStatus["PARTIALLY_PAID"] = "PARTIALLY_PAID";
    InvoiceStatus["PAID"] = "PAID";
    InvoiceStatus["VOID"] = "VOID";
    InvoiceStatus["CANCELED"] = "CANCELED";
    InvoiceStatus["OPEN"] = "OPEN";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
var InvoiceType;
(function (InvoiceType) {
    InvoiceType["INVOICE"] = "INVOICE";
    InvoiceType["CREDIT_NOTE"] = "CREDIT_NOTE";
})(InvoiceType || (exports.InvoiceType = InvoiceType = {}));
var MerchantInvoiceLineKind;
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
})(MerchantInvoiceLineKind || (exports.MerchantInvoiceLineKind = MerchantInvoiceLineKind = {}));
var MerchantApplicationDomainPurpose;
(function (MerchantApplicationDomainPurpose) {
    MerchantApplicationDomainPurpose["DASHBOARD"] = "DASHBOARD";
    MerchantApplicationDomainPurpose["CHECKOUT"] = "CHECKOUT";
    MerchantApplicationDomainPurpose["WEBHOOK"] = "WEBHOOK";
    MerchantApplicationDomainPurpose["PAY_ID"] = "PAY_ID";
    MerchantApplicationDomainPurpose["ANY"] = "ANY";
})(MerchantApplicationDomainPurpose || (exports.MerchantApplicationDomainPurpose = MerchantApplicationDomainPurpose = {}));
var LicensePeriodStatus;
(function (LicensePeriodStatus) {
    LicensePeriodStatus["OPEN"] = "OPEN";
    LicensePeriodStatus["INVOICED"] = "INVOICED";
    LicensePeriodStatus["DUE"] = "DUE";
    LicensePeriodStatus["PAID"] = "PAID";
    LicensePeriodStatus["OVERDUE"] = "OVERDUE";
    LicensePeriodStatus["CANCELED"] = "CANCELED";
})(LicensePeriodStatus || (exports.LicensePeriodStatus = LicensePeriodStatus = {}));
var LicensePeriodReason;
(function (LicensePeriodReason) {
    LicensePeriodReason["SANDBOX"] = "SANDBOX";
    LicensePeriodReason["TRIAL"] = "TRIAL";
    LicensePeriodReason["RENEWAL"] = "RENEWAL";
    LicensePeriodReason["UPGRADE"] = "UPGRADE";
    LicensePeriodReason["DOWNGRADE"] = "DOWNGRADE";
    LicensePeriodReason["PLAN_CHANGE"] = "PLAN_CHANGE";
    LicensePeriodReason["MANUAL_ADJUSTMENT"] = "MANUAL_ADJUSTMENT";
})(LicensePeriodReason || (exports.LicensePeriodReason = LicensePeriodReason = {}));
var LicenseBillingStatus;
(function (LicenseBillingStatus) {
    LicenseBillingStatus["OK"] = "OK";
    LicenseBillingStatus["DUE_SOON"] = "DUE_SOON";
    LicenseBillingStatus["DUE"] = "DUE";
    LicenseBillingStatus["OVERDUE"] = "OVERDUE";
})(LicenseBillingStatus || (exports.LicenseBillingStatus = LicenseBillingStatus = {}));
var SentEmailStatus;
(function (SentEmailStatus) {
    SentEmailStatus["QUEUED"] = "QUEUED";
    SentEmailStatus["SENT"] = "SENT";
    SentEmailStatus["DELIVERED"] = "DELIVERED";
    SentEmailStatus["OPENED"] = "OPENED";
    SentEmailStatus["CLICKED"] = "CLICKED";
    SentEmailStatus["BOUNCED"] = "BOUNCED";
    SentEmailStatus["FAILED"] = "FAILED";
})(SentEmailStatus || (exports.SentEmailStatus = SentEmailStatus = {}));
var EmailCorrelationType;
(function (EmailCorrelationType) {
    EmailCorrelationType["TRANSACTION"] = "TRANSACTION";
    EmailCorrelationType["USER"] = "USER";
    EmailCorrelationType["MERCHANT"] = "MERCHANT";
    EmailCorrelationType["KYC"] = "KYC";
    EmailCorrelationType["LICENSE"] = "LICENSE";
    EmailCorrelationType["SYSTEM"] = "SYSTEM";
    EmailCorrelationType["OTHER"] = "OTHER";
})(EmailCorrelationType || (exports.EmailCorrelationType = EmailCorrelationType = {}));
var EmailType;
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
})(EmailType || (exports.EmailType = EmailType = {}));
var PayoutSourceType;
(function (PayoutSourceType) {
    PayoutSourceType["ACCOUNT"] = "ACCOUNT";
    PayoutSourceType["CLIENT"] = "CLIENT";
    PayoutSourceType["WALLET"] = "WALLET";
    PayoutSourceType["PAYMENT_ORDER"] = "PAYMENT_ORDER";
    PayoutSourceType["OTHER"] = "OTHER";
})(PayoutSourceType || (exports.PayoutSourceType = PayoutSourceType = {}));
var CardCaptureSessionStatus;
(function (CardCaptureSessionStatus) {
    CardCaptureSessionStatus["PENDING"] = "PENDING";
    CardCaptureSessionStatus["TOKEN_GENERATED"] = "TOKEN_GENERATED";
    CardCaptureSessionStatus["COMPLETED"] = "COMPLETED";
    CardCaptureSessionStatus["EXPIRED"] = "EXPIRED";
    CardCaptureSessionStatus["FAILED"] = "FAILED";
})(CardCaptureSessionStatus || (exports.CardCaptureSessionStatus = CardCaptureSessionStatus = {}));
var ConfigValueType;
(function (ConfigValueType) {
    ConfigValueType["STRING"] = "STRING";
    ConfigValueType["NUMBER"] = "NUMBER";
    ConfigValueType["BOOLEAN"] = "BOOLEAN";
    ConfigValueType["JSON"] = "JSON";
    ConfigValueType["ARRAY_STRING"] = "ARRAY_STRING";
    ConfigValueType["ARRAY_NUMBER"] = "ARRAY_NUMBER";
})(ConfigValueType || (exports.ConfigValueType = ConfigValueType = {}));
