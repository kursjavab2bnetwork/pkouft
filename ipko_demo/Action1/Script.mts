'@MasterSwitch
typOperacji = DataTable.Value("Akcja", "Run")

Select Case typOperacji
	'@TestFactoryMethod("Open browser and navigate to URL", "uruchomienie")
	Case "Logowanie"	
		'@TestFactoryParam([Browser: STRING, URL: STRING, Timeout: INT, login: STRING, password: STRING])
		RunAction "Logowanie", oneIteration
	'@TestFactoryMethod("Make search", "wyszukanie")
	Case "Przejdz_na_Doladowanie"
		'@TestFactoryParam([request: STRING, Timeout: INT])
		RunAction "Przejdz_na_Doladowanie", oneIteration
	'@TestFactoryMethod("WykonajPrzelew", "WykonajPrzelew"
	Case "WykonajPrzelew"
		'@TestFactoryParam([nazwaOdbiorcy: STRING, adres: STRING, Timeout: INT, kwota: INT, nazwisko: STRING, NumerTelefonu: STRING])
		RunAction "WykonajPrzelew", oneIteration
	'@TestFactoryMethod("Sprawdz_Doladowanie", "Sprawdz_Doladowanie"
	Case "Sprawdz_Doladowanie"
		'@TestFactoryParam([])
		RunAction "Sprawdz_Doladowanie", oneIteration
	'@TestFactoryMethod("Wyloguj", "Wyloguj"
	Case "Wylogowanie"
		'@TestFactoryParam([])
		RunAction "Wylogowanie", oneIteration
End Select

