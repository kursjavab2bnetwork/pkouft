
wait 3
Set homePage = Browser("name:=Serwis Internetowy iPKO").Page("title:=Serwis Internetowy iPKO")
	Set sprawdzenieDoladowania = homePage.WebElement("class:=ui-inplace-dialog-title")

If sprawdzenieDoladowania.exist(5)	Then

	 	Reporter.ReportEvent micPass, "Doladowanie wykonane pomyslnie ", "Doladowanie wykonane pomyslnie "
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "Doladowanie wykonane pomyslnie ")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "Doladowanie nie wykonane pomyslnie ", "Doladowanie nie wykonane pomyslnie "
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "wczytanie strony glownej")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End if
