/**
 * 
 */
package com.vthru.managers;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.vthru.enums.DriverType;
import com.vthru.enums.EnvironmentType;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 * 
 * This class is used to manage webdriver instances. 
 */
public class WebDriverManager {
	
	private WebDriver driver;
	private static DriverType driverType;
	private static EnvironmentType environmentType;

	private static final String CHROME_DRIVER_PROPERTY = "webdriver.chrome.driver";
	
	public WebDriverManager() {
		
		environmentType = FileReaderManager.getInstance().getConfigReader().getEnvironment();
		driverType = FileReaderManager.getInstance().getConfigReader().getBrowser();
	}

	public WebDriver getDriver() {
		
		if (driver == null) {
			driver= createDriver();
		}
		return driver;
	}

	/**
	 * @return
	 */
	private WebDriver createDriver() {
		
		switch(environmentType) {
		
		case LOCAL:
			driver = createLocalDriver();
			break;
		
		case REMOTE:
			driver = createRemoteDriver();
			break;
		}
		return driver;
  }

	/**
	 * @return
	 */
	private WebDriver createLocalDriver() {
		
		switch(driverType) {
			
		case CHROME:
			System.setProperty(CHROME_DRIVER_PROPERTY,FileReaderManager.getInstance().
					getConfigReader().getDriverPath());
		    driver = new ChromeDriver();
		    break;
		
		    
		    
		case FIREFOX:
		
			driver = new FirefoxDriver();
			break;
		
		case INTERNETEXPLORER:
			driver = new InternetExplorerDriver();
			break;
		}
		
		return driver;
	}



    private WebDriver createRemoteDriver() {
    	
    	// we can create remote driver for remote execution and SAAS based (such as browserstack, SAUCELAB etc
    	return null;
    }
    
    
    public void closeDriver() {
    	driver.close();
    	driver.quit();
    }
}