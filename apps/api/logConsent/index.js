const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "VigilEye_ConsentLogs";

exports.handler = async (event) => {
    const { url } = JSON.parse(event.body);

    const entry = {
        id: uuidv4(),
        url,
        timestamp: Date.now(),
        domain: new URL(url).hostname,
    };

    await dynamo
        .put({
            TableName: TABLE_NAME,
            Item: entry,
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Consent logged", entry }),
    };
};
