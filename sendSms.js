// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
//
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken  = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Ahoy from Twilio!', from: '+16783647909', to: '+14086271631'})
      .then(message => console.log(message.sid));
