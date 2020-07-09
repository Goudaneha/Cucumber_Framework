package pageobjects;

import org.openqa.selenium.By;

public class Outlook {
	public static String actualpassword = "2ji14cs019@";
	public static By email = By.xpath("//input[@id='i0116']");
	public static By next = By.xpath("//input[@id='idSIButton9']");
	public static By pwd =By.xpath("//input[@id='i0118']");
	public static By signin = By.xpath("//input[@value='Sign in']");
	public static By yes = By.xpath("//input[@value='Yes']");
	public static By click = By.xpath("//span[text()='Start new']");
	public static By newmessage =By.xpath("//span[contains(text(),'New message')]");
	public static By To =By.xpath("//input[@tabindex='0']");
	public static By sub=By.xpath("//input[@id='subjectLine0']");
	public static By messagebody = By.xpath("//div[@data-ogsb='rgb(255,255,255)']");
	public static By attach = By.xpath("(//i[contains(text(),'')])[1]");
	public static By bycomputer = By.xpath("//span[text()='Browse this computer']");
	public static By send = By.xpath("//button[@title='Send (Ctrl+Enter)']");
	public static By click_img = By.xpath("//img[@class='FsaMvuZjHGZQpDL3BiJmL']");
	public static By signout = By.xpath("//a[@id='meControlSignoutLink']");
			
}
