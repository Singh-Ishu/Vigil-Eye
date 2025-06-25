const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "VigilEye_Subscriptions";

exports.handler = async () => {
    const result = await dynamo.scan({ TableName: TABLE_NAME }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify(result.Items || []),
    };
};
