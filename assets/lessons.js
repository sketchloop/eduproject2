// assets/lessons.js
// Full multi-track curriculum

const PATHLIFT_TRACKS = [
  {
    id: "life",
    name: "Life Skills & Stability",
    description: "Routines, time, goals, recovery-friendly strategies, and confidence.",
    lessons: [
      {
        id: "life-1",
        title: "Building a Stable Routine",
        type: "lesson",
        steps: [
          "Write down what a typical day looks like for you now.",
          "Circle one time block where you could realistically add 20–30 minutes of learning.",
          "Create a simple daily routine: wake time, meals, learning, rest.",
          "Pick one small habit to try for 7 days (example: 10 minutes of reading)."
        ],
        reflection: "What part of your day feels most under your control right now?"
      },
      {
        id: "life-2",
        title: "Time Management That Doesn’t Suck",
        type: "lesson",
        steps: [
          "List 3 things that regularly steal your time (scrolling, TV, chaos, etc.).",
          "For each one, write one way to reduce it by 10–15 minutes.",
          "Create a simple to‑do list for tomorrow with only 3 items.",
          "At the end of the day, check off what you did and write one win."
        ],
        reflection: "What’s one time‑waster you’re willing to shrink this week?"
      },
      {
        id: "life-3",
        title: "Goals That Don’t Feel Fake",
        type: "lesson",
        steps: [
          "Write one long‑term goal (example: work in tech support, work at Apple retail, stable housing).",
          "Break it into 3 medium goals (skills, money, stability).",
          "Break the first medium goal into 3 tiny actions you can do this week.",
          "Schedule those tiny actions into your routine."
        ],
        reflection: "What’s one goal that actually feels like it matters to you?"
      }
    ]
  },

  {
    id: "digital",
    name: "Digital Skills",
    description: "Email, docs, spreadsheets, online safety, and productivity tools.",
    lessons: [
      {
        id: "digital-1",
        title: "Email & Online Communication",
        type: "lesson",
        steps: [
          "Create or review a professional email address (avoid nicknames, numbers like 420, etc.).",
          "Draft an email to a teacher or mentor asking for feedback on your goals.",
          "Practice replying to an email clearly: greet, answer, ask, close.",
          "Learn to spot scams: check sender, links, and tone (pressure, threats, prizes)."
        ],
        reflection: "What’s one email you could send this week that would move you forward?"
      },
      {
        id: "digital-2",
        title: "Documents & Spreadsheets",
        type: "lesson",
        steps: [
          "Create a document titled “My PathLift Journey” and write 1–2 paragraphs about why you’re here.",
          "Create a spreadsheet with columns: Date, Task, Time Spent, How I Felt.",
          "Track your learning for 3 days in that sheet.",
          "Sort the sheet by Date and notice your patterns."
        ],
        reflection: "What did you notice about your energy or focus over a few days?"
      },
      {
        id: "digital-3",
        title: "Online Safety & Privacy",
        type: "lesson",
        steps: [
          "List all the places you log in regularly (email, social, banking, etc.).",
          "Choose one account and update it with a stronger password.",
          "Turn on two‑factor authentication where possible.",
          "Write down 3 red flags that make you suspicious of a message or website."
        ],
        reflection: "What’s one account you’ll secure today?"
      }
    ]
  },

  {
    id: "workplace",
    name: "Workplace Readiness",
    description: "Communication, teamwork, boundaries, and stress management.",
    lessons: [
      {
        id: "workplace-1",
        title: "Communication That Actually Lands",
        type: "lesson",
        steps: [
          "Think of a time a misunderstanding caused drama. Write what you said and what you wish you’d said.",
          "Practice active listening: repeat back what someone said in your own words.",
          "Write 3 phrases you can use when you don’t understand something at work.",
          "Practice sending a short, clear message asking for clarification."
        ],
        reflection: "What’s one phrase you can use instead of pretending you understand?"
      },
      {
        id: "workplace-2",
        title: "Boundaries & Professionalism",
        type: "lesson",
        steps: [
          "Write down one situation where your boundaries were crossed at work or in life.",
          "Write a version of that moment where you set a clear boundary.",
          "List 3 examples of professional behavior (on time, respectful, focused).",
          "List 3 things that are NOT okay at work (harassment, threats, pressure to use substances)."
        ],
        reflection: "What boundary do you want to protect in your next job?"
      },
      {
        id: "workplace-3",
        title: "Stress & Recovery in the Workplace",
        type: "lesson",
        steps: [
          "List your top 3 stress triggers (noise, conflict, deadlines, etc.).",
          "For each trigger, write one healthy coping strategy you can use on a break.",
          "If you’re in recovery, write down what support you might need around work hours.",
          "Create a “bad day” plan: who you contact, what you do, how you reset."
        ],
        reflection: "What’s one thing you can do on a bad day that doesn’t wreck your progress?"
      }
    ]
  },

  {
    id: "customer",
    name: "Customer Service & Retail",
    description: "Front‑line skills for roles like Apple Store, retail, and support.",
    lessons: [
      {
        id: "customer-1",
        title: "Serving Real People, Not Robots",
        type: "lesson",
        steps: [
          "Write down a time you had a really good customer service experience. What made it good?",
          "Write down a time you had a terrible one. What made it bad?",
          "List 3 behaviors of great customer service (listening, patience, clarity).",
          "Practice greeting a customer: eye contact, smile, simple question like “How can I help you today?”"
        ],
        reflection: "What kind of customer service person do you want to be?"
      },
      {
        id: "customer-2",
        title: "De‑escalation & Difficult People",
        type: "lesson",
        steps: [
          "Write about a time someone was angry with you (customer, family, stranger).",
          "List 3 things that made it worse and 3 things that could have helped.",
          "Learn phrases like “I hear you” and “Let’s see what we can do.”",
          "Role‑play (even in your head) a calm response to a frustrated customer."
        ],
        reflection: "What’s one phrase you can use instead of reacting in anger?"
      },
      {
        id: "customer-3",
        title: "Retail & Apple‑Style Service",
        type: "lesson",
        steps: [
          "Look up what Apple says about their retail experience (Genius Bar, support, etc.).",
          "Write down 3 things that stand out about how they treat customers.",
          "Imagine yourself in that environment: what would you need to feel confident?",
          "List 3 skills you can build now that would help in a store like that (tech comfort, patience, communication)."
        ],
        reflection: "What’s one step you can take toward being ready for a job like that?"
      }
    ]
  },

  {
    id: "tech",
    name: "Tech & IT Support",
    description: "Intro to computers, troubleshooting, basic coding, and support roles.",
    lessons: [
      {
        id: "tech-1",
        title: "What Tech Support Actually Does",
        type: "lesson",
        steps: [
          "Write down what you think a tech support person does all day.",
          "Look up a real job posting for IT support or help desk.",
          "Compare your list to the posting: what matches, what surprises you?",
          "Write 3 reasons you might be good at this kind of work."
        ],
        reflection: "What part of tech support sounds most interesting to you?"
      },
      {
        id: "tech-2",
        title: "Basic Troubleshooting Mindset",
        type: "lesson",
        steps: [
          "Learn the basic steps: observe, ask questions, try simple fixes, test, document.",
          "Think of a time you fixed something (tech or not). Write the steps you took.",
          "Practice explaining a simple fix in plain language (like restarting a device).",
          "Write 3 questions you’d ask someone who says “my computer is broken.”"
        ],
        reflection: "What’s one thing you’ve already fixed in your life that proves you can troubleshoot?"
      },
      {
        id: "tech-3",
        title: "Intro to Coding & the Web",
        type: "lesson",
        steps: [
          "Open this website’s HTML in your editor and find the title tag.",
          "Change a piece of text and refresh the page to see your change.",
          "Look up what HTML, CSS, and JavaScript each do.",
          "Write down one tiny coding goal (like learning basic HTML tags)."
        ],
        reflection: "How does it feel to know you can already edit a real website?"
      }
    ]
  },

  {
    id: "ops",
    name: "Operations & Logistics",
    description: "Scheduling, inventory, workflow, and keeping things running.",
    lessons: [
      {
        id: "ops-1",
        title: "What Operations People Actually Do",
        type: "lesson",
        steps: [
          "Think of a time you helped keep something organized (family, event, move, etc.).",
          "Write down the tasks you handled (timing, people, stuff, money).",
          "Look up an entry‑level operations or warehouse job posting.",
          "Circle any tasks you’ve already done in your own life."
        ],
        reflection: "What’s one operations skill you already have but never named?"
      },
      {
        id: "ops-2",
        title: "Scheduling & Checklists",
        type: "lesson",
        steps: [
          "Create a simple checklist for a small project (cleaning a room, planning a meal, etc.).",
          "Put the tasks in order and estimate how long each will take.",
          "Do the project and compare your estimate to reality.",
          "Write what you’d change next time to plan better."
        ],
        reflection: "How does it feel to see a plan go from list to reality?"
      },
      {
        id: "ops-3",
        title: "Inventory & Tracking",
        type: "lesson",
        steps: [
          "Pick a small area (desk, kitchen shelf, backpack) and list everything in it.",
          "Group items into categories (tools, food, tech, etc.).",
          "Imagine you’re responsible for keeping that area stocked and tidy.",
          "Write down how often you’d check it and what you’d track."
        ],
        reflection: "What’s one way you already manage “inventory” in your life?"
      }
    ]
  },

  {
    id: "career",
    name: "Career Development",
    description: "Resume, interviews, portfolio, job search, and aiming for companies like Apple.",
    lessons: [
      {
        id: "career-1",
        title: "Telling Your Story Without Shame",
        type: "lesson",
        steps: [
          "Write a raw, unfiltered version of your story (no one has to see it).",
          "Underline the parts that show strength, survival, or growth.",
          "Write a shorter version that focuses on what you’ve learned and where you’re going.",
          "Practice saying that version out loud in 1–2 minutes."
        ],
        reflection: "What part of your story are you most proud of surviving?"
      },
      {
        id: "career-2",
        title: "Resume That Doesn’t Feel Fake",
        type: "lesson",
        steps: [
          "List every job, side hustle, and responsibility you’ve had (paid or unpaid).",
          "For each one, write 2–3 bullet points starting with action verbs (helped, organized, supported, fixed).",
          "Highlight skills that matter for your target roles (customer service, tech comfort, reliability).",
          "Put it into a simple one‑page resume layout."
        ],
        reflection: "What’s one skill you have that employers should know about?"
      },
      {
        id: "career-3",
        title: "Applying to Companies Like Apple",
        type: "lesson",
        steps: [
          "Look up an entry‑level role at Apple (retail, support, operations).",
          "Write down the skills they ask for that you already have or are building.",
          "Write a short paragraph about why you’d be a good fit for that kind of role.",
          "List 3 steps you can take in the next month to move closer (finish a track, practice interviews, improve digital skills)."
        ],
        reflection: "What would it mean to you to land a job at a company you respect?"
      }
    ]
  }
];
