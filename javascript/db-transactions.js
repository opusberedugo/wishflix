let db = openDatabase("WishFlix", 1, "Wishflix", 4 * 1024 * 1024);


db.transaction((t) => {

  t.executeSql(`CREATE TABLE USERS(
    --ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRSTNAME VARCHAR(20) NOT NULL,
    LASTNAME VARCHAR(20) NOT NULL,
    USERNAME VARCHAR(20) NOT NULL UNIQUE,
    EMAIL VARCHAR(20) NOT NULL UNIQUE,
    PASSWORD VARCHAR(20) NOT NULL
  )`);
})



const signUp = (fname, lname, username, email, password) => {
  db.transaction((t) => {
    t.executeSql(`INSERT INTO USERS(FIRSTNAME, LASTNAME, USERNAME, EMAIL,PASSWORD) VALUES ('${fname}','${lname}','${username}','${email}','${password}')`)
  })
  console.log()
}




let nameFree = null;
const usernameAvailable = (username) => {
  db.transaction((t) => {
    t.executeSql(`SELECT 0 FROM USERS WHERE USERNAME = '${username}'`, [], (tx, results) => {
      if (results.rows.length === 1) {
        nameFree = false;
      } else {
        nameFree = true;
      }
    })
  })
}

let emailFree = null;
const emailAvailable = (email) => {
  db.transaction((t) => {
    t.executeSql(`SELECT 0 FROM USERS WHERE EMAIL = '${email}'`, [], (tx, results) => {
      if (results.rows.length === 1) {
        emailFree = false;
      } else {
        emailFree = true;
      }
    })
  })
}



let emailLogInValid = null;
const emailLogIn = (email, password) => {
  db.transaction((t) => {
    t.executeSql(`SELECT 0 FROM USERS WHERE EMAIL = '${email}' AND PASSWORD = '${password}'`, [], (tx, results) => {
      if (results.rows.length === 1) {
        emailLogInValid = true;
      } else {
        emailLogInValid = false;
      }
    });
  })
}


let usernameLogInValid;
const usernameLogIn = (username, password) => {
  db.transaction((t) => {
    t.executeSql(`SELECT 0 FROM USERS WHERE USERNAME = '${username}' AND PASSWORD = '${password}'`, [], (tx, results) => {
      if (results.rows.length === 1) {
        usernameLogInValid = true;
      } else {
        usernameLogInValid = false;
      }
    });
  })
}

let username = null;
const getUsername = (email) => {
  db.transaction((t) => {
    t.executeSql(`SELECT USERNAME FROM USERS WHERE EMAIL = '${email}'`, [], (tx, results) => {
      if (results.rows.length === 1) {
        username = results.rows[0].USERNAME;
      }
    });
  })
};

signUp("John", "Snow", "jSnow", "jsnow@got.com", "password");
signUp("John", "Snow", "jSnow", "jsnow@got.com", "password");