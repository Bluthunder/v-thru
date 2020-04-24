/**
 * 
 */
package com.vthru.managers;

import com.vthru.utils.ConfigFIleReader;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 * 
 * This is used for managing property file and config files 
 */
public class FileReaderManager {

	private static FileReaderManager fileReaderManager = new FileReaderManager();
	private static ConfigFIleReader configFileReadder;
	
	private FileReaderManager() {
		
	}
	
	
	public static FileReaderManager getInstance() {
		return fileReaderManager;
	}
	
	
	public ConfigFIleReader getConfigReader() {
		return(configFileReadder==null) ? new ConfigFIleReader():configFileReadder;
	}
}
