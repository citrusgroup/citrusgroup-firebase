'use strict';
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
exports.n8sCustomerForm = functions.https.onRequest(async (request, response) => {
    response.json({nathan: "hello erik"});
});

exports.saveCustomerForm = functions.https.onRequest(async (request, response) => {
    const customerObject = {
        contactID: "123456789",
        fullName: "Erik Boström",
        email: "erikbostrom1@gmail.com",
        phoneNumber: "0767232742"
    };

    const customerFormObject = {
        constactID: "123456789",
        budget: 200000,
        monthlyCost: 5000.50,
        realEstateType: [
            "Appartment",
            "House"
        ],
        floor: "1st",
        squareM2: {
            "max": "150",
            "min": "50"
        },
        area: [
            "Costa Blanca",
            "Costa Calida",
            "Mallorca",
            "Costa de Almeria"
        ],
        environment: [
            "Golf",
            "Nightlife",
            "Shopping"
        ],
        balcony: true,
        garden: true,
        pool: "that would be nice",
        rentOut: false,
        whenInTimeToBuy: "6-12 month"
    };
 /*   let fieldsArray = [];
    typeformTestDataObject.form_response.definition.fields.forEach((fieldObject)=> {
        fieldsArray.push(fieldObject);
    });
    response.json(fieldsArray);*/
    const writeCustomer = await admin.firestore().collection('customer-collection').add({customerObject});
    const writeCustomerForm = await admin.firestore().collection('customer-form-collection').add({customerFormObject});

    response.json({
        customerID: writeCustomer.id,
        customerFormID: writeCustomerForm.id
    });
});


const typeformTestDataObject = {
    "event_id": "01DQ5QBS1DHYHSEV7KR5THSHQ0",
    "event_type": "form_response",
    "form_response": {
        "form_id": "LoS61w",
        "token": "01DQ5QBS1DHYHSEV7KR5THSHQ0",
        "landed_at": "2019-10-14T18:09:24Z",
        "submitted_at": "2019-10-14T18:09:24Z",
        "definition": {
            "id": "LoS61w",
            "title": "Citrusgruppen Search",
            "fields": [
                {
                    "id": "cjxD3OKQxB2K",
                    "title": "Vilken typ av fastighet letar du efter?",
                    "type": "picture_choice",
                    "allow_multiple_selections": true,
                    "ref": "fcf7a76f-29d2-4eac-b3fb-6ae2ebe1b919",
                    "properties": {},
                    "choices": [
                        {
                            "id": "IjpidiWyZGK3",
                            "label": "Lägenhet"
                        },
                        {
                            "id": "jQT2FTSBEmmS",
                            "label": "Hus"
                        },
                        {
                            "id": "x9n1vPa5wKZJ",
                            "label": "Radhus"
                        }
                    ]
                },
                {
                    "id": "UcafUNOir0pi",
                    "title": "Hur många sovrum?",
                    "type": "number",
                    "ref": "6b488ddc-fb97-486c-8150-61c4afe70fcc",
                    "properties": {}
                },
                {
                    "id": "zQcK9fTtWxNz",
                    "title": "Hur många badrum?",
                    "type": "number",
                    "ref": "611451eb-dc15-47da-b1a4-55da7c8c39d6",
                    "properties": {}
                },
                {
                    "id": "Mobtafa9cgK9",
                    "title": "Hur många allrum?",
                    "type": "number",
                    "ref": "6e1f93e2-a091-4332-8acf-73fac0e836fc",
                    "properties": {}
                },
                {
                    "id": "dG7XiPK1ARx9",
                    "title": "Är en terrass eller balkong ett måste?",
                    "type": "yes_no",
                    "ref": "947aec18-bc62-47e7-baf5-1ea8c7739d21",
                    "properties": {}
                },
                {
                    "id": "UxfjAcqSaBQH",
                    "title": "Har du några tankar kring våningsplan?",
                    "type": "multiple_choice",
                    "ref": "03807a7c-eab8-4871-b261-745e69840e6a",
                    "properties": {},
                    "choices": [
                        {
                            "id": "vzuCDpIF8LUP",
                            "label": "Bottenvåning"
                        },
                        {
                            "id": "mNvdwz1kcGW7",
                            "label": "Övervåningar"
                        },
                        {
                            "id": "NeZ8ntVsrbfK",
                            "label": "Det är inte viktigt"
                        }
                    ]
                },
                {
                    "id": "uSfS6AF1OK7o",
                    "title": "Vilket område letar du främst i?",
                    "type": "picture_choice",
                    "ref": "6f42d238-83d6-4f95-a0a2-d862075fed13",
                    "properties": {},
                    "choices": [
                        {
                            "id": "X5NabozDGNlc",
                            "label": "Costa Blanca"
                        },
                        {
                            "id": "lbgPndW99s9J",
                            "label": "Costa Calida"
                        },
                        {
                            "id": "FO7J2xbEhHND",
                            "label": "Costa de Almeria"
                        },
                        {
                            "id": "tfFsdqKuwijS",
                            "label": "Costa del Sol"
                        },
                        {
                            "id": "mkuRtX0zX3QA",
                            "label": "Mallorca"
                        },
                        {
                            "id": "Z1sVNpCYxlVl",
                            "label": "Det är inte viktigt"
                        }
                    ]
                },
                {
                    "id": "Ciu0xREGomnW",
                    "title": "Vilka typer av prioriterar du?",
                    "type": "picture_choice",
                    "ref": "91fb2437-dbfe-4cec-b0f9-46860044a7c6",
                    "properties": {},
                    "choices": [
                        {
                            "id": "GAyX5JyFS4LJ",
                            "label": "Golf"
                        },
                        {
                            "id": "kGuLgupgnpfj",
                            "label": "Nattliv"
                        },
                        {
                            "id": "nnqLtZ5Sg7Wf",
                            "label": "Familjevänligt"
                        },
                        {
                            "id": "YU2F4DH5lp04",
                            "label": "Nära en flygplats"
                        },
                        {
                            "id": "v9l0H31hSvqW",
                            "label": "Shopping"
                        },
                        {
                            "id": "qkKeqsxVM2IN",
                            "label": "Nära strand & hav"
                        },
                        {
                            "id": "qMHWnzG8J4Jl",
                            "label": "Nära City & Centrum"
                        },
                        {
                            "id": "QcoYRDWS0lCt",
                            "label": "Träning och fitness"
                        }
                    ]
                },
                {
                    "id": "BAhVr5DStOGg",
                    "title": "Är ",
                    "type": "picture_choice",
                    "ref": "362b125c-3abd-4e00-8951-43bf3cf00708",
                    "properties": {},
                    "choices": [
                        {
                            "id": "lUBrrEB5TZjg",
                            "label": "choice 1"
                        }
                    ]
                }
            ]
        },
        "answers": [
            {
                "type": "choices",
                "choices": {
                    "labels": [
                        "Barcelona"
                    ]
                },
                "field": {
                    "id": "cjxD3OKQxB2K",
                    "type": "picture_choice",
                    "ref": "fcf7a76f-29d2-4eac-b3fb-6ae2ebe1b919"
                }
            },
            {
                "type": "number",
                "number": 42,
                "field": {
                    "id": "UcafUNOir0pi",
                    "type": "number",
                    "ref": "6b488ddc-fb97-486c-8150-61c4afe70fcc"
                }
            },
            {
                "type": "number",
                "number": 42,
                "field": {
                    "id": "zQcK9fTtWxNz",
                    "type": "number",
                    "ref": "611451eb-dc15-47da-b1a4-55da7c8c39d6"
                }
            },
            {
                "type": "number",
                "number": 42,
                "field": {
                    "id": "Mobtafa9cgK9",
                    "type": "number",
                    "ref": "6e1f93e2-a091-4332-8acf-73fac0e836fc"
                }
            },
            {
                "type": "boolean",
                "boolean": true,
                "field": {
                    "id": "dG7XiPK1ARx9",
                    "type": "yes_no",
                    "ref": "947aec18-bc62-47e7-baf5-1ea8c7739d21"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Barcelona"
                },
                "field": {
                    "id": "UxfjAcqSaBQH",
                    "type": "multiple_choice",
                    "ref": "03807a7c-eab8-4871-b261-745e69840e6a"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Barcelona"
                },
                "field": {
                    "id": "uSfS6AF1OK7o",
                    "type": "picture_choice",
                    "ref": "6f42d238-83d6-4f95-a0a2-d862075fed13"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Barcelona"
                },
                "field": {
                    "id": "Ciu0xREGomnW",
                    "type": "picture_choice",
                    "ref": "91fb2437-dbfe-4cec-b0f9-46860044a7c6"
                }
            },
            {
                "type": "choice",
                "choice": {
                    "label": "Barcelona"
                },
                "field": {
                    "id": "BAhVr5DStOGg",
                    "type": "picture_choice",
                    "ref": "362b125c-3abd-4e00-8951-43bf3cf00708"
                }
            }
        ]
    }
};