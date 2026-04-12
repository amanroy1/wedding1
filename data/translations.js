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
    pageTitle: 'Aman & Sonali · June 25, 2026',
    ogDescription: 'You are cordially invited to celebrate our wedding.',

    introInvited: 'You are cordially invited to celebrate the wedding of',
    introNames: 'Aman & Sonali',
    hintToast: 'Tap the red seal or scroll down',
    sealLabel: 'Tap to Open',
    sealAria: 'Open the invitation',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'Aman & Sonali',
    ovDate: '25 · June · 2026',
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

    dressNote: '<p>A gentle guide for each celebration — not a fixed dress code. Please wear what feels right for you, and align with these suggestions as closely as you comfortably can.</p><ul><li><strong>Engagement and Sangeet:</strong> Indo-Western</li><li><strong>Wedding rituals:</strong> Ethnic</li><li><strong>Reception:</strong> Formal</li></ul>',

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
      { title: 'Engagement and Sangeet Ceremony', date: '24.06.2026', time: '6 PM onwards' },
      { title: 'Wedding Rituals', date: '25.06.2026', time: '9 AM Onwards' },
      { title: 'Reception', date: '25.06.2026', time: '12 PM onwards' }
    ]
  },

  hi: {
    loadingDefault: 'आपका निमंत्रण तैयार कर रहे हैं',
    loadingMessages: [
      'दीप जला रहे हैं…',
      'मुहर चमका रहे हैं…',
      'शगुन तैयार कर रहे हैं…',
      'फूल बिछा रहे हैं…',
      'पंखुड़ियाँ बिछा रहे हैं…',
      'मंगलसूत्र सजा रहे हैं…',
      'मंत्रोच्चारण गूंज रहा है…',
      'शुभ विवाह का स्नेह-पत्र बना रहे हैं…'
    ],
    pageTitle: 'अमन और सोनाली · 25 जून 2026',
    ogDescription: 'अमन और सोनाली के विवाह में आप सादर आमंत्रित हैं।',

    introInvited: 'कुछ निर्णय शब्दों से पहले घटित हो जाते हैं, उसी में आपका निमंत्रण',
    introNames: 'अमन और सोनाली',
    hintToast: 'लाल मुहर छुएँ या नीचे सरकाएँ',
    sealLabel: 'खोलने के लिए मुहर छुएँ',
    sealAria: 'निमंत्रण खोलें',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन और सोनाली',
    ovDate: '25 · जून · 2026',
    ovLocation: 'बंगलौर, भारत',

    ganeshMantra: 'श्री गणेशाय नमः',
    scheduleLine1: 'हम आपको उस क्षण में बुलाते हैं, जहाँ दो क़िस्से अपनी-अपनी अपूर्णताओं के साथ एक-दूसरे को पूरा करते हैं।',
    scheduleLineBottom: 'हम जानते हैं कि कुछ उपस्थितियाँ केवल साथ नहीं होतीं, वे अर्थ बन जाती हैं। आपका आशीर्वाद वैसा ही है।',
    groomName: 'अमन रॉय',
    groomParentLine: 'मनोज कुमार रॉय और सुनीता रॉय के पुत्र',
    brideName: 'सोनाली हंचिनामनी',
    brideParentLine: 'चंद्रशेखर एच. और नागलक्ष्मी एच. की पुत्री',

    seeInMap: 'नक्शे में देखें',
    date: 'तारीख',
    time: 'समय',
    venueLabel: 'स्थल',

    dressNote: '<p>हर कार्यक्रम के लिए एक नरम सुझाव है — यह कोई सख्त नियम नहीं। आप जैसा चाहें वैसे पहन सकते हैं; इन सुझावों के साथ जितना संभव हो उतना मिलान रखें।</p><ul><li><strong>सगाई और संगीत:</strong> इंडो-वेस्टर्न</li><li><strong>विवाह विधि:</strong> पारंपरिक भारतीय परिधान (एथनिक)</li><li><strong>स्वागत समारोह:</strong> औपचारिक (फॉर्मल)</li></ul>',

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
      { title: 'सगाई और सांगीतिक संध्या', date: '24.06.2026', time: 'शाम 6 बजे से' },
      { title: 'विवाह विधि', date: '25.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत समारोह', date: '25.06.2026', time: 'दोपहर 12 बजे से' }
    ]
  },

  kn: {
    loadingDefault: 'ಆಮಂತ್ರಣದ ಪದಗಳು ರೂಪ ಪಡೆಯುತ್ತಿವೆ…',
    loadingMessages: [
      'ಮಂಗಳ ವಾದ್ಯದ ನಾದಕ್ಕೆ ಸಿದ್ಧತೆ ನಡೆಯುತ್ತಿದೆ…',
      'ಅಕ್ಷತೆ ಕಾಳುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಲಾಗುತ್ತಿದೆ…',
      'ಕಂಕಣ ಭಾಗ್ಯ ಕೂಡಿ ಬರುತ್ತಿದೆ…',
      'ಶುಭ ಲಗ್ನದ ಸಿದ್ಧತೆ ಶುರುವಾಗಿದೆ…',
      'ಹಸೆಮಣೆಯನ್ನು ಅಲಂಕರಿಸಲಾಗುತ್ತಿದೆ…',
      'ವೀಳ್ಯದೆಲೆ ಅಡಿಕೆಯೊಂದಿಗೆ ಪ್ರೀತಿಯ ಆಮಂತ್ರಣ…',
      'ಸಂಭ್ರಮದ ಮೊದಲ ಪುಟ ತೆರೆದುಕೊಳ್ಳುತ್ತಿದೆ…',
      'ಆಮಂತ್ರಣದ ಪದಗಳು ರೂಪ ಪಡೆಯುತ್ತಿವೆ…'
    ],
    pageTitle: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ · ಜೂನ್ 25, 2026',
    ogDescription: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ ಅವರ ಮದುವೆಗೆ ನಿಮ್ಮನ್ನು ಪ್ರೀತಿಯಿಂದ ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.',

    introInvited: 'ಹೃದಯಪೂರ್ವಕ ಆಮಂತ್ರಣ',
    introNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    hintToast: 'ಕೆಂಪು ಮುದ್ರೆ ತಟ್ಟಿ ಅಥವಾ ಕೆಳಗೆ ಸರಿಸಿ',
    sealLabel: 'ತೆರೆಯಲು ತಟ್ಟಿ',
    sealAria: 'ಆಹ್ವಾನ ತೆರೆಯಿರಿ',

    ovBlessing: 'ಶುಭ ವಿವಾಹ',
    ovNames: 'ಅಮನ್ ಮತ್ತು ಸೋನಾಲಿ',
    ovDate: '25 · ಜೂನ್ · 2026',
    ovLocation: 'ಬೆಂಗಳೂರು, ಭಾರತ',

    ganeshMantra: 'ಶ್ರೀ ಗಣೇಶಾಯ ನಮಃ',
    scheduleLine1: 'ಎರಡು ಹೃದಯಗಳ ಸುಮಧುರ ಬೆಸುಗೆಯೊಂದಿಗೆ ನಮ್ಮೆರಡು ಕುಟುಂಬಗಳ ಸಮಾಗಮದ ಸುಯೋಗಕ್ಕೆ ಸಾಕ್ಷಿಯಾಗ ಬನ್ನಿ.',
    scheduleLineBottom: 'ನವ ದಾಂಪತ್ಯಕ್ಕೆ ಕಾಲಿಡುತ್ತಿರುವ ಸುಸಂದರ್ಭದಲ್ಲಿ ತಮ್ಮ ಆಗಮನದ ಆಶೀರ್ಪೂರ್ವಕ ಉಪಸ್ಥಿತಿಯೇ ನಮಗೆ ಸರ್ವಸ್ವ.',
    groomName: 'ಅಮನ್ ರಾಯ್',
    groomParentLine: 'ಶ್ರೀ ಮನೋಜ್ ಕುಮಾರ್ ರಾಯ್ & ಶ್ರೀಮತಿ ಸುನೀತಾ ರಾಯ್ ಅವರ ಸುಪುತ್ರ',
    brideName: 'ಸೋನಾಲಿ ಹಂಚಿನಾಮನಿ',
    brideParentLine: 'ಶ್ರೀ ಚಂದ್ರಶೇಖರ್ ಹೆಚ್. & ಶ್ರೀಮತಿ ನಾಗಲಕ್ಷ್ಮಿ ಹೆಚ್. ಅವರ ಸುಪುತ್ರಿ',

    seeInMap: 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ',
    date: 'ದಿನಾಂಕ',
    time: 'ಸಮಯ',
    venueLabel: 'ಸ್ಥಳ',

    dressNote: '<p>ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮಕ್ಕೆ ಮೃದು ಮಾರ್ಗದರ್ಶಿ — ಇದು ಕಡ್ಡಾಯ ಉಡುಪು ನಿಯಮವಲ್ಲ. ನಿಮಗೆ ಸೌಕರ್ಯವಾದಂತೆ ಧರಿಸಿ; ಸಾಧ್ಯವಾದಷ್ಟು ಈ ಸಲಹೆಗಳೊಂದಿಗೆ ಹೊಂದಾಣಿಕೆ ಮಾಡಿಕೊಳ್ಳಿ.</p><ul><li><strong>ನಿಶ್ಚಯಾರ್ಪಣೆ ಮತ್ತು ಸಂಗೀತ:</strong> ಇಂಡೋ-ವೆಸ್ಟರ್ನ್</li><li><strong>ಮದುವೆ ಮಂಗಳ:</strong> ಸಾಂಪ್ರದಾಯಿಕ (ಎಥ್ನಿಕ್)</li><li><strong>ಸ್ವಾಗತ ಸಮಾರಂಭ:</strong> ಔಪಚಾರಿಕ (ಫಾರ್ಮಲ್)</li></ul>',

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
      { title: 'ನಿಶ್ಚಿತಾರ್ಥ ಹಾಗು ಸಂಗೀತ್ ಸಮಾರಂಭ', date: '24.06.2026', time: 'ಸಂಜೆ 6 ಗಂಟೆಗೆ' },
      { title: 'ಶುಭ ವಿವಾಹ', date: '25.06.2026', time: 'ಬೆಳಿಗ್ಗೆ 9 ಗಂಟೆಗೆ' },
      { title: 'ರಿಸೆಪ್ಶನ್', date: '25.06.2026', time: 'ಮಧ್ಯಾಹ್ನ 12 ಗಂಟೆಗೆ' }
    ]
  },

  bh: {
    loadingDefault: 'रउआ खातिर नेवता तईयार हो रहल बा ',
    loadingMessages: [
      'दिया बारत बानी…',
      'मुहर चमकावत बानी…',
      'शगुन उतारत बानी…',
      'फूल बिछावत बानी…',
      'मंत्र पढ़त बानी…',
      'कार्ड लिखत बानी…'
    ],
    pageTitle: 'अमन अउर सोनाली · 25 जून 2026',
    ogDescription: 'अमन आ सोनाली के बियाह में रउवा के दिल से नेवता देत बानी।',

    introInvited: 'हम रउवा दिल से नेवता देत बानी अपन बियाह में',
    introNames: 'अमन अउर सोनाली',
    hintToast: 'लाल मुहरवा छुईं या नीचे सरकावीं',
    sealLabel: 'खोले खातिर छुईं',
    sealAria: 'नेवता खोलीं',

    ovBlessing: 'शुभ विवाह',
    ovNames: 'अमन अउर सोनाली',
    ovDate: '25 · जून · 2026',
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

    dressNote: '<p>हर कार्यक्रम खातिर हल्का सुझाव बा — ई कोनो जबरदस्त नियम नइखे। जेहन रउआ के ठीक लागे पहिनीं; जितना हो सके ई सुझाव से मिलावल के कोशिश करीं।</p><ul><li><strong>सगाई आ संगीत:</strong> इंडो-वेस्टर्न</li><li><strong>बियाह विधि:</strong> पारंपरिक परिधान (एथनिक)</li><li><strong>स्वागत:</strong> औपचारिक (फॉर्मल)</li></ul>',

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
      { title: 'सगाई आ संगीत', date: '24.06.2026', time: 'शाम 6 बजे से' },
      { title: 'बियाह विधि', date: '25.06.2026', time: 'सुबह 9 बजे से' },
      { title: 'स्वागत', date: '25.06.2026', time: 'दोपहर 12 बजे से' }
    ]
  }
};
