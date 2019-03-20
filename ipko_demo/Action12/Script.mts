	Set homePage = Browser("name:=Serwis Internetowy iPKO").Page("title:=Serwis Internetowy iPKO")
	Set dalejWyloguj = homePage.WebButton("name:=Wyloguj")
 wait 4
	If dalejWyloguj.Exist(timeOut) Then
	dalejWyloguj.Click
	
		Reporter.ReportEvent micPass, "Wylogowanie Udane", "Wylogowanie Udane"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "Wylogowanie Udane")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	SystemUtil.CloseProcessByName("iexplore.exe")
	Else
	 	Reporter.ReportEvent micFail, "Wylogowanie nie Udane", "Wylogowanie nie Udane"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "Wylogowanie nie Udane")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End If

