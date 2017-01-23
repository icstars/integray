create table if not exists employees (
  id serial primary key,
  firstname text not null,
  lastname text not null,
  role text,
  
);