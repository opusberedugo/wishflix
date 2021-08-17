let formswitches = document.getElementsByClassName("siwtch");
let forms = document.getElementsByTagName("form");

let logInFields = document.querySelectorAll("form.login input");
let signUpFields = document.querySelectorAll("form.signup input");


let formButtons = document.querySelectorAll("button");
let submitButtons = document.getElementsByClassName("submit")

let errorAlert = document.querySelector(".error");
let alertText = document.querySelector(".error p");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


formswitches[0].onclick = () => {
  $(forms[0]).fadeOut(500, () => {
    $(forms[1]).fadeIn(500)
  });
}

formswitches[1].onclick = () => {
  $(forms[1]).fadeOut(500, () => {
    $(forms[0]).fadeIn(500)
  });
}



formButtons[0].onclick = () => {
  for (const field of signUpFields) {
    if (field.value === "") {
      alertText.textContent = "All fields must be filled"

      $(errorAlert).fadeIn(500, () => {
        setInterval(() => {
          $(errorAlert).fadeOut(3000)
        }, 5000);
      })

      throw Error("All fields must be filled");
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


  emailAvailable(signUpFields[3].value.trim());
  if (emailFree) {
    // console.log(signUpFields[2].value.trim())
  } else if (!emailFree) {
    alertText.textContent = "Email has already been used"
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


  signUp(signUpFields[0].value, signUpFields[1].value, signUpFields[2].value, signUpFields[3].value, signUpFields[4].value);

  $("aside.success").fadeIn(500, () => {
    setInterval(() => {
      $("aside.success").fadeOut(1000)
    }, 3000);
  })

  for (const field of signUpFields) {
    field.value = "";
  }

  formswitches[0].click();


}



errorAlert.onclick = () => {
  $(errorAlert).fadeOut(500)
}




formButtons[1].onclick = () => {
  for (const field of logInFields) {
    if (field.value === "") {
      alertText.textContent = "All fields must be filled"

      $(errorAlert).fadeIn(500, () => {
        setInterval(() => {
          $(errorAlert).fadeOut(3000)
        }, 5000);
      })

      throw Error("All fields must be filled");
    }
  }

  if (emailRegex.test(logInFields[0].value)) {

    emailLogIn(logInFields[0].value, logInFields[1].value)
    if (emailLogInValid) {
      getUsername()
      sessionStorage.setItem("username", getUsername)
    } else if (!emailLogInValid) {

    }

  }

}