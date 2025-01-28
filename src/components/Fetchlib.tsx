
export interface Movie {
    id: number;
    title: string;
    date_released: string;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string
    video: boolean;
    vote_average: number
    vote_count: number;
  
    belongs_to_collection?: {
      id: number;
      name: string;
      poster_path: string | null;
      backdrop_path: string | null;
    };
  
    budget: number; // Budget of the movie in USD
    genres: {
      id: number;
      name: string;
    }[];
  
    homepage: string
    imdb_id: string | null;
    production_companies: {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }[];
  
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
  
    revenue: number;
    runtime: number | null;
    spoken_languages: {
      iso_639_1: string;
      name: string;
    }[];
  
    status: string;
    tagline: string | null;
    videos?: {
      results: {
        id: string;
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        site: string;
        size: number;
        type: string;
      }[];
    };
    images?: {
      backdrops: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        iso_639_1: string | null;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      posters: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        iso_639_1: string | null;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }; 
  
    credits?: {
      cast: {
        cast_id: number;
        character: string;
        credit_id: string;
        gender: number | null;
        id: number;
        name: string;
        order: number;
        profile_path: string | null;
      }[];
      crew: {
        credit_id: string;
        department: string;
        gender: number | null;
        id: number;
        job: string;
        name: string;
        profile_path: string | null;
      }[];
    };
  
    keywords?: {
      keywords: {
        id: number;
        name: string;
      }[];
    };
  
    release_dates?: {
      results: {
        iso_3166_1: string;
        release_dates: {
          certification: string;
          iso_639_1: string | null;
          note: string | null;
          release_date: string;
          type: number;
        }[];
      }[];
    };
  
    translations?: {
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
          homepage: string;
          overview: string;
          runtime: number | null;
          tagline: string | null;
          title: string;
        };
      }[];
    };
  }
  