/**
 * Wedding invitation translations — one object per language.
 * Keys match across en, hi, kn, bh. Main.js uses TRANSLATIONS[lang][key].
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
    ]
  },

  hi: {
    loadingDefault: 'आपका निमंत्रण संवार रहे हैं',
    loadingMessages: [
      'दीप जला रहे हैं…',
      'मोम की मुहर चमका रहे हैं…',
      'शगुन उतार रहे हैं…',
      'फूल बिछा रहे हैं…',
      'पंखुड़ियाँ और आशीर्वाद गिन रहे हैं…',
      'मंगलसूत्र सजा रहे हैं…',
      'मंत्रोच्चार कर रहे हैं…',
      'लाल कार्ड बना रहे हैं…'
    ],
    pageTitle: 'अमन और सोनाली · 22 जून 2026',
    ogDescription: 'अमन और सोनाली के विवाह में आप सादर आमंत्रित हैं।',

    introInvited: 'आप सादर आमंत्रित हैं अपने विवाह समारोह में शामिल होने के लिए',
    introNames: 'अमन और सोनाली',
    hintToast: 'लाल मुहर छुएँ या नीचे सरकाएँ',
    sealLabel: 'खोलने के लिए छुएँ',
    sealAria: 'निमंत्रण खोलें',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन और सोनाली',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'बंगलौर, भारत',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'दो राहें, दो परिवार, एक जीवन साथी। इस पल को आपके साथ बाँटना चाहते हैं।',
    scheduleLineBottom: 'आपका आशीर्वाद और साथ हमारे लिए सब कुछ है। इस नए सफर की शुरुआत आपके बिना अधूरी रहेगी।',
    groomName: 'अमन रॉय',
    groomParentLine: 'मनोज कुमार रॉय और सुनीता रॉय के पुत्र',
    brideName: 'सोनाली हंचिनामनी',
    brideParentLine: 'चंद्रशेखर एच. और नागलक्ष्मी एच. की पुत्री',

    seeInMap: 'नक्शे में देखें',
    date: 'तारीख',
    time: 'समय',
    venueLabel: 'स्थल',

    dressNote: 'दोनों परिवार मिलकर पोशाक का ख्याल रख रहे हैं।<br>जल्द ही यहाँ एक छोटी गाइड साझा करेंगे।',

    forLadke: 'लड़के वालों के लिए',
    forLadki: 'लड़की वालों के लिए',
    contactGroomLine: 'अंकित आर. से बात करें — ',
    contactBrideLine: 'चंद्रशेखर एच. से बात करें — ',
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
    countdownToday: 'आज वही दिन है।',

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
      { title: 'सगाई और सांगीतिक संध्या', date: '21.06.2026', time: 'शाम 6 बजे से' },
      { title: 'विवाह विधि', date: '22.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत समारोह', date: '22.06.2026', time: 'दोपहर 12 बजे से' }
    ]
  },

  kn: {
    loadingDefault: 'ನಿಮ್ಮ ಆಹ್ವಾನ ಸಿದ್ಧವಾಗುತ್ತಿದೆ',
    loadingMessages: [
      'ದೀಪ ಹಚ್ಚುತ್ತಿದ್ದೇವೆ…',
      'ಮೇಣದ ಮುದ್ರೆ ಹೊಳಪು ಕೊಡುತ್ತಿದ್ದೇವೆ…',
      'ಮಂಗಳ ಹಾಕುತ್ತಿದ್ದೇವೆ…',
      'ಪುಷ್ಪಗಳನ್ನು ಸಿದ್ಧಪಡಿಸುತ್ತಿದ್ದೇವೆ…',
      'ಎಲೆಗಳು ಮತ್ತು ಆಶೀರ್ವಾದ ಎಣಿಸುತ್ತಿದ್ದೇವೆ…',
      'ಮಂಗಳಸೂತ್ರ ಕಟ್ಟುತ್ತಿದ್ದೇವೆ…',
      'ಮಂಗಳ ಮಂತ್ರ ಓದುತ್ತಿದ್ದೇವೆ…',
      'ಆಹ್ವಾನ ಪತ್ರಿಕೆ ಬರೆಯುತ್ತಿದ್ದೇವೆ…'
    ],
    pageTitle: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ · ಜೂನ್ 22, 2026',
    ogDescription: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ ಅವರ ಮದುವೆಗೆ ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.',

    introInvited: 'ನಮ್ಮ ಮದುವೆ ಸಮಾರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ',
    introNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    hintToast: 'ಕೆಂಪು ಮುದ್ರೆ ತಟ್ಟಿ ಅಥವಾ ಕೆಳಗೆ ಸರಿಸಿ',
    sealLabel: 'ತೆರೆಯಲು ತಟ್ಟಿ',
    sealAria: 'ಆಹ್ವಾನ ತೆರೆಯಿರಿ',

    ovBlessing: 'ಶುಭ ವಿವಾಹ',
    ovNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'ಬೆಂಗಳೂರು, ಭಾರತ',

    ganeshMantra: 'ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ',
    scheduleLine1: 'ಎರಡು ಕುಟುಂಬಗಳು, ಒಂದು ಹೃದಯ — ಈ ಕ್ಷಣವನ್ನು ನಿಮ್ಮೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸುತ್ತೇವೆ.',
    scheduleLineBottom: 'ನಿಮ್ಮ ಉಪಸ್ಥಿತಿ ಮತ್ತು ಆಶೀರ್ವಾದ ನಮ್ಮ ಜೀವನಕ್ಕೆ ಅರ್ಥ ಕೊಡುತ್ತದೆ. ಈ ಹೊಸ ಅಧ್ಯಾಯ ನಿಮ್ಮೊಂದಿಗೆ ಶುರುವಾಗಲಿ.',
    groomName: 'ಅಮನ್ ರಾಯ್',
    groomParentLine: 'ಮನೋಜ್ ಕುಮಾರ್ ರಾಯ್ ಮತ್ತು ಸುನೀತಾ ರಾಯ್ ಅವರ ಪುತ್ರ',
    brideName: 'ಸೋನಾಲಿ ಹಂಚಿನಾಮನಿ',
    brideParentLine: 'ಚಂದ್ರಶೇಖರ್ ಎಚ್. ಮತ್ತು ನಾಗಲಕ್ಷ್ಮಿ ಎಚ್. ಅವರ ಪುತ್ರಿ',

    seeInMap: 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ',
    date: 'ದಿನಾಂಕ',
    time: 'ಸಮಯ',
    venueLabel: 'ಸ್ಥಳ',

    dressNote: 'ಉಡುಪು ವಿವರಗಳನ್ನು ಕುಟುಂಬಗಳು ನಿರ್ಧರಿಸುತ್ತಿದ್ದಾರೆ.<br>ಶೀಘ್ರದಲ್ಲಿ ಇಲ್ಲಿ ಸರಳ ಮಾರ್ಗದರ್ಶಿ ಬರಲಿದೆ.',

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

    withLoveBlessings: 'ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದದೊಂದಿಗೆ',
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
    countdownToday: 'ಇಂದು ಅದೇ ದಿನ.',

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
      { title: 'ನಿಶ್ಚಯಾರ್ಪಣೆ ಮತ್ತು ಸಂಗೀತ', date: '21.06.2026', time: 'ಸಂಜೆ 6 ಗಂಟೆಗೆ' },
      { title: 'ಮದುವೆ ಮಂಗಳ', date: '22.06.2026', time: 'ಬೆಳಿಗ್ಗೆ 9 ಗಂಟೆಗೆ' },
      { title: 'ಸ್ವಾಗತ ಸಮಾರಂಭ', date: '22.06.2026', time: 'ಮಧ್ಯಾಹ್ನ 12 ಗಂಟೆಗೆ' }
    ]
  },

  bh: {
    loadingDefault: 'राउर नेवता तैयार होत बा',
    loadingMessages: [
      'दिया बारत बानी…',
      'मोम के मुहर चमकावत बानी…',
      'शगुन उतारत बानी…',
      'फूल बिछावत बानी…',
      'पंखुरी आ आशीर्वाद गिनत बानी…',
      'मंगलसूत्र बाँधत बानी…',
      'मंत्र पढ़त बानी…',
      'कार्ड लिखत बानी…'
    ],
    pageTitle: 'अमन आ सोनाली · 22 जून 2026',
    ogDescription: 'अमन आ सोनाली के बियाह में रउवा दिल से नेवता देत बानी।',

    introInvited: 'हम रउवा दिल से नेवता देत बानी अपन बियाह में',
    introNames: 'अमन आ सोनाली',
    hintToast: 'लाल मुहर छुवीं या नीचे सरकावीं',
    sealLabel: 'खोले खातिर छुवीं',
    sealAria: 'नेवता खोलीं',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन आ सोनाली',
    ovDate: '14  ·  VI  ·  MMXXVI',
    ovLocation: 'बंगलौर, भारत',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'दू परिवार, एक मिलन — ओहि पल के रउवा आपके संग बाँटे के चाहत बानी।',
    scheduleLineBottom: 'राउर साथ आ आशीर्वाद हमरा खातिर सब कुछ बा। ई नया सफर आपके बिना अधूरा।',
    groomName: 'अमन रॉय',
    groomParentLine: 'मनोज कुमार रॉय आ सुनीता रॉय के लइका',
    brideName: 'सोनाली हंचिनामनी',
    brideParentLine: 'चंद्रशेखर एच. आ नागलक्ष्मी एच. के लइकी',

    seeInMap: 'नक्शा में देखीं',
    date: 'तारीख',
    time: 'समय',
    venueLabel: 'स्थल',

    dressNote: 'दुनों परिवार कपड़ा के बिसेस सोचत बानी।<br>जल्दी इहाँ छोट गाइड लागी।',

    forLadke: 'लइका वाला खातिर',
    forLadki: 'लइकी वाला खातिर',
    contactGroomLine: 'अंकित आर. से बात करीं — ',
    contactBrideLine: 'चंद्रशेखर एच. से बात करीं — ',
    call: 'कॉल',
    whatsApp: 'व्हाट्सऐप',

    tabSchedule: 'कार्यक्रम',
    tabEvents: 'कार्यक्रम',
    tabAttire: 'पोशाक',
    tabContact: 'संपर्क',

    withLoveBlessings: 'दिल से आशीर्वाद',
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
    countdownToday: 'आज वही दिन बा।',

    langNameHindi: 'हिन्दी',
    langNameEnglish: 'English',
    langNameKannada: 'ಕನ್ನಡ',
    langNameBhojpuri: 'भोजपुरी',

    ariaSchedule: 'कार्यक्रम',
    ariaContact: 'संपर्क',
    ariaPauseMusic: 'पीछे संगीत रोकीं',
    ariaPlayMusic: 'पीछे संगीत चलावीं',

    venue: { name: 'अकिरा ऑर्चर्ड्स', line: 'यलहंका, बेंगलुरु, कर्नाटक, भारत' },
    events: [
      { title: 'सगाई आ संगीत', date: '21.06.2026', time: 'शाम 6 बजे से' },
      { title: 'बियाह विधि', date: '22.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत', date: '22.06.2026', time: 'दोपहर 12 बजे से' }
    ]
  }
};
