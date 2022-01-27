select "payments"."amount",
       "customers"."firstName",
       "customers"."lastName"
  from "payments"
  join "customers" using ("customerId")
  order by "amount" desc
 limit 10;
