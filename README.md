# ⚽️ Sports Leagues App  
_A Sporty Group Interview Home Assignment_

---

## 🧠 Overview  
The **Sports Leagues App** is a single-page Angular 18 application demonstrating modern frontend practices such as **NgRx state management**, **Angular Signals**, and **performance optimization** through the **OnPush** change detection strategy.

---

## 🧰 Tech Stack  

| Technology | Purpose |
|-------------|----------|
| 🅰️ **Angular 18** | Modern framework with standalone components |
| ⚙️ **NgRx 18** | State management (Store, Effects, DevTools) |
| 🔄 **RxJS 7.8** | Reactive programming and data streams |
| 💎 **TypeScript 5.4** | Type-safe development |
| 🎨 **SCSS** | Styling with preprocessor |
| 🌐 **HttpClient** | API integration with caching |

---

## ⚙️ Installation  

### **Prerequisites**
- Node.js **v18+**
- npm **v9+**

### **Setup Steps**
```bash
# Install dependencies
npm install

# Run the development server
npm start
# or
ng serve


src/app/
├── components/
│   ├── search-bar/        # Search input using Angular Signals
│   ├── sport-filter/      # Dropdown for sport type filtering
│   ├── league-card/       # League card with OnPush detection
│   ├── league-list/       # Responsive grid of league cards
│   └── badge-modal/       # Modal for displaying season badges
│
├── models/
│   └── league.model.ts    # TypeScript interfaces
│
├── services/
│   └── leagues.service.ts # API service with caching
│
└── store/
    ├── leagues.actions.ts   # NgRx actions
    ├── leagues.reducer.ts   # Reducer with filtering logic
    ├── leagues.effects.ts   # Side effects (API calls)
    ├── leagues.selectors.ts # Memoized selectors
    └── leagues.state.ts     # State interface


**AI Assistance**
Parts of this project were planned and refined using ChatGPT and Claude for:
Architecture planning
UI/UX design improvements
Code optimization
Documentation drafting
