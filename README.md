Alloy’s Technical Account Manager work assignment

I. Frontend URL: 
https://alloy-frontend.onrender.com/ 

(Backend API located at https://alloyapp.onrender.com. 
 Please find supplementary testing screenshots in the repository)

II. Tech Stack:  
 Frontend - HTML, CSS  
 Backend - Node.js, Express  
 Depolyment - Render 

III. Test Cases:    
Open URL https://alloy-frontend.onrender.com/ and submit an application with different last names for different results.

1. Last name "Review" will result in an outcome of Manual Review
2. Last name "Deny" will result in an outcome of Denied
3. Other last names will result in an approved application

*Validation checks are added throughout the form, eg. SSN, State, DOB format etc

IV. Sample API Request & Response:

Sending to Alloy API:
{
  "name_first": "Chang",
  "name_last": "Deny",
  "email_address": "c@gmail.com",
  "birth_date": "1994-07-17",
  "document_ssn": "345678934",
  "address_line_1": "15 S End Ave ",
  "address_line_2": "3C",
  "address_city": "NYC",
  "address_state": "NY",
  "address_postal_code": "10002",
  "address_country_code": "US"
}

Response from Alloy API:
{
  "status_code": 201,
  "error": null,
  "timestamp": 1761104779542,
  "evaluation_token": "S-qnf0qsecZgBUWyNgjYVe",
  "entity_token": "P-SebzknteSctDT5TtTZCJ",
  "parent_entity_token": null,
  "application_token": "eQAM2xzjo2lJkRDT86LyhVrMzJPuqS0Z",
  "application_version_id": 1,
  "champion_challenger_id": null,
  "summary": {
    "result": "success",
    "score": 0.99,
    "tags": [
      "High Risk"
    ],
    "outcome_reasons": [],
    "outcome": "Denied",
    "services": {
      "Socure 30": "executed"
    },
    "alloy_fraud_score": null
  },
  "supplied": {
    "name_first": "C",
    "name_last": "Deny",
    "email_address": "c@gmail.com",
    "birth_date": "1994-07-17",
    "document_ssn": "345678934",
    "address_line_1": "15g ",
    "address_line_2": "",
    "address_city": "NYC",
    "address_state": "NY",
    "address_postal_code": "10002",
    "address_country_code": "US"
  },
  "formatted": {
    "name_first": "C",
    "name_last": "Deny",
    "email_address": "c@gmail.com",
    "birth_date": "1994-07-17",
    "document_ssn": "345678934",
    "address_line_1": "15g ",
    "address_line_2": "",
    "address_city": "NYC",
    "address_state": "NY",
    "address_postal_code": "10002",
    "address_country_code": "US",
    "age": "31"
  },
  "matching": {
    "email": {
      "score": 0.99,
      "matched": [
        "Socure 30"
      ],
      "unmatched": []
    },
    "address": {
      "score": 0.99,
      "matched": [
        "Socure 30"
      ],
      "unmatched": []
    },
    "name": {
      "score": 0.99,
      "matched": [
        "Socure 30"
      ],
      "unmatched": []
    },
    "dob": {
      "score": 0.99,
      "matched": [
        "Socure 30"
      ],
      "unmatched": []
    },
    "ssn": {
      "score": 0.99,
      "matched": [
        "Socure 30"
      ],
      "unmatched": []
    },
    "average_score": 0.99
  },
  "diligence": {
    "watchlists": null,
    "fraud": {
      "average_score": 0.79,
      "flags": [],
      "sources": {
        "Socure 30": {
          "normalized_score": 0.79,
          "raw_score": 0.99,
          "attribute": "Sigma Fraud Score"
        }
      },
      "score": 0.79
    },
    "financial": null,
    "identity_questions": null,
    "device": null
  },
  "related_data": {
    "social": [
      {
        "type": "Facebook",
        "url": "https://www.facebook.com/dog",
        "id": "dog"
      },
      {
        "type": "Google Plus",
        "url": "https://plus.google.com/dog",
        "id": "dog"
      }
    ]
  },
  "raw_responses": {
    "Socure 30": [
      {
        "referenceId": "12345",
        "alertList": {
          "reasonCodes": [],
          "matches": []
        },
        "nameAddressCorrelation": {
          "reasonCodes": [],
          "score": 0.99
        },
        "nameEmailCorrelation": {
          "reasonCodes": [],
          "score": 0.99
        },
        "namePhoneCorrelation": {
          "reasonCodes": [],
          "score": 0.99
        },
        "fraud": {
          "reasonCodes": [],
          "scores": [
            {
              "name": "generic",
              "version": "3.0",
              "score": 0.1
            },
            {
              "name": "sigma",
              "version": "3.0",
              "score": 0.99
            }
          ]
        },
        "synthetic": {
          "scores": [
            {
              "name": "synthetic",
              "version": "1.0",
              "score": 0.1
            }
          ]
        },
        "kyc": {
          "reasonCodes": [],
          "fieldValidations": {
            "firstName": 0.99,
            "surName": 0.99,
            "streetAddress": 0.99,
            "city": 0.99,
            "state": 0.99,
            "zip": 0.99,
            "mobileNumber": 0.99,
            "dob": 0.99,
            "ssn": 0.99,
            "driverLicense": 0.99,
            "driversLicense": 0
          }
        },
        "kycPlus": {
          "reasonCodes": [],
          "fieldValidations": {
            "firstName": 0.99,
            "surName": 0.99,
            "streetAddress": 0.99,
            "city": 0.99,
            "state": 0.99,
            "zip": 0.99,
            "mobileNumber": 0.99,
            "dob": 0.99,
            "ssn": 0.99,
            "driverLicense": 0.99,
            "driversLicense": 0
          },
          "bestMatchedEntity": {
            "firstName": "C",
            "surName": "Deny",
            "middleName": "Doc",
            "suffix": "Jr",
            "ssn": "345678934",
            "dob": "1994-07-17",
            "mobileNumber": "12063588927",
            "normalizedAddress": {
              "streetAddress": "15g , Apt 2",
              "city": "NYC",
              "state": "NY",
              "zip": "10002"
            },
            "associatedPhoneNumbers": [
              {
                "phoneNumber": "+13475551234",
                "type": "landline"
              }
            ],
            "associatedAddresses": [
              {
                "streetAddress": "15g , Apt 2",
                "city": "NYC",
                "state": "NY",
                "zip": "10002",
                "firstSeenDate": "2020-01-01",
                "reasonCodes": []
              }
            ]
          }
        },
        "social": {
          "profilesFound": [
            "https://gravatar.com/dog",
            "http://vimeo.com/dog",
            "https://www.facebook.com/dog",
            "https://plus.google.com/dog"
          ],
          "reasonCodes": []
        },
        "addressRisk": {
          "score": 0,
          "reasonCodes": []
        },
        "emailRisk": {
          "score": 0,
          "reasonCodes": []
        },
        "phoneRisk": {
          "score": 0,
          "reasonCodes": []
        },
        "prefill": {
          "firstName": "John",
          "surName": "Smith",
          "middleName": "Doc",
          "suffix": "Jr",
          "dob": "1994-07-17",
          "streetAddress": "15g , Apt 2",
          "city": "NYC",
          "state": "NY",
          "zip": "10002",
          "associatedAddresses": [
            {
              "streetAddress": "15g ",
              "city": "NYC",
              "state": "NY",
              "zip": "10002"
            },
            {
              "streetAddress": "15g ",
              "city": "NYC",
              "state": "NY",
              "zip": "10002"
            },
            {
              "streetAddress": "15g ",
              "city": "NYC",
              "state": "NY",
              "zip": "10002"
            }
          ]
        },
        "accountIntelligence": {
          "reasonCodes": [],
          "account": {
            "availabilityScore": 1,
            "ownershipScore": 1
          }
        },
        "firstPartyFraud": {
          "reasonCodes": [],
          "signals": {
            "identity": {
              "countInstitutions": 9,
              "countDistinctFirstName": 2,
              "countDistinctSurName": 2,
              "countDistinctDOB": 1,
              "countDistinctMobileNumber": 5,
              "countDistinctEmail": 4,
              "countDistinctPhysicalAddress": 11,
              "countDistinctCity": 7,
              "countDistinctState": 3,
              "countDistinctZip": 7,
              "countUniqueUsers": 11
            },
            "application": {
              "countApplications": 9,
              "listApplicationDates": [
                "20160602",
                "20210315"
              ],
              "listDaysBetweenApplications": [
                3149
              ],
              "countApprovedApplications": 3,
              "countDeclinedApplications": 2,
              "countApplicationDeclineReasonSuspectedTPF": 0,
              "countApplicationDeclineReasonSuspectedFPF": 0,
              "countApplicationDeclineReasonOther": 1,
              "countApplicationFraud": 0,
              "countApplicationFraudCategorySuspectedTPF": 0,
              "countApplicationFraudCategorySuspectedFPF": 0,
              "countApplicationFraudCategoryOther": 0,
              "countApplicationFraudCategoryDelinquency": 0
            },
            "account": {
              "countAccounts": 12,
              "countAccountStatusActive": 4,
              "listAccountOpenDates": [
                "20170327",
                "20190123"
              ],
              "listDaysBetweenAccountOpening": [
                1857
              ],
              "countAccountStatusClosed": 8,
              "countClosedAccountUserRequest": 1,
              "listAccountClosedDates": [
                "20180927",
                "20201003"
              ],
              "listDaysToAccountClosure": [
                515,
                549
              ],
              "listDaysBetweenAccountClosures": [
                1944
              ],
              "countFraudAccounts": 0,
              "countAccountsWithFraudLoss": 2,
              "totalAccountFraudLossAmount": 4328.71,
              "listFraudLabeledAccountDates": [
                "20201003",
                "20220812"
              ],
              "listDaysToFraudLabeledAccount": [
                176,
                619,
                515
              ],
              "listDaysBetweenAccountLabeledFraud": [
                678
              ],
              "countAccountFraudCategorySuspectedTPF": 0,
              "countAccountFraudCategorySuspectedFPF": 0,
              "countAccountFraudCategoryOther": 0,
              "countAccountFraudCategoryDelinquency": 1
            },
            "achTransaction": {
              "countFraudACHTxns": 0,
              "countFraudACHCreditTxns": 0,
              "countFraudACHDebitTxns": 0,
              "listFraudACHTxnDates": [],
              "listDaysToFraudACHTxn": [],
              "listDaysBetweenFraudACHTxn": [],
              "countACHTxnFraudCategorySuspectedTPF": 0,
              "countACHTxnFraudCategorySuspectedFPF": 0,
              "countACHTxnFraudCategoryOther": 0,
              "countACHTxnFraudCategoryDelinquency": 0,
              "countReturnACHTxns": 6,
              "totalReturnACHTxnAmount": 8000,
              "countReturnACHCreditTxns": 6,
              "countReturnACHDebitTxns": 0,
              "listDaysToReturnACHTxns": [
                338,
                458,
                457,
                346
              ],
              "listReturnACHTxnDates": [
                "20220216",
                "20220224",
                "20220615",
                "20220616"
              ],
              "listDaysBetweenReturnACHTxn": [
                1,
                8,
                111,
                112,
                119,
                120
              ],
              "countACHTxnReturnCategoryBadStandingOriginatorAccount": 0,
              "countACHTxnReturnCategoryError": 0,
              "countACHTxnReturnCategoryAccountNotFound": 0,
              "countACHTxnReturnCategoryFraudulentActivity": 0
            },
            "checkTransaction": {
              "countFraudCheckTxns": 0,
              "countFraudCheckCreditTxns": 0,
              "listFraudCheckTxnDates": [],
              "listDaysToFraudCheckTxn": [],
              "listDaysBetweenFraudCheckTxn": [],
              "countCheckTxnFraudCategorySuspectedTPF": 0,
              "countCheckTxnFraudCategorySuspectedFPF": 0,
              "countCheckTxnFraudCategoryOther": 0,
              "countCheckTxnFraudCategoryDelinquency": 0,
              "countReturnCheckTxns": 1,
              "totalReturnCheckTxnAmount": 250,
              "countReturnCheckCreditTxns": 1,
              "countReturnCheckDebitTxns": 0,
              "listReturnCheckTxnDates": [
                "20210310"
              ],
              "listDaysToReturnCheckTxn": [],
              "listDaysBetweenReturnCheckTxn": [],
              "countCheckTxnReturnCategoryBadStandingOriginatorAccount": 0,
              "countCheckTxnReturnCategoryError": 1,
              "countCheckTxnReturnCategoryAccountNotFound": 0,
              "countCheckTxnReturnCategoryFraudulentActivity": 0,
              "countCheckTxnReturnCategorySuspiciousActivity": 0,
              "countCheckTxnReturnCategoryOther": 0,
              "countStopCheckTxns": 2,
              "totalStopCheckTxnAmount": 900,
              "countStopCheckCreditTxns": 2,
              "countStopCheckDebitTxns": 0,
              "listStopCheckTxnDates": [
                "20210304",
                "20210305"
              ],
              "listDaysToStopCheckTxn": [],
              "listDaysBetweenStopCheckTxn": [
                1
              ]
            },
            "cardTransaction": {
              "countFraudCardTxns": 0,
              "countFraudCardDomesticTxns": 0,
              "countFraudCardInternationalTxns": 0,
              "listFraudCardTxnDates": [],
              "listDaysToFraudCardTxn": [],
              "listDaysBetweenFraudCardTxn": [],
              "countCardTxnFraudCategoryOther": 0,
              "countDisputeCardTxns": 26,
              "totalDisputeCardTxnAmount": 7220.62,
              "countDisputeCardDomesticTxns": 0,
              "countDisputeCardInternationalTxns": 0,
              "listDisputeCardTxnDates": [
                "20200411",
                "20210818"
              ],
              "listDaysToDisputeCardTxn": [],
              "listDaysBetweenDisputeCardTxn": [
                494
              ],
              "countCardTxnDisputeCategoryUnauthorized": 0,
              "countCardTxnDisputeCategoryAuthorized": 26,
              "countCardTxnDisputeOutcomeGranted": 2,
              "countCardTxnDisputeOutcomeNotGranted": 24,
              "countCardTxnDisputeOutcomeOther": 0,
              "countStopCardTxns": 0,
              "listStopCardTxnDates": [],
              "listDaysToStopCardTxn": [],
              "listDaysBetweenStopCardTxn": []
            }
          },
          "scores": [
            {
              "name": "Identity Manipulation",
              "version": "1.0",
              "score": 0.686
            }
          ]
        },
        "error": {
          "msg": "\"\""
        },
        "watchlist": {
          "reasonCodes": []
        },
        "status": "",
        "deviceRisk": {
          "score": 0,
          "reasonCodes": []
        },
        "msg": ""
      }
    ]
  },
  "formatted_responses": {
    "Socure 30": {
      "data": {
        "reasonCodes": [],
        "watchLists": {
          "internationalPEP": 0,
          "internationalOFAC": 0,
          "domesticPEP": 0,
          "domesticOFAC": 0,
          "ofac": 0,
          "adverseMedia": 0,
          "enforcement": 0,
          "Cuban_Restricted_Entities_list_max_matchScore": 0,
          "ofac_sdn_max_correlation_score": 100,
          "FinCEN_311_Special_Measures_list_max_matchScore": 0,
          "OFAC_Consolidated_list_max_matchScore": 0,
          "adverse_media_max_correlation_score": 100,
          "OFAC_SDN_list_max_matchScore": 0,
          "united_nations_consolidated_max_correlation_score": 100,
          "adverseMedia_Consolidated_list_max_matchScore": 0,
          "ofac_consolidated_max_correlation_score": 100,
          "pep_max_correlation_score": 0
        },
        "fraudScores": {
          "generic": 0.1,
          "sigma": 0.99,
          "sigmaSynthetic": 0.1,
          "sigmaFirstParty": 0.686
        },
        "kycValidation": {
          "firstName": true,
          "surName": true,
          "streetAddress": true,
          "city": true,
          "state": true,
          "zip": true,
          "dob": true,
          "mobileNumber": true,
          "ssn": true
        },
        "http_status": {
          "error": false,
          "message": "",
          "status": "success"
        },
        "socure": {
          "kycplus": {
            "mobileNumber": {
              "validation": 0
            },
            "ssn": {
              "validation": 0
            },
            "state": {
              "validation": 0
            },
            "zipCode": {
              "validation": 0
            },
            "streetAddress": {
              "validation": 0
            },
            "lastname": {
              "validation": 0.99
            },
            "city": {
              "validation": 0
            },
            "transactionid": "",
            "driversLicense": {
              "validation": 0
            },
            "dateOfBirth": {
              "validation": 0
            },
            "firstname": {
              "validation": 0.99
            }
          },
          "kyc": {
            "nationlId": 9
          },
          "prefill": {
            "ssnFirst5": 5
          }
        },
        "global_watchlist": {
          "r180": false,
          "r181": false,
          "r183": false,
          "r182": false,
          "r186": false,
          "r185": false,
          "r184": false
        },
        "eCBSV": {
          "I998": true,
          "R999": false,
          "R997": false,
          "R998": false,
          "I999": true,
          "R996": false
        },
        "rules": {
          "reason_codes": {
            "R561": false,
            "R653": false,
            "R610": false
          }
        },
        "error_message_type_2": "\"\"",
        "international_pep_temp": 80,
        "error_message": "\"\"",
        "watchlist_handler_error": false
      },
      "matching": {
        "email": {
          "score": 0.99,
          "matched": true
        },
        "phone": {
          "score": 0.99,
          "matched": true
        },
        "address": {
          "score": 0.99,
          "matched": true
        },
        "name": {
          "score": 0.99,
          "matched": true
        },
        "dob": {
          "score": 0.99,
          "matched": true
        },
        "ssn": {
          "score": 0.99,
          "matched": true
        }
      }
    }
  },
  "audit_archive": null,
  "triggered_journeys": []
}
Outcome: Denied
