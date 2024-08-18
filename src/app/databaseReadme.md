This document outlines the steps to set up MySQL locally for project to work.
The database name is: 'bmo_project'
Create the customer table with the following query:

CREATE TABLE bmo_project.Customer (
CustomerID int auto_increment,
LastName varchar(255),
FirstName varchar(255),
PRIMARY KEY (CustomerID)
);

Insert a test value for the table above with this query:

INSERT INTO bmo_project.customer (LastName, FirstName,CardNumber,Password) VALUES ('TestLastTwo', 'TestFirstTwo', 123, 'qwe');

Create a table for the accounts:

CREATE TABLE bmo_project.accounts (
CustomerID int,
Amount int,
AccountType varchar(255),
FOREIGN KEY (CustomerID) REFERENCES customer(CustomerID)
)
ALTER TABLE bmo_project.accounts ADD UNIQUE(AccountNumber);

Insert another test account, following the INSERT INTO query already stated above.

NOTE: Below is an overview of database tables and record

bmo_project (database)
|--accounts
|----CustomerID, Amount, AccountType, AccountNumber
|--customers
|----CustomerID, LastName, FirstName, CardNumber, Password
