package Com.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/nehaashokj/Downloads/Allica/Demo_maven/src/main/java/Demo.feature",
		glue ={"stepdefination.test"},
		format = {"pretty","html:html_ouput/cucumber.html","json:json_output/cucumber.json"},
		monochrome = true,
		strict = true,
		dryRun =false
		)


public class RunnerTest {

}
