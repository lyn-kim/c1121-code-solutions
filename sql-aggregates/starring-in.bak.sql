select "genres"."name",
       count("genreId") as "numOfFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId");
  -- group by "genreId"
  -- where "firstName" = 'Lisa';
