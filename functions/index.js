// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Cloud Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.saveCustomerForm = functions.https.onRequest(async (request, response) => {
    const text = "test to write to firestore";
    const customerObject = {
        firstName: 'Erik',
        lastName: 'Boström',
        town: 'stockholm',
        formsCollection:[ {
            area: 'city',
            town: 'barcelona',
        }, ],
    }

    const writeToFirestore = await admin.firestore().collection('test-collection').add({customerObject});

    //var answers = request.body.form_response.answers;
    // answers.forEach((item) => {
    //     console.log(item.field.id);
    // });

    response.json({result: `Text with ID: ${writeToFirestore.id} added to firestore`})

    // const collection =  await admin.firestore().collection('test-collection').get
    // response.json(collection);
});

// // [START addMessage]
// // Take the text parameter passed to this HTTP endpoint and insert it into
// // Cloud Firestore under the path /messages/:documentId/original
// // [START addMessageTrigger]
// exports.addMessage = functions.https.onRequest(async (req, res) => {
//     // [END addMessageTrigger]
//       // Grab the text parameter.
//       const original = req.query.text;
//       // [START adminSdkAdd]
//       // Push the new message into Cloud Firestore using the Firebase Admin SDK.
//       const writeResult = await admin.firestore().collection('messages').add({original: original});
//       // Send back a message that we've succesfully written the message
//       res.json({result: `Message with ID: ${writeResult.id} added.`});
//       // [END adminSdkAdd]
//     });
//     // [END addMessage]
