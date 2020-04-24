/**
 * 
 */
package com.vthru.testRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

import cucumber.api.CucumberOptions;


/**
 * @author KAUSHIK
 * Apr 24, 2020
 */

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/features",
		glue= {"com.vthru.stepDefinitions"},
		tags= {"@Login,@ForgetPassword"},
		plugin = {"pretty:target/cucumber-report/testResult.txt",
				   "html:target/cucumber-html-report/testResults",
				   "json:target/cucumber-json-report/testResults"
				   }
		)
public class vthruTestRunner{
	
	

}
