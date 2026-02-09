const SUPPORTED_LANGS = ["en", "cs", "es", "de"];

const I18N = {
  en: {
    common: {
      nav_home: "Home",
      nav_features: "Features",
      nav_screens: "Screens",
      nav_reviews: "Reviews",
      nav_blog: "Blog",
      nav_social: "Social",
      footer_copy: "Made for calmer nights with babies and toddlers.",
    },
    index: {
      meta_title: "Shushy - Calm soundscapes for better sleep",
      meta_description: "Soothe your baby faster with calming sounds, timers, and a distraction-free player.",
      hero_eyebrow: "Sleep support, designed for tired parents",
      hero_title: "Calm your baby faster with one tap",
      hero_subtitle:
        "Shushy combines soothing sounds, smart sleep timers, and a clean player so bedtime gets easier in the moments that matter.",
      hero_cta_primary: "Download on the App Store",
      hero_cta_secondary: "Read the blog",
      stat_one_value: "14+",
      stat_one_label: "Calming sounds",
      stat_two_value: "4.9",
      stat_two_label: "Average review score",
      stat_three_value: "24/7",
      stat_three_label: "Background playback",
      phone_now_playing: "Now playing",
      phone_title: "Rain",
      phone_card_one_title: "Sleep timer",
      phone_card_one_text: "45 min with smooth fade out",
      phone_card_two_title: "Favorites",
      phone_card_two_text: "Save sounds for one-tap access",
      features_title: "Built for stressful bedtime moments",
      features_intro: "Everything in Shushy is optimized for speed, comfort, and uninterrupted sleep routines.",
      feature_one_title: "One-tap playback",
      feature_one_text: "Start a soothing sound immediately without setup friction.",
      feature_two_title: "Smart sleep timer",
      feature_two_text: "Choose a timer and optional fade-out so audio stops naturally.",
      feature_three_title: "Background and AirPlay",
      feature_three_text: "Keep sounds running on lock screen or stream to your speaker.",
      feature_four_title: "Light and Dark Mode",
      feature_four_text: "The interface automatically follows system appearance for day and night use.",
      feature_five_title: "14 bundled sounds",
      feature_five_text: "Choose from white noise, heartbeat, rain, household hum, and more.",
      feature_six_title: "Favorites",
      feature_six_text: "Save favorites for faster access when you need them most.",
      feature_seven_title: "Siri Shortcut",
      feature_seven_text: "Play your last sound hands-free with a Siri voice command.",
      screens_title: "See Shushy in action",
      screens_intro: "Real app screenshots from Home, Player, and Settings.",
      screenshot_home: "Home",
      screenshot_player: "Player",
      screenshot_settings: "Settings",
      reviews_title: "Selected parent reviews",
      reviews_intro: "Real feedback from families using Shushy every day.",
      review_one_quote: '"Night feeds are calmer now. Rain + timer works every time."',
      review_one_author: "Marta K., mother of 2",
      review_two_quote: '"The interface is clean enough to use half-asleep at 3 AM."',
      review_two_author: "Daniel R., first-time dad",
      review_three_quote: '"Favorites and Siri shortcuts save us a lot of time."',
      review_three_author: "Elena P., caregiver",
      blog_title: "From the Shushy blog",
      blog_intro: "Practical sleep tips, routines, and calming audio strategies.",
      blog_post_one_meta: "Jan 12, 2026 - Routine",
      blog_post_one_title: "How to build a 15-minute wind-down ritual",
      blog_post_one_excerpt: "A simple sequence that helps babies settle faster before bedtime.",
      blog_post_two_meta: "Jan 26, 2026 - Audio",
      blog_post_two_title: "White vs. brown noise for infant sleep",
      blog_post_two_excerpt: "What changes in tone can mean for sensitivity and sleep onset.",
      blog_post_three_meta: "Feb 2, 2026 - Parenting",
      blog_post_three_title: "Handling travel naps without losing your routine",
      blog_post_three_excerpt: "Use familiar sound cues to keep naps consistent outside home.",
      blog_post_read_more: "Read more",
      social_title: "Follow Shushy",
      social_intro: "Get product updates, sleep tips, and new feature drops.",
      social_instagram: "Instagram",
      social_x: "X (Twitter)",
    },
    blog: {
      meta_title: "Shushy Blog - Sleep tips and calming routines",
      meta_description: "Read sleep routines, sound strategy tips, and practical bedtime advice from the Shushy team.",
      hero_eyebrow: "Blog",
      hero_title: "Sleep routines, audio insights, and practical bedtime ideas",
      hero_subtitle: "Three practical posts to help you build calmer nights with less trial and error.",
      post_one_meta: "Jan 12, 2026 - Routine",
      post_one_title: "How to build a 15-minute wind-down ritual",
      post_one_p1:
        "Keep your sequence short and repeatable: dim light, one familiar sound, and a consistent final cue.",
      post_one_p2:
        "When babies know what comes next, they usually resist less. Start with one routine for 7 days before changing anything.",
      post_two_meta: "Jan 26, 2026 - Audio",
      post_two_title: "White vs. brown noise for infant sleep",
      post_two_p1:
        "White noise has a brighter texture, while brown noise sounds deeper and softer. Some babies settle faster with lower-frequency sound profiles.",
      post_two_p2:
        "Use one sound for several nights before comparing. Abruptly changing sounds every night can reset adaptation.",
      post_three_meta: "Feb 2, 2026 - Parenting",
      post_three_title: "Handling travel naps without losing your routine",
      post_three_p1:
        "Use portable cues: same sound, similar timer, same short phrase before sleep. Familiar signals reduce transition stress.",
      post_three_p2:
        "Even if nap length changes while traveling, keeping cues stable helps you return to the normal bedtime rhythm quickly.",
      social_title: "More updates on social",
      social_intro: "Follow us for short sleep tips and product updates.",
    },
  },
  cs: {
    common: {
      nav_home: "Domu",
      nav_features: "Funkce",
      nav_screens: "Obrazovky",
      nav_reviews: "Recenze",
      nav_blog: "Blog",
      nav_social: "Sociální sítě",
      footer_copy: "Vytvořeno pro klidnější noci s miminky a batolaty.",
    },
    index: {
      meta_title: "Shushy - Uklidňující zvuky pro lepší spánek",
      meta_description:
        "Uspte miminko rychleji díky uklidňujícím zvukům, časovači a čistému přehrávači bez rušení.",
      hero_eyebrow: "Podpora spánku pro unavené rodiče",
      hero_title: "Uklidněte miminko rychleji jedním klepnutím",
      hero_subtitle:
        "Shushy kombinuje uklidňující zvuky, chytré časovače a přehledný přehrávač, aby bylo uspávání jednodušší.",
      hero_cta_primary: "Stáhnout v App Store",
      hero_cta_secondary: "Přejít na blog",
      stat_one_label: "Uklidňujících zvuků",
      stat_two_label: "Průměrné hodnocení",
      stat_three_label: "Přehrávání na pozadí",
      phone_now_playing: "Právě hraje",
      phone_title: "Déšť",
      phone_card_one_title: "Časovač spánku",
      phone_card_one_text: "45 min s plynulým ztišením",
      phone_card_two_title: "Oblíbené",
      phone_card_two_text: "Uložte zvuky pro spuštění jedním klepnutím",
      features_title: "Navrženo pro náročné uspávání",
      features_intro: "Vše v Shushy je optimalizované pro rychlost, pohodlí a nepřerušenou rutinu.",
      feature_one_title: "Přehrávání jedním klepnutím",
      feature_one_text: "Spusťte uklidňující zvuk okamžitě bez zbytečného nastavování.",
      feature_two_title: "Chytrý časovač spánku",
      feature_two_text: "Nastavte časovač a volitelné ztišení, aby zvuk skončil přirozeně.",
      feature_three_title: "Pozadí a AirPlay",
      feature_three_text: "Nechte zvuky běžet na zamčené obrazovce nebo je pošlete do reproduktoru.",
      feature_four_title: "Světlý a tmavý režim",
      feature_four_text: "Rozhraní se automaticky přizpůsobí systémovému vzhledu pro den i noc.",
      feature_five_title: "14 předinstalovaných zvuků",
      feature_five_text: "Vyberte si bílý šum, tlukot srdce, déšť, domácí šum a další.",
      feature_six_title: "Oblíbené",
      feature_six_text: "Uložte si oblíbené zvuky pro ještě rychlejší přístup.",
      feature_seven_title: "Siri zkratka",
      feature_seven_text: "Spusťte poslední zvuk hands-free hlasovým příkazem přes Siri.",
      screens_title: "Podívejte se na Shushy v praxi",
      screens_intro: "Reálné screenshoty aplikace: Domů, Přehrávač a Nastavení.",
      screenshot_home: "Domů",
      screenshot_player: "Přehrávač",
      screenshot_settings: "Nastavení",
      reviews_title: "Vybrané recenze rodičů",
      reviews_intro: "Skutečná zpětná vazba od rodin, které Shushy používají každý den.",
      review_one_quote: '"Noční krmení je teď klidnější. Déšť + časovač funguje vždy."',
      review_one_author: "Marta K., maminka 2 dětí",
      review_two_quote: '"Rozhraní je tak čisté, že ho zvládnu používat i v polospánku ve 3 ráno."',
      review_two_author: "Daniel R., táta poprvé",
      review_three_quote: '"Oblíbené a Siri zkratky nám šetří spoustu času."',
      review_three_author: "Elena P., pečovatelka",
      blog_title: "Z blogu Shushy",
      blog_intro: "Praktické tipy na spánek, rutiny a strategie s uklidňujícími zvuky.",
      blog_post_one_meta: "12. ledna 2026 - Rutina",
      blog_post_one_title: "Jak vytvořit 15minutový večerní rituál",
      blog_post_one_excerpt: "Jednoduchá sekvence, která pomůže miminku usnout rychleji.",
      blog_post_two_meta: "26. ledna 2026 - Zvuk",
      blog_post_two_title: "Bílý vs. hnědý šum pro dětský spánek",
      blog_post_two_excerpt: "Co může změna tónu znamenat pro citlivost a usínání.",
      blog_post_three_meta: "2. února 2026 - Rodičovství",
      blog_post_three_title: "Jak zvládnout spánek na cestách bez ztráty rutiny",
      blog_post_three_excerpt: "Použijte známé zvukové signály pro stabilní odpočinek i mimo domov.",
      blog_post_read_more: "Číst dál",
      social_title: "Sledujte Shushy",
      social_intro: "Získejte novinky o produktu, tipy na spánek a nové funkce.",
      social_instagram: "Instagram",
      social_x: "X (Twitter)",
    },
    blog: {
      meta_title: "Blog Shushy - Tipy na spánek a uklidňující rutiny",
      meta_description: "Čtěte praktické tipy k rutinám, zvukům a večernímu uspávání od týmu Shushy.",
      hero_eyebrow: "Blog",
      hero_title: "Spánkové rutiny, zvukové tipy a praktické nápady na večer",
      hero_subtitle: "Tři praktické články, které pomohou vytvořit klidnější noci s menším zkoušením.",
      post_one_meta: "12. ledna 2026 - Rutina",
      post_one_title: "Jak vytvořit 15minutový večerní rituál",
      post_one_p1:
        "Udržte sekvenci krátkou a opakovatelnou: tlumené světlo, jeden známý zvuk a stejný závěrečný signál.",
      post_one_p2:
        "Když dítě ví, co přijde dál, obvykle se méně brání. Vyzkoušejte jednu rutinu aspoň 7 dní bez změn.",
      post_two_meta: "26. ledna 2026 - Zvuk",
      post_two_title: "Bílý vs. hnědý šum pro dětský spánek",
      post_two_p1:
        "Bílý šum je jasnější, hnědý šum je hlubší a měkčí. Některé děti usínají rychleji na nižších frekvencích.",
      post_two_p2:
        "Před porovnáním nechte jeden zvuk běžet několik nocí. Každodenní změna může narušit adaptaci.",
      post_three_meta: "2. února 2026 - Rodičovství",
      post_three_title: "Jak zvládnout spánek na cestách bez ztráty rutiny",
      post_three_p1:
        "Používejte přenosné signály: stejný zvuk, podobný časovač, stejná krátká věta před spánkem.",
      post_three_p2:
        "I když se délka spánku na cestě změní, stabilní signály pomáhají rychle vrátit běžný rytmus.",
      social_title: "Další novinky na sociálních sítích",
      social_intro: "Sledujte nás pro krátké tipy na spánek a novinky o produktu.",
    },
  },
  es: {
    common: {
      nav_home: "Inicio",
      nav_features: "Funciones",
      nav_screens: "Pantallas",
      nav_reviews: "Resenas",
      nav_blog: "Blog",
      nav_social: "Redes",
      footer_copy: "Creado para noches mas tranquilas con bebes y ninos pequenos.",
    },
    index: {
      meta_title: "Shushy - Sonidos relajantes para dormir mejor",
      meta_description: "Duerme a tu bebe mas rapido con sonidos calmantes, temporizador y un reproductor limpio.",
      hero_eyebrow: "Apoyo para el sueno de familias cansadas",
      hero_title: "Calma a tu bebe mas rapido con un toque",
      hero_subtitle:
        "Shushy combina sonidos relajantes, temporizador inteligente y un reproductor claro para simplificar la hora de dormir.",
      hero_cta_primary: "Descargar en App Store",
      hero_cta_secondary: "Leer el blog",
      stat_one_label: "Sonidos relajantes",
      stat_two_label: "Valoracion media",
      stat_three_label: "Reproduccion en segundo plano",
      phone_now_playing: "Reproduciendo",
      phone_title: "Lluvia",
      phone_card_one_title: "Temporizador",
      phone_card_one_text: "45 min con desvanecimiento suave",
      phone_card_two_title: "Favoritos",
      phone_card_two_text: "Guarda sonidos para acceso rapido",
      features_title: "Pensado para momentos de sueno dificiles",
      features_intro: "Todo en Shushy esta optimizado para rapidez, confort y rutinas estables.",
      feature_one_title: "Reproduccion con un toque",
      feature_one_text: "Inicia un sonido calmante de inmediato.",
      feature_two_title: "Temporizador inteligente",
      feature_two_text: "Configura un tiempo y apagado gradual opcional.",
      feature_three_title: "Segundo plano y AirPlay",
      feature_three_text: "Mantiene el sonido en pantalla bloqueada o en altavoz.",
      feature_four_title: "Modo claro y oscuro",
      feature_four_text: "La interfaz se adapta automaticamente al modo del sistema para uso de dia y noche.",
      feature_five_title: "14 sonidos incluidos",
      feature_five_text: "Elige ruido blanco, latido, lluvia, zumbidos del hogar y mas.",
      feature_six_title: "Favoritos",
      feature_six_text: "Guarda favoritos para acceso mas rapido cuando lo necesites.",
      feature_seven_title: "Atajo de Siri",
      feature_seven_text: "Reproduce el ultimo sonido con manos libres mediante un comando de voz de Siri.",
      screens_title: "Mira Shushy en accion",
      screens_intro: "Capturas reales de Home, Reproductor y Ajustes.",
      screenshot_home: "Inicio",
      screenshot_player: "Reproductor",
      screenshot_settings: "Ajustes",
      reviews_title: "Resenas destacadas",
      reviews_intro: "Comentarios reales de familias que usan Shushy.",
      review_one_quote: '"Las tomas nocturnas ahora son mas tranquilas. Lluvia + temporizador funciona siempre."',
      review_one_author: "Marta K., madre de 2",
      review_two_quote: '"La interfaz es tan limpia que puedo usarla medio dormido a las 3 AM."',
      review_two_author: "Daniel R., padre primerizo",
      review_three_quote: '"Favoritos y Siri nos ahorran mucho tiempo."',
      review_three_author: "Elena P., cuidadora",
      blog_title: "Desde el blog de Shushy",
      blog_intro: "Consejos practicos de sueno, rutinas y estrategias de audio.",
      blog_post_one_meta: "12 ene 2026 - Rutina",
      blog_post_one_title: "Como crear un ritual de 15 minutos antes de dormir",
      blog_post_one_excerpt: "Una secuencia simple para dormir mas rapido.",
      blog_post_two_meta: "26 ene 2026 - Audio",
      blog_post_two_title: "Ruido blanco vs. ruido marron para el sueno infantil",
      blog_post_two_excerpt: "Que puede cambiar al ajustar el tono del sonido.",
      blog_post_three_meta: "2 feb 2026 - Crianza",
      blog_post_three_title: "Siestas en viaje sin perder la rutina",
      blog_post_three_excerpt: "Usa senales de sonido conocidas tambien fuera de casa.",
      blog_post_read_more: "Leer mas",
      social_title: "Sigue a Shushy",
      social_intro: "Recibe novedades del producto y consejos de sueno.",
      social_instagram: "Instagram",
      social_x: "X (Twitter)",
    },
    blog: {
      meta_title: "Blog Shushy - Consejos de sueno y rutinas calmadas",
      meta_description: "Lee rutinas de sueno, consejos de audio y recomendaciones practicas del equipo Shushy.",
      hero_eyebrow: "Blog",
      hero_title: "Rutinas de sueno, ideas de audio y consejos practicos",
      hero_subtitle: "Tres articulos utiles para construir noches mas calmadas.",
      post_one_meta: "12 ene 2026 - Rutina",
      post_one_title: "Como crear un ritual de 15 minutos antes de dormir",
      post_one_p1:
        "Manten la secuencia corta y repetible: luz tenue, un sonido familiar y una senal final constante.",
      post_one_p2:
        "Cuando el bebe sabe que viene despues, suele resistirse menos. Mantiene una rutina al menos 7 dias.",
      post_two_meta: "26 ene 2026 - Audio",
      post_two_title: "Ruido blanco vs. ruido marron para el sueno infantil",
      post_two_p1:
        "El ruido blanco es mas brillante; el marron, mas profundo. Algunos bebes descansan mejor con tonos graves.",
      post_two_p2:
        "Mantiene un sonido varias noches antes de comparar. Cambiar cada noche reduce la adaptacion.",
      post_three_meta: "2 feb 2026 - Crianza",
      post_three_title: "Siestas en viaje sin perder la rutina",
      post_three_p1:
        "Usa senales portatiles: mismo sonido, temporizador similar y la misma frase corta antes de dormir.",
      post_three_p2:
        "Aunque la siesta cambie en viaje, las senales estables ayudan a volver al ritmo normal.",
      social_title: "Mas novedades en redes",
      social_intro: "Siguenos para consejos cortos de sueno y actualizaciones del producto.",
    },
  },
  de: {
    common: {
      nav_home: "Start",
      nav_features: "Funktionen",
      nav_screens: "Screens",
      nav_reviews: "Bewertungen",
      nav_blog: "Blog",
      nav_social: "Social",
      footer_copy: "Entwickelt fuer ruhigere Naechte mit Babys und Kleinkindern.",
    },
    index: {
      meta_title: "Shushy - Beruhigende Klangwelten fuer besseren Schlaf",
      meta_description: "Beruhigen Sie Ihr Baby schneller mit sanften Sounds, Timer und klarem Player.",
      hero_eyebrow: "Schlafhilfe fuer muede Eltern",
      hero_title: "Beruhigen Sie Ihr Baby schneller mit einem Tipp",
      hero_subtitle:
        "Shushy kombiniert beruhigende Sounds, einen smarten Schlaf-Timer und einen klaren Player fuer einfachere Abende.",
      hero_cta_primary: "Im App Store laden",
      hero_cta_secondary: "Blog lesen",
      stat_one_label: "Beruhigende Sounds",
      stat_two_label: "Durchschnittliche Bewertung",
      stat_three_label: "Hintergrundwiedergabe",
      phone_now_playing: "Jetzt laeuft",
      phone_title: "Regen",
      phone_card_one_title: "Schlaf-Timer",
      phone_card_one_text: "45 Min mit sanftem Ausblenden",
      phone_card_two_title: "Favoriten",
      phone_card_two_text: "Sounds fuer schnellen Zugriff speichern",
      features_title: "Fuer stressige Einschlafmomente gebaut",
      features_intro: "Alles in Shushy ist auf Geschwindigkeit, Komfort und stabile Routinen ausgelegt.",
      feature_one_title: "Wiedergabe mit einem Tipp",
      feature_one_text: "Starten Sie beruhigende Sounds sofort ohne Umwege.",
      feature_two_title: "Smarter Schlaf-Timer",
      feature_two_text: "Timer waehlen und optionales Fade-out aktivieren.",
      feature_three_title: "Hintergrund und AirPlay",
      feature_three_text: "Sounds laufen auf Sperrbildschirm oder ueber Lautsprecher weiter.",
      feature_four_title: "Hell- und Dunkelmodus",
      feature_four_text: "Die App passt sich automatisch dem Systemmodus fuer Tag und Nacht an.",
      feature_five_title: "14 integrierte Sounds",
      feature_five_text: "Waehlen Sie weisses Rauschen, Herzschlag, Regen, Haushaltsgeraeusche und mehr.",
      feature_six_title: "Favoriten",
      feature_six_text: "Speichern Sie Favoriten fuer schnelleren Zugriff.",
      feature_seven_title: "Siri-Kurzbefehl",
      feature_seven_text: "Starten Sie den zuletzt genutzten Sound freihand per Siri-Sprachbefehl.",
      screens_title: "Sehen Sie Shushy in Aktion",
      screens_intro: "Echte Screenshots von Home, Player und Einstellungen.",
      screenshot_home: "Home",
      screenshot_player: "Player",
      screenshot_settings: "Einstellungen",
      reviews_title: "Ausgewaehlte Elternbewertungen",
      reviews_intro: "Echtes Feedback von Familien, die Shushy taeglich nutzen.",
      review_one_quote: '"Nachtfuetterungen sind ruhiger. Regen + Timer funktioniert immer."',
      review_one_author: "Marta K., Mutter von 2",
      review_two_quote: '"Die Oberflaeche ist so klar, dass ich sie um 3 Uhr nachts halb schlafend nutzen kann."',
      review_two_author: "Daniel R., Vater eines Neugeborenen",
      review_three_quote: '"Favoriten und Siri sparen uns viel Zeit."',
      review_three_author: "Elena P., Betreuungsperson",
      blog_title: "Aus dem Shushy Blog",
      blog_intro: "Praktische Tipps zu Schlaf, Routinen und beruhigenden Audio-Strategien.",
      blog_post_one_meta: "12 Jan 2026 - Routine",
      blog_post_one_title: "So bauen Sie ein 15-Minuten-Abendritual auf",
      blog_post_one_excerpt: "Eine einfache Sequenz fuer schnelleres Einschlafen.",
      blog_post_two_meta: "26 Jan 2026 - Audio",
      blog_post_two_title: "Weisses vs. braunes Rauschen fuer Babyschlaf",
      blog_post_two_excerpt: "Was ein anderer Klangcharakter beim Einschlafen veraendern kann.",
      blog_post_three_meta: "2 Feb 2026 - Elternalltag",
      blog_post_three_title: "Reisenickerchen ohne Routineverlust",
      blog_post_three_excerpt: "Vertraute Klangsignale helfen auch ausserhalb des Zuhauses.",
      blog_post_read_more: "Mehr lesen",
      social_title: "Folgen Sie Shushy",
      social_intro: "Produkt-Updates, Schlaftipps und neue Features.",
      social_instagram: "Instagram",
      social_x: "X (Twitter)",
    },
    blog: {
      meta_title: "Shushy Blog - Schlaftipps und beruhigende Routinen",
      meta_description: "Lesen Sie Routinen, Audio-Tipps und praktische Empfehlungen vom Shushy Team.",
      hero_eyebrow: "Blog",
      hero_title: "Schlafroutinen, Audio-Insights und praktische Abendideen",
      hero_subtitle: "Drei konkrete Beitraege fuer ruhigere Naechte mit weniger Ausprobieren.",
      post_one_meta: "12 Jan 2026 - Routine",
      post_one_title: "So bauen Sie ein 15-Minuten-Abendritual auf",
      post_one_p1:
        "Halten Sie die Sequenz kurz und wiederholbar: gedimmtes Licht, ein vertrauter Sound, ein fester Abschluss.",
      post_one_p2:
        "Wenn Babys wissen, was als Naechstes kommt, gibt es oft weniger Widerstand. Mindestens 7 Tage gleich bleiben.",
      post_two_meta: "26 Jan 2026 - Audio",
      post_two_title: "Weisses vs. braunes Rauschen fuer Babyschlaf",
      post_two_p1:
        "Weisses Rauschen klingt heller, braunes tiefer. Manche Babys beruhigen sich mit tieferen Frequenzen schneller.",
      post_two_p2:
        "Testen Sie einen Sound mehrere Naechte am Stueck. Taeglicher Wechsel erschwert die Anpassung.",
      post_three_meta: "2 Feb 2026 - Elternalltag",
      post_three_title: "Reisenickerchen ohne Routineverlust",
      post_three_p1:
        "Nutzen Sie portable Signale: gleicher Sound, aehnlicher Timer und die gleiche kurze Schlafphrase.",
      post_three_p2:
        "Auch wenn Nickerchen unterwegs variieren, helfen stabile Signale beim schnellen Rueckweg zur Routine.",
      social_title: "Mehr Updates auf Social",
      social_intro: "Folgen Sie uns fuer kurze Schlaftipps und Produkt-Updates.",
    },
  },
};

const META_IDS = {
  description: "meta-description",
  ogTitle: "meta-og-title",
  ogDescription: "meta-og-description",
  twitterTitle: "meta-twitter-title",
  twitterDescription: "meta-twitter-description",
};

const SCREENSHOT_FOLDERS = {
  en: "en-US",
  cs: "cs-CZ",
  es: "es-ES",
  de: "en-US",
};

const SCREENSHOT_FILES = {
  home: "iPhone 17 Pro Max-01Home.png",
  player: "iPhone 17 Pro Max-02Player.png",
  settings: "iPhone 17 Pro Max-03Settings.png",
};

function deepGet(source, path) {
  return path.split(".").reduce((value, part) => {
    if (value && Object.prototype.hasOwnProperty.call(value, part)) {
      return value[part];
    }
    return undefined;
  }, source);
}

function t(lang, key) {
  return deepGet(I18N[lang], key) ?? deepGet(I18N.en, key) ?? "";
}

function isSupported(lang) {
  return SUPPORTED_LANGS.includes(lang);
}

function detectInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromQuery = params.get("lang");
  if (fromQuery && isSupported(fromQuery)) {
    return fromQuery;
  }

  try {
    const stored = window.localStorage.getItem("sshh-web-lang");
    if (stored && isSupported(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage failures in privacy-restricted environments.
  }

  const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (isSupported(browserLanguage)) {
    return browserLanguage;
  }

  return "en";
}

function updateMeta(lang, page) {
  const title = t(lang, `${page}.meta_title`);
  const description = t(lang, `${page}.meta_description`);

  if (title) {
    document.title = title;
    const ogTitle = document.getElementById(META_IDS.ogTitle);
    const twitterTitle = document.getElementById(META_IDS.twitterTitle);
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }
  }

  if (description) {
    const metaDescription = document.getElementById(META_IDS.description);
    const ogDescription = document.getElementById(META_IDS.ogDescription);
    const twitterDescription = document.getElementById(META_IDS.twitterDescription);
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }
  }
}

function updateTextNodes(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = t(lang, key);
    if (translatedText) {
      element.textContent = translatedText;
    }
  });
}

function updateLanguageButtons(lang) {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateLanguageLinks(lang) {
  document.querySelectorAll("a[data-lang-link]").forEach((link) => {
    if (!link.dataset.baseHref) {
      link.dataset.baseHref = link.getAttribute("href") || "";
    }

    const baseHref = link.dataset.baseHref;
    if (!baseHref || /^https?:\/\//i.test(baseHref) || baseHref.startsWith("mailto:") || baseHref.startsWith("tel:")) {
      return;
    }

    if (baseHref.startsWith("#")) {
      link.setAttribute("href", `${window.location.pathname}?lang=${lang}${baseHref}`);
      return;
    }

    const hashIndex = baseHref.indexOf("#");
    const pathPart = hashIndex >= 0 ? baseHref.slice(0, hashIndex) : baseHref;
    const hashPart = hashIndex >= 0 ? baseHref.slice(hashIndex) : "";
    const url = new URL(pathPart, window.location.href);
    url.searchParams.set("lang", lang);
    link.setAttribute("href", `${url.pathname}${url.search}${hashPart}`);
  });
}

function buildScreenshotPath(lang, key) {
  const folder = SCREENSHOT_FOLDERS[lang] ?? SCREENSHOT_FOLDERS.en;
  const file = SCREENSHOT_FILES[key];
  if (!file) {
    return "";
  }
  return `./screenshots/${folder}/${encodeURIComponent(file)}`;
}

function updateScreenshots(lang) {
  document.querySelectorAll("img[data-screenshot-key]").forEach((image) => {
    const screenshotKey = image.dataset.screenshotKey;
    const screenshotPath = screenshotKey ? buildScreenshotPath(lang, screenshotKey) : "";
    if (screenshotPath) {
      image.setAttribute("src", screenshotPath);
    }
  });
}

function syncLanguageInUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function applyLanguage(lang) {
  const page = document.body.dataset.page || "index";
  document.documentElement.lang = lang;
  updateTextNodes(lang);
  updateMeta(lang, page);
  updateLanguageButtons(lang);
  updateLanguageLinks(lang);
  updateScreenshots(lang);
  syncLanguageInUrl(lang);

  try {
    window.localStorage.setItem("sshh-web-lang", lang);
  } catch {
    // Ignore storage failures in privacy-restricted environments.
  }
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetLanguage = button.dataset.langOption;
      if (targetLanguage && isSupported(targetLanguage)) {
        applyLanguage(targetLanguage);
      }
    });
  });
}

function init() {
  setupLanguageSwitcher();
  applyLanguage(detectInitialLanguage());
}

window.addEventListener("DOMContentLoaded", init);
