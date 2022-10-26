const puppeteer = require("puppeteer-core");
const express = require("express");
const app = express();

const config = { headless: true };
let page;

const loginPage = {
  emailTextBox: "input#id_userLoginId",
  passwordTextBox: "input#id_password",
  signInButton: "button.login-button",
};

const browsePage = {
  h1Text: "h1.profile-gate-label",
};

const changePasswordPage = {
  currentPasswordTextBox: "input#id_currentPassword",
  newPasswordTextBox: "input#id_newPassword",
  confirmPasswordTextBox: "input#id_confirmNewPassword",
  requireAllDeviceToSignInCheckBox: "input#cb_requireAllDevicesSignIn",
  saveButton: "button#btn-save",
};

const changePassword = async () => {
  const browser = await puppeteer.launch(config);
  page = await browser.newPage();
  await page.goto("https://www.netflix.com/in/login");

  await page.waitForSelector(loginPage.emailTextBox);
  await page.type(loginPage.emailTextBox, "cloud.iot98@gmail.com");
  await page.type(loginPage.passwordTextBox, "BenjaminKrullen");
  await page.click(loginPage.signInButton);

  await page.waitForSelector(browsePage.h1Text);
  await page.goto("https://www.netflix.com/password");

  await page.waitForSelector(changePasswordPage.currentPasswordTextBox);
  await page.type(changePasswordPage.currentPasswordTextBox, "BenjaminKrullen");
  await page.type(changePasswordPage.newPasswordTextBox, "BenjaminKrullen1");
  await page.type(
    changePasswordPage.confirmPasswordTextBox,
    "BenjaminKrullen1"
  );
  await page.click(changePasswordPage.requireAllDeviceToSignInCheckBox);

  await page.screenshot({ path: "screenshot/password.png" });
  await browser.close();
};

app.get("/screenshot", changePassword());
app.listen(2000);

// export default changePassword;
