package utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BrowserConfig {

	private static WebDriver driver;
	public static BrowserConfig obj;
	
	public static BrowserConfig getobj() {
		if(obj==null) {
			obj = new BrowserConfig();
		}
		return obj;
	}
	
	public static WebDriver browsername(String browser) {
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver","C:/Users/nehaashokj/Downloads/chromedriver_win32/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().deleteAllCookies();
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
			driver.get("https://outlook.office365.com/");
			}
		return driver;
		}
	}

