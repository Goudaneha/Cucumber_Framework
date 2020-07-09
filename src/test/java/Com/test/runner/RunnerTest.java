package Com.test.runner;

import java.io.File;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

import com.vimalselvam.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"C:/Users/nehaashokj/git/Cucumber_Framework/src/main/java/Demo.feature"},
		//tags = "@TES-4",
		//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.json"},
		name = {"outlook"},
		glue ={"stepdefination.test"},
		plugin={"com.vimalselvam.cucumber.listener.ExtentCucumberFormatter:target/html/ExtentReport.html"},
		format = {"pretty","html:html_ouput/cucumber.html","json:json_output/cucumber.json"},
		monochrome = true,
		strict = false,
		dryRun =false
		)


public class RunnerTest {
	@AfterClass
	public static void setup()
	{
	Reporter.loadXMLConfig(new File("C:\\Users\\nehaashokj\\git\\Cucumber_Framework\\src\\test\\java\\extent-config.xml"));
	//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
	Reporter.setSystemInfo("User Name", "NJ");
	Reporter.setSystemInfo("Application Name", "Test App ");
	Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
	Reporter.setSystemInfo("Environment", "Production");
	Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
	}
}
