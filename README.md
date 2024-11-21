# 🎵 Music Playlist Creator

The **Music Playlist Creator** is a web application that allows users to search for songs or albums, view their details, and create custom playlists. It leverages the Spotify Web API for fetching music data and is designed to be responsive, visually engaging, and user-friendly.

---

## **Features**

- **Search Music**: Search for songs or albums by artist or title.
- **View Details**: Explore detailed information about songs or albums.
- **Create Playlists**: Save favorite tracks to personalized playlists.
- **Single Page Application**: Fast navigation between pages using React Router.

---

## **Technologies Used**

- **React**: For building the user interface.
- **React Router**: For navigation in a Single Page Application (SPA).
- **Spotify Web API**: For fetching music data.
- **CSS (Tailwind)**: For styling, including animations and hover effects.

---

## **Setup Instructions**

### 1. **Clone the Repository**

```bash
git clone https://github.com/YourUsername/your-repo.git
cd your-repo
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Environment Variables**

Create a `.env` file in the root directory and add your Spotify credentials:

```
REACT_APP_CLIENT_ID=your_client_id
REACT_APP_CLIENT_SECRET=your_client_secret
```

### 4. **Start the Development Server**

```bash
npm start
```

### 5. **Build for Production**

```bash
npm run build
```

---

## **React Router and Single Page Applications**

### **React Router**

React Router enables seamless navigation in Single Page Applications. Key concepts used:

- **Route**: Define different paths in the application.
- **Link**: Navigate between routes without reloading the page.
- **useNavigate**: Programmatically navigate between pages.

### **Single Page Application (SPA)**

An SPA loads the initial HTML, CSS, and JavaScript, and dynamically updates the content using JavaScript. Benefits include:

- Faster navigation.
- No full-page reloads.
- Enhanced user experience.

---

## **Using Free Public APIs**

This app uses the **Spotify Web API** to fetch song data. Steps to use a free public API:

1. **Register for API Access**: Get client credentials.
2. **Authenticate**: Use the API's authentication method (e.g., `client_credentials` for Spotify).
3. **Fetch Data**: Use `fetch` or `axios` to make requests.
4. **Handle Data**: Process and display the API's response in your app.

---
