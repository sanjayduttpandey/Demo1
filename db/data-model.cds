namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

// using an external service from S/4
using {  API_BUSINESS_PARTNER as external } from '../srv/external/API_BUSINESS_PARTNER';

entity BusinessPartner as projection on external.A_BusinessPartner {
    key BusinessPartner as ID,
        BusinessPartnerFullName as fullName,
        BusinessPartnerIsBlocked as isBlocked,
}