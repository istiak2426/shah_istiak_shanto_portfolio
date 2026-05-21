const { Groq } = require("groq-sdk");

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

    // Groq client initialize
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile", // free tier-এর জন্য দারুণ মডেল
      temperature: 0.7,
    });

    const aiReply = chatCompletion.choices[0]?.message?.content || "No response from AI.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: aiReply }),
    };
  } catch (error) {
    console.error("FULL ERROR:", error.message || error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "AI server error." }),
    };
  }
};
