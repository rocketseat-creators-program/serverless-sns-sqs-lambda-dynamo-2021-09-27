
const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))

const deleteAccount = async event => {
  const sns = new AWS.SNS()

  const deleteAccountEvent = {
    ...event,
    timestamp: Math.floor(new Date().getTime() / 1000),
  }

  console.log(deleteAccountEvent)

  return sns.publish({
    Message: JSON.stringify(deleteAccountEvent),
    TopicArn: process.env.CF_DeleteAccountTopic,
  }).promise()
}

module.exports = {
  deleteAccount,
}
