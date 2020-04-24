/**
 * 
 */
package com.vthru.pageObjects;

import static org.testng.AssertJUnit.assertArrayEquals;
import static org.testng.AssertJUnit.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.vthru.managers.FileReaderManager;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class LoginPage {
	
	WebDriver driver;

	/**
	 * @param driver
	 */
	public LoginPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	
	/************** ELEMENT LOCATORS OF LOGIN PAGE ***********************/
	
	@FindBy(how=How.ID,using="username")
	WebElement textBoxUserName;
	
	@FindBy(how=How.ID,using="password")
	WebElement textBoxPassword;
	
	@FindBy(how=How.CLASS_NAME,using="iCheck-helper")
	WebElement checkBoxRememberMe;
	
	@FindBy(how=How.XPATH,using="//button[contains(text(),'Login to Dashboard')]")
	WebElement btnLogin;
	
	
	@FindBy(how=How.XPATH,using="//a[contains(text(),'Forgotten password?')]")
	WebElement linkForgetPassword;
	
	/*@FindBy(how=How.CSS,using=".alert.alert-danger.alert-error")
	WebElement errInvalidCredantials;
	*/
	
	@FindBy(how=How.CLASS_NAME,using="alert-danger")
	WebElement errInvalidCredantials;
	
	/***** Page object Methods for interacting with different objects in page******/
	
	
	//Get the page title, this will be used for for asserting the correct page is loaded
	public String getPageTitle() {
		
		String vthruPageTitle = driver.getTitle();
		return vthruPageTitle;
		
	}
	
	
	/**
	 * This is used for setting the username to username text box
	 * @param username
	 */
	public void enterUserName(String username) {
		
		textBoxUserName.sendKeys(username);
		
	}
	
	/**
	 * This is used for setting the password to password text box
	 * @param password
	 */
	public void enterPassword(String password) {
		
		textBoxPassword.sendKeys(password);
	}
	
	
	//This is used for checking remember me is clickable and clicking on it
	public void checkRememberMe() {
		
		checkBoxRememberMe.isEnabled();
		
		if(!checkBoxRememberMe.isSelected()) {
			checkBoxRememberMe.click();
		}
		
	}
	
	//This is used to click on the login
	public void loginToDashboard() {
		
		try {
			
			btnLogin.isEnabled();
			btnLogin.click();
			
		}
		
		catch (ElementNotInteractableException e) {
			
			e.getStackTrace();
		}
	}
	
	//This is used to click forgetpassword link
	public void forgetPassword() {
		
		try {
			WebDriverWait wait = new WebDriverWait(driver, 10);
			wait.until(ExpectedConditions.elementToBeClickable(linkForgetPassword));
			linkForgetPassword.click();
			
		} catch (ElementNotInteractableException e) {
			
			e.getStackTrace();
		}
	}
	
	// open application url
	public void navigateToVthruAdminLogin() {
		
		
		String appUrl = FileReaderManager.getInstance().getConfigReader().getAppUrl();
		
		driver.get(appUrl);
	
		
	}
	
	public boolean isErrorMessage() {
		
		/*WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeSelected(errInvalidCredantials));
		*/
		if(errInvalidCredantials.isDisplayed()) {
			
			String errorMessage = errInvalidCredantials.getText();
			Assert.assertEquals("Invalid credentials." , errorMessage.trim());
			return true;
		}
		
		else 
			return false;
	}

}
