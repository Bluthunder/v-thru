# V-Thru
Test Automation solution for V-Thru

Technology used 
test automation - Selenium 
Bdd - cucumber
Dependency and build management - Maven
Test framework - Junit 

Since the application scope was not much defined, i took the liberty to write a small page object model framework using page factory pattern. 
Have tried to implement best automation design practices with oops concepts. 
Features of framework

1. central test context instance to manage test execution flow 
2. Web driver manager to manage driver instances
3. Page object manager to manage and implement page objects and communication for shared steps
4. Used DI principles using cucumber pico-container
5. Cross browser testing 
6. Cross platform testing , local, headless, remote
7. html reporting along with pretty and json. Json report can be used to build better interactive dashboards/reports
8. mvn build can be tied to any jenkins pipeline enabling CI. 
