/**
 * 
 */
package com.vthru.stepDefinitions;

import com.vthru.managers.TestContext;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

/**
 * @author KAUSHIK
 * Apr 24, 2020
 */
public class CukeHooks {

	
	TestContext testContext;

	/**
	 * @param testContext
	 */
	public CukeHooks(TestContext Context) {

		testContext = Context;
	}
	
	@Before
	public void setUp(Scenario scenario) {
		
		System.out.println(scenario.getName());
	}
	
	
	@After
	public void tearDown() {
		testContext.getWebDriverManager().closeDriver();
	}
}
