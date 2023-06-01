Skriftlig rapport (minst 300 ord – max 500 ord) självständigt reflektera över och
kritiskt granska de, i projektet valda lösningarna gällande databas, externa API:er
och webservices

# Reflektion

# Databas, externa API:er, webservices

Jag stod i valet och kvalet om jag skulle köra på mitt RPS API en gång till eller om jag skulle skapa ett nytt för Memory, men landade i att det blev enklast att fortsätta med RPS då jag i princip nu kan mitt API innan- och utantill. Dessutom är Postgres den enda databasen jag har hunnit lära mig hittills så det valet kändes självklart. 

Fick ändra lite i min Spring Boot backend då jag bestämde mig för att göra om Rock, Paper, Scissors till Lemon, Strawberry och Apple. I förra kursen skrev jag även om alla enpoints för att göra hanteringen mer generisk (create, add, update istället för att varje metod hade en egen endpoint).

I själva fetchdelen försökte jag implementera en likadan generisk http-service som jag hade i förra projektet men fick inte rätt på det då man inte kunde använda sessionStorage i React Native och det gick inte att hämta AsyncStorage i en class (som http-service är). Och istället för Axios har jag använt fetch med async/await. 

Använder som sagt AsyncStorage för att spara token, men detta är enbart eftersom att jag inte fick till det med context. Är medveten om att tokens inte bör lagras på detta sätt men det är trots allt inte inloggningsuppgifter det handlar om i detta fall, utan bara spelar-ID.

Har försökt hålla mitt projekt snyggt, strukuerat och städat genom att bryta ut kod till mindre komponenter samt hålla en logisk mappstruktur. 