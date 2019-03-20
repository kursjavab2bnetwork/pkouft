Dim currentBrowser, link, timeOut, request, password
currentBrowser = GetTestParameterValue("Browser") 
linkInternet = GetTestParameterValue("URL")
timeOut = GetTestParameterValue("Timeout")
login = GetTestParameterValue("login")
password = GetTestParameterValue("password")

'Zamykanie okienka browsera
SystemUtil.CloseProcessByName(currentBrowser)
wait 6
SystemUtil.Run "C:\Program Files\internet explorer\iexplore.exe", linkInternet


wait(timeOut/2)
Set loginPage = Browser("name:=iPKO - nowa bankowość elektroniczna PKO Banku Polskiego").Page("title:=iPKO - nowa bankowość elektroniczna PKO Banku Polskiego")
		Set loginField = loginPage.WebEdit("xpath:=//input[@id='editField#23']")
		Set nextBtn = loginPage.WebButton("xpath:=//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")
		Set passwordField = loginPage.WebEdit("xpath:=//input[@id='editField#28']")	
		Set zalogujBtn = loginPage.WebButton("name:=Zaloguj")		
		
	If loginField.Exist(timeOut) Then
		loginField.Set login
		nextBtn.Click		
					
	 	Reporter.ReportEvent micPass, "wczytanie strony logowania", "wczytanie strony logowania"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "wczytanie strony glownej", "wczytanie strony glownej"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End if
	
	If passwordField.Exist(timeOut) Then		
		passwordField.Set password
		wait 2
		zalogujBtn.Click
					
	 	Reporter.ReportEvent micPass, "wczytanie strony logowania", "wczytanie strony logowania"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "wczytanie strony glownej", "wczytanie strony glownej"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End if
