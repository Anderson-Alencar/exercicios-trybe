import { NextFunction, Request, Response } from "express";
import MovieService from "../services/MovieService";

export default class MovieController {
  constructor(private movieService = new MovieService()) {}

  public async getAllMovies(req: Request, res: Response, next: NextFunction) {
    try {
      const movies = await this.movieService.getAllMovies();
      
      return res.status(200).json(movies);
    } catch (e) {
      next(e);
    }
  }

}
