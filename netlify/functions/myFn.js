// netlify/functions/myFunction.js
exports.handler = async (event, context) => {
    // Your Node.js code here
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from the serverless function!' }),
    };
};