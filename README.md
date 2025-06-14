# 🎬 My Movies: Discover Your Next Favorite Film! 🍿

Welcome to **My Movies**, your go-to app for discovering movies you'll love! Whether you're looking for the latest trending films or searching for a specific title, we've got you covered. Get ready to explore a world of cinematic wonders! ✨

## 🚀 Installation

Get the project up and running locally with these simple steps:

- ⬇️ **Clone the Repository**:

  ```bash
  git clone https://github.com/odafeumunu/Movie-APP.git
  cd Movie-APP
  ```

- ⚙️ **Install Dependencies**:

  ```bash
  npm install
  ```

- 🔑 **Environment Variables**:
  - Create a `.env` file in the root directory.
  - Add your TMDB API key and Appwrite credentials:

    ```
    VITE_TMDB_API_KEY=your_tmdb_api_key
    VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
    VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
    VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
    ```

- 🎬 **Run the App**:

  ```bash
  npm run dev
  ```

  Open your browser and navigate to `http://localhost:5173` to see the app in action!

## 💻 Usage

### Searching for Movies

1.  **Enter your search term** in the search bar.
2.  **Results** will dynamically update as you type, thanks to debouncing!

```jsx
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  );
}
```

### Viewing Trending Movies

The **Trending Movies** section displays the top 5 most searched movies based on data stored in Appwrite.

```jsx
import MovieCard from "./components/MovieCard";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  return (
    <section className="trending">
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map((movie, index) => (
          <li key={movie.id}>
            <p>{index + 1}</p>
            <p>{movie.title}</p>
            <img src={movie.poster_url} alt={movie.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
```

### Displaying All Movies

The **All Movies** section displays movies based on your search query or trending movies if no search is entered.

```jsx
import MovieCard from "./components/MovieCard";

function App() {
  const [movieList, setMovieList] = useState([]);

  return (
    <section className="all-movies">
      <h2>All Movies</h2>
      <ul>
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
}
```

## ✨ Features

- 🔍 **Real-time Search**: Find movies instantly with our dynamic search feature.
- 🔥 **Trending Movies**: Discover the most popular movies based on search activity.
- 🎨 **Sleek UI**: Enjoy a modern and intuitive user interface.
- 🚀 **Debouncing**: Reduces the number of API calls.
- ☁️ **Cloud Storage**: Uses Appwrite to store the data for trending movies.
## 🛠️ Technologies Used

| Technology   | Link                                                        |
| :----------- | :---------------------------------------------------------- |
| React        | [https://react.dev/](https://react.dev/)                   |
| Vite         | [https://vitejs.dev/](https://vitejs.dev/)                 |
| Tailwind CSS | [https://tailwindcss.com/](https://tailwindcss.com/)       |
| Appwrite     | [https://appwrite.io/](https://appwrite.io/)               |
| React Use    | [https://github.com/streamich/react-use](https://github.com/streamich/react-use) |

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

- 🐛 **Report Bugs**: Help us squash those pesky bugs!
- 💡 **Suggest Features**: Have a great idea? Let us know!
- 🧑‍💻 **Submit Pull Requests**: Contribute your code!

Please follow these guidelines:

- 📝 Use clear and concise commit messages.
- 🧪 Write tests for new features.
- 📖 Update documentation as needed.

## 📜 License

This project is licensed under the [MIT License](LICENSE).

## 🧑‍Author Info

- **Author**: Odafe
  - [GitHub](github.com/odafeumunu)

---

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](http://shields.io/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/odafeumunu)