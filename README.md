# 🎬 My Movies - Discover Your Next Favorite Film!

Tired of endless scrolling trying to find the perfect movie?  My Movies is here to help!  This React application, powered by Vite, allows you to easily search for films, discover trending titles, and keep track of your favorite searches. Say goodbye to movie-night stress and hello to a world of cinematic discovery!

## 🚀 Getting Started

Ready to dive in? Follow these simple steps to get My Movies up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)
*   An API Key from [TMDB (The Movie Database)](https://www.themoviedb.org/). You'll need to create an account and request a developer API key.
*   Appwrite account and project setup, to follow trending movie searches.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your_repository_url>
    cd my_project
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Configure environment variables:**

    *   Create a `.env.local` file in the root of your project.
    *   Add your TMDB API key, Appwrite Project ID, Database ID, and Collection ID to the `.env.local` file:

    ```
    VITE_TMDB_API_KEY=YOUR_TMDB_API_KEY
    VITE_APPWRITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
    VITE_APPWRITE_DATABASE_ID=YOUR_APPWRITE_DATABASE_ID
    VITE_APPWRITE_COLLECTION_ID=YOUR_APPWRITE_COLLECTION_ID
    ```

4.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev
    ```

    Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal) to see the application in action.

## 💻 Usage

My Movies is designed to be intuitive and easy to use.

1.  **Search for Movies:** Use the search bar to find specific movies by title. As you type, the results will update dynamically.

    ```jsx
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    ```

2.  **Explore Trending Movies:** Discover what's popular right now! The "Trending Movies" section showcases the top movies based on search count.

    ```jsx
    <section className="trending">
      <h2>Trending Movies</h2>
      {/* ... */}
    </section>
    ```

3.  **Browse All Movies:**  See a list of all movies fetched from the API based on your search or the default popularity sorting.

    ```jsx
     <section className="all-movies">
            <h2>All Movies</h2>

            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
    ```

## ✨ Features

Here's a rundown of the key features that make My Movies awesome:

| Feature             | Description                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------- |
| Movie Search        | Quickly find movies by title using the search bar.                                       |
| Trending Movies     | Discover popular movies based on the number of searches.                               |
| Dynamic Results     |  Results update as you type, providing a seamless search experience.                     |
| Responsive Design   | Works beautifully on desktops, tablets, and mobile devices.                              |
| Loading Indicators  |  Clear visual feedback during data fetching, using a spinner component.                  |
| Error Handling      |  Displays user-friendly error messages when movie data cannot be fetched.                 |

## 🛠️ Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast build tool for modern web development.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Appwrite:**  Open-source backend-as-a-service for managing data and user authentication
*   **react-use:**  A collection of useful React hooks.
*   **ESLint:**  For linting.

## 📦 Dependencies

Here's a list of the main dependencies used in this project:

*   `react`: "^19.0.0"
*   `react-dom`: "^19.0.0"
*   `react-router-dom`: "^7.2.0"
*   `appwrite`: "^17.0.1"
*   `react-use`: "^17.6.0"
*   `tailwindcss`: "^4.0.9"
*   `@vitejs/plugin-react`: "^4.3.4"

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1.  **Fork the repository.**
2.  **Create a new branch** for your feature or bug fix.
3.  **Make your changes** and commit them with clear, concise messages.
4.  **Submit a pull request** to the main branch.

Please ensure your code follows the project's coding style and includes appropriate tests.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).#   M o v i e - A P P 
 
 
