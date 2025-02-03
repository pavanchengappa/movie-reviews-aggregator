
# Centralized Movie Review Aggregator

## Overview
**Centralized Movie Review Aggregator** is a full-stack web application designed to provide a single platform for accessing movie reviews from various sources. This project aims to consolidate reviews from different platforms, delivering a concise and comprehensive review summary for each movie.

## 🌟 Features
- Search movies by title
- Display movie posters in a responsive grid layout
- Fetch and display detailed movie reviews from multiple sources (e.g., Metacritic, The New York Times)
- Aggregate review scores to provide a concise overall rating
- Modern, smooth UI with hover effects and responsive design

## 🛠 Technologies Used
- **Frontend**: 
  - React
  - CSS (with flexbox and grid layouts)
- **Backend**: 
  - Node.js
  - Express
- **APIs**: 
  - RapidAPI IMDb endpoints
  - New York Times Movie Reviews API

## 📦 Prerequisites
- Node.js (v14 or later)
- npm (Node Package Manager)
- RapidAPI Account
- New York Times Developer API Key

## 🚀 Installation

### Clone the Repository
```bash
git clone https://github.com/pavanchengappa/movie-reviews-aggregator.git
cd movie-reviews-aggregator/REVIEW1/movie-reviews
```

### Backend Setup
1. Navigate to the backend directory
2. Install dependencies
```bash
cd backend
npm install
```
3. Create a `.env` file and add your API keys:
```
RAPIDAPI_KEY=your_rapidapi_key_here
NYT_API_KEY=your_nyt_api_key_here
```

### Frontend Setup
1. Navigate to the frontend directory
2. Install dependencies
```bash
cd frontend
npm install
```

## 🔧 Running the Application

### Start Backend Server
```bash
cd backend
node server.js
```
- Server runs on `http://localhost:4000`

### Start Frontend React App
```bash
cd frontend
npm start
```
- App runs on `http://localhost:3000`

## 🌈 Screenshots
![Screenshot 2025-01-05 143542](https://github.com/user-attachments/assets/12ec75b5-df78-42de-b1df-26aa094b8a3d)
Simple movie review application with a title "Movie Reviews" and an input field for entering Movie name, accompanied by a "Fetch Reviews" button.
![Screenshot 2025-01-05 142127](https://github.com/user-attachments/assets/36b61232-15f6-4f24-936b-2cbf88383987)
Search results page featuring multiple movie cards with posters,titles,and release years. The movies are arranged in a responsive grid layout.
![Screenshot 2025-01-05 142848](https://github.com/user-attachments/assets/99a2e611-b5de-48f9-a27f-40db9d38af30)
Detailed reviews for the searched movie with an aggregate score prominently shown at the top. It includes sections for Metacritic reviews , IMDB reviews and New York Times reviews, featuring individual review excerpts and links to full reviews.




## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License
Distributed under the MIT License. See `LICENSE` for more information.

## 🙌 Acknowledgments
- [RapidAPI](https://rapidapi.com)
- [New York Times](https://www.nytimes.com)

## 📞 Contact
Pavan Chengappa - pavanchengappa7@gmail.com

Project Link: [https://github.com/pavanchengappa/movie-reviews-aggregator](https://github.com/pavanchengappa/movie-reviews-aggregator)
