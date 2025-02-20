# FlixFreeV1 🎬
![Flixfree Homepage Screenshot](https://github.com/Manzidallas/flixfree/blob/main/public/flixfreev1.png)

**FlixFreeV1** is a free movie streaming platform developed using React.js, offering users a seamless experience to browse and watch movies online. The application fetches movie data from an external API, providing up-to-date information on the latest films.

## Features

- **Responsive Design**: Ensures optimal viewing across various devices, including desktops, tablets, and mobile phones.
- **Dynamic Movie Listings**: Displays a curated list of movies fetched from a reliable external API.
- **Search Functionality**: Allows users to search for movies by title, enhancing content discoverability.
- **Detailed Movie Information**: Provides users with comprehensive details about each movie, including release date, genre, and synopsis.

## Technologies Used

- **Frontend**: [React.js](https://reactjs.org/) – A popular JavaScript library for building user interfaces.
- **Styling**: [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) – For designing a responsive and visually appealing layout.
- **Deployment**: [Vercel](https://vercel.com/) – A platform for frontend developers, providing hosting and serverless functions.

## Getting Started

To run FlixFreeV1 locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/flixfreev1.git
    cd flixfreev1
    ```

2. **Install dependencies**:

    Using npm:

    ```bash
    npm install
    ```

    Or using yarn:

    ```bash
    yarn install
    ```

3. **Obtain an API Key**:

    - Sign up at [The Movie Database (TMDb)](https://www.themoviedb.org/) to get a free API key.

4. **Configure Environment Variables**:

    - Create a `.env` file in the root directory:

        ```bash
        touch .env
        ```

    - Add your TMDb API key to the `.env` file:

        ```env
        REACT_APP_TMDB_API_KEY=your_api_key_here
        ```

5. **Start the development server**:

    Using npm:

    ```bash
    npm start
    ```

    Or using yarn:

    ```bash
    yarn start
    ```

    - The application should now be running on `http://localhost:3000`.

## Deployment

FlixFreeV1 is deployed using Vercel. To deploy your own version:

1. **Install Vercel CLI** (if not already installed):

    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel**:

    ```bash
    vercel login
    ```

3. **Deploy the application**:

    ```bash
    vercel
    ```

    - Follow the prompts to link or create a new project.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m 'Add some feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*Note: This project is for educational purposes only. Ensure you comply with TMDb's terms of use and any applicable laws and regulations when using their API and streaming content.*

