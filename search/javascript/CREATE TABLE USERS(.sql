CREATE TABLE USERS(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  FIRSTNAME VARCHAR(20) NOT NULL,
  LASTNAME VARCHAR(20) NOT NULL,
  USERNAME VARCHAR(20) NOT NULL,
  EMAIL VARCHAR(20) NOT NULL,
  PASSWORD VARCHAR(20) NOT NULL
);


"CREATE TABLE USERS(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  FIRSTNAME VARCHAR(20) NOT NULL,
  LASTNAME VARCHAR(20) NOT NULL,
  USERNAME VARCHAR(20) NOT NULL,
  EMAIL VARCHAR(20) NOT NULL,
  PASSWORD VARCHAR(20) NOT NULL
);"

`CREATE TABLE USERS(
  ID INT AUTO_INCREMENT PRIMARY KEY,
  FIRSTNAME VARCHAR(20) NOT NULL,
  LASTNAME VARCHAR(20) NOT NULL,
  USERNAME VARCHAR(20) NOT NULL,
  EMAIL VARCHAR(20) NOT NULL,
  PASSWORD VARCHAR(20) NOT NULL
);`

`INSERT INTO USERS(FIRSTNAME, LASTNAME, USERNAME, EMAIL,PASSWORD) VALUES(${fname},${lname},${username},${email},${password})`

`SELECT EMAIL FROM USERS WHERE EMAIL = '${email}'`

`SELECT EMAIL AND PASSWORD FROM USERS WHERE EMAIL = '${email}' AND PASSWORD`

`SELECT EMAIL FROM USERS WHERE EMAIL = '${email}'`


CREATE TABLE FAVOURITES(
  USERID INT PRIMARY KEY
  MOVIEID INT NOT NULL
);


