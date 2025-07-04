import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export const searchAll = async (query: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY; 
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // Return the search results
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};