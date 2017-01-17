drop table if exists challenges;

create table if not exists challenges (
id serial primary key, 
name varchar(60),
type text,
incentive boolean,
duration timestamptz,

);

insert into challenges (name, type, incentive) values ('step it up', 'Fitness', true);