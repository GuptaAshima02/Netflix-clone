let api="d67a5365797ec5121a22bb30c2ff68d4";
export async function popularMovies(){
    let popular=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}`);
    return popular.json();
}
export async function bollywoodMovies(){
    let bollywood=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_origin_country=IN&with_original_language=hi`);
    return bollywood.json();
}
export async function anime(){
    let anime=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=16&with_keywords=210024|287501`);
    return anime.json();
}
export async function dramas(){
    let drama=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}`);
    return drama.json();
}
export async function comedys(){
    let comedy=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=35`);
    return comedy.json();
}
export async function Indiandramas(){
    let inddrama=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_origin_country=In&with_original_language=hi`);
    return inddrama.json();
}
export async function kdramas(){
    let kdrama=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_origin_country=KR&with_original_language=ko`);
    return kdrama.json();
}
export async function ActionAdventure(){
    let actionAdventure=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=10759`);
    return actionAdventure.json();
}
export async function SciFiFantasy(){
    let sciFiFantasy=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=10765`);
    return sciFiFantasy.json();
}
export async function Mystery(){
    let mystery=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=9648`);
    return mystery.json();
}
export async function comedyseries(){
    let comedyseries=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=35`);
    return comedyseries.json();
}
export async function crimeseries(){
    let crime=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=80`);
    return crime.json();
}
export async function kmovies(){
    let kmovies=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_origin_country=KR&with_original_language=ko`);
    return kmovies.json();
}
export async function ActionAdventureM(){
    let actionAdventureM=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=28|12`);
    return actionAdventureM.json();
}
export async function SciFiFantasyM(){
    let sciFiFantasyM=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=879|14`);
    return sciFiFantasyM.json();
}
export async function MysteryM(){
    let mysteryM=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=9648`);
    return mysteryM.json();
}

export async function crimeMovies(){
    let crimemovies=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=80`);
    return crimemovies.json();
}
export async function thrillerMovies(){
    let thrillermovies=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api}&with_genres=53`);
    return thrillermovies.json();
}
export async function News(){
    let news=await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api}&with_genres=10763`);
    return news.json();
}
export async function fetchTrailer(id){
    let fetchT=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}`);
    return fetchT.json();
}
export async function fetchTrailerTv(id){
    let fetchTv=await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${api}`);
    return fetchTv.json();
}