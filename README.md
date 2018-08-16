# Practice
Just for Practice
create table recharge_details(rid number, cname varchar2(20),
mnum number(20), amount number, pname varchar2(6), rdate date);
 
insert into recharge_details values(1,'Rishab',7894561230,99,'rc99',sysdate);

 select * from recharge_details;
 
 CREATE SEQUENCE seq_recharge
 START WITH 1000
 INCREMENT BY 1;
 

