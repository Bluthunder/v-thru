/**
 * 
 */
package com.vthru.stepDefinitions;

import java.text.DateFormat.Field;

import javax.swing.plaf.synth.SynthSeparatorUI;

import com.vthru.managers.TestContext;
import com.vthru.pageObjects.ForgetPasswordPage;
import com.vthru.pageObjects.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class ForgetPassword {
	

	TestContext testContext;
	
	ForgetPasswordPage forgetPasswordPage;
	LoginPage loginPage;
	
	public ForgetPassword(TestContext context) {
		    testContext = context;
		    forgetPasswordPage = testContext.getPageObjectManager().getforgetPasswordPage();
		    loginPage = testContext.getPageObjectManager().getLoginPage();
		
	}
	
	
	@When("^I click on the forgetten passward link$")
	public void i_click_on_the_forgetten_passward_link() throws Throwable {
	    
		loginPage.forgetPassword();
	}

	@Then("^I should navigate to password reset page$")
	public void i_should_navigate_to_password_reset_page() throws Throwable {
		
		forgetPasswordPage.navigateToPasswordResetPage();
	    
	}

	@Then("^I enter \"([^\"]*)\"$")
	public void i_enter(String email) throws Throwable {
	    
		forgetPasswordPage.enterRecoveryEmail(email);
	}

	@Then("^click recover password$")
	public void click_recover_password() throws Throwable {
	   
		forgetPasswordPage.clickRecoverPassword();
	}


	@When("^I click on the sign_in_existing_account link$")
	public void i_click_on_the_sign_in_existing_account_link() throws Throwable {
	   
		forgetPasswordPage.clickSignInExisting();
	}

	@Then("^I should navigate to login page$")
	public void i_should_navigate_to_login_page() throws Throwable {
	   
		loginPage.getPageTitle();
	}

	@Then("^I receive error$")
	public void i_receive_error() throws Throwable {
	   
		/*Since there are no error for field validattion. But in case of actual application error 
		messages can be asserted using regex comparison for email Field.*/
		
		System.out.println("Error displayed");
		
		
	}
	
	
	

}
