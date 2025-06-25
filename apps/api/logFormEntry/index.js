const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "VigilEye_FormLogs";

exports.handler = async (event) => {
    const { email, phone, website, purpose } = JSON.parse(event.body);

    const entry = {
        id: uuidv4(),
        email,
        phone,
        website,
        purpose,
        timestamp: Date.now(),
    };

    await dynamo
        .put({
            TableName: TABLE_NAME,
            Item: entry,
        })
        .promise();

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Form entry logged", entry }),
    };
};
