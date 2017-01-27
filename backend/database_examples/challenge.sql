drop table if exists challenges;

create table if not exists challenges (
id serial primary key, 
name varchar(60) NOT NULL,
type text NOT NULL,
incentive boolean,
goal integer,
maxpoints numeric NOT NULL,
start date,
end date,

);

insert into challenges (name, type, incentive, goal, maxpoints, duration) values ('Step it Up', '#stepitup', true, 8000, 400,'2017-01-27', '2017-02-09');
insert into challenges (name, type, incentive, goal, maxpoints, duration) values ('Donut stop', '#eatmodonuts', true, 5, 200, '2017-01-27', '2017-02-06' );
insert into challenges (name, type, incentive, goal, maxpoints, duration) values ('Bookworm', '#bookworm', true, 10, 200, '2017-01-31', '2017-02-05' );