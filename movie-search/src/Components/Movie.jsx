export default function Movie(props) {
  let movie = props.state.movie;
  return (
    <div className="Movie">
      {movie.title}
      {movie.description}
    </div>
  )
};

