/**
 * Wedding invitation translations — one object per language.
 * Keys match across en, hi, kn, bho. Main.js uses TRANSLATIONS[lang][key].
 * Event/venue data is per-language (transliterated names and places).
 */
const TRANSLATIONS = {
  en: {
    loadingDefault: 'Preparing your invitation',
    loadingMessages: [
      'Folding the scroll with love…',
      'Polishing the wax seal…',
      'Sprinkling a little shagun…',
      'Ironing out the invitation…',
      'Counting petals & blessings…',
      'Tying the sacred thread…',
      'Chanting a tiny mantra…',
      'Rolling out the red parchment…'
    ],
    pageTitle: 'Aman & Sonali · June 22, 2026',
    ogDescription: 'You are cordially invited to celebrate our wedding.',

    introInvited: 'You are cordially invited to celebrate the wedding of',
    introNames: 'Aman & Sonali',
    hintToast: 'Tap the red seal or scroll down',
    sealLabel: 'Tap to Open',
    sealAria: 'Open the invitation',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'Aman & Sonali',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'Bangalore, India',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'With full hearts, we invite you to share the moment where two stories and two families become one.',
    scheduleLineBottom: 'Your presence and blessings will mean the world to us as we begin this new chapter together.',
    groomName: 'Aman Roy',
    groomParentLine: 'S/O Manoj Kumar Roy & Suneeta Roy',
    brideName: 'Sonali Hanchinamani',
    brideParentLine: 'D/O Chandrashekhar H. & Nagalakshmi H.',

    seeInMap: 'See in Map',
    date: 'Date',
    time: 'Time',
    venueLabel: 'Venue',
    venue: { name: 'Akira Orchards', line: 'Yelahanka, Bengaluru, Karnataka, India' },

    dressNote: 'Dress code details are still being lovingly figured out by both families.<br>We\'ll share a short and simple guide here very soon.',

    forLadke: 'For Ladke waale',
    forLadki: 'For Ladki waale',
    contactGroomLine: 'Contact Ankit R. — ',
    contactBrideLine: 'Contact Chandrashekhar H. — ',
    call: 'Call',
    whatsApp: 'WhatsApp',

    tabSchedule: 'Schedule',
    tabEvents: 'Events',
    tabAttire: 'Attire',
    tabContact: 'Contact',

    withLoveBlessings: 'With love & blessings',
    monthYear: 'June 2026',
    blessingKn: 'ಶುಭ ವಿವಾಹ',
    blessingHi: 'शुभ विवाह',

    countdownDays: 'days',
    countdownDay: 'day',
    countdownHrs: 'hrs',
    countdownHr: 'hr',
    countdownMins: 'mins',
    countdownMin: 'min',
    countdownSecs: 'secs',
    countdownSec: 'sec',
    countdownLeft: 'left',
    countdownToday: 'Today is the day.',

    langNameHindi: 'हिन्दी',
    langNameEnglish: 'English',
    langNameKannada: 'ಕನ್ನಡ',
    langNameBhojpuri: 'भोजपुरी',

    ariaSchedule: 'Schedule',
    ariaContact: 'Contact',
    ariaPauseMusic: 'Pause background music',
    ariaPlayMusic: 'Play background music',

    venue: { name: 'Akira Orchards', line: 'Yelahanka, Bengaluru, Karnataka, India' },
    events: [
      { title: 'Engagement and Sangeet Ceremony', date: '21.06.2026', time: '6 PM onwards' },
      { title: 'Wedding Rituals', date: '22.06.2026', time: '9 AM Onwards' },
      { title: 'Reception', date: '22.06.2026', time: '12 PM onwards' }
    ],
    groomEvents: [
      { title: 'Groom Event 1', date: 'TBA', time: '—' },
      { title: 'Groom Event 2', date: 'TBA', time: '—' },
      { title: 'Groom Event 3', date: 'TBA', time: '—' }
    ],
    brideEvents: [
      { title: 'Bride Event 1', date: 'TBA', time: '—' },
      { title: 'Bride Event 2', date: 'TBA', time: '—' },
      { title: 'Bride Event 3', date: 'TBA', time: '—' }
    ],
    groomVenue: { name: 'Sunder Kala Bhawan', line: 'Ramnagar, Ara, Bihar' },
    brideVenue: { name: 'Aravind Skylands', line: 'Jakkur Road, Bangalore, Karnataka' }
  },

  hi: {
    loadingDefault: 'आपका निमंत्रण तैयार हो रहा है',
    loadingMessages: [
      'प्यार से scroll बंद कर रहे हैं…',
      'मोम की मुहर चमका रहे हैं…',
      'थोड़ा शुभ छिड़क रहे हैं…',
      'निमंत्रण इस्त्री कर रहे हैं…',
      'पंखुड़ियाँ और आशीर्वाद गिन रहे हैं…',
      'पवित्र धागा बाँध रहे हैं…',
      'एक छोटा मंत्र पढ़ रहे हैं…',
      'लाल चर्मपत्र बिछा रहे हैं…'
    ],
    pageTitle: 'अमन और सोनाली · 22 जून 2026',
    ogDescription: 'आप सादर हमारे विवाह समारोह में आमंत्रित हैं।',

    introInvited: 'आप सादर इस विवाह समारोह में शामिल होने के लिए आमंत्रित हैं',
    introNames: 'अमन और सोनाली',
    hintToast: 'लाल मुहर पर टैप करें या नीचे स्क्रॉल करें',
    sealLabel: 'खोलने के लिए टैप करें',
    sealAria: 'निमंत्रण खोलें',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन और सोनाली',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'बंगलौर, भारत',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'पूरे हृदय से, हम आपको उस पल को साझा करने के लिए आमंत्रित करते हैं जहाँ दो कहानियाँ और दो परिवार एक हो जाते हैं।',
    scheduleLineBottom: 'जैसे ही हम इस नए अध्याय की शुरुआत एक साथ करेंगे, आपकी उपस्थिति और आशीर्वाद हमारे लिए सब कुछ मायने रखेंगे।',
    groomName: 'अमन रॉय',
    groomParentLine: 'मनोज कुमार रॉय और सुनीता रॉय के पुत्र',
    brideName: 'सोनाली हंचिनामनी',
    brideParentLine: 'चंद्रशेखर एच. और नागलक्ष्मी एच. की पुत्री',

    seeInMap: 'मानचित्र में देखें',
    date: 'तारीख',
    time: 'समय',
    venueLabel: 'स्थल',

    dressNote: 'दोनों परिवारों द्वारा ड्रेस कोड का विवरण अभी तय किया जा रहा है।<br>जल्द ही हम यहाँ एक छोटा और सरल मार्गदर्शन साझा करेंगे।',

    forLadke: 'लड़के वालों के लिए',
    forLadki: 'लड़की वालों के लिए',
    contactGroomLine: 'अंकित आर. से संपर्क करें — ',
    contactBrideLine: 'चंद्रशेखर एच. से संपर्क करें — ',
    call: 'कॉल',
    whatsApp: 'व्हाट्सऐप',

    tabSchedule: 'कार्यक्रम',
    tabEvents: 'कार्यक्रम',
    tabAttire: 'पोशाक',
    tabContact: 'संपर्क',

    withLoveBlessings: 'प्यार और आशीर्वाद के साथ',
    monthYear: 'जून 2026',
    blessingKn: 'ಶುಭ ವಿವಾಹ',
    blessingHi: 'शुभ विवाह',

    countdownDays: 'दिन',
    countdownDay: 'दिन',
    countdownHrs: 'घंटे',
    countdownHr: 'घंटा',
    countdownMins: 'मिनट',
    countdownMin: 'मिनट',
    countdownSecs: 'सेकंड',
    countdownSec: 'सेकंड',
    countdownLeft: 'शेष',
    countdownToday: 'आज का दिन।',

    langNameHindi: 'हिन्दी',
    langNameEnglish: 'English',
    langNameKannada: 'ಕನ್ನಡ',
    langNameBhojpuri: 'भोजपुरी',

    ariaSchedule: 'कार्यक्रम',
    ariaContact: 'संपर्क',
    ariaPauseMusic: 'पृष्ठभूमि संगीत रोकें',
    ariaPlayMusic: 'पृष्ठभूमि संगीत चलाएं',

    venue: { name: 'अकिरा ऑर्चर्ड्स', line: 'यलहंका, बेंगलुरु, कर्नाटक, भारत' },
    events: [
      { title: 'सगाई और संगीत समारोह', date: '21.06.2026', time: 'शाम 6 बजे से' },
      { title: 'विवाह अनुष्ठान', date: '22.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत समारोह', date: '22.06.2026', time: 'दोपहर 12 बजे से' }
    ],
    groomEvents: [
      { title: 'दूल्हा कार्यक्रम 1', date: 'TBA', time: '—' },
      { title: 'दूल्हा कार्यक्रम 2', date: 'TBA', time: '—' },
      { title: 'दूल्हा कार्यक्रम 3', date: 'TBA', time: '—' }
    ],
    brideEvents: [
      { title: 'दुल्हन कार्यक्रम 1', date: 'TBA', time: '—' },
      { title: 'दुल्हन कार्यक्रम 2', date: 'TBA', time: '—' },
      { title: 'दुल्हन कार्यक्रम 3', date: 'TBA', time: '—' }
    ],
    groomVenue: { name: 'सुंदर कला भवन', line: 'रामनगर, आरा, बिहार' },
    brideVenue: { name: 'अरविंद स्काइलैंड्स', line: 'जक्कूर रोड, बेंगलुरु, कर्नाटक' }
  },

  kn: {
    loadingDefault: 'ನಿಮ್ಮ ಆಹ್ವಾನ ತಯಾರಿ ಆಗುತ್ತಿದೆ',
    loadingMessages: [
      'ಪ್ರೀತಿಯಿಂದ ಸ್ಕ್ರಾಲ್ ಮಡಚುತ್ತಿದ್ದೇವೆ…',
      'ಮೇಣ ಮುದ್ರೆ ಹೊಳಪು ಕೊಡುತ್ತಿದ್ದೇವೆ…',
      'ಸ್ವಲ್ಪ ಶುಭ ಸಿಂಪಡಿಸುತ್ತಿದ್ದೇವೆ…',
      'ಆಹ್ವಾನ ಐರನ್ ಮಾಡುತ್ತಿದ್ದೇವೆ…',
      'ಎಲೆಗಳು ಮತ್ತು ಆಶೀರ್ವಾದಗಳನ್ನು ಎಣಿಸುತ್ತಿದ್ದೇವೆ…',
      'ಪವಿತ್ರ ದಾರ ಕಟ್ಟುತ್ತಿದ್ದೇವೆ…',
      'ಸಣ್ಣ ಮಂತ್ರ ಓದುತ್ತಿದ್ದೇವೆ…',
      'ಕೆಂಪು ಚರ್ಮವನ್ನು ಚಾಚುತ್ತಿದ್ದೇವೆ…'
    ],
    pageTitle: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ · ಜೂನ್ 22, 2026',
    ogDescription: 'ನಮ್ಮ ಮದುವೆ ಆಚರಿಸಲು ನೀವು ಆಹ್ವಾನಿತರಾಗಿದ್ದೀರಿ.',

    introInvited: 'ಈ ಮದುವೆ ಆಚರಣೆಗೆ ನೀವು ಸಾದರ ಆಹ್ವಾನಿತರಾಗಿದ್ದೀರಿ',
    introNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    hintToast: 'ಕೆಂಪು ಮುದ್ರೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಅಥವಾ ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ',
    sealLabel: 'ತೆರೆಯಲು ಟ್ಯಾಪ್ ಮಾಡಿ',
    sealAria: 'ಆಹ್ವಾನ ತೆರೆಯಿರಿ',

    ovBlessing: 'ಶುಭ ವಿವಾಹ',
    ovNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'ಬೆಂಗಳೂರು, ಭಾರತ',

    ganeshMantra: 'ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ',
    scheduleLine1: 'ಪೂರ್ಣ ಹೃದಯದಿಂದ, ಎರಡು ಕಥೆಗಳು ಮತ್ತು ಎರಡು ಕುಟುಂಬಗಳು ಒಂದಾಗುವ ಕ್ಷಣವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ನಿಮ್ಮನ್ನು ಆಹ್ವಾನಿಸುತ್ತೇವೆ.',
    scheduleLineBottom: 'ನಾವು ಈ ಹೊಸ ಅಧ್ಯಾಯವನ್ನು ಒಟ್ಟಿಗೆ ಪ್ರಾರಂಭಿಸುವಾಗ, ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳು ನಮಗೆ ಪ್ರಪಂಚಕ್ಕೆ ಸಮನಾಗಿರುತ್ತದೆ.',
    groomName: 'ಅಮನ್ ರಾಯ್',
    groomParentLine: 'ಮನೋಜ್ ಕುಮಾರ್ ರಾಯ್ ಮತ್ತು ಸುನೀತಾ ರಾಯ್ ಅವರ ಪುತ್ರ',
    brideName: 'ಸೋನಾಲಿ ಹಂಚಿನಾಮನಿ',
    brideParentLine: 'ಚಂದ್ರಶೇಖರ್ ಎಚ್. ಮತ್ತು ನಾಗಲಕ್ಷ್ಮಿ ಎಚ್. ಅವರ ಪುತ್ರಿ',

    seeInMap: 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ',
    date: 'ದಿನಾಂಕ',
    time: 'ಸಮಯ',
    venueLabel: 'ಸ್ಥಳ',

    dressNote: 'ಡ್ರೆಸ್ ಕೋಡ್ ವಿವರಗಳನ್ನು ಇನ್ನೂ ಎರಡೂ ಕುಟುಂಬಗಳು ಪ್ರೀತಿಯಿಂದ ನಿರ್ಧರಿಸುತ್ತಿದ್ದಾರೆ.<br>ಅತಿ ಶೀಘ್ರದಲ್ಲಿ ಇಲ್ಲಿ ಒಂದು ಚಿಕ್ಕ ಮತ್ತು ಸರಳ ಮಾರ್ಗದರ್ಶಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತೇವೆ.',

    forLadke: 'ಹುಡುಗನ ಕಡೆಗೆ',
    forLadki: 'ಹುಡುಗಿಯ ಕಡೆಗೆ',
    contactGroomLine: 'ಅಂಕಿತ್ ಆರ್. ಸಂಪರ್ಕಿಸಿ — ',
    contactBrideLine: 'ಚಂದ್ರಶೇಖರ್ ಎಚ್. ಸಂಪರ್ಕಿಸಿ — ',
    call: 'ಕಾಲ್',
    whatsApp: 'ವಾಟ್ಸಾಪ್',

    tabSchedule: 'ಕಾರ್ಯಕ್ರಮ',
    tabEvents: 'ಕಾರ್ಯಕ್ರಮಗಳು',
    tabAttire: 'ಉಡುಪು',
    tabContact: 'ಸಂಪರ್ಕ',

    withLoveBlessings: 'ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದಗಳೊಂದಿಗೆ',
    monthYear: 'ಜೂನ್ 2026',
    blessingKn: 'ಶುಭ ವಿವಾಹ',
    blessingHi: 'शुभ विवाह',

    countdownDays: 'ದಿನಗಳು',
    countdownDay: 'ದಿನ',
    countdownHrs: 'ಗಂ',
    countdownHr: 'ಗಂ',
    countdownMins: 'ನಿಮಿ',
    countdownMin: 'ನಿಮಿ',
    countdownSecs: 'ಸೆಕೆಂಡ್',
    countdownSec: 'ಸೆಕೆಂಡ್',
    countdownLeft: 'ಉಳಿದಿದೆ',
    countdownToday: 'ಇಂದು ದಿನ.',

    langNameHindi: 'हिन्दी',
    langNameEnglish: 'English',
    langNameKannada: 'ಕನ್ನಡ',
    langNameBhojpuri: 'भोजपुरी',

    ariaSchedule: 'ಕಾರ್ಯಕ್ರಮ',
    ariaContact: 'ಸಂಪರ್ಕ',
    ariaPauseMusic: 'ಹಿನ್ನೆಲೆ ಸಂಗೀತ ನಿಲ್ಲಿಸಿ',
    ariaPlayMusic: 'ಹಿನ್ನೆಲೆ ಸಂಗೀತ ಚಾಲನೆ ಮಾಡಿ',

    venue: { name: 'ಅಕಿರಾ ಆರ್ಚರ್ಡ್ಸ್', line: 'ಯಲಹಂಕ, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ' },
    events: [
      { title: 'ನಿಶ್ಚಯಾರ್ಪಣೆ ಮತ್ತು ಸಂಗೀತ ಸಮಾರಂಭ', date: '21.06.2026', time: 'ಸಂಜೆ 6 ಗಂಟೆಗೆ' },
      { title: 'ಮದುವೆ ವಿಧಿಗಳು', date: '22.06.2026', time: 'ಬೆಳಿಗ್ಗೆ 9 ಗಂಟೆಗೆ' },
      { title: 'ಸ್ವಾಗತ ಸಮಾರಂಭ', date: '22.06.2026', time: 'ಮಧ್ಯಾಹ್ನ 12 ಗಂಟೆಗೆ' }
    ],
    groomEvents: [
      { title: 'ವರ ಕಾರ್ಯಕ್ರಮ 1', date: 'TBA', time: '—' },
      { title: 'ವರ ಕಾರ್ಯಕ್ರಮ 2', date: 'TBA', time: '—' },
      { title: 'ವರ ಕಾರ್ಯಕ್ರಮ 3', date: 'TBA', time: '—' }
    ],
    brideEvents: [
      { title: 'ವಧೂ ಕಾರ್ಯಕ್ರಮ 1', date: 'TBA', time: '—' },
      { title: 'ವಧೂ ಕಾರ್ಯಕ್ರಮ 2', date: 'TBA', time: '—' },
      { title: 'ವಧೂ ಕಾರ್ಯಕ್ರಮ 3', date: 'TBA', time: '—' }
    ],
    groomVenue: { name: 'ಸುಂದರ್ ಕಲಾ ಭವನ', line: 'ರಾಮನಗರ, ಆರಾ, ಬಿಹಾರ' },
    brideVenue: { name: 'ಅರವಿಂದ ಸ್ಕೈಲ್ಯಾಂಡ್ಸ್', line: 'ಜಕ್ಕೂರ್ ರೋಡ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ' }
  },

  bho: {
    loadingDefault: 'राउर निमंत्रण तैयार हो रहल बा',
    loadingMessages: [
      'प्यार से scroll बंद कऽ रहल बानी…',
      'मोम के मुहर चमका रहल बानी…',
      'थोड़का शुभ छिड़क रहल बानी…',
      'निमंत्रण इस्त्री कऽ रहल बानी…',
      'पंखुरी आ आशीर्वाद गिनत बानी…',
      'पवित्र धागा बाँधत बानी…',
      'छोट मंत्र पढ़त बानी…',
      'लाल चर्मपत्र बिछावत बानी…'
    ],
    pageTitle: 'अमन आ सोनाली · 22 जून 2026',
    ogDescription: 'राउर विवाह में आप सादर आमंत्रित बानी।',

    introInvited: 'राउर विवाह समारोह में शामिल होखे खातिर आप सादर आमंत्रित बानी',
    introNames: 'अमन आ सोनाली',
    hintToast: 'लाल मुहर पर टैप करीं या नीचे स्क्रॉल करीं',
    sealLabel: 'खोले खातिर टैप करीं',
    sealAria: 'निमंत्रण खोलीं',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन आ सोनाली',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'बंगलौर, भारत',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'पूरा दिल से, हम रउवा के निमंत्रण देत बानी उ ओहि पल के साझा करे खातिर जहाँ दू कहानी आ दू परिवार एक हो जाला।',
    scheduleLineBottom: 'जइसे हम ई नया अध्याय एक्के साथ शुरू करीत बानी, राउर उपस्थिति आ आशीर्वाद हमरा खातिर दुनिया के बराबर रही।',
    groomName: 'अमन रॉय',
    groomParentLine: 'मनोज कुमार रॉय आ सुनीता रॉय के पुत्र',
    brideName: 'सोनाली हंचिनामनी',
    brideParentLine: 'चंद्रशेखर एच. आ नागलक्ष्मी एच. के बेटी',

    seeInMap: 'नक्शा में देखीं',
    date: 'तारीख',
    time: 'समय',
    venueLabel: 'स्थल',

    dressNote: 'दुनों परिवार ड्रेस कोड के बिसेस अभी तय कऽ रहल बानी।<br>जल्दी हम इहाँ छोट आ सरल गाइड साझा करी।',

    forLadke: 'लइका वाला खातिर',
    forLadki: 'लइकी वाला खातिर',
    contactGroomLine: 'अंकित आर. से संपर्क करीं — ',
    contactBrideLine: 'चंद्रशेखर एच. से संपर्क करीं — ',
    call: 'कॉल',
    whatsApp: 'व्हाट्सऐप',

    tabSchedule: 'कार्यक्रम',
    tabEvents: 'कार्यक्रम',
    tabAttire: 'पोशाक',
    tabContact: 'संपर्क',

    withLoveBlessings: 'प्यार आ आशीर्वाद के संग',
    monthYear: 'जून 2026',
    blessingKn: 'ಶುಭ ವಿವಾಹ',
    blessingHi: 'शुभ विवाह',

    countdownDays: 'दिन',
    countdownDay: 'दिन',
    countdownHrs: 'घंटा',
    countdownHr: 'घंटा',
    countdownMins: 'मिनट',
    countdownMin: 'मिनट',
    countdownSecs: 'सेकंड',
    countdownSec: 'सेकंड',
    countdownLeft: 'बचल',
    countdownToday: 'आज के दिन।',

    langNameHindi: 'हिन्दी',
    langNameEnglish: 'English',
    langNameKannada: 'ಕನ್ನಡ',
    langNameBhojpuri: 'भोजपुरी',

    ariaSchedule: 'कार्यक्रम',
    ariaContact: 'संपर्क',
    ariaPauseMusic: 'पृष्ठभूमि संगीत रोकीं',
    ariaPlayMusic: 'पृष्ठभूमि संगीत चलावीं',

    venue: { name: 'अकिरा ऑर्चर्ड्स', line: 'यलहंका, बेंगलुरु, कर्नाटक, भारत' },
    events: [
      { title: 'सगाई आ संगीत समारोह', date: '21.06.2026', time: 'शाम 6 बजे से' },
      { title: 'विवाह अनुष्ठान', date: '22.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत समारोह', date: '22.06.2026', time: 'दोपहर 12 बजे से' }
    ],
    groomEvents: [
      { title: 'दूल्हा कार्यक्रम 1', date: 'TBA', time: '—' },
      { title: 'दूल्हा कार्यक्रम 2', date: 'TBA', time: '—' },
      { title: 'दूल्हा कार्यक्रम 3', date: 'TBA', time: '—' }
    ],
    brideEvents: [
      { title: 'दुल्हन कार्यक्रम 1', date: 'TBA', time: '—' },
      { title: 'दुल्हन कार्यक्रम 2', date: 'TBA', time: '—' },
      { title: 'दुल्हन कार्यक्रम 3', date: 'TBA', time: '—' }
    ],
    groomVenue: { name: 'सुंदर कला भवन', line: 'रामनगर, आरा, बिहार' },
    brideVenue: { name: 'अरविंद स्काइलैंड्स', line: 'जक्कूर रोड, बेंगलुरु, कर्नाटक' }
  }
};
