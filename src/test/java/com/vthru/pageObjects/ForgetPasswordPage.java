/**
 * 
 */
package com.vthru.pageObjects;

import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class ForgetPasswordPage {
	
	private WebDriver driver;

	/**
	 * @param driver
	 */
	public ForgetPasswordPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	/************** ELEMENT LOCATORS OF LOGIN PAGE ***********************/
	
	@FindBy(how=How.ID,using="exampleEmail")
	WebElement textBoxrecoveryEmail;
	
	@FindBy(how=How.XPATH,using="//button[contains(text(),'Recover Password')]")
	WebElement btnRecoverPassword;
	
	@FindBy(how=How.LINK_TEXT,using="Sign in existing account")
	WebElement btnSignInExisting;
	

	
	public void navigateToPasswordResetPage() {
		
		String passwordResetPageUrl = driver.getCurrentUrl();
		
		Assert.assertTrue(passwordResetPageUrl.contains("resetting"));;
		
	}
	
	
	// Enter recovery email
	public void enterRecoveryEmail(String email) {
		
		textBoxrecoveryEmail.sendKeys(email);
	}
	
	public void passwordResetPage() {
		
	}
	
	//Click Recoverpassword
	public void clickRecoverPassword() {
		
		try {
			btnRecoverPassword.isEnabled();
			btnRecoverPassword.click();
		} catch (ElementNotInteractableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	// Click on sign in with existing account
	public void clickSignInExisting() {
		
		try {
			btnSignInExisting.isEnabled();
			btnSignInExisting.click();
		} catch (ElementNotInteractableException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
