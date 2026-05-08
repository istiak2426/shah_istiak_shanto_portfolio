const axios = require("axios");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const userMessage = body.message;

    const prompt = `
You are Shah Istiak Shanto's AI portfolio assistant.

About him:
- .NET Developer
- ASP.NET
- Blazor
- SQL Server
- PostgreSQL
- MySQL
- JavaScript
- ERP Development
- HRIS
- IT Help Desk System

Answer professionally and briefly.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `${prompt}\n\nUser: ${userMessage}`,
              },
            ],
          },
        ],
      }
    );

    const aiReply =
      response.data.candidates[0].content.parts[0].text;

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: aiReply,
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "AI server error.",
      }),
    };
  }
};
