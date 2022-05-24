import mongoose from "mongoose";
import IMovie from "../interfaces/IMovie";
import { MovieSchema } from "../schemas/MovieSchema";

export default class MovieModel {
  constructor(private movieModel = mongoose.model<IMovie>('movies', MovieSchema)) {}

  public async getAllMovies ():Promise<IMovie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }
}