# Tabordningsexperiment

## Hämta och kör

    git clone git@github.com:npup/vertikala-tabindex.git
    cd vertikala-tabindex
    npm i
    npm start

Appen kör på http://localhost:3000/

## Funderingar

Det verkar som att man vill skriva ut fälten för objektens properties vertikalt, p.g.a. att det finns, säg, 5 objekt (ett per år), samtidigt varje objekt kan ha desto fler properties -  nämligen så många att att det blir knepigt (eller i alla fall alldeles för brett) att layouta det hela som "ett objekt per rad".

Jag förökte här lösa det med tabindex här, så att fälten _kolumnvis_ (sett över _alla_ tabeller) har samma tabindex.

Då blir tabordningen

1.  Alla fält i en första kolumn
2.  Alla fält i en andra kolumn
3.  Etc.

Dvs man tabbar slut på **alla** förstakolumner på sidan innan andrakolumnen kommer ifråga osv.


Det tycks funka..   Jag startar detta custom-tabindex på 101 för att inte interferera med ev. befintliga tabindex på sidan.  Inom denna serie flyttar sig då tab (och shift+tab) enligt den vertikala idén.
