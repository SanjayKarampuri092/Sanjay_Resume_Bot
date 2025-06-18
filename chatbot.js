
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

async function sendMessage() {
  const message = userInput.value;
  if (!message.trim()) return;
  chatbox.innerHTML += "<div><b>You:</b> " + message + "</div>";
  userInput.value = "";
  
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer SK-Sanjay Karampuri"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an AI assistant representing Sanjay Karampuri. Use the following data to answer professionally." },
        { role: "user", content: message + "\n\nResume data: " + JSON.stringify(resumeData) }
      ]
    })
  });

  const data = await response.json();
  const reply = data.choices[0].message.content;
  chatbox.innerHTML += "<div><b>SanjayBot:</b> " + reply + "</div>";
  chatbox.scrollTop = chatbox.scrollHeight;
}

const resumeData = {"name": "Sanjay Karampuri", "title": "Senior BI Developer", "location": "Pune, India", "personality": "I'm a highly analytical and collaborative data professional who thrives on building scalable BI solutions and driving insights through storytelling.", "skills": ["Power BI", "Looker Studio / Looker ML", "Tableau", "MicroStrategy", "SQL", "Python", "Google Big Query", "Microsoft Azure"], "specialties": ["Data Analytics & Business Intelligence", "Digital Transformations", "Financial Planning & Analysis", "Business Performance Management", "Project Management", "Business Analytics"], "experience": [{"role": "Sr. BI Developer", "company": "Metro Global Business Services, Pune", "period": "Sep 2023 \u2013 Present", "summary": "Leads a BI team delivering analytics projects using BigQuery and MicroStrategy. Manages project proposals, stakeholder engagement, and team delivery."}, {"role": "Sr. Advisor - Data Analytics", "company": "Maersk Global Business Services, Pune", "period": "Nov 2017 \u2013 Aug 2023", "summary": "Developed Power BI dashboards, automated reporting via Python, led a team of analysts, and managed financial performance analytics."}], "education": [{"degree": "MBA (Finance)", "year": "2012\u20132014"}, {"degree": "BSc (Computer Science)", "year": "2009\u20132012"}], "extra": {"speaking": ["Public Speaker on IT in Business Finance", "Analytics in BPM"], "teaching": ["Symbiosis Visiting Faculty", "ExcelR Trainer in BI & Analytics"], "visa": "Holds valid B1/B2 US Visa"}};
