Dim timeOut
timeOut = GetTestParameterValue("Timeout")

wait(timeOut/2)
Set homePage = Browser("title:=Serwis Internetowy iPKO - Internet Explorer").Page("title:=Serwis Internetowy iPKO")
		Set transakcjeLink = homePage.WebElement("xpath:=//a[@href='#transactions']")
		Set przelewyLink = homePage.WebElement("name:=Doładowania")
		
If transakcjeLink.Exist(timeOut) Then
		transakcjeLink.Click	
	 	Reporter.ReportEvent micPass, "Transakcje click", "Transakcje click"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "Transakcje click")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "Transakcje click", "Transakcje click"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "Transakcje click")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
	End if
	
If przelewyLink.Exist(timeOut) Then
		przelewyLink.Click	
	 	Reporter.ReportEvent micPass, "Przelewy click", "Przelewy click"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "Przelewy click")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "Przelewy click", "Przelewy click"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End if
	

