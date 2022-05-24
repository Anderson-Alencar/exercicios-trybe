import IMovie from "../interfaces/IMovie";
import MovieModel from "../models/MovieModel";

export default class MovieService {
  constructor(private movieModel = new MovieModel()) {}

  public async getAllMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getAllMovies();
    return movies;
  }
}