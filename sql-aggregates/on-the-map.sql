select count("cityId") as "numberOfCities",
       "countries"."name"
  from "cities"
  join "countries" using ("countryId")
group by "countryId";
