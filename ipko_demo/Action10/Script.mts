Dim timeOut, kwota, dataPrzelewu, nazwiskoOdbiorcy
timeOut = GetTestParameterValue("Timeout")
kwota = GetTestParameterValue("kwota")
nazwaOdbiory = GetTestParameterValue("nazwaOdbiorcy")
adressy = GetTestParameterValue("adres")
nazwiskoOdbiorcy = GetTestParameterValue("adres")
numerTel = GetTestParameterValue("NumerTelefonu")
wait 3

Set homePage = Browser("name:=Serwis Internetowy iPKO").Page("title:=Serwis Internetowy iPKO")
			Set kwotaWebEdit = homePage.WebEdit("class:=size-amount f-amount ui-ipko-input")
			Set przelewyLink = Browser("Serwis Internetowy iPKO").Page("Serwis Internetowy iPKO").WebList("ui-id-83") @@ hightlight id_;_Browser("Serwis Internetowy iPKO").Page("Serwis Internetowy iPKO").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf6.xml_;_
	 		Set Odbiorca = homePage.WebEdit("value:=PAWEŁ")
			Set nazwisko = homePage.WebEdit("value:=IPKO")
			Set NumerTelefonu = homePage.WebEdit("class:=size-80 f-mobile-phone ui-ipko-input")
			Set adres = homePage.WebEdit("value:=Miła 3", "class:=size-220 f-receiver-address-1 x-input-req")
			Set zgoda = homePage.WebElement("class:=check-input")
			Set Operator = homePage.WebElement("class:=radio-input", "Location:=4")
			
			Set dalejButton = homePage.WebButton("name:=Dalej")
 
 			Set numerSms = homePage.WebEdit("class:=f-tan-code")
 
	If kwotaWebEdit.Exist(timeOut) Then
	
		kwotaWebEdit.Set kwota
					
		Odbiorca.Set nazwaOdbiory
		nazwisko.Set nazwiskoOdbiorcy
		adres.Set adressy
		NumerTelefonu.Set numerTel
		wait 2
		Operator.Click
		zgoda.Click
		wait 1
		Browser("Serwis Internetowy iPKO").Page("Serwis Internetowy iPKO").WebElement("Dalej").Click

		wait 2
		numerSms.Set "1234"
		wait 2
	Browser("Serwis Internetowy iPKO").Page("Serwis Internetowy iPKO_2").WebButton("Wykonaj").Click
	 	Reporter.ReportEvent micPass, "zlecenie przelewu wykonane pomyslnie", "zlecenie przelewu wykonane pomyslnie"
		''Dodanie komunikatu do loga
		Call Log_Result("PASS", "zlecenie przelewu wykonane pomyslnie")
		'Zaraportowanie kroku testowego
		Call TestReport ("PASS")
	Else
	 	Reporter.ReportEvent micFail, "zlecenie przelewu nie wykonane pomyslnie", "zlecenie przelewu nie wykonane pomyslnie"
		''Dodanie komunikatu do loga
		Call Log_Result("FAIL", "zlecenie przelewu nie wykonane pomyslnie")
		'Zaraportowanie kroku testowego
		Call TestReport ("FAIL")
		ExitTest
	End if
	
	
