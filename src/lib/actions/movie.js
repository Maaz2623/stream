import Movie from "../models/movie";
import { connectToDB } from "../mongoose";
import mongoose from "mongoose";

export const revalidate = 0;

export const fetchMovies = async () => {
  try {
    await connectToDB();
    const movies = (await Movie.find()).reverse();
    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (slug) => {
  try {
    await connectToDB();
    const movie = await Movie.findOne({ slug: slug });
    return movie;
  } catch (error) {
    console.log(error);
  }
};
