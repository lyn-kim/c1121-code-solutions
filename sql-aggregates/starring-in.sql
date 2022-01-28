select "genres"."name",
       count("genreId") as "numOfFilms"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
where "actors"."firstName" = 'Lisa'
  group by "genres"."genreId";
