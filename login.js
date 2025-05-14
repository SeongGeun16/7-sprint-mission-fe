const emailInput = document.querySelector(".email_text_input");
const passwordInput = document.querySelector(".passwordinput");
const loginBtn = document.querySelector(".btn_login");
const visibilityIcon = document.querySelector(".visibility");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
	{ email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
	{ email: 'codeit4@codeit.com', password: "codeit404!" },
	{ email: 'codeit5@codeit.com', password: "codeit505!" },
	{ email: 'codeit6@codeit.com', password: "codeit606!" },
];

const showError = (input, message) => {
    removeError(input);
    input.classList.add("input-error");
    const error = document.createElement("div");
    error.className = "errormessage";
    error.style.color = "#F74747";
    // error.style.fontFamily = Pretendard;
    error.style.fontSize = "0.9375rem";
    error.style.fontWeight = 600;
    error.style.marginTop = "0.5rem";
    error.innerText = message;
    input.parentElement.appendChild(error); // 아래에 에러 메시지 추가
}

const removeError = (input) => {
    input.classList.remove("input-error");
    const existingError = input.parentElement.querySelector(".errormessage");
    if(existingError) existingError.remove();
}

const checkEmail = () => {
    const email = emailInput.value.trim();
    removeError(emailInput);

    if (email === "") {
        showError(emailInput, "이메일을 입력해주세요");
        return false;
    }
    if (!emailRegex.test(email)) {
        showError(emailInput, "잘못된 이메일 형식입니다.");
        return false;
    }
    return true;
}

const checkPassword = () => {
    const password = passwordInput.value.trim();
    removeError(passwordInput);

    if (password === "") {
        showError(passwordInput, "비밀번호를 입력해주세요");
        return false;
    }
    if (password.length < 8) {
        showError(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
        return false;
    }
    return true;
}

const loginButtonState = () => {
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();

    if (isEmailValid && isPasswordValid) {
        loginBtn.disabled = false;
        loginBtn.style.backgroundColor = "#3692ff";
    }
    else {
        loginBtn.disabled = true;
        loginBtn.style.backgroundColor = "#9ca3af";
    }
};



emailInput.addEventListener("blur", () => {
    checkEmail();
    loginButtonState();
});

passwordInput.addEventListener("blur", () => {
    checkPassword();
    loginButtonState();
});

emailInput.addEventListener("input", loginButtonState);
passwordInput.addEventListener("input", loginButtonState);

const showModal = (message, redirect = false) => {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    const checkBtn = document.getElementById("modal-check");

    modalMessage.textContent = message;
    modal.classList.remove("hidden");

    checkBtn.onclick = () => {
        modal.classList.add("hidden");

        if (redirect) {
            window.location.href = "./items";
        }
    }
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (loginBtn.disabled) return;

  const userEmail = emailInput.value.trim();
  const userPassword = passwordInput.value.trim();

  const matchUser = USER_DATA.find((user) => user.email === userEmail);

  if (!matchUser || matchUser.password !== userPassword){
    showModal("비밀번호가 일치하지 않습니다.");
    return;
  }

  showModal("로그인 성공", true);
});

visibilityIcon.addEventListener("click", () => {
    const issee = passwordInput.type === "password";
    passwordInput.type = issee ? "text" : "password";
})