#Author: Kaushik
#Keywords Summary :
@ForgetPassword
Feature: Forget Password
  As a user i should be able to reset by password

  Scenario Outline: Recover password with valid email id
    Given I am on the v-thru admin login webpage
    When I click on the forgetten passward link
    Then I should navigate to password reset page
    And I enter "<registeredEmail>"
    And click recover password

    Examples: 
      | registeredEmail |
      | k@mail.com      |

  #We assume invalid email format would throw error
  Scenario Outline: Email field format validation
    Given I am on the v-thru admin login webpage
    When I click on the forgetten passward link
    Then I should navigate to password reset page
    And I enter "<invalidFormatEmail>"
    Then I receive error

    Examples: 
      | invalidFormatEmail |
      | abc12.com          |
      | AS_21@gmail        |


  Scenario: Ability to return to login page
    Given I am on the v-thru admin login webpage
    When I click on the forgetten passward link
    Then I should navigate to password reset page
    And I click on the sign_in_existing_account link
    Then I should navigate to login page
