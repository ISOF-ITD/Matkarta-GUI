Matkarta-GUI

[Accessibility](Accessibility.md)

Upgrade outdated packages:

```bash
npm outdated | egrep '^[a-zA-Z@/-_]*' -o | tr '\r\n' ' '
```

# How to: Lägg till en ny kategori

* Lägg kategoribilden i Sitevision (*https://isof.se/edit*) > Bildarkiv > Matkult > Kategorier
* Lägg in kategorin tillsammans med URL:en till bilden i filen **scripts/utils/matkartaCategories.js**
* Kategorins ID måste stämma överens med raden i databastabellen *categories_v2*, som antingen skapas under importen eller manuellt i databasen alternativt i Django shell.
* Lägg även till som subkategori i kokboken om det behövs (**scripts/utils/matkartaCategories.js**)

# How To: Deploy

* Skriv in rätt sökväg til ES-API:t i config.js (frigg-test eller frigg). Annars måste det göras på servern i efterhand.
* Kör följande kommando i terminalen (från mappen Matkarta-GUI):

```bash
sed -i 's/production = false/production = true/' gulpfile.js && gulp build && git add www && git commit -m 'fresh compile' && git push origin master
```

* Gå in på servern och kör följande kommando:

```bash
cd /var/www/django/static/js-apps/matkartan && ./svn_www_update.sh && exit
```

# Lägg till saknade filer

Matkartan använder fortfarande www4.isof.se som sökväg för alla PDF-filer. Om en fil saknas, fast den är kopplad i databasen, ska den flyttas på följande sätt:

* Hämta filen från filemaker. Filen hittas enklast med att söka efter accessionsnummer
* Lägg in i mappen **/var/www/html/www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/matkarta** på mimer. T.ex. med *rsync* på följande sätt:

```bash
rsync -av /mnt/c/Users/ricsi850/Downloads/Matkult/8123.pdf ricsi850its-srv185.sat.its.uu.se:/var/www/html/www4.sprakochfolkminnen.se/Folkminnen/Svenska_sagor_filer/matkarta
```

# 