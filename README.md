Skriftlig rapport (minst 300 ord – max 500 ord) självständigt reflektera över och
kritiskt granska de, i projektet valda lösningarna gällande databas, externa API:er
och webservices

# Reflektion

## Databas, externa API:er, webservices

Jag stod i valet och kvalet om jag skulle köra på mitt RPS API en gång till eller om jag skulle skapa ett nytt för Memory, men landade i att det blev enklast att fortsätta med RPS då jag i princip nu kan mitt API innan- och utantill. Dessutom är Postgres den enda databasen jag har hunnit lära mig hittills så det valet kändes självklart. 

Fick ändra lite i min Spring Boot backend då jag bestämde mig för att göra om Rock, Paper, Scissors till Lemon, Strawberry och Apple. I förra kursen skrev jag även om alla enpoints för att göra hanteringen mer generisk (create, add, update istället för att varje metod hade en egen endpoint).

I själva fetchdelen försökte jag implementera en likadan generisk http-service med Axios som jag hade i förra projektet men fick inte rätt på det då man (TYVÄRR!!!) inte kunde använda sessionStorage i React Native och det inte går att hämta AsyncStorage för att använda som header i anrop med Axios. Istället har jag använt fetch med async/await samt skapat funktioner för att lagra och hämta i AsyncStorage (setData, getData).

Använder AsyncStorage för att spara token och gameId, men detta är enbart eftersom att jag inte fick till det med context trots upprepade försök. Är medveten om att tokens inte bör lagras på detta sätt men det är trots allt inte inloggningsuppgifter det handlar om i detta fall, utan bara spelarens ID. Så tänker att det får vara acceptabelt för denna gång.

Har försökt hålla mitt projekt snyggt, strukuerat och städat genom att bryta ut kod till mindre komponenter samt hålla en logisk mappstruktur.

Är väldigt nöjd med mitt spel blev, både utseendemässigt och funktionsmässigt även om det inte har några SUPERCOOLA features. Det finns en designskiss/prototyp i assets-mappen som jag försökt efterlikna.