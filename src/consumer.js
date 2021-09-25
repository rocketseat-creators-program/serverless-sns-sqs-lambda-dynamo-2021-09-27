const AWSXRay = require('aws-xray-sdk-core')
const AWS = AWSXRay.captureAWS(require('aws-sdk'))
const getUuid = require('uuid-by-string')

var documentClient = new AWS.DynamoDB.DocumentClient()

const recordDeleteAccountInfo = event => {
  const { email, timestamp } = JSON.parse(event.Records[0].body)
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME,
    Item: {
      userId: getUuid(email, 'rocket'),
      deletedAt: timestamp,
    },
  }
  return documentClient.put(params).promise()
}

module.exports = {
  recordDeleteAccountInfo,
}
