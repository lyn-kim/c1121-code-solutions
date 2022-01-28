select "customers"."firstName",
       "customers"."lastName",
       "payments"."customerId"
  from "customers"
  join "payments" using ("customerId")
