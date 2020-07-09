package stepdefination.test;

import java.awt.AWTException;


import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.Assert;

import MainMethod.DriverSetup;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.Outlook;
import utility.CommonMethods;

public class StepDefin {

	@Given("^user is on browser page$")
	public void user_is_on_browser_page() {
		DriverSetup.browsersetup();
	}
	@When("^user launch outlook$")
	public void user_launch_outlook() throws InterruptedException {
		Thread.sleep(3000);
	}
	@Then("^user has to login with valid credentials email \"([^\"]*)\"$")
	public void user_has_to_login_with_valid_credentials_email(String email) {
		CommonMethods.sendkeyson(Outlook.email,email);
		CommonMethods.clickmethod(Outlook.next);
	}

	@Then("^password \"([^\"]*)\"$")
	public void password(String pwd) throws InterruptedException {
		//Thread.sleep(2000);
		//Assert.assertEquals(pwd,Outlook.actualpassword);
		CommonMethods.sendkeyson(Outlook.pwd,pwd);
		Thread.sleep(2000);
		CommonMethods.clickmethod(Outlook.signin);
		//DriverSetup.getobject().close();
	}
	@Then("^user click on login$")
	public void user_click_on_login() throws InterruptedException{
		CommonMethods.clickmethod(Outlook.yes);	
		Thread.sleep(7000);
	}
	
//	@Then("^user signout$")
//	public void user_signout() throws InterruptedException {
//		DriverSetup.getobject().manage().timeouts().pageLoadTimeout(40, TimeUnit.SECONDS);
//		CommonMethods.clickmethod(Outlook.yes);
//		CommonMethods.clickmethod(Outlook.click_img);
//		Thread.sleep(7000);
//		CommonMethods.clickmethod(Outlook.signout);
//		System.out.println("Test case passed");
//		DriverSetup.getobject().close();
//		System.out.println("Test case failed");
	//}
	@Then("^click on start new$")
	public void click_on_start_new() throws InterruptedException {
		//DriverSetup.getobject().manage().timeouts().pageLoadTimeout(90, TimeUnit.SECONDS);
		Thread.sleep(6000);
		CommonMethods.clickmethod(Outlook.click);
		DriverSetup.getobject().manage().timeouts().pageLoadTimeout(90, TimeUnit.SECONDS);
	}
	@Given("^user clicks on button \"([^\"]*)\"$")
	public void user_clicks_on_button(String arg1) throws InterruptedException, IOException {
		Thread.sleep(6000);
//		 File screenshotFile = ((TakesScreenshot)DriverSetup.getobject()).getScreenshotAs(OutputType.FILE);
//		 FileUtils.copyFile(screenshotFile, new File("D:\\Screenshothi.png"));
		CommonMethods.clickmethod(Outlook.newmessage);
	}
	@Then("^sent message window will open$")
	public void sent_message_window_will_open() {
		
	}
	@Then("^user has to enter sender mail id in \"([^\"]*)\"$")
	public void user_has_to_enter_sender_mail_id_in(String emailid) {
		CommonMethods.sendkeyson(Outlook.To,emailid);
	}
	@Then("^add subject in  \"([^\"]*)\"$")
	public void add_subject_in(String sub) {
		CommonMethods.sendkeyson(Outlook.sub, sub);
	}
	@When("^user is in message body$")
	public void user_is_in_message_body() throws InterruptedException  {
		Thread.sleep(2000);
	}
	@Then("^uesr has to write text$")
	public void uesr_has_to_write_text() throws AWTException, InterruptedException {
		CommonMethods.clickmethod(Outlook.messagebody);
		Robot robot = new Robot();
		robot.keyPress(KeyEvent.VK_H);
		robot.keyRelease(KeyEvent.VK_H);
		Thread.sleep(1000);
	
		robot.keyPress(KeyEvent.VK_I);
		robot.keyRelease(KeyEvent.VK_I);
		Thread.sleep(1000);

		robot.keyPress(KeyEvent.VK_SPACE);
		robot.keyRelease(KeyEvent.VK_SPACE);
		
		robot.keyPress(KeyEvent.VK_ENTER);
		robot.keyRelease(KeyEvent.VK_ENTER);
	}
	@Then("^click on button \"([^\"]*)\"$")
	public void click_on_button(String filename) throws InterruptedException{
		Thread.sleep(4000);
		CommonMethods.clickmethod(Outlook.attach);
		Thread.sleep(2000);
		CommonMethods.clickmethod(Outlook.bycomputer);
	}
	@When("^screen navigate to new screen$")
	public void screen_navigate_to_new_screen(){
		}
	@Then("^select file to be attached \"([^\"]*)\"$")
	public void select_file_to_be_attached(String filepath) throws InterruptedException, AWTException {
		
		CommonMethods.sendkeyson(Outlook.attach, filepath);
		
//		//CommonMethods.sendkeyson(, args);
//		Robot robot = new Robot();
//		// Specify the file location with extension
//		StringSelection sel = new StringSelection("D:\\hiiiiiiiiiii.txt");
//		
//		robot.setAutoDelay(2000);
//	// Copy to clipboard
//		 Toolkit.getDefaultToolkit().getSystemClipboard().setContents(sel,null);
//		 System.out.println("selection" + sel);
//		robot.setAutoDelay(2000);
//		
//		 // Press CTRL+V
//		 robot.keyPress(KeyEvent.VK_CONTROL);
//		 robot.keyPress(KeyEvent.VK_V);
//		 
//		// Release CTRL+V
//		 robot.keyRelease(KeyEvent.VK_CONTROL);
//		 robot.keyRelease(KeyEvent.VK_V);
//		 robot.setAutoDelay(2000);
//		        
//		         //Press Enter 
//		 robot.keyPress(KeyEvent.VK_ENTER);
//		 robot.keyRelease(KeyEvent.VK_ENTER);
	}
	@Then("^click on send$")
	public void click_on_send() throws InterruptedException {
	CommonMethods.clickmethod(Outlook.send);
	Thread.sleep(4000);
	CommonMethods.clickmethod(Outlook.click);
	//CommonMethods.clickmethod(Outlook.signout);

		
	}
	@Then("^user signout$")
	public void user_signout() throws Throwable {
		CommonMethods.clickmethod(Outlook.signout);
	}
}
