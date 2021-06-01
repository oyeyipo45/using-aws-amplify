/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_USINGAWSAMPLIFY_ARN
	STORAGE_USINGAWSAMPLIFY_NAME
Amplify Params - DO NOT EDIT */
//const { DynamoDB } = require('aws-sdk')
const AWS = require('aws-sdk')
const uuid = require('uuid')


AWS.config.update({ region: process.env.REGION })
const dynamodb = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    let tableName = process.env.STORAGE_USINGAWSAMPLIFY_NAME;

    if (event.httpMethod === 'POST') {
        let putItemParams = {
            TableName : tableName,
            Item: {
                'id': uuid.v4(),
                'username': event.body.username,
                'profilepicture': event.body.profilepicture
            }
        } 
        try {
            const newItem = await dynamodb.put(putItemParams).promise()
        } catch (error) {
            console.log(error);
        }
    }


       let data = await dynamodb.scan({ TableName: tableName }).promise();
       console.log(data);
     
    

    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
     headers: {
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "*"
     }, 
        body: JSON.stringify(data),
    };
    return response;
};
