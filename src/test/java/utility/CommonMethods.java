package utility;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import MainMethod.DriverSetup;
import stepdefination.test.StepDefin;

public class CommonMethods extends StepDefin {
	public static void clickmethod(By clk) {
		WebElement ele = DriverSetup.getobject().findElement(clk);
		ele.click();
	}
	
	public static void sendkeyson(By by,String args) {
		WebElement elements = DriverSetup.getobject().findElement(by);
		elements.sendKeys(args);
	}

}
