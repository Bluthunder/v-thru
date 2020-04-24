$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("forgetPassword.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Kaushik"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 4,
  "name": "Forget Password",
  "description": "As a user i should be able to reset by password",
  "id": "forget-password",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@ForgetPassword"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Recover password with valid email id",
  "description": "",
  "id": "forget-password;recover-password-with-valid-email-id",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cregisteredEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click recover password",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "forget-password;recover-password-with-valid-email-id;",
  "rows": [
    {
      "cells": [
        "registeredEmail"
      ],
      "line": 15,
      "id": "forget-password;recover-password-with-valid-email-id;;1"
    },
    {
      "cells": [
        "k@mail.com"
      ],
      "line": 16,
      "id": "forget-password;recover-password-with-valid-email-id;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4996133800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Recover password with valid email id",
  "description": "",
  "id": "forget-password;recover-password-with-valid-email-id;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ForgetPassword"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter \"k@mail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click recover password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 3966966000,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_click_on_the_forgetten_passward_link()"
});
formatter.result({
  "duration": 1660267001,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_should_navigate_to_password_reset_page()"
});
formatter.result({
  "duration": 63127300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "k@mail.com",
      "offset": 9
    }
  ],
  "location": "ForgetPassword.i_enter(String)"
});
formatter.result({
  "duration": 215832101,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.click_recover_password()"
});
formatter.result({
  "duration": 136577100,
  "status": "passed"
});
formatter.after({
  "duration": 771616901,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 18,
      "value": "#We assume invalid email format would throw error"
    }
  ],
  "line": 19,
  "name": "Email field format validation",
  "description": "",
  "id": "forget-password;email-field-format-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I enter \"\u003cinvalidFormatEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I receive error",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "forget-password;email-field-format-validation;",
  "rows": [
    {
      "cells": [
        "invalidFormatEmail"
      ],
      "line": 27,
      "id": "forget-password;email-field-format-validation;;1"
    },
    {
      "cells": [
        "abc12.com"
      ],
      "line": 28,
      "id": "forget-password;email-field-format-validation;;2"
    },
    {
      "cells": [
        "AS_21@gmail"
      ],
      "line": 29,
      "id": "forget-password;email-field-format-validation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3597629399,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Email field format validation",
  "description": "",
  "id": "forget-password;email-field-format-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ForgetPassword"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I enter \"abc12.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I receive error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 3121944599,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_click_on_the_forgetten_passward_link()"
});
formatter.result({
  "duration": 1970012699,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_should_navigate_to_password_reset_page()"
});
formatter.result({
  "duration": 32141200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12.com",
      "offset": 9
    }
  ],
  "location": "ForgetPassword.i_enter(String)"
});
formatter.result({
  "duration": 250675100,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_receive_error()"
});
formatter.result({
  "duration": 451100,
  "status": "passed"
});
formatter.after({
  "duration": 874446700,
  "status": "passed"
});
formatter.before({
  "duration": 3627471400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Email field format validation",
  "description": "",
  "id": "forget-password;email-field-format-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ForgetPassword"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I enter \"AS_21@gmail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I receive error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 8183031900,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_click_on_the_forgetten_passward_link()"
});
formatter.result({
  "duration": 22371200200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MR_ROBOT\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.20 (f006328e39a97..., userDataDir: C:\\Users\\KAUSHIK\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63244}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5b7e133a802aa713cf88538436856ef8\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Forgotten password?\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.vthru.pageObjects.LoginPage.forgetPassword(LoginPage.java:129)\r\n\tat com.vthru.stepDefinitions.ForgetPassword.i_click_on_the_forgetten_passward_link(ForgetPassword.java:42)\r\n\tat ✽.When I click on the forgetten passward link(forgetPassword.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ForgetPassword.i_should_navigate_to_password_reset_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "AS_21@gmail",
      "offset": 9
    }
  ],
  "location": "ForgetPassword.i_enter(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ForgetPassword.i_receive_error()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 194547999,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d81.0.4044.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MR_ROBOT\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.20 (f006328e39a97..., userDataDir: C:\\Users\\KAUSHIK\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63244}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5b7e133a802aa713cf88538436856ef8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat com.vthru.managers.WebDriverManager.closeDriver(WebDriverManager.java:98)\r\n\tat com.vthru.stepDefinitions.CukeHooks.tearDown(CukeHooks.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3499327200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Ability to return to login page",
  "description": "",
  "id": "forget-password;ability-to-return-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on the forgetten passward link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I should navigate to password reset page",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on the sign_in_existing_account link",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 8441692700,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_click_on_the_forgetten_passward_link()"
});
formatter.result({
  "duration": 1718936800,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_should_navigate_to_password_reset_page()"
});
formatter.result({
  "duration": 62379200,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_click_on_the_sign_in_existing_account_link()"
});
formatter.result({
  "duration": 1874779101,
  "status": "passed"
});
formatter.match({
  "location": "ForgetPassword.i_should_navigate_to_login_page()"
});
formatter.result({
  "duration": 45416000,
  "status": "passed"
});
formatter.after({
  "duration": 2708189600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Kaushik"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    }
  ],
  "line": 5,
  "name": "Admin Login Feature",
  "description": "As a admin user i should be able to login to V-thru Web app",
  "id": "admin-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "admin-login-feature;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to navigate successfully to admin dashboard",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "admin-login-feature;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 17,
      "id": "admin-login-feature;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 18,
      "id": "admin-login-feature;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "superadmin",
        "superadmin"
      ],
      "line": 19,
      "id": "admin-login-feature;login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4336124099,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "admin-login-feature;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"admin\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to navigate successfully to admin dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 8125943699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 363620301,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 2975951099,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_able_to_navigate_successfully_to_admin_dashboard()"
});
formatter.result({
  "duration": 149201,
  "status": "passed"
});
formatter.after({
  "duration": 1108158800,
  "status": "passed"
});
formatter.before({
  "duration": 3606746401,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login with Valid credentials",
  "description": "",
  "id": "admin-login-feature;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 8,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter \"superadmin\" and \"superadmin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to navigate successfully to admin dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 5224717000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "superadmin",
      "offset": 9
    },
    {
      "val": "superadmin",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 529547200,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 1490364399,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_able_to_navigate_successfully_to_admin_dashboard()"
});
formatter.result({
  "duration": 111599,
  "status": "passed"
});
formatter.after({
  "duration": 4705364600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "# We assume password mismatch"
    }
  ],
  "line": 25,
  "name": "Login failure in case of username and password mismatch",
  "description": "",
  "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 34,
      "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;;1"
    },
    {
      "cells": [
        "admin",
        "admin1"
      ],
      "line": 35,
      "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;;2"
    },
    {
      "cells": [
        "$%_invalid",
        "superadmin1"
      ],
      "line": 36,
      "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3557814600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Login failure in case of username and password mismatch",
  "description": "",
  "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 24,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I enter \"admin\" and \"admin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 7540686199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin1",
      "offset": 21
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 336004701,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 1723181400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_thrown_invalid_credentials_error()"
});
formatter.result({
  "duration": 291366800,
  "status": "passed"
});
formatter.after({
  "duration": 811932100,
  "status": "passed"
});
formatter.before({
  "duration": 3530005900,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login failure in case of username and password mismatch",
  "description": "",
  "id": "admin-login-feature;login-failure-in-case-of-username-and-password-mismatch;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 24,
      "name": "@InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I enter \"$%_invalid\" and \"superadmin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 3203405501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$%_invalid",
      "offset": 9
    },
    {
      "val": "superadmin1",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 501135399,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 1575224200,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_thrown_invalid_credentials_error()"
});
formatter.result({
  "duration": 223109200,
  "status": "passed"
});
formatter.after({
  "duration": 2291308900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 38,
      "value": "# We assume username cannot start with special characters"
    }
  ],
  "line": 40,
  "name": "Error scenario with invalid/empty username",
  "description": "",
  "id": "admin-login-feature;error-scenario-with-invalid/empty-username",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 39,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I enter \"\u003cinvalid_username\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "admin-login-feature;error-scenario-with-invalid/empty-username;",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "password"
      ],
      "line": 49,
      "id": "admin-login-feature;error-scenario-with-invalid/empty-username;;1"
    },
    {
      "cells": [
        "",
        "admin"
      ],
      "line": 50,
      "id": "admin-login-feature;error-scenario-with-invalid/empty-username;;2"
    },
    {
      "cells": [
        "$%_invalid",
        "superadmin"
      ],
      "line": 51,
      "id": "admin-login-feature;error-scenario-with-invalid/empty-username;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3638170000,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Error scenario with invalid/empty username",
  "description": "",
  "id": "admin-login-feature;error-scenario-with-invalid/empty-username;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 39,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I enter \"\" and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 3203972900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "admin",
      "offset": 16
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 391974200,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 245987400,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_thrown_invalid_credentials_error()"
});
formatter.result({
  "duration": 48742399,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".alert\\-danger\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MR_ROBOT\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 81.0.4044.20 (f006328e39a97..., userDataDir: C:\\Users\\KAUSHIK\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:63425}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 178b8cc80c81f2103299c2c3416951f5\n*** Element info: {Using\u003dclass name, value\u003dalert-danger}\r\n\tat sun.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat com.vthru.pageObjects.LoginPage.isErrorMessage(LoginPage.java:154)\r\n\tat com.vthru.stepDefinitions.Login.i_should_be_thrown_invalid_credentials_error(Login.java:63)\r\n\tat ✽.Then I should be thrown invalid credentials error(login.feature:45)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 777472500,
  "status": "passed"
});
formatter.before({
  "duration": 3641104700,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Error scenario with invalid/empty username",
  "description": "",
  "id": "admin-login-feature;error-scenario-with-invalid/empty-username;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 39,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I am on the v-thru admin login webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I enter \"$%_invalid\" and \"superadmin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "click on login to dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should be thrown invalid credentials error",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_am_on_the_v_thru_admin_login_webpage()"
});
formatter.result({
  "duration": 7478368500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$%_invalid",
      "offset": 9
    },
    {
      "val": "superadmin",
      "offset": 26
    }
  ],
  "location": "Login.i_enter_and(String,String)"
});
formatter.result({
  "duration": 487322100,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_login_to_dashboard()"
});
formatter.result({
  "duration": 2103353500,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_be_thrown_invalid_credentials_error()"
});
formatter.result({
  "duration": 155202101,
  "status": "passed"
});
formatter.after({
  "duration": 958868601,
  "status": "passed"
});
});