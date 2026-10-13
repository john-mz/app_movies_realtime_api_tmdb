export interface Movie {
    id: number;
    title: string;
    description: string;
    releaseDate: Date | null;
    rating: number;
    poster: string;
    backdrop: string;
}