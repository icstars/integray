
create table if not exists challenges (
id serial primary key, 
name varchar(60) NOT NULL,
type text NOT NULL,
incentive boolean,
goal integer,
maxpoints numeric NOT NULL,
duration timestamptz

);

insert into challenges (name, type, incentive, goal, maxpoints) values ('Step it Up', 'steps', true, 8000, 400 );
insert into challenges (name, type, incentive, goal, maxpoints) values ('Donut stop', 'donut', true, 5, 200);