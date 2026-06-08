# Image Gallery App

A modern, responsive web application for browsing, searching, and managing a curated collection of beautiful images. Built with React, Vite, and Tailwind CSS.

## 🎯 Features

- **Browse Gallery** - Explore a curated collection of images across multiple categories
- **Search Functionality** - Quickly find images by title using real-time search
- **Category Filtering** - Filter images by categories: Nature, City, Food, and People
- **Favorites Management** - Save your favorite images with persistent storage using localStorage
- **Responsive Design** - Beautiful UI that works seamlessly on desktop, tablet, and mobile devices
- **Pagination** - Load more images on demand for better performance
- **Multiple Pages**:
  - **Home** - Landing page with app introduction and call-to-action
  - **Gallery** - Main browsing experience with search and filters
  - **Favorites** - View your saved favorite images
  - **About** - Information about the application
- **Modern UI** - Built with Tailwind CSS and Material-UI components

## 📋 Project Structure

```
image-gallery-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── CategoryFilter.jsx    # Category selection buttons
│   │   ├── Footer.jsx           # App footer
│   │   ├── GalleryGrid.jsx       # Grid layout for images
│   │   ├── ImageCard.jsx         # Individual image card component
│   │   ├── Navbar.jsx            # Navigation bar
│   │   └── SearchBar.jsx         # Search input component
│   ├── context/             # React Context for state management
│   │   └── FavoritesContext.jsx  # Favorites state and localStorage
│   ├── pages/               # Page components
│   │   ├── About.jsx        # About page
│   │   ├── Favorites.jsx    # Favorites page
│   │   ├── Gallery.jsx      # Gallery page with search/filter
│   │   └── Home.jsx         # Home/landing page
│   ├── data/
│   │   └── images.js        # Image data with metadata
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
└── README.md                # This file
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 8.0
- **Styling**:
  - Tailwind CSS 4.3
  - Emotion (CSS-in-JS)
  - Material-UI 9.0
- **Routing**: React Router DOM 7.16
- **Icons**: React Icons 5.6
- **Code Quality**: ESLint with React plugins

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   cd image-gallery-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- **`npm run dev`** - Start the development server with hot reload
- **`npm run build`** - Build the app for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📷 Image Data

Images are organized into 4 categories with rich metadata:

- **Nature** - Landscapes, mountains, forests, nature scenes (10 images)
- **City** - Urban environments, cityscapes, architecture (10 images)
- **Food** - Culinary photography, dishes, meals (10 images)
- **People** - Portraits, street photography, people moments (10 images)

Each image includes:

- Unique ID
- Title
- Description
- Category
- Image URL

## ⭐ How to Use

1. **Browse the Gallery**
   - Navigate to the Gallery page from the home page or navbar
   - View all available images in a responsive grid layout

2. **Search Images**
   - Use the search bar to find images by title
   - Search results update in real-time as you type

3. **Filter by Category**
   - Click category buttons to filter images
   - Select "All" to view the entire collection

4. **Add to Favorites**
   - Click the heart icon on any image card to favorite it
   - Favorites are automatically saved to your browser's local storage

5. **View Favorites**
   - Navigate to the Favorites page to see all your saved images
   - Manage your collection from a dedicated favorites page

6. **Load More**
   - Scroll to the bottom of the gallery and click "Show More" to load additional images
   - Improves performance by lazy-loading content

## 💾 Data Persistence

The app uses **localStorage** to persist favorites:

- Favorites are automatically saved when you add/remove images
- Favorites persist across browser sessions
- No backend server required

## 🎨 Responsive Design

The app is fully responsive with breakpoints for:

- Mobile (xs)
- Tablet (sm, md)
- Desktop (lg)
- Large Desktop (xl)

All components adapt seamlessly to different screen sizes.

## 📝 Notes

- This is a demo application with mock image data
- No backend API is required
- All images are loaded from URLs in the data file
- Favorites are stored locally in the browser

## 🔮 Future Enhancements

Potential features for expansion:

- Image detail/modal view
- User authentication
- Cloud-based favorites sync
- Image upload functionality
- Advanced filtering options
- Image sharing capabilities
- Dark mode theme

## 📄 License

This project is created as coursework for educational purposes.

---

**Built with ❤️ using React & Vite**
