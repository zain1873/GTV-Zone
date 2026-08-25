import React, { useState, useRef, useEffect } from "react";
import "./Channelslist.css";

// -----------------------------
// Static data: one entry per country, listed in the same
// row-by-row order as the original screenshot (3 per row).
// "code" is the |XX| prefix shown inside the channel list.
// Channel names are the well-known public broadcasters for
// each country/region - feel free to trim or extend any list.
// -----------------------------
const COUNTRIES = [
  {
    id: "france",
    flag: "🇫🇷",
    name: "FRANCE",
    code: "FR",
    channels: ["TF1 HD", "France 2 HD", "France 3 HD", "France 5 HD", "M6 HD", "Canal+ HD", "BFM TV HD", "C8 HD", "Arte HD", "Gulli HD", "W9 HD", "L'Équipe HD", "France 24 HD", "CNews HD"],
  },
  {
    id: "ex-yu",
    flag: "📺",
    name: "EX-YU",
    code: "YU",
    channels: ["RTS1 HD", "Pink TV HD", "Nova S HD", "HRT1 HD", "Federalna TV HD", "RTCG HD", "B92 HD", "Happy TV", "O2 TV HD", "Klan Kosova HD", "RTV BK HD"],
  },
  {
    id: "iran",
    flag: "🇮🇷",
    name: "IRAN",
    code: "IR",
    channels: ["IRIB TV1 HD", "IRIB TV2 HD", "IRIB TV3 HD", "Manoto HD", "BBC Persian HD", "IRIB TV4 HD", "IRIB TV5 HD", "IRINN HD", "Press TV HD", "iFilm HD", "GEM TV HD"],
  },
  {
    id: "belgium",
    flag: "🇧🇪",
    name: "BELGIUM",
    code: "BE",
    channels: ["VTM HD", "Eén HD", "Canvas HD", "RTBF HD", "La Une HD", "RTL TVI HD", "Plug RTL HD", "Tipik HD", "Q2 HD"],
  },
  {
    id: "finland",
    flag: "🇫🇮",
    name: "FINLAND",
    code: "FI",
    channels: ["YLE TV1 HD", "YLE TV2 HD", "MTV3 HD", "Nelonen HD", "YLE Teema HD", "Yle Fem HD", "Sub HD", "Jim HD", "TV Finland HD"],
  },
  {
    id: "italy",
    flag: "🇮🇹",
    name: "ITALY",
    code: "IT",
    channels: [
      "GENERAL",
      "CORONA VIRUS INFO",
      "RAI1 HD",
      "RAI1 UHD",
      "RAI2 HD",
      "RAI2 UHD",
      "RAI3 HD",
      "RAI3 UHD",
      "RAI4 UHD",
      "RAI5 UHD",
      "RETE4 HD",
      "RETE4 UHD",
      "CANALE5 HD",
      "CANALE5 UHD",
      "ITALIA1 HD",
      "ITALIA1 UHD",
      "IRIS",
      "LA5",
      "LA7D",
    ],
  },
  {
    id: "usa",
    flag: "🇺🇸",
    name: "USA",
    code: "US",
    channels: ["CNN HD", "FOX NEWS HD", "ESPN HD", "HBO HD", "ABC HD", "NBC HD", "CBS HD", "TNT HD", "TBS HD", "Discovery HD", "National Geographic HD", "MSNBC HD", "CNBC HD", "HISTORY HD"],
  },
  {
    id: "georgia",
    flag: "🇬🇪",
    name: "GEORGIA",
    code: "GE",
    channels: ["Rustavi 2 HD", "Imedi TV HD", "GPB First Channel HD", "Adjara TV HD", "Mtavari Archi HD", "Maestro TV HD", "GDS HD", "Rustavi 2 News HD"],
  },
  {
    id: "montenegro",
    flag: "🇲🇪",
    name: "MONTENEGRO",
    code: "ME",
    channels: ["RTCG HD", "TV Vijesti HD", "Nova M HD", "TV E HD", "Prva CG HD", "RTCG 2 HD", "Elmag TV HD"],
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "UK",
    code: "UK",
    channels: ["BBC ONE HD", "BBC TWO HD", "ITV HD", "CHANNEL 4 HD", "SKY SPORTS HD", "SKY NEWS HD", "BBC FOUR HD", "Channel 5 HD", "ITV2 HD", "E4 HD", "Dave HD", "SKY ONE HD"],
  },
  {
    id: "germany",
    flag: "🇩🇪",
    name: "GERMANY",
    code: "DE",
    channels: ["ARD HD", "ZDF HD", "RTL HD", "SAT1 HD", "PRO7 HD", "VOX HD", "RTL II HD", "Kabel Eins HD", "SUPER RTL HD", "n-tv HD", "Das Erste HD"],
  },
  {
    id: "latino",
    flag: "📺",
    name: "LATINO",
    code: "LT",
    channels: ["Univision HD", "Telemundo HD", "Caracol TV HD", "RCN HD", "Mega HD", "Chilevisión HD", "TV Azteca HD", "Canal 13 HD"],
  },
  {
    id: "afghanistan",
    flag: "🇦🇫",
    name: "AFGHANISTAN",
    code: "AF",
    channels: ["TOLO TV HD", "Ariana TV HD", "Shamshad TV HD", "RTA TV HD", "Lemar TV HD", "Saba TV HD"],
  },
  {
    id: "greece",
    flag: "🇬🇷",
    name: "GREECE",
    code: "GR",
    channels: ["ERT1 HD", "ANT1 HD", "MEGA HD", "ALPHA TV HD", "SKAI HD", "Star Channel HD", "OPEN TV HD", "ERT2 HD"],
  },
  {
    id: "24-7",
    flag: "📺",
    name: "24/7",
    code: "247",
    channels: ["24/7 MOVIES HD", "24/7 SPORTS HD", "24/7 NEWS HD", "24/7 KIDS HD", "24/7 SERIES HD"],
  },
  {
    id: "africa",
    flag: "📺",
    name: "AFRICA",
    code: "AF",
    channels: ["SuperSport HD", "DSTV HD", "Africa Magic HD", "SABC 1 HD", "eTV HD", "M-Net HD", "Mzansi Magic HD", "Supersport 2 HD"],
  },
  {
    id: "albania",
    flag: "🇦🇱",
    name: "ALBANIA",
    code: "AL",
    channels: ["RTSH HD", "Top Channel HD", "Klan TV HD", "Tring TV HD", "Vizion Plus HD", "Abc News HD", "Telesat HD"],
  },
  {
    id: "guatemala",
    flag: "🇬🇹",
    name: "GUATEMALA",
    code: "GT",
    channels: ["Canal 3 HD", "Canal 7 HD", "TV Azteca Guate HD", "Canal 11 HD", "Noti7 HD", "Guatevisión HD"],
  },
  {
    id: "honduras",
    flag: "🇭🇳",
    name: "HONDURAS",
    code: "HN",
    channels: ["Canal 5 HD", "Televicentro HD", "HCH HD", "Canal 10 HD", "Canal 11 HD", "Tigo HD"],
  },
  {
    id: "macedonia",
    flag: "🇲🇰",
    name: "MACEDONIA",
    code: "MK",
    channels: ["MRT1 HD", "Sitel HD", "Telma HD", "Kanal 5 HD", "Tv21 HD", "Alsat M HD"],
  },
  {
    id: "hong-kong",
    flag: "🇭🇰",
    name: "HONG KONG",
    code: "HK",
    channels: ["TVB Jade HD", "TVB Pearl HD", "ViuTV HD", "CCTV HD", "NOW TV HD", "Cable TV HD", "HBO Asia HD"],
  },
  {
    id: "malaysia",
    flag: "🇲🇾",
    name: "MALAYSIA",
    code: "MY",
    channels: ["TV1 HD", "TV3 HD", "Astro Ria HD", "Astro Prima HD", "Astro Cm HD", "BBHD", "Astro Wah HD", "Eros Now HD"],
  },
  {
    id: "arab",
    flag: "📺",
    name: "ARAB",
    code: "AR",
    channels: ["MBC1 HD", "MBC2 HD", "Al Jazeera HD", "Dubai TV HD", "Rotana HD", "Bein Sports HD", "Al Arabiya HD", "OSN Ya HD"],
  },
  {
    id: "malta",
    flag: "🇲🇹",
    name: "MALTA",
    code: "MT",
    channels: ["TVM HD", "ONE HD", "NET TV HD", "PBK TV HD", "SMASH HD", "F Living HD"],
  },
  {
    id: "argentina",
    flag: "🇦🇷",
    name: "ARGENTINA",
    code: "AR",
    channels: ["Telefe HD", "El Trece HD", "TN HD", "América TV HD", "Canal 9 HD", "TV Pública HD", "Canal 26 HD"],
  },
  {
    id: "japan",
    flag: "🇯🇵",
    name: "JAPAN",
    code: "JP",
    channels: ["NHK G HD", "NHK E HD", "Fuji TV HD", "TBS HD", "NTV HD", "TV Asahi HD", "BS Fuji HD", "NHK BS4K"],
  },
  {
    id: "mexico",
    flag: "🇲🇽",
    name: "MEXICO",
    code: "MX",
    channels: ["Las Estrellas HD", "Azteca Uno HD", "Canal 5 HD", "Imagen TV HD", "Azteca 7 HD", "Milenio TV HD", "Once TV HD"],
  },
  {
    id: "armenia",
    flag: "🇦🇲",
    name: "ARMENIA",
    code: "AM",
    channels: ["Armenia TV HD", "Shant TV HD", "H1 HD", "Kentron TV HD", "Arm News HD", "Atv HD"],
  },
  {
    id: "kurdistan",
    flag: "📺",
    name: "KURDISTAN",
    code: "KR",
    channels: ["Kurdistan TV HD", "Rudaw HD", "K24 HD", "KurdMax HD", "Zagros TV HD", "NRT HD", "Günlî TV HD"],
  },
  {
    id: "korea",
    flag: "🇰🇷",
    name: "KOREA",
    code: "KO",
    channels: ["KBS1 HD", "KBS2 HD", "MBC HD", "SBS HD", "TVN HD", "JTBC HD", "EBS HD", "OCN HD"],
  },
  {
    id: "osn",
    flag: "📺",
    name: "OSN",
    code: "OSN",
    channels: ["OSN MOVIES HD", "OSN SERIES HD", "OSN SPORTS HD", "OSN YA HD", "OSN First HD"],
  },
  {
    id: "russia-kazakhstan",
    flag: "📺",
    name: "RUSSIA-KAZAKHSTAN",
    code: "RU/KZ",
    channels: ["Channel One Russia HD", "Rossiya 1 HD", "Khabar TV HD", "Kazakhstan TV HD", "NTV Russia HD", "STS HD", "TNT HD", "Match TV HD"],
  },
  {
    id: "netherland",
    flag: "🇳🇱",
    name: "NETHERLAND",
    code: "NL",
    channels: ["NPO1 HD", "NPO2 HD", "NPO3 HD", "RTL4 HD", "RTL5 HD", "SBS6 HD", "Regional TV HD", "Fox NL HD"],
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "AUSTRALIA",
    code: "AU",
    channels: ["Seven Network HD", "Nine Network HD", "ABC TV HD", "SBS HD", "10 Network HD", "7TWO HD", "7mate HD", "Sky News AU HD"],
  },
  {
    id: "ukraine",
    flag: "🇺🇦",
    name: "UKRAINE",
    code: "UA",
    channels: ["1+1 HD", "Inter HD", "ICTV HD", "STB HD", "Ukraine 24 HD", "Espreso HD", "XSPORT HD"],
  },
  {
    id: "nicaragua",
    flag: "🇳🇮",
    name: "NICARAGUA",
    code: "NI",
    channels: ["Canal 2 HD", "Canal 4 HD", "Canal 10 HD", "Telenica HD", "Canal 6 HD", "Canal 13 HD"],
  },
  {
    id: "india",
    flag: "🇮🇳",
    name: "INDIA",
    code: "IN",
    channels: ["DD National HD", "Star Plus HD", "Colors HD", "Zee TV", "Sony TV", "Star Sports 1 HD", "Aaj Tak", "NDTV 24x7 HD", "Times Now HD", "Zee Cinema HD", "Sony SAB HD", "Star Gold HD", "Zee Marathi HD"],
  },
  {
    id: "south-india",
    flag: "📺",
    name: "SOUTH INDIA",
    code: "SI",
    channels: ["Sun TV HD", "Koch TV", "Star Vijay HD", "Zee Tamil HD", "Gemini TV HD", "Sun Music HD", "Asianet HD", "Mazhavil Manorama HD", "Colors Super HD", "Raj TV HD", "Kalaignar TV HD", "Jaya TV HD"],
  },
  {
    id: "ireland",
    flag: "🇮🇪",
    name: "IRELAND",
    code: "IE",
    channels: ["RTÉ One HD", "RTÉ2 HD", "Virgin Media One HD", "TG4 HD", "Virgin Media Two HD", "RTÉ News HD", "RTÉ Jr HD", "Virgin Media Three HD"],
  },
  {
    id: "turkey",
    flag: "🇹🇷",
    name: "TURKEY",
    code: "TR",
    channels: ["ATV HD", "Show TV HD", "Star TV HD", "Fox TV HD", "TRT 1 HD", "Kanal D HD", "TRT Haber HD", "Cine5", "360 HD", "Kanal 7 HD", "Beyaz TV HD", "TV8 HD"],
  },
];

function ChannelsList() {
  // Tracks which country's channel list is currently open (null = none open)
  const [selectedId, setSelectedId] = useState(null);

  // Reference to the channels panel, used to auto-scroll it into view
  const panelRef = useRef(null);

  function handleCountryClick(id) {
    if (selectedId === id) {
      setSelectedId(null); // clicking the same country again closes it
    } else {
      setSelectedId(id);
    }
  }

  useEffect(() => {
    if (selectedId && panelRef.current) {
      panelRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedId]);

  // Find the full country object for whichever id is currently selected
  const selectedCountry = COUNTRIES.find((c) => c.id === selectedId);

  return (
    <section className="channels-section">
      <div className="channels-container max-w-6xl mx-auto px-4">
        <h2 className="channels-title">Channels by Country</h2>

        {/* Country grid */}
        <div className="channels-grid grid gap-x-8">
          {COUNTRIES.map((country) => (
            <button
              key={country.id}
              type="button"
              className={
                selectedId === country.id
                  ? "channel-country-btn flex items-center gap-2 channel-country-active"
                  : "channel-country-btn flex items-center gap-2"
              }
              onClick={() => handleCountryClick(country.id)}
            >
              <span className="channel-flag">{country.flag}</span>-{" "}
              {country.name}
            </button>
          ))}
        </div>

        {/* Accordion panel showing channels for the selected country */}
        {selectedCountry && (
          <div className="channels-panel" ref={panelRef}>
            <div className="channels-panel-header flex items-center gap-2">
              <span className="channel-flag">{selectedCountry.flag}</span>
              <h3 className="channels-panel-title">{selectedCountry.name}</h3>
              <button
                type="button"
                className="channels-panel-close"
                onClick={() => setSelectedId(null)}
                aria-label="Close channel list"
              >
                ✕
              </button>
            </div>

            <ul className="channels-panel-list">
              {selectedCountry.channels.map((channel) => (
                <li key={channel} className="channels-panel-item">
                  <span className="channel-code">|{selectedCountry.code}|</span>{" "}
                  {channel}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default ChannelsList;