# Practice
Just for Practice
CREATE SEQUENCE seq_app_id 
START WITH 1000
INCREMENT BY 1;

CREATE TABLE loanapplication(
application_id NUMBER(5) PRIMARY KEY,
application_date DATE NOT NULL, 
loan_program VARCHAR2(10) NOT NULL,
amount_of_loan NUMBER NOT NULL,
address_of_property VARCHAR2(30) NOT NULL,
annual_family_income NUMBER NOT NULL,
doc_proof_available VARCHAR2(50) NOT NULL,
guarantee_cover VARCHAR2(20) NOT NULL,
market_val_of_cover NUMBER NOT NULL,
status VARCHAR2(10)  DEFAULT 'applied',
date_of_interview DATE );


 --drop table loanapplication;
 
 
CREATE TABLE customerdetails(
application_id NUMBER,
applicant_name VARCHAR2(20) UNIQUE,
date_of_birth DATE,
marital_status VARCHAR2(10),
phone_number NUMBER,
mobile_number NUMBER,
count_of_dependents NUMBER,
email_id VARCHAR2(20),
CONSTRAINT FK_ApplicationId FOREIGN KEY (application_id)
REFERENCES loanapplication(application_id)
);

--drop table customerdetails;

CREATE TABLE loan_programs_offered(
program_name VARCHAR2(5),
description VARCHAR2(20),
type VARCHAR2(20),
duration_in_years NUMBER,
min_loan_amount NUMBER,
rate_of_interest NUMBER,
proofs_required VARCHAR2(20) );
);


System.out.printf("%d\t\t%-15s\t%-20s\n",assetDetails.getAssetId(),assetDetails.getAssetName(),assetDetails.getAssetDescription());

 

