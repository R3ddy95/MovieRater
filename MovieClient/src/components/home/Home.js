import Hero from "../hero/Hero";

const Home = ({movies}) => {
  console.log("Movies received in Home:", movies);
  return (
    <Hero movies = {movies} />
  )
}

export default Home