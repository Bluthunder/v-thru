#Author: Kaushik 
#Keywords Summary :

@Login
Feature: Admin Login Feature
  As a admin user i should be able to login to V-thru Web app 

  @tag1
  Scenario Outline: Login with Valid credentials
    Given I am on the v-thru admin login webpage
    When I enter "<username>" and "<password>"
    And click on login to dashboard
    Then I should be able to navigate successfully to admin dashboard
    
    Examples:
    	
    	|username  | password  |
    	|admin     | admin     |
    	|superadmin| superadmin|
    	
    	
 
# We assume password mismatch
@InvalidLogin
 Scenario Outline: Login failure in case of username and password mismatch
  
    Given I am on the v-thru admin login webpage
    When I enter "<username>" and "<password>"
    And click on login to dashboard
    Then I should be thrown invalid credentials error

	Examples:
    	
    	|username  | password   |
    	|admin     | admin1     |
    	|$%_invalid| superadmin1|

 # We assume username cannot start with special characters
  @tag3
  Scenario Outline: Error scenario with invalid/empty username
  
    Given I am on the v-thru admin login webpage
    When I enter "<invalid_username>" and "<password>"
    And click on login to dashboard
    Then I should be thrown invalid credentials error

	Examples:
    	
    	|invalid_username  | password  |
    	|                  | admin     |
    	|$%_invalid        | superadmin|
    
    	
   
    	
