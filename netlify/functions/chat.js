const { Groq } = require("groq-sdk");

const MAX_MESSAGE_LENGTH = 500;

const SYSTEM_PROMPT = `
You are Shah Istiak Shanto's AI portfolio assistant. Answer questions about him professionally and briefly, using only the facts below.

About him:
- Software Engineer with 5+ years of hands-on experience in .NET and JavaScript development, ERP systems, and digital publishing platforms
- Current role: Enterprise Application Executive at Prothom Alo (Mar 2024 - Present): SQL-based ETL workflows, Python automation, SQL query optimization, application support and access management
- Previous: Junior Software Engineer at bdnews24.com (Jun 2022 - Feb 2024): backend features, REST APIs and editorial tools for a high-traffic news platform
- Earlier: IT Intern at Walton Digi-Tech Industries Ltd. (Jan 2022 - Jun 2022): deployment support for enterprise software on 400,000+ tablets for the Jonoshumari 2022 project
- Skills: C#, JavaScript, Python, ASP.NET, Node.js, SQL Server, MariaDB, MongoDB, Git, Docker, Windows, Ubuntu
- Learning: cybersecurity (security log analysis, SIEM, alert triage, incident response concepts, threat intelligence); no cybersecurity certification yet; interested in entry-level SOC Analyst roles
- Education: B.Sc. in CSE, Bangladesh University of Business & Technology (BUBT), 2015-2019
- Based in Dhaka, Bangladesh

If asked something not covered above, say you don't have that information and suggest using the contact form on the site. Do not invent facts.
`;

const reply = (statusCode, text) => ({
  statusCode,
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ reply: text }),
});

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return reply(405, "Method not allowed.");
  }

  if (!process.env.GROQ_API_KEY) {
    console.error("GROQ_API_KEY is not set");
    return reply(500, "The assistant is not configured yet.");
  }

  let message;
  try {
    ({ message } = JSON.parse(event.body || "{}"));
  } catch {
    return reply(400, "Invalid request.");
  }

  if (typeof message !== "string" || !message.trim()) {
    return reply(400, "Please type a question.");
  }

  try {
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.4,
      max_tokens: 400,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message.trim().slice(0, MAX_MESSAGE_LENGTH) },
      ],
    });

    const aiReply = chatCompletion.choices[0]?.message?.content || "No response from AI.";
    return reply(200, aiReply);
  } catch (error) {
    console.error("Chat error:", error.message || error);
    return reply(500, "AI server error. Please try again later.");
  }
};
