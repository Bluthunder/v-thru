/**
 * 
 */
package com.vthru.managers;

import org.openqa.selenium.WebDriver;

import com.vthru.pageObjects.ForgetPasswordPage;
import com.vthru.pageObjects.LoginPage;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 * 
 * This is used to manage and create page object instances
 */
public class PageObjectManager {
	
	private WebDriver driver;
	
	private LoginPage loginPage;
	private ForgetPasswordPage forgetPasswordPage;
	
	/**
	 * @param driver
	 */
	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}

	public LoginPage getLoginPage() {
		
		return (loginPage==null) ?loginPage=new LoginPage(driver):loginPage;
	}
	
	public ForgetPasswordPage getforgetPasswordPage() {
		return (forgetPasswordPage==null) ? forgetPasswordPage = new ForgetPasswordPage(driver):forgetPasswordPage;
	}
}
