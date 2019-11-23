from pymongo import MongoClient
import re

def nuuksio():
    res = {}
    res["name"] = "Nuuksio - Muinaisjäännökset ja historiallinen asutus"
    res["location"] = {"lat": 60.25800009, "lon": 24.57443923}
    res["description"] = "Näe ja koe Nuuksion kansallispuiston ja sen lähialueilta löytyvät muinaisjäännökset. Suurin osa löydöksistä ajoittuu historialliselle ajalle eli 1200-luvulle. Näitä kulttuurihistoriallisia kohteita on yli 20 mukaan lukien hiilimiiluja, asuinpaikkoja, tervahautoja sekä kivikehiä."
    res["distance"] = 25.1
    return res

def mustavuori():
    res = {}
    res["name"] = "Mustavuoren - Helsingin puolustuslinja"
    res["location"] = {"lat": 60.23654951, "lon": 25.14909954}
    res["description"] = "Mustavuoren tukikohta I:n linnoituslaitteet (kohteet I:9 – 21 ja tykkipatteri 61 sekä yhdystieverkosto) muodostavat pääkaupunkiseudun parhaiten säilyneen linnoitekokonaisuuden. Alueella voi muodostaa selkeän kuvan ensimmäisen maailmansodan aikaisen hajasijoitetun linnoitusjärjestelmän mukaisesta tukikohdasta. Rakennustyöt ovat jääneet osittain keskeneräisiksi. Tämän johdosta alueella pystyy hahmottamaan eri valmistumisasteelle jääneitä linnoituslaitteita ja myös ajan rakennusmenetelmiä ja työjärjestyksiä."
    res["distance"] = 23.9
    return res


def create_route():
    close_by = []
    close_by.append(nuuksio())
    close_by.append(mustavuori())
    return {"res": close_by}


def sample():
    client = MongoClient("mongodb+srv://huutista:huutista@cluster0-4fmva.mongodb.net/test?retryWrites=true&w=majority")
    mydb = client["data"]
    pois = mydb.site_points
    #{'Kohdenimi,C,100': { $regex: /^Noux/ }}
    regx = re.compile("^Noux", re.IGNORECASE)
    print(pois.find_one({'Kohdenimi,C,100': regx}))

