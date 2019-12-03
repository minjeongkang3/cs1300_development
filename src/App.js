import React from 'react';
import Header from './components/Header';
import FilteredList from './components/FilteredList';
import './css/general.css'
import twenty_five from "./img/25.png";
import believe from "./img/believe.jpg";
import damn from "./img/damn.png";
import dopamine from "./img/dopamine.jpg";
import lemonade from "./img/lemonade.png";
import life_in_cartoon_motion from "./img/life_in_cartoon_motion.jpg";
import night_visions from "./img/night_visions.jpg";
import nobody_but_me from "./img/nobody_but_me.jpg";
import papercut from "./img/papercut.jpg";
import parachutes from "./img/parachutes.jpg";
import songs_of_experience from "./img/songs_of_experience.jpg";
import take_care from "./img/take_care.jpg";
import waking_up from "./img/waking_up.jpg";

const albums = [
  {
    id: 0,
    name: "Night Visions",
    artist: "Imagine Dragons",
    genre: "Alternative Rock",
    country: "United States",
    price: 7.75,
    img: night_visions,
  },
  {
    id: 1,
    name: "Dopamine",
    artist: "Borns",
    genre: "Pop Rock",
    country: "United States",
    price: 12.23,
    img: dopamine,
  },
  {
    id: 2,
    name: "Damn",
    artist: "Kendrick Lamar",
    genre: "Hip Hop",
    country: "United States",
    price: 10.76,
    img: damn,
  },
  {
    id: 3,
    name: "25",
    artist: "Adele",
    genre: "R&B",
    country: "United Kingdom",
    price: 10.74,
    img: twenty_five,
  },
  {
    id: 4,
    name: "Nobody but Me",
    artist: "Michael Bubble",
    genre: "Pop",
    country: "Canada",
    price: 6.49,
    img: nobody_but_me,
  },
  {
    id: 5,
    name: "Parachutes",
    artist: "Coldplay",
    genre: "Alternative Rock",
    country: "United Kingdom",
    price: 14.84,
    img: parachutes,
  },
  {
    id: 6,
    name: "Lemonade",
    artist: "Beyonce",
    genre: "R&B",
    country: "United States",
    price: 14.95,
    img: lemonade,
  },
  {
    id: 7,
    name: "Songs of Experience",
    artist: "U2",
    genre: "Pop Rock",
    country: "United Kingdom",
    price: 9.99,
    img: songs_of_experience,
  },
  {
    id: 8,
    name: "Waking Up",
    artist: "OneRepublic",
    genre: "Pop Rock",
    country: "United States",
    price: 13.19,
    img: waking_up,
  },
  {
    id: 9,
    name: "Life in Cartoon Motion",
    artist: "Mika",
    genre: "Pop",
    country: "United Kingdom",
    price: 20.98,
    img: life_in_cartoon_motion,
  },
  {
    id: 10,
    name: "Believe",
    artist: "Justin Bieber",
    genre: "Pop",
    country: "Canada",
    price: 1.59,
    img: believe,
  },
  {
    id: 11,
    name: "The Papercut Chronicles",
    artist: "Gym Class Heroes",
    genre: "Hip Hop",
    country: "United States",
    price:  3.67,
    img: papercut,
  },
  {
    id: 12,
    name: "Take Care",
    artist: "Drake",
    genre: "Hip Hop",
    country: "Canada",
    price:  12.28,
    img: take_care,
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <FilteredList album_list={albums} />
    </div>
  );
}

export default App;
