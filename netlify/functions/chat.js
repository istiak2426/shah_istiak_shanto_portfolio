const axios = require("axios");

exports.handler = async (event) => {
  try {
    const { message } = JSON.parse(event.body);

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

User Question:
${message}
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const aiReply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI.";

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: aiReply,
      }),
    };
  } catch (error) {
    console.error(
      "FULL ERROR:",
      error.response?.data || error.message
    );

    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "AI server error.",
      }),
    };
  }
};
