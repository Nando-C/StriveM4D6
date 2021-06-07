import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease'
import BookList from "./components/BookList"
import books from "./data/fantasy.json";

function App() {
  return (
    <div>
      <header className='fixed-top'>
        <MyNavBar />
      </header>
      <main>
        <Welcome />
        <LatestRelease />
        <BookList books={books.slice(10, 26)} />
      </main>
      <footer>
        <MyFooter />
      </footer>
     </div>
  );
}

export default App;
