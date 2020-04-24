/**
 * 
 */
package com.vthru.stepDefinitions;

import com.vthru.managers.FileReaderManager;
import com.vthru.managers.TestContext;
import com.vthru.pageObjects.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class Login {
	
	TestContext testContext;
	LoginPage loginPage;
	
	public Login(TestContext context) {
		testContext = context;
		loginPage = testContext.getPageObjectManager().getLoginPage();
	}
	
	
	
	@Given("^I am on the v-thru admin login webpage$")
	public void i_am_on_the_v_thru_admin_login_webpage() throws Throwable {
	   
		loginPage.navigateToVthruAdminLogin();
		
	}
	
	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String username, String password) throws Throwable {
	 
		loginPage.enterUserName(username);
		loginPage.enterPassword(password);
	}

	@When("^click on login to dashboard$")
	public void click_on_login_to_dashboard() throws Throwable {
	
		loginPage.loginToDashboard();
	}

	@Then("^I should be able to navigate successfully to admin dashboard$")
	public void i_should_be_able_to_navigate_successfully_to_admin_dashboard() throws Throwable {
	   
		/*Once with valid credentials navigate to dashboard happens when can assert
		1. Dashboard page title 
		2. Check any element as present*/
		
		System.out.println("Clicked");
	}

	@Then("^I should be thrown invalid credentials error$")
	public void i_should_be_thrown_invalid_credentials_error() throws Throwable {
	   
		loginPage.isErrorMessage();
	}


}
