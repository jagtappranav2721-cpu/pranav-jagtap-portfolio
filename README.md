# Pranav Jagtap - Personal Portfolio

A sleek, responsive, and modern developer portfolio built using React, Vite, Tailwind CSS, and Framer Motion. Featuring deep theme integrations (dark/light modes) and visual interactivity.

## 🚀 Live Demo

- **Local Development URL:** `http://localhost:5173`

## 🛠️ Built With

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [React Icons (Feather Icons)](https://react-icons.github.io/react-icons/)
- **Fonts:** Space Grotesk

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── resume/
│       └── Pranav_Jagtap_Resume.pdf   # Downloadable resume (replace with your real PDF export before deploying)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── About.jsx       # About me section
│   │   ├── Certifications.jsx # Credentials & courses
│   │   ├── Contact.jsx     # Contact form with email utility
│   │   ├── Cursor.jsx      # Custom neon cursor component
│   │   ├── Education.jsx   # Timeline of academic achievements
│   │   ├── Footer.jsx      # Footer with links and copyright
│   │   ├── Hero.jsx        # Top landing hero section with positioning line + interactive network
│   │   ├── Loader.jsx      # Pre-loader component
│   │   ├── Navbar.jsx      # Floating header with theme toggle + Resume link
│   │   ├── Projects.jsx    # Projects showcase grid
│   │   ├── Resume.jsx      # Resume view/download section (wired to /resume/Pranav_Jagtap_Resume.pdf)
│   │   └── Skills.jsx      # Categorized skill grids (theme-aware colors)
│   ├── App.jsx             # Main application layout entry
│   ├── ThemeContext.jsx    # Context provider managing dark/light theme state
│   ├── data.js             # Content payload containing text, skills, and projects
│   ├── index.css           # Global stylesheets and theme configurations
│   └── main.jsx            # React root mount entrypoint
├── index.html              # HTML shell template
├── package.json            # Configuration and script definition
├── tailwind.config.js      # Tailwind utility mappings
└── vite.config.js          # Vite configuration
```

## ⚙️ Features

- **Interactive Neural Background:** Customized canvas/motion element mimicking AI neural connections.
- **Smart Light/Dark Mode:** Seamless color transitions between void dark (#050508) and slate light themes. Skills page changes accent colors dynamically for maximum readability in both modes.
- **Custom Cursor:** Fluid, lag-free trailing neon dot cursor that tracks pointer input.
- **Smooth Navigation:** Multi-target section scroll using native CSS bindings combined with modern routing detection.
- **Downloadable Resume:** Dedicated section with working download/view links to a real static PDF asset.
- **Fully Responsive:** Tested and verified from tiny mobile viewports to extra-large screens.

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) installed on your system.

### Installation

1. Unzip and enter the directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

## 📄 Resume PDF — action needed

The PDF currently at `public/resume/Pranav_Jagtap_Resume.pdf` was reconstructed from a page-image preview (not the original file bytes), so it is visually correct but **not text-selectable/ATS-friendly**. Before deploying for real, replace this file with your actual native PDF export, keeping the exact same filename and path:

```
public/resume/Pranav_Jagtap_Resume.pdf
```

No code changes are needed after swapping the file — `src/components/Resume.jsx` already references it via the root-relative path `/resume/Pranav_Jagtap_Resume.pdf`, which resolves correctly in dev, and after deployment to Netlify or Vercel.

## 🚢 Deploying to Netlify / Vercel

- **Build command:** `npm run build`
- **Publish / output directory:** `dist`
- No environment variables or special config required — everything (including the resume PDF) is a static asset resolved from the project root.
