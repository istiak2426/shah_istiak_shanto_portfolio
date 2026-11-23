# Shah Istiak Shanto – Portfolio

Personal portfolio built with React (Create React App) and deployed on Netlify.
The design follows the CV: light grey / slate palette, Raleway + Lato fonts, circular photo, widely spaced headings.

## Sections
Header · About · Experience (skills) · Career & Education · Services · Portfolio · Testimonials · Contact · AI chat assistant

## Getting started
```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in ./build
```

## Environment variables
| Variable | Where | Purpose |
|---|---|---|
| `GROQ_API_KEY` | Netlify site settings (server side only) | Powers the AI chat assistant (`netlify/functions/chat.js`) |
| `REACT_APP_EMAILJS_SERVICE_ID` / `REACT_APP_EMAILJS_TEMPLATE_ID` / `REACT_APP_EMAILJS_PUBLIC_KEY` | optional | Override the EmailJS keys used by the contact form |

To test the chat function locally use the Netlify CLI (`netlify dev`).

## Keeping the content in sync with the CV
- CV downloads live in `src/assets/` (`Shah_Istiak_Shanto_CV.pdf`, `Shah_Istiak_Shanto_SOC_Analyst_CV.pdf`) – replace the files, keep the names.
- Work history and education: `src/components/career/Career.jsx`.
- Facts used by the chat assistant: `SYSTEM_PROMPT` in `netlify/functions/chat.js`.
- Colours and fonts: CSS variables at the top of `src/index.css`.
