package MainMethod;

import org.openqa.selenium.WebDriver;

import utility.BrowserConfig;

public class DriverSetup extends BrowserConfig{
	
	private static WebDriver driver;
	
	public static void browsersetup() {
		 driver=browsername("gecko");
	}
	
	public static WebDriver getobject() {
		return driver;
		
	}
}
