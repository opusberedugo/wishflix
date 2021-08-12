let formswitches = document.getElementsByClassName("siwtch");
let forms = document.getElementsByTagName("form");

let signUpFields = document.querySelectorAll("form.login input");
let logInFields = document.querySelectorAll("form.signup input");


let formButtons = document.querySelectorAll("button");
let submitButtons = document.getElementsByClassName("submit")

let errorAlert = document.querySelector(".error");
let alertText = document.querySelector(".error p");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


formswitches[0].onclick = () => {
  $(forms[0]).fadeOut(1000, () => {
    $(forms[1]).fadeIn(1000)
  });
}

formswitches[1].onclick = () => {
  $(forms[1]).fadeOut(1000, () => {
    $(forms[0]).fadeIn(1000)
  });
}

let db = openDatabase("WishFlix", "1", "Users Database", 4 * 1024 * 1024);


db.transaction((t) => {
  t.executeSql(`CREATE TABLE USERS(
    -- ID INT AUTO_INCREMENT PRIMARY KEY,
    FIRSTNAME VARCHAR(20) NOT NULL,
    LASTNAME VARCHAR(20) NOT NULL,
    USERNAME VARCHAR(20) UNIQUE NOT NULL,
    EMAIL VARCHAR(20) NOT NULL,
    PASSWORD VARCHAR(20) NOT NULL
  );`)
  console.log("Table Created")
  t.executeSql(`INSERT INTO USERS (FIRSTNAME, LASTNAME, USERNAME, EMAIL,PASSWORD) VALUES('Opus','Bee','Opus','opusbee@gmail.com','12345')`)

  console.log("Value Inserted")

})

var nameFree;

const usernameAvailable = (username) => {
  db.transaction((t) => {
      t.executeSql(`SELECT USERNAME FROM USERS WHERE USERNAME = '${username}'`, [], (tx, results) => {
        // console.log(results)
        if (results.rows.length === 0) {
          nameFree = true;
          console.log(nameFree)
        } else {
          nameFree = false;
        }
      })
    })
    // return nameFree;
}


const signUp = (fname, lname, username, email, password) => {
  db.transaction((t) => {
    t.executeSql(`INSERT INTO USERS(FIRSTNAME, LASTNAME, USERNAME, EMAIL,PASSWORD) VALUES('${fname}','${lname}','${username}','${email}','${password}')`, undefined, () => {})

  })
}


formButtons[0].onclick = () => {
  for (const field of signUpFields) {
    if (field.value === "") {
      alertText.textContent = "All fields must be filled"

      $(errorAlert).fadeIn(500, () => {
        setInterval(() => {
          $(errorAlert).fadeOut(4000)
        }, 5000);
      })

      throw Error;
    }
  }
  usernameAvailable(signUpFields[2].value.trim())
  if (nameFree) {
    // console.log(signUpFields[2].value.trim())
  } else if (!nameFree) {
    alertText.textContent = "Username has already been taken"
    $(errorAlert).fadeIn(500, () => {
      setInterval(() => {
        $(errorAlert).fadeOut(1000)
      }, 3000);
    })
    throw Error;

  }


  if (!emailRegex.test(signUpFields[3].value)) {
    alertText.textContent = "Please Enter a valid email"
    $(errorAlert).fadeIn(500, () => {
      setInterval(() => {
        $(errorAlert).fadeOut(1000)
      }, 3000);
    })
    throw Error;
  }

  if (signUpFields[4].value !== signUpFields[5].value) {
    alertText.textContent = "Password must be the same"
    $(errorAlert).fadeIn(500, () => {
      setInterval(() => {
        $(errorAlert).fadeOut(1000)
      }, 3000);
    })
    throw Error;
  }

  if (signUpFields[4].value.lenght === 8 && signUpFields[5].value.lenght === 8) {
    alertText.textContent = "Password must have at laest 8 characters"
    $(errorAlert).fadeIn(500, () => {
      setInterval(() => {
        $(errorAlert).fadeOut(1000)
      }, 3000);
    })
    throw Error;
  }

  signUp(signUpFields[0].value, signUpFields[1].value, signUpFields[2].value, signUpFields[3].value, signUpFields[4].value)
}



errorAlert.onclick = () => {
  $(errorAlert).fadeOut(500)
}