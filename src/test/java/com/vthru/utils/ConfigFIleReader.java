/**
 * 
 */
package com.vthru.utils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Properties;

import javax.management.RuntimeErrorException;

import com.vthru.enums.DriverType;
import com.vthru.enums.EnvironmentType;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class ConfigFIleReader {

	private Properties properties;
	
	private final String propertyFilePath = "src//test//resources//configs//configuration.properties";
	
	public ConfigFIleReader() {
		BufferedReader reader;
		
		try {
			
			reader = new BufferedReader(new FileReader(propertyFilePath));
			
			properties = new Properties();
			
			try {
				
				properties.load(reader);
				reader.close();
			}
			
			catch (Exception e) {
				
				e.printStackTrace();
				
			}
			
		}
		
		catch (FileNotFoundException e) {
			e.printStackTrace();
			throw new RuntimeException("Configuration properties not found at "+ propertyFilePath );
			// TODO: handle exception
		}
	}
	
	
	// Get Driver path from config file
	public String getDriverPath() {
		
		String driverPath = properties.getProperty("driverPath");
		
		if(driverPath != null) {
			return driverPath;
			
		}
		else throw new RuntimeException("Driver Path not specified");
	}
	
	
	// Get implicit wait from config
	public long getImplicitWait() {
		
		String implicitWait = properties.getProperty("implicitWait");
		
		if(implicitWait != null) {
			return Long.parseLong(implicitWait);
		}
		else throw new RuntimeException("Wait not specified");
	}
	
	
	//Get AppUrl from config file
	public String getAppUrl() {
		
		String url = properties.getProperty("AppURL");
		
		if(url != null) {
			return url;
		}
		
		else throw new RuntimeException("Url not specified");
	}
	
	
	// Get Browser type name from config file
	public DriverType getBrowser() {
		
		String browserName = properties.getProperty("browser");
		
		if(browserName.equalsIgnoreCase("chrome")) {
			return DriverType.CHROME;
					
		}
		else if(browserName.equalsIgnoreCase("firefox")) {
			return DriverType.FIREFOX;
		}
		else if(browserName.equalsIgnoreCase("iexplorer")) {
			return DriverType.INTERNETEXPLORER;
		}
		
		else throw new RuntimeException("Browsername is not specified in config file");
			
	}
	
	
	
	// get test execution environment from the config file
	public EnvironmentType getEnvironment() {
		
		String environmentName = properties.getProperty("environment");
		
		if (environmentName.equalsIgnoreCase("local")) {
			
			return EnvironmentType.LOCAL;
		}
		
		else if (environmentName.equalsIgnoreCase("remote")) {
			
			return EnvironmentType.REMOTE;
		}
		
		else throw new RuntimeException("Evironment Not specified in config file");
		
	}
	
	public Boolean getBrowserWindowSize() {
		
		String windowSize = properties.getProperty("windowMaximize");
		if(windowSize!=null)
			return Boolean.valueOf(windowSize);
		return true;
	}
}
