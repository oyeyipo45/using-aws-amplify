/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_USINGAWSAMPLIFY_ARN
	STORAGE_USINGAWSAMPLIFY_NAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
