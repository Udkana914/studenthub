import { CourseResource } from '../types';

export const SEED_COURSES: CourseResource[] = [
  // 1. Аялал жуулчлал
  {
    id: 'tourism-mgmt',
    code: 'TOUR101',
    title: 'Аялал жуулчлал',
    englishTitle: 'Tourism Management & Sustainable Travel',
    faculty: 'business',
    category: 'Аялал жуулчлал & Менежмент',
    level: '1-2-р курс',
    overview: 'Монгол орны болон олон улсын аялал жуулчлалын зах зээлийн бүтэц, бүтээгдэхүүн хөгжүүлэлт, эко ба тогтвортой аялал жуулчлалын менежмент, маршрут төлөвлөлтийг судалдаг цогц хичээл. Аялагчдын зан төлөв, дижитал аяллын платформ (OTA)-ын ажиллах зарчимд суралцана.',
    mentorGreeting: 'Сайн уу, найз минь! Аялал жуулчлал бол зүгээр л аялах тухай биш, харин дэлхийн соёл, байгалийн нөөц, дижитал технологи, үйлчилгээний эдийн засгийн маш том систем юм шүү. Хоёулаа энэ хичээлийг бодит төсөл, үнэгүй хэрэгслүүдээр дамжуулан цэгцтэй судалцгаая!',
    mentorTip: 'Маршрут зохиох даалгавар дээр Google My Maps эсвэл Wanderlog ашиглан 3D дүрслэл хийвэл багш нар маш өндөр оноо өгдөг шүү!',
    hardSkills: [
      'Маршрут төлөвлөлт & Тооцоолол (Tour Route Costing)',
      'Аялал жуулчлалын дижитал маркетинг (OTA & Google My Business)',
      'Google My Maps & Wanderlog ашиглан маршрут визуалчлах',
      'Бүтээгдэхүүний багц үнэ тогтоох (Pricing Strategy)',
      'НҮБ-ын Тогтвортой хөгжлийн шалгуурын үнэлгээ (UN Tourism GSTC Criteria)'
    ],
    softSkills: [
      'Соёл хоорондын харилцааны мэдрэмж (Intercultural Communication)',
      'Хямралын үеийн шуурхай шийдвэр гаргалт (Crisis Management)',
      'Үйлчилгээний сэтгэлгээ & Эмпати (Service Empathy)',
      'Түүх өгүүлэх чадвар (Storytelling & Guiding)',
      'Багаар ажиллах & Зохион байгуулах ур чадвар'
    ],
    keyLearningOutcomes: [
      'Олон улсын болон дотоодын аяллын зах зээлийн динамикийг шинжлэх',
      'Эко, соёлын болон адал явдалт аяллын хөтөлбөрийг санхүүгийн тооцоотой боловсруулах',
      'Аяллын байгууллагын эрсдэлийн удирдлага, аюулгүй байдлын төлөвлөгөө гаргах',
      'Тогтвортой аялал жуулчлалын стандартад нийцсэн бүтээгдэхүүн үүсгэх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Аялал жуулчлалын үндэс ба дэлхийн чиг хандлага',
        keyConcepts: ['UN Tourism', 'Inbound & Outbound travel', 'Tourism system model', 'Дижитал шилжилт'],
        summary: 'Аялал жуулчлалын үүсэл хөгжил, эдийн засагт үзүүлэх үржүүлэгч нөлөө (multiplier effect), орчин үеийн чиг хандлагууд.',
        mentorTip: 'Multiplier effect-ийг жишээгээр тайлбарлавал оноо авахад маш хялбар байдаг.'
      },
      {
        week: '4-6',
        title: 'Аяллын бүтээгдэхүүн хөгжүүлэлт ба Маршрут зохиох',
        keyConcepts: ['Itinerary Design', 'Costing & Pricing', 'Target Segment', 'Supply chain'],
        summary: 'Аяллын маршрут төлөвлөх, тээвэр, байр сууц, хоолны логистикийг төсөвлөх аргачлал.',
        mentorTip: 'Маршрутын өртөг тооцохдоо гэнэтийн зардлын 5-10%-ийг маржин болгон оруулахаа хэзээ ч бүү мартаарай!'
      },
      {
        week: '7-9',
        title: 'Тогтвортой ба Эко аялал жуулчлал',
        keyConcepts: ['GSTC Criteria', 'Carrying capacity', 'Community-based tourism', 'Нүүрстөрөгчийн ул мөр'],
        summary: 'Байгаль орчин, орон нутгийн иргэдэд ээлтэй аялал жуулчлалыг төлөвлөх, даацын хэмжээг тооцоолох.',
        mentorTip: 'Монгол орны нүүдлийн ахуй, тусгай хамгаалалттай газруудын даацыг дурдвал сурган заагч багш нар их дуртай байдаг.'
      },
      {
        week: '10-12',
        title: 'Аяллын дижитал маркетинг ба Борлуулалтын сувгууд',
        keyConcepts: ['OTA (Booking, TripAdvisor)', 'Content creation', 'Social media travel ads', 'Reviews management'],
        summary: 'Онлайн аяллын агентлагууд, сошиал медиа сурталчилгаа, хэрэглэгчийн сэтгэгдэлтэй ажиллах нь.',
        mentorTip: 'TripAdvisor дээр муу сэтгэгдэлд хэрхэн эерэг мэргэжлийн хариу бичих талаар кейс бэлдээрэй.'
      },
      {
        week: '13-16',
        title: 'Аяллын эрсдэлийн удирдлага ба Семестрийн төсөл',
        keyConcepts: ['Risk assessment', 'Emergency protocols', 'Insurance integration', 'Final Tour Pitch'],
        summary: 'Аяллын үеийн гэнэтийн осол, даатгал, аюулгүй байдлыг хангах журам ба бодит аяллын хөтөлбөрийг хамгаалах.',
        mentorTip: 'Төгсгөлийн төсөлдөө бодит газрын зураг, төсвийн хүснэгт хоёрыг заавал хавсаргаарай!'
      }
    ],
    usefulWebsites: [
      {
        id: 'unwto-academy',
        title: 'UN Tourism Online Academy (НҮБ-ын Аялал жуулчлалын академи)',
        url: 'https://www.unwto-tourism-academy.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй хичээлүүдтэй',
        description: 'Дэлхийн аялал жуулчлалын байгууллагын (UN Tourism) албан ёсны онлайн сургалтууд, дэлхийн статистик, кейс шинжилгээнүүд.',
        bestFor: 'Олон улсын жишиг, тогтвортой аялал жуулчлалын хичээлүүдийг үнэгүй судлах',
        mentorTip: 'Олон улсын UN Tourism сертификаттай болох боломжтой, нээлттэй үнэгүй вебинаруудыг нь заавал үзээрэй!'
      },
      {
        id: 'wanderlog-tool',
        title: 'Wanderlog - Үнэгүй аяллын маршрут ба төсөв төлөвлөгч',
        url: 'https://wanderlog.com/',
        category: 'tool',
        language: 'MN/EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй',
        description: 'Маршрутыг газрын зураг дээр автоматаар холбож, өдөр бүрийн цагийн хуваарь, зардлын тооцоог интерактив гаргадаг шилдэг веб хэрэгсэл.',
        bestFor: 'Хичээлийн бие даалт, аяллын маршрут зохиох төсөл хийхэд',
        mentorTip: 'Бие даалтын ажлаа цаасан дээр биш Wanderlog-оор интерактив линк болгоод илгээвэл 100% А үнэлгээ авна!'
      },
      {
        id: 'openlearn-tourism',
        title: 'OpenLearn (The Open University UK) - Free Tourism & Heritage Courses',
        url: 'https://www.open.edu/openlearn/free-courses/full-catalogue',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй & Баталгаажсан үнэгүй дижитал батламж олгодог',
        description: 'Их Британийн нээлттэй их сургуулийн аялал жуулчлал, соёлын өвийн менежментийн бүрэн үнэгүй сургалтууд.',
        bestFor: 'Үнэгүй сертификат авах, бие дааж англи хэлээр гүнзгийрүүлэн судлах',
        mentorTip: 'Хичээлээ дуусгаад татаж авдаг дижитал badge/батламж нь CV дээр тавихад маш үнэ цэнтэй.'
      }
    ],
    readingMaterials: [
      {
        id: 'tour-book-1',
        title: 'Аялал жуулчлалын менежмент ба эдийн засаг',
        author: 'МУИС, СЭЗИС-ийн Аялал жуулчлалын тэнхим',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монголын аялал жуулчлалын нөөц, хууль эрх зүйн орчин, тур операторын менежментийг системтэй тусгасан үндсэн сурах бичиг.',
        format: 'Ном',
        keyChapters: ['1-р бүлэг: Аялал жуулчлалын суурь ойлголт', '3-р бүлэг: Тур операторын үйл ажиллагаа', '5-р бүлэг: Аяллын үнэ бүрдэлт']
      },
      {
        id: 'tour-book-2',
        title: 'Tourism Management: An Introduction',
        author: 'Stephen J. Page',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Дэлхийн их дээд сургуулиудад ашиглагддаг аялал жуулчлалын менежментийн сонгодог гарын авлага.',
        format: 'PDF',
        keyChapters: ['Chapter 4: The Demand for Tourism', 'Chapter 9: Tourism Planning and Policy']
      }
    ],
    researchSources: [
      {
        id: 'unwto-elibrary',
        title: 'UN Tourism eLibrary & Statistics',
        sourceName: 'UN Tourism Publications',
        searchQuery: 'Mongolia tourism statistics sustainable development',
        directUrl: 'https://www.e-unwto.org/',
        suggestedTopics: ['Монголын эко аялал жуулчлалын өрсөлдөх чадвар', 'Дижитал шилжилт ба аяллын зан төлөв'],
        citationGuidance: 'UN Tourism (2024). International Tourism Highlights. Madrid: UN Tourism.'
      }
    ],
    practiceQuestions: [
      {
        id: 'tour-q1',
        question: 'Аялал жуулчлалын эдийн засгийн "Үржүүлэгч нөлөө" (Multiplier Effect) гэж юу вэ?',
        options: [
          'Зөвхөн гадаад жуулчдын тоо жилээр хоёр дахин өсөхийг хэлнэ',
          'Жуулчны зарцуулсан мөнгө орон нутгийн эдийн засагт дамжин эргэлдэж нэмэлт орлого, ажлын байр үүсгэхийг хэлнэ',
          'Онгоцны тийзийн үнэ улирлаас хамаарч өсөхийг хэлнэ',
          'Аяллын агентлагийн ашгийн хувь хэмжээг хэлнэ'
        ],
        correctIndex: 1,
        explanation: 'Зөв байна, найз минь! Жуулчны төлсөн 1 төгрөг зочид буудал, мах ногооны ханган нийлүүлэгч, жолооч гээд олон салбарт шингэж эдийн засгийг бүхэлд нь хөдөлгөдөг ид шидийг үржүүлэгч нөлөө гэдэг шүү.'
      }
    ],
    studyTips: [
      'Маршрутын даалгавраа хийхдээ заавал бодит цаг хугацаа (Google Maps drive time)-г шалгаж төлөвлөөрэй.',
      'Тогтвортой аялал жуулчлалын UN шалгууруудыг тогтоож авбал онолын асуулт бүрт оноо цуглуулж чадна.',
      'Зуны амралтаараа аяллын хөтөч эсвэл кэмп дээр дадлага хийх нь хичээлээс 10 дахин илүү бодит мэдлэг олгодог.'
    ]
  },

  // 2. Бизнесийн удирдлага
  {
    id: 'bus-admin',
    code: 'MGMT101',
    title: 'Бизнесийн удирдлага',
    englishTitle: 'Principles of Business Management & Organization',
    faculty: 'business',
    category: 'Бизнес & Менежмент',
    level: '1-2-р курс',
    overview: 'Байгууллагын менежментийн 4 тулгуур үйл ажиллагаа болох төлөвлөлт, зохион байгуулалт, манлайлал, хяналтын зарчмууд. Стратегийн шийдвэр гаргалт, зах зээлийн өрсөлдөөний шинжилгээ (SWOT, PESTEL, Porter 5 Forces), компанийн засаглалыг судална.',
    mentorGreeting: 'Сайн уу найз минь! Бизнесийн удирдлага бол аль ч салбарын суурь мотор юм. Хэрэв чи байгууллага, хүмүүс, нөөцийг хэрхэн зөв удирдаж зорилгод хүргэхийг ойлгочихвол ирээдүйд ямар ч бизнес эсвэл гарааны компанийг амжилттай удирдаж чадна!',
    mentorTip: 'Case Study (бодит компанийн кейс) шинжлэхдээ зөвхөн онол ярилгүй, "Хэрэв би захирал байсан бол яг ямар алхам хийх байсан бэ?" гэж бодож бичвэл шилдэг үнэлгээ авдаг.',
    hardSkills: [
      'Стратегийн шинжилгээ хийх (SWOT, PESTEL, Porter\'s 5 Forces)',
      'Бизнесийн үйл ажиллагааны схем зурах (Business Process Flowchart)',
      'KPI & OKR зорилт тодорхойлох, гүйцэтгэлийг хэмжих',
      'Төслийн менежментийн Trello, Notion, Asana хэрэгслүүд ашиглах',
      'Байгууллагын зардлын шинжилгээ & Төсөвлөлт (Operational Budgeting)'
    ],
    softSkills: [
      'Стратегийн сэтгэлгээ (Strategic Thinking)',
      'Манлайлал ба багийг сэдэлжүүлэх (Team Motivation)',
      'Шийдвэр гаргах ур чадвар (Decision-Making under uncertainty)',
      'Илтгэх ба нөлөөлөх чадвар (Executive Presentation)',
      'Зөрчилдөөнийг бүтээлчээр шийдвэрлэх (Conflict Resolution)'
    ],
    keyLearningOutcomes: [
      'Байгууллагын зорилго, алсын харааг үйл ажиллагааны тактик төлөвлөгөөтэй холбох',
      'Зах зээлийн өрсөлдөөнт орчныг үнэлж стратегийн оновчтой хувилбар сонгох',
      'Хүний нөөц, санхүү, үйл ажиллагааны уялдаа холбоог оновчлох',
      'Амжилттай болон дампуурсан бодит бизнесийн кейсүүдэд гүнзгий дүгнэлт өгөх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Менежментийн хувьсал ба Байгууллагын бүтэц',
        keyConcepts: ['Төлөвлөлт, Зохион байгуулалт, Манлайлал, Хяналт', 'Тейлоризм ба орчин үеийн Agile', 'Байгууллагын соёл'],
        summary: 'Сонгодог менежментээс уян хатан, стартап менежмент хүртэлх хөгжил ба байгууллагын бүтцийн хэлбэрүүд.',
        mentorTip: 'Менежментийн 4 тулгуурыг (P-O-L-C) цээжээрээ бүрэн зураглаж чаддаг болоорой.'
      },
      {
        week: '4-6',
        title: 'Стратегийн төлөвлөлт ба Өрсөлдөөний шинжилгээ',
        keyConcepts: ['SWOT Matrix', 'PESTEL Analysis', 'Porter 5 Forces', 'Competitive Advantage'],
        summary: 'Гадаад ба дотоод орчны шинжилгээ, өрсөлдөөний давуу талыг бүрдүүлэх стратегиуд.',
        mentorTip: 'SWOT хийхдээ зөвхөн жагсааж орхихгүй, SO, WO, ST, WT огтлолцох стратегийн матрицыг хамт зурвал төгс болно.'
      },
      {
        week: '7-9',
        title: 'Хүний нөөцийн менежмент ба Манлайллын арга барил',
        keyConcepts: ['Сэдлийн онолууд (Maslow, Herzberg)', 'Манлайллын хэв маяг', 'Багийн динамик'],
        summary: 'Ажилтнуудыг сэдэлжүүлэх, гүйцэтгэлийг үнэлэх, багийн гишүүдийн давуу талыг нээх арга зүй.',
        mentorTip: 'Масловын хэрэгцээний шатлалыг орчин үеийн залуу ажилтнуудын сэтгэл зүйтэй холбож бичээрэй.'
      },
      {
        week: '10-12',
        title: 'Үйл ажиллагааны удирдлага ба Чанарын хяналт',
        keyConcepts: ['Lean Management', 'Six Sigma суурь', 'Нийлүүлэлтийн сүлжээ', 'Бүтээмжийн хэмжүүр'],
        summary: 'Үр ашиггүй зардлыг хасах (Waste reduction), чанарын хяналт, бүтээмж дээшлүүлэх арга замууд.',
        mentorTip: 'Toyota Production System-ийн 7 төрлийн хаягдлыг (Muda) уншиж сонирхоорой.'
      },
      {
        week: '13-16',
        title: 'Өөрчлөлтийн менежмент ба Кейс хамгаалалт',
        keyConcepts: ['Kotter\'s 8-Step Change', 'Дижитал шилжилт', 'Кейс бичих аргачлал'],
        summary: 'Байгууллагын өөрчлөлтийг удирдах, эсэргүүцлийг даван туулах ба компанийн кейс шинжлэн танилцуулах.',
        mentorTip: 'Кейс танилцуулахдаа хугацаагаа яг 5 минутад багтаах бэлтгэл хийгээрэй.'
      }
    ],
    usefulWebsites: [
      {
        id: 'harvard-case-open',
        title: 'MIT OpenCourseWare - Management Courses (Бүрэн үнэгүй MIT хичээлүүд)',
        url: 'https://ocw.mit.edu/search/?d=Sloan+School+of+Management',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй MIT сургалтууд',
        description: 'MIT Sloan School of Management-ийн бодит лекцүүд, даалгаврууд, шалгалтын материалууд нээлттэй үнэгүй байршдаг сан.',
        bestFor: 'Дэлхийн шилдэг их сургуулийн менежментийн хичээлийн хөтөлбөрийг үнэгүй судлах',
        mentorTip: 'Sloan-ийн лекцийн тэмдэглэл (Lecture Notes) PDF-үүдийг татаж аваад суралцвал маш цэгцтэй байдаг.'
      },
      {
        id: 'coursera-biz-audit',
        title: 'Coursera - Business Foundations Specialization (Wharton School)',
        url: 'https://www.coursera.org/specializations/wharton-business-foundations',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Үнэгүй Аудит (Free Audit) горимоор бүх хичээлийг үзэх боломжтой',
        description: 'Уортоны бизнесийн сургуулийн Маркетинг, Санхүү, Үйл ажиллагаа, Хүний нөөцийн цогц үндэс хичээл.',
        bestFor: 'Дэлхийн шилдэг бизнесийн сургуулийн видео лекцийг төлбөргүй үзэх',
        mentorTip: 'Бүртгүүлэхдээ "Audit the course" товчийг дарвал бүх видео, материалыг 100% үнэгүй үзэж болдог шүү!'
      },
      {
        id: 'notion-biz-templates',
        title: 'Notion for Students (Оюутны имэйлээр Pro эрх үнэгүй)',
        url: 'https://www.notion.so/product/notion-for-education',
        category: 'tool',
        language: 'MN/EN',
        isFree: true,
        freeTierNote: '.edu имэйлээр Pro эрх 100% Үнэгүй',
        description: 'Төслийн менежмент, KPI хяналт, багийн даалгаврыг удирдах дэлхийн хамгийн алдартай бүтэц зохион байгуулагч систем.',
        bestFor: 'Багийн даалгавар, кейс шинжилгээ, хичээлийн тэмдэглэлээ цэгцлэх',
        mentorTip: 'Их сургуулийнхаа @edu.mn имэйлээр бүртгүүлмэгц сарын $10-ын Notion Plus эрхийг шууд үнэгүй авдаг шүү!'
      }
    ],
    readingMaterials: [
      {
        id: 'mgmt-book-1',
        title: 'Менежмент (14 дэх хэвлэл)',
        author: 'Стивен П. Роббинс, Мэри Коултер',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Дэлхий даяар сая сая оюутнууд үздэг менежментийн албан ёсны монгол хэл дээрх сонгодог сурах бичиг.',
        format: 'Ном',
        keyChapters: ['1-р бүлэг: Менежер ба та', '7-р бүлэг: Стратегийн менежмент', '15-р бүлэг: Ажилтнуудыг сэдэлжүүлэх нь']
      },
      {
        id: 'mgmt-book-2',
        title: 'Principles of Management (OpenStax Free Textbook)',
        author: 'OpenStax Rice University',
        type: 'guide',
        level: 'Дунд шат',
        description: 'АНУ-ын Райс Их Сургуулиас гаргасан 100% үнэгүй, нээлттэй бүрэн сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 8: Strategic Analysis', 'Chapter 11: Human Resource Management']
      }
    ],
    researchSources: [
      {
        id: 'hbr-open',
        title: 'Harvard Business Review (HBR Open Articles & Podcasts)',
        sourceName: 'Harvard Business Publishing',
        searchQuery: 'Strategic leadership organizational behavior case studies',
        directUrl: 'https://hbr.org/',
        suggestedTopics: ['Орчин үеийн зайнаас ажиллах соёл ба бүтээмж', 'Agile менежментийн Монгол компаниуд дахь туршлага'],
        citationGuidance: 'Robbins, S. P., & Coulter, M. (2021). Management. Pearson Education.'
      }
    ],
    practiceQuestions: [
      {
        id: 'mgmt-q1',
        question: 'Менежментийн төлөвлөлтийн шатанд PESTEL шинжилгээний "E" үсгүүд нь ямар хүчин зүйлийг төлөөлдөг вэ?',
        options: [
          'Education ба Ethics',
          'Economic (Эдийн засаг) ба Environmental (Байгаль орчин)',
          'Engineering ба Execution',
          'Export ба Efficiency'
        ],
        correctIndex: 1,
        explanation: 'Маш сайн, найз минь! PESTEL шинжилгээнд Political, Economic, Social, Technological, Environmental, Legal гэсэн 6 макро орчны хүчин зүйлсийг үнэлдэг юм шүү.'
      }
    ],
    studyTips: [
      'Онолуудыг цээжлэх биш Монголын томоохон компаниуд (MCS, Мобиком, Хаан Банк)-ын жишээн дээр буулгаж тогтоо.',
      'Багийн даалгавар дээр багийн ахлагчийн дүрд сайн дураараа орж үз, энэ нь менежерийн хамгийн сайн дадлага болно.',
      'PESTEL, SWOT матрицыг бэлэн загвар ашиглан нүдэнд харагдахуйц өнгөтэй дизайнтай хийгээрэй.'
    ]
  },

  // 3. Даатгал
  {
    id: 'insurance-risk',
    code: 'INS201',
    title: 'Даатгал',
    englishTitle: 'Insurance Principles & Risk Management',
    faculty: 'business',
    category: 'Санхүү, Банк & Даатгал',
    level: '2-3-р курс',
    overview: 'Хувь хүн болон байгууллагын санхүүгийн эрсдэлийг тооцоолох, даатгалын гэрээний эрх зүй, хураамж тооцох актуар үндэс, даатгалын нөхөн төлбөр, давхар даатгалын механизмыг нарийвчлан судалдаг хичээл.',
    mentorGreeting: 'Сайн уу найз минь! Даатгал бол зөвхөн гэнэтийн осол гарах үед төлдөг төлбөр биш, харин аливаа бизнес ба гэр бүлийн санхүүг сүйрлээс хамгаалдаг хамгийн хүчирхэг "хамгаалалтын бамбай" юм. Энэ хичээлээр чи эрсдэлийг мөнгөн дүнгээр хэрхэн хэмжих ухаанд суралцах болно!',
    mentorTip: 'Даатгалын хураамж (Premium) ба Нөхөн төлбөр (Claim)-ийн харьцааг (Loss Ratio) ойлгочихвол даатгалын компанийн ашигтай ажиллах нууцыг бүрэн тайлчихна шүү!',
    hardSkills: [
      'Эрсдэлийн үнэлгээ хийх (Risk Assessment Matrix)',
      'Даатгалын хураамжийн тооцоолол (Premium Calculation)',
      'Хохирол хураамжийн харьцаа тооцох (Loss Ratio Analysis)',
      'Даатгалын гэрээний нөхцөл, үл хамаарах зүйлсийг шинжлэх (Policy Wording)',
      'Excel дээр эрсдэлийн магадлалын загварчлал хийх'
    ],
    softSkills: [
      'Нарийн нягт нямбай байдал (Attention to Detail)',
      'Хэлэлцээр хийх чадвар (Negotiation in Claim settlement)',
      'Шүүмжлэлт дүн шинжилгээ (Critical Risk Thinking)',
      'Сэтгэл хөдлөлөө удирдах (Handling Stressful Claims)',
      'Харилцагчтай ёс зүйтэй харилцах (Ethical Client Advising)'
    ],
    keyLearningOutcomes: [
      'Цэвэр эрсдэл (Pure Risk) ба таамагласан эрсдэлийн ялгааг тодорхойлох',
      'Эд хөрөнгийн, хариуцлагын, эрүүл мэндийн болон амьдралын даатгалын бүтээгдэхүүнийг зохиомжлох',
      'Даатгалын үндсэн зарчмууд (Үнэнч шударга байх, Даатгуулах ашиг сонирхол, Нөхөн сэргээх зарчим)-ыг хэрэгжүүлэх',
      'Монгол Улсын Даатгалын тухай хууль болон Санхүүгийн зохицуулах хорооны шаардлагыг дагаж мөрдөх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Эрсдэлийн удирдлага ба Даатгалын мөн чанар',
        keyConcepts: ['Risk Transfer', 'Peril & Hazard', 'Даатгалын зах зээлийн бүтэц'],
        summary: 'Эрсдэлийн төрлүүд, эрсдэлийг удирдах аргууд (зайлсхийх, бууруулах, шилжүүлэх, хүлээн зөвшөөрөх).',
        mentorTip: 'Risk Matrix (Магадлал x Үр дагавар) хүснэгтийг нүдэлж тогтоо.'
      },
      {
        week: '4-6',
        title: 'Даатгалын хууль эрх зүйн тулгуур зарчмууд',
        keyConcepts: ['Insurable Interest', 'Utmost Good Faith (Uberrima Fides)', 'Indemnity', 'Subrogation'],
        summary: 'Даатгалын гэрээний суурь 6 зарчим, гэрээ байгуулах үеийн мэдээлэл үнэн зөв өгөх үүрэг.',
        mentorTip: 'Шалгалтын хамгийн дуртай асуулт бол "Subrogation (Суброгаци)" буюу шаардах эрх шилжих тухай байдаг!'
      },
      {
        week: '7-9',
        title: 'Эд хөрөнгийн ба Хариуцлагын даатгал',
        keyConcepts: ['Тээврийн хэрэгсэл', 'Үл хөдлөх хөрөнгө', 'Жолоочийн хариуцлагын албан журмын даатгал'],
        summary: 'Эд хөрөнгийн үнэлгээ, хохирол тооцох, гуравдагч этгээдийн өмнө хүлээх хариуцлагын даатгал.',
        mentorTip: 'Жолоочийн даатгалын хуулийг Legalinfo дээрээс үзэж практик тооцоо хийж сураарай.'
      },
      {
        week: '10-12',
        title: 'Амьдралын даатгал ба Актуар шинжлэх ухааны үндэс',
        keyConcepts: ['Life Insurance', 'Mortality Table', 'Time Value of Money', 'Хуримтлалын даатгал'],
        summary: 'Нас баралтын хүснэгт ашиглан амьдралын даатгалын үнэлгээ хийх математик суурь.',
        mentorTip: 'Excel дээр нас баралтын магадлалын хялбар хүснэгт үүсгэж дадаарай.'
      },
      {
        week: '13-16',
        title: 'Давхар даатгал ба Нөхөн төлбөрийн менежмент',
        keyConcepts: ['Reinsurance (Quota share, Excess of loss)', 'Claim investigation', 'СЗХ-ны зохицуулалт'],
        summary: 'Томоохон эрсдэлийг олон улсад давхар даатгуулах ба маргаантай нөхөн төлбөрийг шийдвэрлэх.',
        mentorTip: 'Давхар даатгал яагаад үндэсний даатгалын компаниудыг том эрсдэлээс хамгаалдгийг жишээгээр ойлгоорой.'
      }
    ],
    usefulWebsites: [
      {
        id: 'investopedia-insurance',
        title: 'Investopedia - Insurance Academy (Бүрэн үнэгүй тайлбарууд & симуляци)',
        url: 'https://www.investopedia.com/insurance-4689717',
        category: 'documentation',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй',
        description: 'Даатгалын бүх нэр томьёо, даатгалын бодлого, математик тооцооллуудыг энгийн англи хэлээр жишээтэй тайлбарласан сан.',
        bestFor: 'Нэр томьёог жишээгээр ойлгох, эрсдэлийн үнэлгээний тооцооллыг шалгах',
        mentorTip: 'Шалгалтын өмнө Investopedia-ийн тайлбар жишээнүүдийг уншвал ойлгоход маш хялбар болдог.'
      },
      {
        id: 'frc-mn-insurance',
        title: 'Санхүүгийн Зохицуулах Хороо (СЗХ) - Даатгалын салбарын тайлан & Статистик',
        url: 'http://www.frc.mn/',
        category: 'documentation',
        language: 'MN',
        isFree: true,
        freeTierNote: '100% Нээлттэй Үнэгүй өгөгдөл',
        description: 'Монгол Улсын даатгалын салбарын улирал бүрийн нэгдсэн тайлан, компаниудын нөхөн төлбөр, хураамжийн бодит статистик.',
        bestFor: 'Курсын ажил, бие даалтад Монголын даатгалын бодит тоо баримтыг ашиглахад',
        mentorTip: 'Бие даалтын ажлынхаа тоо баримтыг СЗХ-ны улирлын тайлангаас авч эш татвал багш лавтайяа баярлана.'
      },
      {
        id: 'khan-risk-insurance',
        title: 'Khan Academy - Risk & Insurance (Хувийн санхүү ба эрсдэл)',
        url: 'https://www.khanacademy.org/college-careers-more/financial-literacy',
        category: 'interactive',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй ашгийн бус платформ',
        description: 'Хувийн болон бизнесийн эрсдэлийг даатгалаар хэрхэн хамгаалах тухай интерактив видео хичээл ба шалгах сорилууд.',
        bestFor: 'Суурь ойлголтыг видео хэлбэрээр үзэж бататгах',
        mentorTip: 'Интерактив тестүүдийг нь хийгээд үзээрэй, асуултууд нь их бодитой байдаг.'
      }
    ],
    readingMaterials: [
      {
        id: 'ins-book-1',
        title: 'Даатгалын үндэс ба практик',
        author: 'СЭЗИС-ийн Даатгалын тэнхимийн хамт олон',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монгол Улсын даатгалын зах зээлийн онцлог, гэрээний нөхцөл, хууль тогтоомжийг багтаасан гарын авлага.',
        format: 'Ном',
        keyChapters: ['2-р бүлэг: Даатгалын суурь зарчмууд', '6-р бүлэг: Нөхөн төлбөр олгох үйл явц']
      },
      {
        id: 'ins-book-2',
        title: 'Risk Management and Insurance',
        author: 'Harrington & Niehaus',
        type: 'guide',
        level: 'Гүнзгийрүүлсэн',
        description: 'Байгууллагын эрсдэлийн удирдлага ба даатгалын онолын дэлхийн жишиг сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 3: Risk Identification and Measurement', 'Chapter 10: Commercial Liability Insurance']
      }
    ],
    researchSources: [
      {
        id: 'insurance-res-1',
        title: 'Монголын Даатгагчдын Холбоо (МДХ) - Судалгаа',
        sourceName: 'Mongolian Insurers Association',
        searchQuery: 'Монголын даатгалын зах зээлийн төлөв байдал эрсдэл',
        directUrl: 'https://mda.mn/',
        suggestedTopics: ['Жолоочийн хариуцлагын албан журмын даатгалын үр нөлөө', 'Хөдөө аж ахуйн индексжүүлсэн даатгалын шинжилгээ'],
        citationGuidance: 'Монголын Даатгагчдын Холбоо (2024). Даатгалын зах зээлийн нэгдсэн тойм. Улаанбаатар.'
      }
    ],
    practiceQuestions: [
      {
        id: 'ins-q1',
        question: 'Даатгалын "Indemnity" (Нөхөн сэргээх зарчим)-ийн гол утга учир юу вэ?',
        options: [
          'Даатгуулагч ослоос болж анх байснаасаа илүү их ашиг олох ёстой',
          'Даатгуулагчийг ослын өмнө байсан санхүүгийн түвшинд нь буцаан хүргэх бөгөөд ашиг олохыг хориглодог',
          'Даатгалын компани заавал 100% бэлэн мөнгө олгох ёстой',
          'Хураамжийг сар бүр 2 дахин өсгөх зарчим'
        ],
        correctIndex: 1,
        explanation: 'Маш үнэн, найз минь! Даатгал бол ашиг олох хэрэгсэл биш, харин гарсан бодит хохирлыг нөхөн сэргээж анхны байдалд нь хүргэх зориулалттай тул Indemnity зарчим үүнийг хатуу заадаг.'
      }
    ],
    studyTips: [
      'Монгол Улсын "Даатгалын тухай" хуулийн нэр томьёоны хэсгийг нэг удаа бүрэн уншиж тэмдэглэ.',
      'Хохирол-хураамжийн харьцаа (Loss Ratio)-г Excel дээр өөрөө гараараа тооцоолж турш.',
      'Найз нөхөд, гэрийнхнийхээ машины даатгалын гэрээг авч "Үл хамаарах нөхцөлүүд"-ийг нь шинжилж үзээрэй.'
    ]
  },

  // 4. Зочлох үйлчилгээний менежмент
  {
    id: 'hosp-mgmt',
    code: 'HOSP201',
    title: 'Зочлох үйлчилгээний менежмент',
    englishTitle: 'Hospitality Management & Hotel Operations',
    faculty: 'business',
    category: 'Аялал жуулчлал & Менежмент',
    level: '2-3-р курс',
    overview: 'Зочид буудал, ресторан, хүлээн авалтын салбарын өдөр тутмын үйл ажиллагаа (Front Office, Housekeeping, F&B), зочны сэтгэл ханамж, орлогын менежмент (RevPAR, ADR) болон үйлчилгээний стандартыг судална.',
    mentorGreeting: 'Сайн уу найз минь! Зочлох үйлчилгээ бол хүний сэтгэл хөдлөл, тансаг мэдрэмж, нарийн зохион байгуулалт, санхүүгийн өндөр ур чадвар зэрэгцэн оршдог гайхалтай салбар. Дэлхийн 5 одтой зочид буудлын менежерүүд өрөөний үнийг хэрхэн секундийн дотор өөрчилдгийг энд сурна!',
    mentorTip: 'ADR (Average Daily Rate) ба RevPAR (Revenue Per Available Room)-ийн ялгааг нүдэлж авбал шалгалтын тооцоот бодлогуудыг 5-хан минутад бодно шүү!',
    hardSkills: [
      'Зочид буудлын орлогын үзүүлэлтүүд тооцох (RevPAR, ADR, Occupancy %)',
      'Зочид буудлын удирдлагын систем (PMS - Property Management System) зарчим',
      'Хоол, ундааны өртөг тооцоолох (Food Cost % Calculation)',
      'Үйлчилгээний чанарын аудит хийх (Mystery Shopping Checklist)',
      'Үнийн динамик стратеги (Yield & Dynamic Pricing)'
    ],
    softSkills: [
      'Үйлчилгээний өндөр ёс зүй & Сэтгэлгээ (Hospitality Mindset)',
      'Хүнд үйлчлүүлэгчтэй харилцах & Сэтгэл ханамж сэргээх (Service Recovery)',
      'Сэтгэл хөдлөлийн оюун ухаан (EQ & Active Listening)',
      'Дарамтын дор тайван ажиллах (Grace under pressure)',
      'Олон соёлын зочидтой хүндэтгэлтэй харилцах'
    ],
    keyLearningOutcomes: [
      'Зочид буудлын Front Office болон Housekeeping-ийн үйл ажиллагааны урсгалыг загварчлах',
      'RevPAR болон ачааллын хувийг дээшлүүлэх динамик үнийн бодлого хэрэгжүүлэх',
      'Үйлчилгээний доголдол гарсан үед үйлчлүүлэгчийн сэтгэл ханамжийг сэргээх (HEAR framework)',
      'Олон улсын зочид буудлын франчайз ба брэндийн стандартуудыг мөрдүүлэх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Зочлох үйлчилгээний бүтэц ба Зочны аяллын үе шат',
        keyConcepts: ['Guest Lifecycle', 'Front Office Operations', 'Night Audit', 'Concierge'],
        summary: 'Зочин захиалга өгөхөөс эхлээд гарах (Check-out) хүртэлх үе шат бүрийн үйлчилгээний стандартууд.',
        mentorTip: 'Night Audit тайлангийн зориулалтыг товч бөгөөд оновчтой тайлбарлаж сураарай.'
      },
      {
        week: '4-6',
        title: 'Өрөөний аж ахуй (Housekeeping) ба Инженерийн менежмент',
        keyConcepts: ['Room turnover time', 'Par stock levels', 'Ариутгал, цэвэрлэгээний стандарт', 'Facility safety'],
        summary: 'Зочид буудлын хамгийн том бие бүрэлдэхүүн болох housekeeping-ийн бүтээмж ба хяналт.',
        mentorTip: 'Turnover time (өрөө цэвэрлэх хугацаа) ба чанарын харьцааг анхаараарай.'
      },
      {
        week: '7-9',
        title: 'Орлогын менежмент (Revenue Management) ба Үзүүлэлтүүд',
        keyConcepts: ['RevPAR', 'ADR', 'Occupancy Rate (OCC%)', 'GOPPAR', 'Dynamic Pricing'],
        summary: 'Сул өрөөний алдагдлыг бууруулах, улирлын хэлбэлзэлд нийцүүлэн үнэ тогтоох математик аргачлал.',
        mentorTip: 'RevPAR = ADR x Occupancy Rate томьёог хэзээ ч бүү мартаарай!'
      },
      {
        week: '10-12',
        title: 'Хоол, ундааны менежмент (F&B Management)',
        keyConcepts: ['Menu Engineering', 'Food Cost %', 'HACCP эрүүл ахуй', 'Бараа материалын эргэц'],
        summary: 'Ресторан, баар, хүлээн авалтын үйлчилгээний ашигт ажиллагаа ба цэс төлөвлөлт.',
        mentorTip: 'Menu Engineering matrix (Stars, Plowhorses, Puzzles, Dogs)-ийг зурж үзүүлээрэй.'
      },
      {
        week: '13-16',
        title: 'Үйлчилгээний сэтгэл ханамж сэргээх ба Төгсгөлийн кейс',
        keyConcepts: ['Service Recovery Paradox', 'HEAR Framework', 'TripAdvisor & OTA сэтгэгдэл удирдах'],
        summary: 'Үйлчлүүлэгч гомдол гаргах үед улам үнэнч хэрэглэгч болгон хувиргах сэтгэл зүйн арга барил.',
        mentorTip: 'Service Recovery Paradox гэдэг нь алдаагаа гайхалтай зассан компанид хэрэглэгч урьдынхаас ч илүү дурладаг тухай юм!'
      }
    ],
    usefulWebsites: [
      {
        id: 'coursera-hotel-mgmt',
        title: 'Coursera - Hotel Management: Distribution, Revenue & Demand Management (ESSEC Business School)',
        url: 'https://www.coursera.org/specializations/hotel-management',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Үнэгүй Аудит горимоор бүх хичээлийг үзэх боломжтой',
        description: 'Францын дэлхийн шилдэг бизнесийн сургууль ESSEC-ийн зочид буудлын орлогын менежментийн мэргэжлийн хөтөлбөр.',
        bestFor: 'RevPAR, ADR болон дижитал түгээлтийн сувгийг жишээгээр сурах',
        mentorTip: '"Audit Course" дарж бүртгүүлбэл бүх лекц, даалгаврыг 100% төлбөргүйгээр шууд үзэх боломжтой.'
      },
      {
        id: 'hosco-free',
        title: 'Hosco - Global Hospitality Network & Career Learning',
        url: 'https://www.hosco.com/en/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Оюутнуудад 100% Үнэгүй гишүүнчлэл',
        description: 'Дэлхийн тэргүүлэгч зочлох үйлчилгээний мэргэжилтнүүдийн сүлжээ, ажлын байр, үнэгүй нийтлэл ба зөвлөмжүүд.',
        bestFor: 'Олон улсын зочид буудлын стандартууд, ажлын байрны шаардлагыг харах',
        mentorTip: 'CV-гээ бэлтгэхдээ энд байгаа олон улсын стандартуудтай танилцаж үг хэллэгээ баяжуулаарай.'
      },
      {
        id: 'hotel-tech-report',
        title: 'HotelTechReport - Зочид буудлын PMS ба технологийн үнэгүй тайлангууд',
        url: 'https://hoteltechreport.com/',
        category: 'documentation',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Нээлттэй Үнэгүй судалгааны тайлангууд',
        description: 'Оpera, Cloudbeds зэрэг зочид буудлын бүх програм хангамжийн бодит үнэлгээ, харьцуулалт ба сургалтын гарын авлагууд.',
        bestFor: 'Зочид буудлын дижитал системүүдийн ажиллах зарчмыг ойлгоход',
        mentorTip: 'PMS системийн үйл ажиллагааг судлах бие даалтад энэ сайт хамгийн шилдэг эх сурвалж болно.'
      }
    ],
    readingMaterials: [
      {
        id: 'hosp-book-1',
        title: 'Зочлох үйлчилгээний менежмент',
        author: 'Монголын Их Дээд Сургуулиудын нэгдсэн хөтөлбөр',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монголын зочид буудал, рестораны салбарын өнөөгийн байдал, дүрэм журам, үйлчилгээний соёлыг багтаасан ном.',
        format: 'Ном',
        keyChapters: ['3-р бүлэг: Front office менежмент', '5-р бүлэг: Зочны сэтгэл ханамж']
      },
      {
        id: 'hosp-book-2',
        title: 'Introduction to Hospitality Management',
        author: 'John R. Walker',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Дэлхий дахинд хамгийн өргөн ашиглагддаг зочлох үйлчилгээний нэвтэрхий толь сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 3: The Hotel Business', 'Chapter 7: Restaurant Operations']
      }
    ],
    researchSources: [
      {
        id: 'str-hospitality',
        title: 'STR Global Hotel Benchmarking & Data Insights',
        sourceName: 'CoStar / STR Global',
        searchQuery: 'Hotel occupancy RevPAR trends Asia Pacific',
        directUrl: 'https://str.com/',
        suggestedTopics: ['Улаанбаатар хотын 4-5 одтой зочид буудлын ачааллын улирлын хэлбэлзэл', 'Цар тахлын дараах зочлох үйлчилгээний сэргэлт'],
        citationGuidance: 'Walker, J. R. (2020). Introduction to Hospitality Management. Pearson.'
      }
    ],
    practiceQuestions: [
      {
        id: 'hosp-q1',
        question: 'Зочид буудалд 100 өрөө байдаг ба нэг шөнө 80 өрөө зарагдсан, өрөөний дундаж үнэ (ADR) $100 байсан бол RevPAR (Бэлэн байгаа өрөө ногдох орлого) хэд вэ?',
        options: [
          '$100',
          '$80',
          '$125',
          '$8,000'
        ],
        correctIndex: 1,
        explanation: 'Гайхалтай тооцоолол, найз минь! RevPAR = ADR ($100) x Occupancy Rate (80%) = $80 байна. Эсвэл Нийт орлого ($8,000) / Нийт өрөөний тоо (100) = $80 гэж бодсон ч яг гарна.'
      }
    ],
    studyTips: [
      'RevPAR, ADR, OCC% гурвын харилцан уялдааг гараараа жишээ тооцоо хийж шалгаарай.',
      'Хүнд үйлчлүүлэгчтэй харилцах HEAR (Hear, Empathize, Apologize, Resolve) загварыг цээжилчих.',
      'Улаанбаатарын томоохон зочид буудлын ресепшн дээр ажиллаж буй найзуудаасаа бодит сорилтуудыг нь асууж ярилц.'
    ]
  },

  // 5. Маркетинг (Хиймэл оюун ухаан /AI/ хосолсон)
  {
    id: 'mktg-ai',
    code: 'MKTG301',
    title: 'Маркетинг (Хиймэл оюун ухаан /AI/ хосолсон)',
    englishTitle: 'AI-Powered Digital Marketing & Modern Consumer Behavior',
    faculty: 'ai_business',
    category: 'Хиймэл оюун & Маркетинг',
    level: '2-3-р курс',
    overview: 'Уламжлалт маркетингийн 4P, STP онолыг Хиймэл оюун ухаан (Generative AI, ChatGPT, Midjourney, Perplexity), алгоритмт дижитал зар сурталчилгаа (Meta Ads, Google Performance Max), өгөгдөлд суурилсан хэрэглэгчийн сегментчлэлтэй хослуулан судалдаг шинэлэг хичээл.',
    mentorGreeting: 'Сайн уу найз минь! Маркетинг бол одоо зүгээр л уриа лоозон зохиох тухай биш болсон. Хиймэл оюун ухаан ашиглан хэрэглэгчийн сэтгэл зүйг өгөгдлөөр тайлж, секундийн дотор контент үйлдвэрлэж, ROI-оо 10 дахин өсгөх маркетингийн шинэ эрин үед тавтай морил!',
    mentorTip: 'Маркетингийн хичээл дээр AI ашиглахдаа зүгээр л "Контент бичээд өг" гэхийн оронд Зорилтот сегмент, Хэрэглэгчийн өвдөлтийн цэг (Pain point), Брэндийн өнгө аяс (Tone of voice)-ийг нарийн өгч Prompt бичих хэрэгтэй шүү!',
    hardSkills: [
      'Маркетингийн зориулалттай Prompt Engineering (ChatGPT, Claude, Gemini)',
      'AI контент ба визуал бүтээх (Midjourney, Canva Magic Studio, CapCut)',
      'Google Analytics 4 & Meta Ads Manager ашиглан ROI хэмжих',
      'HubSpot CRM & Маркетингийн автоматжуулалтын систем тохируулах',
      'Хэрэглэгчийн замын зураглал гаргах (Customer Journey Mapping & Funnel)'
    ],
    softSkills: [
      'Бүтээлч сэтгэлгээ ба Түүх өгүүлэх (Creative Storytelling)',
      'Хэрэглэгчийн эмпати (Empathy & Psychology understanding)',
      'Өгөгдөлд суурилсан шүүмжлэлт дүн шинжилгээ (Data intuition)',
      'AI-ийн ёс зүй & Хувийн нууцыг хамгаалах хариуцлага',
      'Зах зээлийн хурдацтай өөрчлөлтөд дасан зохицох чадвар'
    ],
    keyLearningOutcomes: [
      'STP (Сегментчлэх, Зорилтот зах зээл сонгох, Байршуулах) онолыг AI өгөгдлийн шинжилгээгээр баяжуулах',
      'Генератив хиймэл оюун ашиглан контентын төлөвлөгөө, сошиал медиа хуулбар, зар сурталчилгааны визуалыг автоматжуулах',
      'Маркетингийн юүлүүр (AIDA Funnel)-ийн түвшин бүрт тохирсон дижитал кампанит ажил хэрэгжүүлэх',
      'Google Analytics 4 болон хөрвүүлэлтийн хувь (Conversion Rate)-ийг хэмжиж оновчлох'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Орчин үеийн маркетинг ба Хиймэл оюун ухааны хувьсгал',
        keyConcepts: ['Marketing 5.0 (Philip Kotler)', 'AI in Customer Experience', 'STP онол', 'Prompting суурь'],
        summary: 'Уламжлалт маркетингаас технологид суурилсан Маркетинг 5.0 руу шилжих нь ба маркетингийн Prompt бичих арга барил.',
        mentorTip: 'Филип Котлерын "Маркетинг 5.0: Технологи хүн төрөлхтний төлөө" номын гол үзэл санааг уншаарай.'
      },
      {
        week: '4-6',
        title: 'Хэрэглэгчийн зан төлөв ба Buyer Persona-г AI-аар үүсгэх',
        keyConcepts: ['Customer Avatar / Persona', 'Pain Points & Desires', 'Empathy Mapping', 'Perplexity Research'],
        summary: 'Зорилтот хэрэглэгчээ өгөгдөл болон AI судалгааны хэрэгслүүдээр нарийвчлан зураглаж, сэтгэл зүйн хөшүүргийг илрүүлэх.',
        mentorTip: 'Perplexity AI ашиглан зах зээлийн өрсөлдөгчдийн хэрэглэгчдийн сөрөг сэтгэгдлийг шүүж давуу талаа олж болдог!'
      },
      {
        week: '7-9',
        title: 'AI Контент бүтээлт ба Визуал брендинг',
        keyConcepts: ['Generative Copywriting', 'Canva Magic Studio', 'Video AI (HeyGen, CapCut)', 'A/B Testing'],
        summary: 'Сошиал медиа контент, блог, подкастын зохиол, баннерыг хиймэл оюунаар богино хугацаанд бэлтгэх ба турших.',
        mentorTip: 'Нэг сэдвийг 5 өөр өнгө аясаар AI-аар бичүүлж A/B тест хийх даалгавар маш өндөр үнэлэгддэг.'
      },
      {
        week: '10-12',
        title: 'Гүйцэтгэлийн маркетинг (Performance Marketing) ба Funnel',
        keyConcepts: ['TOFU, MOFU, BOFU', 'CAC (Customer Acquisition Cost)', 'LTV (Lifetime Value)', 'Meta/Google Ads'],
        summary: 'Маркетингийн юүлүүрийн шатууд, хэрэглэгч татах зардлыг насан туршийн үнэ цэнтэй нь харьцуулах тооцоолол.',
        mentorTip: 'LTV / CAC харьцаа 3:1 ба түүнээс дээш байвал эрүүл бизнес гэж үздэг дүрмийг тогтоо.'
      },
      {
        week: '13-16',
        title: 'Маркетингийн аналитик ба AI Кампанит ажлын хамгаалалт',
        keyConcepts: ['Google Analytics 4', 'Attribution models', 'ROAS (Return on Ad Spend)', 'Кампанит ажлын тайлан'],
        summary: 'Кампанит ажлын үр дүнг хэмжих, дижитал тайлан боловсруулах ба семестрийн AI маркетингийн төслийг танилцуулах.',
        mentorTip: 'Тайлан дээрээ зөвхөн "Like, Share"-ийг биш "Бодит борлуулалт ба ROAS"-ийг онцолбол шилдэг нь болно.'
      }
    ],
    usefulWebsites: [
      {
        id: 'hubspot-academy-free',
        title: 'HubSpot Academy - 100% Free Certified Marketing Courses',
        url: 'https://academy.hubspot.com/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй & Албан ёсны олон улсын сертификат олгодог',
        description: 'Дижитал маркетинг, Инбаунд маркетинг, Контент маркетинг, Сошиал медиа маркетингийн дэлхийн хамгийн нэр хүндтэй бүрэн үнэгүй баталгаажсан сургалтууд.',
        bestFor: 'Олон улсын маркетерийн сертификат үнэгүй авах, LinkedIn дээр тавих',
        mentorTip: 'HubSpot-ийн Inbound Marketing сертификатыг аваад CV-дээ хийвэл Монголын аль ч маркетинг агентлаг шууд сонирхож эхэлнэ!'
      },
      {
        id: 'google-skillshop-free',
        title: 'Google Skillshop & Digital Garage (Google-ийн үнэгүй сертификатууд)',
        url: 'https://skillshop.withgoogle.com/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй Google албан ёсны сургалтууд',
        description: 'Google Analytics 4 (GA4), Google Ads, AI-powered Search Ads зэрэг хамгийн чухал платформуудыг эзэмших албан ёсны үнэгүй шалгалтууд.',
        bestFor: 'Google Analytics 4-ийн албан ёсны сертификат үнэгүй авах',
        mentorTip: 'GA4 Certification шалгалтыг өгч тэнцээд багшдаа үзүүлбэл семинарын оноог шууд дээд оноогоор тавих нь дамжиггүй.'
      },
      {
        id: 'canva-education-free',
        title: 'Canva for Education & Students (Үнэгүй график & AI Magic Studio)',
        url: 'https://www.canva.com/education/',
        category: 'tool',
        language: 'MN/EN',
        isFree: true,
        freeTierNote: 'Оюутнуудад үнэгүй боломжтой',
        description: 'Постер, лого, танилцуулга, сошиал медиа постыг AI ид шидийн хэрэгслүүдээр мэргэжлийн түвшинд бэлтгэх веб хэрэгсэл.',
        bestFor: 'Хичээлийн бүх танилцуулга слайд, маркетингийн баннерыг гоёмсог бэлдэх',
        mentorTip: 'Canva-ийн "Magic Write" болон "Text to Image" функцуудыг бие даалтын ажлынхаа визуал дээр ашиглаарай.'
      }
    ],
    readingMaterials: [
      {
        id: 'mktg-book-1',
        title: 'Маркетинг 5.0: Хүн төрөлхтний төлөөх технологи',
        author: 'Филип Котлер, Хермаван Картажая, Ивай Сентияван',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Хиймэл оюун ухаан, өгөгдлийн шинжилгээ, контекст маркетинг орчин үеийн бизнест хэрхэн нөлөөлж буйг харуулсан албан ёсны монгол хэл дээрх ном.',
        format: 'Ном',
        keyChapters: ['2-р бүлэг: Үе хоорондын ялгаа', '6-р бүлэг: Дата-д тулгуурласан маркетинг', '9-р бүлэг: Урьдчилан таамаглах маркетинг']
      },
      {
        id: 'mktg-book-2',
        title: 'Prompt Engineering for Generative AI in Marketing',
        author: 'Open Source Community & Practical Guides',
        type: 'cheat_sheet',
        level: 'Дунд шат',
        description: 'Маркетеруудад зориулсан 50+ шалгарсан AI Prompt-ийн эмхэтгэл.',
        format: 'Цахим гарын авлага',
        keyChapters: ['Section 1: Persona Creation Prompts', 'Section 4: Ad Copywriting Frameworks (PAS, AIDA)']
      }
    ],
    researchSources: [
      {
        id: 'mktg-res-1',
        title: 'Think with Google (Маркетингийн чиг хандлага ба өгөгдөл)',
        sourceName: 'Google Research',
        searchQuery: 'AI digital marketing consumer insights global trends',
        directUrl: 'https://www.thinkwithgoogle.com/',
        suggestedTopics: ['Монголын залуусын сошиал медиа хэрэглээний тренд', 'Генератив AI-ийн маркетингийн бүтээмжид үзүүлэх нөлөө'],
        citationGuidance: 'Kotler, P., Kartajaya, H., & Setiawan, I. (2021). Marketing 5.0. Wiley.'
      }
    ],
    practiceQuestions: [
      {
        id: 'mktg-q1',
        question: 'Маркетингийн хуулбар бичих сонгодог "PAS" загварын үсгүүд нь ямар утгыг илэрхийлдэг вэ?',
        options: [
          'Product, Audience, Sales',
          'Problem (Асуудал), Agitate (Дэвэргэх/Мэдрүүлэх), Solution (Шийдэл санал болгох)',
          'Position, Action, Strategy',
          'Price, Attention, Satisfaction'
        ],
        correctIndex: 1,
        explanation: 'Маш гайхалтай, найз минь! PAS загвар бол хүний сэтгэл зүйд хамгийн хүчтэй нөлөөлдөг бүтэц: Хэрэглэгчийн асуудлыг нэрлэж, түүнийг нь мэдрүүлээд, эцэст нь өөрийн бүтээгдэхүүнийг шийдэл болгон санал болгодог юм.'
      }
    ],
    studyTips: [
      'ChatGPT дээр контент бичүүлэхдээ үргэлж "Чи бол туршлагатай монгол маркетер, зорилтот хэрэглэгч нь оюутнууд..." гэх мэт Context заавал өг.',
      'HubSpot Academy-ийн үнэгүй сертификатуудыг авч LinkedIn профайл дээрээ заавал холбо.',
      'Монголын сошиалд тренд болж буй 3 кампанит ажлыг ажиглаж, тэд ямар эмоци дээр тоглож буйг тэмдэглэж ав.'
    ]
  },

  // 6. Мэдээллийн систем (Хиймэл оюун ухаан /AI/ хосолсон)
  {
    id: 'is-ai',
    code: 'IS202',
    title: 'Мэдээллийн систем (Хиймэл оюун ухаан /AI/ хосолсон)',
    englishTitle: 'Management Information Systems & Applied AI',
    faculty: 'ai_business',
    category: 'Мэдээллийн технологи & AI',
    level: '2-3-р курс',
    overview: 'Байгууллагын мэдээллийн системийн бүтэц (ERP, CRM, SCM), реляци өгөгдлийн сан (SQL), бизнес аналитик ба том өгөгдөл, машин сургалтын үндэс болон хиймэл оюун ухааны LLM загваруудыг байгууллагын шийдвэр гаргалтад нэгтгэх арга замыг судална.',
    mentorGreeting: 'Сайн уу найз минь! Мэдээллийн систем бол орчин үеийн аливаа байгууллагын төв мэдрэлийн систем юм. Өгөгдөл хаана хадгалагдаж, хэрхэн дамжиж, хиймэл оюун ухаанаар дамжуулан хэрхэн үнэ цэнтэй шийдвэр болж хувирдгийг мэдэх нь өнөө үед хамгийн өндөр цалинтай мэргэжилтний супер чадвар болсон шүү!',
    mentorTip: 'SQL хайлтын үндсэн 5 команд (SELECT, FROM, WHERE, GROUP BY, JOIN)-ийг л төгс сурчихвал ямар ч том системийн өгөгдлийг хүссэнээрээ шүүж чаддаг болно!',
    hardSkills: [
      'SQL өгөгдлийн сангийн хүсэлт бичих (PostgreSQL, MySQL)',
      'Бизнес аналитик ба Визуалчлал (Power BI, Google Looker Studio)',
      'Python хэлээр өгөгдөл боловсруулах (Pandas, NumPy суурь)',
      'Байгууллагын архитектур зурах (ER Diagram, UML Data flow)',
      'OpenAI / Gemini API ашиглан байгууллагын мэдээллийн системд холболт хийх'
    ],
    softSkills: [
      'Логик ба алгоритмч сэтгэлгээ (Algorithmic Logic)',
      'Техникийн бус хүмүүст технологи ойлгуулах (Tech-to-Business Translation)',
      'Системч сэтгэлгээ (Systems Thinking)',
      'Өгөгдлийн аюулгүй байдал & Кибер ёс зүй',
      'Алдааг хайж олох ба засах тэвчээр (Debugging & Troubleshooting)'
    ],
    keyLearningOutcomes: [
      'Байгууллагын түвшин дэх мэдээллийн урсгал, ERP (SAP, Odoo) системүүдийн логикийг зураглах',
      'Реляци өгөгдлийн санд хүснэгт үүсгэх, харьцаа тодорхойлох ба нийлмэл SQL JOIN ашиглах',
      'Байгууллагын түүхий өгөгдлийг цэвэрлэж, удирдах ажилтнуудад зориулсан интерактив Дашборд бүтээх',
      'Хиймэл оюун ухаан ба автоматжуулалтын шийдлийг бизнесийн үйл ажиллагаанд нэвтрүүлэх төлөвлөгөө боловсруулах'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Мэдээллийн системийн бүтэц ба Стратегийн ач холбогдол',
        keyConcepts: ['Hardware, Software, Data, People, Process', 'ERP, CRM, SCM', 'Cloud Computing (AWS, GCP)'],
        summary: 'Байгууллагын мэдээллийн системийн 5 бүрдэл ба үүлэн технологийн давуу талууд.',
        mentorTip: 'Odoo нээлттэй эхийн ERP-ийн демо хувилбарыг үнэгүй туршиж үзээрэй.'
      },
      {
        week: '4-6',
        title: 'Өгөгдлийн сангийн менежмент ба Практик SQL',
        keyConcepts: ['Relational Database (RDBMS)', 'Primary & Foreign Keys', 'SQL Queries', 'ER Diagrams'],
        summary: 'Өгөгдлийн бүтэц, реляци загварчлал ба SELECT, WHERE, JOIN командуудтай бодит өгөгдөл дээр ажиллах.',
        mentorTip: 'Kaggle Learn дээрх үнэгүй Intro to SQL сертификатыг 2 цагт л хийж болдог шүү.'
      },
      {
        week: '7-9',
        title: 'Бизнес Интеллиженс (BI) ба Интерактив Дашборд',
        keyConcepts: ['ETL процесс', 'Power BI / Looker Studio', 'KPI Cards', 'Data-driven decision making'],
        summary: 'Өгөгдлийг олон эх үүсвэрээс татаж нэгтгэн, захирлуудад зориулсан ойлгомжтой дашборд бүтээх.',
        mentorTip: 'Google Looker Studio нь бүрэн үнэгүй бөгөөд Google Sheets-тэй шууд холбогддог тул төсөлд хамгийн тохиромжтой.'
      },
      {
        week: '10-12',
        title: 'Хиймэл оюун ухаан ба Байгууллагын автоматжуулалт',
        keyConcepts: ['Machine Learning суурь', 'Predictive Analytics', 'RAG (Retrieval-Augmented Generation)', 'AI API Integration'],
        summary: 'Байгууллагын дотоод баримт бичгүүдтэй харьцдаг AI чатбот, автоматжуулалтын хэрэгслүүд.',
        mentorTip: 'RAG технологи гэдэг нь компани өөрийн дотоод файлуудаа AI-д зааж өгөөд хариулт авдаг тухай юм.'
      },
      {
        week: '13-16',
        title: 'Мэдээллийн аюулгүй байдал, Ёс зүй ба Системийн төслийн хамгаалалт',
        keyConcepts: ['Кибер аюулгүй байдал', 'GDPR ба Монгол Улсын Хүний хувийн мэдээлэл хамгаалах хууль', 'Төгсгөлийн төсөл'],
        summary: 'Мэдээллийн нууцлал, сүлжээний хамгаалалт ба байгууллагад зориулсан бодит системийн төсөл хамгаалах.',
        mentorTip: 'Төгсгөлийн төсөлдөө бодит өгөгдлийн сангийн бүдүүвч (ERD)-ээ заавал оруулж өгөөрэй.'
      }
    ],
    usefulWebsites: [
      {
        id: 'kaggle-learn-free',
        title: 'Kaggle Learn - 100% Free Hands-on SQL, Python & AI Courses',
        url: 'https://www.kaggle.com/learn',
        category: 'interactive',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй & Үнэгүй дижитал сертификаттай',
        description: 'Хөтөч дээрээ шууд код бичин SQL, Python, Data Visualization, Machine Learning сурах дэлхийн шилдэг интерактив платформ.',
        bestFor: 'SQL болон өгөгдлийн шинжилгээг кодоор бодитоор туршиж сертификат авах',
        mentorTip: 'Kaggle-ийн Intro to SQL хичээлийг дуусгахад ердөө 3 цаг зарцуулагддаг ба суралцсан зүйл нь бүхэл бүтэн семестрийг хөнгөвчилдөг.'
      },
      {
        id: 'looker-studio-free',
        title: 'Google Looker Studio (Бүрэн үнэгүй бизнес дашборд бүтээгч)',
        url: 'https://lookerstudio.google.com/',
        category: 'tool',
        language: 'MN/EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй Google аккаунтаар ашиглах боломжтой',
        description: 'Excel эсвэл Google Sheets-ийн өгөгдлийг хэдхэн минутад мэргэжлийн түвшний интерактив график, дашборд болгон хувиргах веб хэрэгсэл.',
        bestFor: 'Хичээлийн бие даалт дээр компанийн бизнес дашборд хийж үзүүлэхэд',
        mentorTip: 'Энэ хэрэгслээр хийсэн дашбордын линкийг багшдаа илгээвэл багш маш их гайхаж, баярлах болно шүү!'
      },
      {
        id: 'github-student-pack',
        title: 'GitHub Student Developer Pack (Оюутнуудад зориулсан $200k+ үнэгүй хэрэгслүүд)',
        url: 'https://education.github.com/pack',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Оюутнуудад 100% Үнэгүй',
        description: 'Copilot AI, үүлэн серверийн эрх, өгөгдлийн сангийн платформуудыг оюутны имэйлээр бүрэн үнэгүй олгодог дэлхийн хамгийн баялаг багц.',
        bestFor: 'GitHub Copilot AI код туслагч болон дата платформуудыг төлбөргүй авах',
        mentorTip: 'Оюутны үнэмлэх эсвэл сургуулийн имэйлээрээ баталгаажуулаад GitHub Copilot-ийг үнэгүй ашиглаарай!'
      }
    ],
    readingMaterials: [
      {
        id: 'is-book-1',
        title: 'Мэдээллийн систем ба удирдлага',
        author: 'МУИС, ШУТИС-ийн Мэдээллийн технологийн багш нар',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Байгууллагын мэдээллийн системийн бүтэц, өгөгдлийн сангийн зохион байгуулалт, мэдээллийн аюулгүй байдлын суурь сурах бичиг.',
        format: 'Ном',
        keyChapters: ['4-р бүлэг: Өгөгдлийн сангийн удирдлагын систем', '10-р бүлэг: Системийн шинжилгээ ба зохиомж']
      },
      {
        id: 'is-book-2',
        title: 'Management Information Systems: Managing the Digital Firm',
        author: 'Kenneth C. Laudon & Jane P. Laudon',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Дэлхийн бүх их сургуулиудад ашиглагддаг Мэдээллийн системийн хамгийн алдартай сонгодог сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 6: Foundations of Business Intelligence: Databases and Information Management', 'Chapter 11: Managing Knowledge and AI']
      }
    ],
    researchSources: [
      {
        id: 'is-res-1',
        title: 'Gartner Research & Top Strategic Technology Trends',
        sourceName: 'Gartner Inc.',
        searchQuery: 'Enterprise AI management information systems trends',
        directUrl: 'https://www.gartner.com/en/information-technology',
        suggestedTopics: ['Монголын банк санхүүгийн байгууллагуудын ERP шилжилт', 'LLM хиймэл оюун ухааны байгууллагын аюулгүй байдлын эрсдэл'],
        citationGuidance: 'Laudon, K. C., & Laudon, J. P. (2022). Management Information Systems. Pearson.'
      }
    ],
    practiceQuestions: [
      {
        id: 'is-q1',
        question: 'SQL дээр хоёр өөр хүснэгтийн мэдээллийг холбож дуудахдаа ямар түлхүүр үгийг ашигладаг вэ?',
        options: [
          'COMBINE',
          'JOIN (INNER JOIN / LEFT JOIN)',
          'MERGE_TABLES',
          'CONNECT'
        ],
        correctIndex: 1,
        explanation: 'Зөв хариуллаа, найз минь! SQL дээр хүснэгтүүдийг Primary Key болон Foreign Key-ээр нь холбохдоо JOIN командыг ашигладаг бөгөөд энэ нь реляци өгөгдлийн сангийн хамгийн гол зүрх юм.'
      }
    ],
    studyTips: [
      'SQL-ийг зүгээр унших хэрэггүй, Kaggle дээр өдөрт 2 бодлого бичиж гартаа дасга.',
      'Google Looker Studio-г нээгээд өөрийнхөө сарын зардлын Google Sheets-ийг холбон дашборд хийж үзээрэй.',
      'Байгууллагын ERP системийн логикийг сурахдаа жижиг дэлгүүрийн касс болон агуулах хоёрыг төсөөлбөл маш амархан ойлгогдоно.'
    ]
  },

  // 7. Нягтлан бодох бүртгэл
  {
    id: 'acct-fund',
    code: 'ACCT101',
    title: 'Нягтлан бодох бүртгэл',
    englishTitle: 'Financial Accounting & Reporting Standards',
    faculty: 'business',
    category: 'Санхүү, Банк & Даатгал',
    level: '1-2-р курс',
    overview: 'Бизнесийн хэл гэгддэг санхүүгийн бүртгэлийн суурь зарчмууд. Дансны давхар бичилт, журналын бичилт, баланс, орлогын тайлан, мөнгөн гүйлгээний тайлан гаргах, СТОУС (IFRS) стандартыг эзэмших үндэс суурь болно.',
    mentorGreeting: 'Сайн уу найз минь! Нягтлан бодох бүртгэл бол ямар ч эргэлзээгүйгээр "Бизнесийн эх хэл" юм. Хэрэв чи тайлан уншиж сурвал аливаа компани үнэхээр ашигтай ажиллаж байна уу, эсвэл дампуурлын ирмэг дээр байна уу гэдгийг 1 минутын дотор л харж чаддаг "рентген нүдтэй" болно гэсэн үг!',
    mentorTip: 'Балансын алтан тэгшитгэл: "ХӨРӨНГӨ = ӨР ТӨЛБӨР + ЭЗДИЙН ӨМЧ" (Assets = Liabilities + Equity). Энэ тэгшитгэл 2 талдаа үргэлж тэнцэж байх ёстойг хэзээ ч бүү март!',
    hardSkills: [
      'Дансны давхар бичилт хийх (Double-Entry Debit & Credit Journal Entries)',
      'Санхүүгийн 4 үндсэн тайлан бэлтгэх (Баланс, Орлого, Мөнгөн гүйлгээ, Эздийн өмч)',
      'Тайлангийн харьцааны шинжилгээ хийх (Liquidity, Profitability, Solvency)',
      'Excel дээр санхүүгийн загварчлал & Баланс тэнцвэржүүлэх',
      'СТОУС (IFRS)-ын үндсэн зарчмуудыг хэрэглэх'
    ],
    softSkills: [
      'Онцгой нягт нямбай байдал (High Precision & Accuracy)',
      'Мэргэжлийн үнэнч шударга ёс зүй (Integrity & Professional Ethics)',
      'Шүүмжлэлт логик сэтгэлгээ (Logical Reasoning)',
      'Нууцлал хадгалах чадвар (Confidentiality)',
      'Хугацааны сахилга бат (Deadline Discipline in closing financial periods)'
    ],
    keyLearningOutcomes: [
      'Аливаа эдийн засгийн ажил гүйлгээг Дебет, Кредит дансаар зөв бүртгэж журналын бичилт хийх',
      'Шалгах баланс болон залруулгын бичилтүүдийг гүйцэтгэх',
      'Санхүүгийн тайлангуудын уялдаа холбоог тайлбарлах, ашгийн болон мөнгөн гүйлгээний ялгааг ойлгох',
      'Байгууллагын хөрвөх чадвар, өр төлөх чадвар, ашигт ажиллагааны түвшинд дүгнэлт өгөх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Нягтлан бодох бүртгэлийн суурь ба Балансын тэгшитгэл',
        keyConcepts: ['Хөрөнгө, Өр төлбөр, Эздийн өмч', 'Дансны төлөвлөгөө', 'Давхар бичилтийн систем', 'Дебет ба Кредит'],
        summary: 'Нягтлан бодох бүртгэлийн үндсэн тэгшитгэл ба дансны дебет, кредитийн дүрмүүд.',
        mentorTip: 'Дебет нэмэгддэг (Хөрөнгө, Зардал), Кредит нэмэгддэг (Өр төлбөр, Өмч, Орлого) гэдгийг гараараа бичиж ханандаа наагаарай.'
      },
      {
        week: '4-6',
        title: 'Бүртгэлийн цикл ба Ажил гүйлгээний журнал',
        keyConcepts: ['Ерөнхий журнал', 'Ерөнхий данс (T-account)', 'Шалгах баланс', 'Аккруэл суурь'],
        summary: 'Бүртгэлийн бүрэн цикл, кассын суурь ба аккруэл суурийн ялгаа, мөнгө орж ирээгүй байхад орлого хүлээн зөвшөөрөх дүрэм.',
        mentorTip: 'Аккруэл суурь гэдэг нь мөнгө нь орж ирээгүй байсан ч ажил гүйцэтгэсэн бол орлогоо шууд бүртгэдэг тухай юм!'
      },
      {
        week: '7-9',
        title: 'Залруулга бичилт ба Санхүүгийн тайлан бэлтгэх',
        keyConcepts: ['Урьдчилж төлсөн зардал', 'Хуримтлагдсан орлого', 'Элэгдэл тооцох', 'Баланс ба Орлогын тайлан'],
        summary: 'Тайлант үеийн эцэст хийгддэг залруулга бичилтүүд ба санхүүгийн албан ёсны тайлангууд гаргах аргачлал.',
        mentorTip: 'Элэгдэл тооцох шулуун шугамын аргын томьёог (Өртөг - Үлдэх өртөг / Ашиглалтын хугацаа) цээжлээрэй.'
      },
      {
        week: '10-12',
        title: 'Мөнгөн гүйлгээний тайлан ба Бараа материалын өртөг',
        keyConcepts: ['Үйл ажиллагааны, Хөрөнгө оруулалтын, Санхүүжилтийн мөнгөн гүйлгээ', 'FIFO, Дундаж өртгийн арга'],
        summary: 'Цэвэр ашиг яагаад дансан дахь бэлэн мөнгөнөөс зөрдөг учир шалтгаан ба бараа материалын үнэлгээ.',
        mentorTip: 'Ашигтай ажилласан мөртлөө бэлэн мөнгөгүйгээс болж компани дампуурч болдгийг мөнгөн гүйлгээний тайлан л харуулдаг.'
      },
      {
        week: '13-16',
        title: 'Санхүүгийн тайлангийн шинжилгээ ба Төгсгөлийн шалгалт',
        keyConcepts: ['Current Ratio', 'Debt to Equity', 'ROE, ROA', 'СТОУС (IFRS) ёс зүй'],
        summary: 'Санхүүгийн харьцаануудаар дамжуулан компанийн эрүүл мэндийг үнэлэх ба шалгалтын нийлмэл бодлогууд.',
        mentorTip: 'Current ratio 1.5 - 2.0 хооронд байвал тухайн компани богино хугацааны өрөө төлөх бүрэн чадвартайг илтгэнэ.'
      }
    ],
    usefulWebsites: [
      {
        id: 'accountingcoach-free',
        title: 'AccountingCoach - 100% Free Complete Accounting Guide & Quizzes',
        url: 'https://www.accountingcoach.com/',
        category: 'interactive',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй бүх хичээлүүд, тестүүд, флаш картууд',
        description: 'Дэлхийн хамгийн алдартай, ойлгомжтой үнэгүй нягтлан бодох бүртгэлийн сургалтын сан. Сэдэв бүрээр дасгал, бодлоготой.',
        bestFor: 'Дебет, кредитийн бүх бичилтүүдийг алхам алхмаар шалгаж сурах',
        mentorTip: 'Шалгалтын өмнө энд байгаа "Accounting Practice Quizzes"-ийг хийвэл семестрийн шалгалтандаа 95+ авах нь баталгаатай!'
      },
      {
        id: 'cfi-free-accounting',
        title: 'Corporate Finance Institute (CFI) - Free Accounting Fundamentals',
        url: 'https://corporatefinanceinstitute.com/resources/accounting/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй нээлттэй сургалт & Сертификаттай',
        description: 'Уолл Стритийн шинжээчдийн түвшний баланс, орлогын тайлан, Excel дээр тайлан бэлтгэх албан ёсны үнэгүй сургалт.',
        bestFor: 'Санхүүгийн тайлангуудыг Excel дээр холбож сурах',
        mentorTip: 'CFI-ийн үнэгүй "Accounting Fundamentals" сертификат нь санхүү, нягтлангийн оюутны хамгийн сайн эхлэл болдог.'
      },
      {
        id: 'wave-accounting-tool',
        title: 'Wave Accounting - Үнэгүй жижиг бизнесийн бүртгэлийн систем',
        url: 'https://www.waveapps.com/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй програм хангамж',
        description: 'Журналын бичилт, нэхэмжлэх, тайлан гаргах бодит бүртгэлийн програм. Оюутнууд үнэгүй туршиж үзэхэд төгс тохирно.',
        bestFor: 'Бодит нягтлан бодох бүртгэлийн програм дээр гүйлгээ шивж үзэх',
        mentorTip: 'Төсөл хийхдээ үнэгүй Wave аккаунт нээгээд хийсвэр компанийнхаа журналын бичилтийг хийж үзээрэй.'
      }
    ],
    readingMaterials: [
      {
        id: 'acct-book-1',
        title: 'Санхүүгийн нягтлан бодох бүртгэл',
        author: 'СЭЗИС-ийн Нягтлан бодох бүртгэлийн тэнхим',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монгол Улсад мөрдөгдөж буй СТОУС, дансны нэгдсэн төлөвлөгөө, санхүүгийн тайлангийн стандартуудыг тусгасан үндсэн сурах бичиг.',
        format: 'Ном',
        keyChapters: ['3-р бүлэг: Ажил гүйлгээний бүртгэл', '7-р бүлэг: Санхүүгийн тайлан бэлтгэх аргачлал']
      },
      {
        id: 'acct-book-2',
        title: 'Financial Accounting (OpenStax Free Textbook)',
        author: 'OpenStax Rice University',
        type: 'guide',
        level: 'Дунд шат',
        description: 'АНУ-ын Райс их сургуулийн бүрэн үнэгүй, дасгал бодлоготой санхүүгийн бүртгэлийн сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 2: Analyzing and Recording Transactions', 'Chapter 4: Completing the Accounting Cycle']
      }
    ],
    researchSources: [
      {
        id: 'ifrs-foundation',
        title: 'IFRS Foundation - Official Standards & Guidance',
        sourceName: 'International Financial Reporting Standards',
        searchQuery: 'IFRS standards IAS 1 financial statements presentation',
        directUrl: 'https://www.ifrs.org/',
        suggestedTopics: ['Монголын ААН-үүдийн СТОУС-д шилжсэн туршлага ба тулгамдаж буй асуудал', 'Түрээсийн бүртгэлийн шинэчлэгдсэн стандарт (IFRS 16)'],
        citationGuidance: 'IFRS Foundation (2024). International Financial Reporting Standards. London.'
      }
    ],
    practiceQuestions: [
      {
        id: 'acct-q1',
        question: 'Компани 5,000,000 төгрөгийн компьютер бэлэн мөнгөөр худалдаж авсан бол балансын тэгшитгэлд ямар өөрчлөлт орох вэ?',
        options: [
          'Хөрөнгө 5 саяар өсөж, Өр төлбөр 5 саяар өснө',
          'Нэг хөрөнгө (Тоног төхөөрөмж) 5 саяар өсөж, нөгөө хөрөнгө (Бэлэн мөнгө) 5 саяар буурч нийт хөрөнгийн дүн өөрчлөгдөхгүй',
          'Эздийн өмч 5 саяар буурна',
          'Өр төлбөр 5 саяар буурна'
        ],
        correctIndex: 1,
        explanation: 'Гайхалтай нягтлан бодогч байна шүү, найз минь! Компьютер гэдэг хөрөнгө орж ирээд (+5 сая), Бэлэн мөнгө гэдэг хөрөнгө гарсан тул (-5 сая) нийт Хөрөнгийн дүн тэнцүү хэвээрээ үлддэг юм.'
      }
    ],
    studyTips: [
      'Дебет, Кредитийн дүрмийг тогтоохдоо "Мөнгө эсвэл үнэ цэн хаашаа орсон бэ? (Дебет) Хаанаас гарсан бэ? (Кредит)" гэж өөрөөсөө асуу.',
      'AccountingCoach сайт дээр өдөрт 15 минут тест бөглө.',
      'Тоо бодохдоо үргэлж тэгшитгэл хоёр талдаа тэнцэж буй эсэхийг алхам тутамдаа шалгаж хэвшээрэй.'
    ]
  },

  // 8. Олон улсын худалдаа (Хиймэл оюун ухаан /AI/ хосолсон)
  {
    id: 'intl-trade-ai',
    code: 'TRADE201',
    title: 'Олон улсын худалдаа (Хиймэл оюун ухаан /AI/ хосолсон)',
    englishTitle: 'International Trade, Global Logistics & AI Market Intelligence',
    faculty: 'ai_business',
    category: 'Олон улсын худалдаа & AI',
    level: '2-3-р курс',
    overview: 'Дэлхийн худалдааны онолууд (Харьцангуй давуу тал), Incoterms 2020 дүрэм, гааль, тариф ба тарифын бус саад тотгор, төлбөр тооцооны арга (L/C), олон улсын тээвэр логистик болон хиймэл оюун ухаан ашиглан дэлхийн экспортын зах зээл, үнийн таамаглал хийх нь.',
    mentorGreeting: 'Сайн уу найз минь! Дэлхий ертөнц худалдаагаар холбогддог. Монгол улсын эрдэс баялаг, ноолуур, мах дэлхийн зах зээлд хэрхэн гардаг, олон улсын Incoterms дүрэм хэрхэн эрсдэлийг хуваарилдаг, AI ашиглан гадаад худалдан авагчдыг хэрхэн олохыг энд хоёулаа эзэмших болно!',
    mentorTip: 'Incoterms 2020 дүрмийн FOB (Free on Board) болон CIF (Cost, Insurance and Freight)-ийн ялгааг нүдэлж авбал шалгалтын худалдааны бодлогуудыг төвөггүй бодно шүү!',
    hardSkills: [
      'Incoterms 2020 худалдааны нөхцөлүүдийг гэрээнд хэрэглэх (FOB, CIF, DDP)',
      'Дэлхийн худалдааны ITC TradeMap.org өгөгдлийг шинжлэх',
      'Экспорт, импортын гаалийн бүрдүүлэлтийн бичиг баримт (B/L, Invoice, Packing List)',
      'Аккредитив (Letter of Credit - L/C) төлбөр тооцооны схемийг ойлгох',
      'AI ашиглан гадаад зах зээлийн өрсөлдөгчдийн үнэ, эрэлтийн судалгаа хийх'
    ],
    softSkills: [
      'Олон үндэстний бизнесийн хэлэлцээр (Cross-Cultural Negotiation)',
      'Дэлхийн геополитикийн мэдрэмж (Geopolitical Awareness)',
      'Стратегийн дасан зохицох чадвар (Strategic Global Agility)',
      'Эрсдэлийг урьдчилан тооцоолох (Logistics Risk Anticipation)',
      'Олон улсын бизнесийн харилцааны өндөр ёс зүй'
    ],
    keyLearningOutcomes: [
      'Рикардогийн харьцангуй давуу талын онол болон Хекшер-Олины загварыг тайлбарлах',
      'Incoterms 2020 дүрмийн дагуу худалдагч ба худалдан авагчийн зардал, эрсдэлийн шилжих цэгийг тодорхойлох',
      'Олон улсын худалдааны төлбөр тооцооны хэрэгслүүдийн эрсдэлийг үнэлэх',
      'TradeMap болон хиймэл оюун ухааны эх сурвалжуудыг ашиглан Монгол бүтээгдэхүүний экспортын шинэ зах зээлийг тодорхойлох'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Олон улсын худалдааны сонгодог ба орчин үеийн онолууд',
        keyConcepts: ['Absolute vs Comparative Advantage', 'Heckscher-Ohlin Model', 'Даяаршил ба ДХБ (WTO)'],
        summary: 'Улс орнууд яагаад хоорондоо худалдаа хийдэг, харьцангуй бага зардлаар үйлдвэрлэх давуу талын үндэс.',
        mentorTip: 'Давидын Рикардогийн Англи, Португалийн дарс ба даавууны жишээг сайн уншаарай.'
      },
      {
        week: '4-6',
        title: 'Incoterms 2020 дүрэм ба Эрсдэлийн шилжилт',
        keyConcepts: ['EXW, FCA, FOB, CFR, CIF, DDP', 'Зардлын шилжилт', 'Эрсдэлийн шилжилт', 'Тээврийн баримтууд'],
        summary: 'Олон улсын худалдааны танхимын (ICC) 11 дүрэм, бараа хэзээ худалдан авагчийн хариуцлагад очих механизм.',
        mentorTip: 'FOB дээр усан онгоцон дээр ачигдмагц эрсдэл худалдан авагчид шилждэг дүрмийг тогтоо.'
      },
      {
        week: '7-9',
        title: 'Олон улсын төлбөр тооцоо ба Баталгаа (L/C)',
        keyConcepts: ['Letter of Credit (L/C)', 'UCP 600', 'Cash in Advance', 'Open Account', 'валютын ханшийн эрсдэл'],
        summary: 'Худалдагч ба худалдан авагчийн итгэлцлийг банкоор баталгаажуулах Аккредитив ба гадаад валютын хамгаалалт.',
        mentorTip: 'L/C-ийн 4 талт схемийг (Худалдагч, Худалдан авагч, Нээгч банк, Зөвлөгч банк) зураад үзээрэй.'
      },
      {
        week: '10-12',
        title: 'Дэлхийн худалдааны өгөгдлийн шинжилгээ & AI Market Intelligence',
        keyConcepts: ['ITC TradeMap', 'HS Code систем', 'AI-аар гадаад зах зээлийн эрэлт таамаглах', 'Тариф ба Квот'],
        summary: 'HS Кодоор дэлхийн экспорт, импортын статистикийг TradeMap дээр шүүж шинэ зах зээлийг илрүүлэх.',
        mentorTip: 'HS 6 оронтой код нь дэлхий даяар яг адилхан байдаг тул бүтээгдэхүүнээ HS кодоор хайж сураарай.'
      },
      {
        week: '13-16',
        title: 'Олон улсын тээвэр логистик ба Экспортын төсөл',
        keyConcepts: ['Container shipping', 'Multimodal transport', 'Гаалийн бүрдүүлэлт', 'Экспортын төслийн танилцуулга'],
        summary: 'Далайн, төмөр замын болон агаарын тээврийн логистик, Тяньжин боомтын гарц ба төгсгөлийн экспортын төсөл.',
        mentorTip: 'Монголын экспортод тулгардаг логистикийн сорилтыг дурдаад түүнийг шийдэх гарц дэвшүүлээрэй.'
      }
    ],
    usefulWebsites: [
      {
        id: 'trademap-free',
        title: 'ITC TradeMap (Дэлхийн худалдааны НҮБ-ын албан ёсны үнэгүй сан)',
        url: 'https://www.trademap.org/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй бүртгэл',
        description: 'Дэлхийн 220 орон, 5300 бүтээгдэхүүний импорт, экспортын бодит урсгал, тарифын өгөгдлийг интерактив харуулдаг сан.',
        bestFor: 'Монголын бүтээгдэхүүн дэлхийн аль улс руу хамгийн их экспортлогдож байгааг бодитоор харах',
        mentorTip: 'Үнэгүй бүртгүүлээд Монголын HS кодоор хайлт хийж графикийг нь бие даалтын ажилдаа шууд оруулаарай!'
      },
      {
        id: 'wto-elearning-free',
        title: 'World Trade Organization (WTO) e-Learning (ДХБ-ын үнэгүй сургалтууд)',
        url: 'https://wtoecampus.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй сургалтууд & Албан ёсны ДХБ сертификат',
        description: 'Дэлхийн Худалдааны Байгууллагын албан ёсны тариф, худалдааны маргаан, гаалийн хөнгөлөлтийн курсүүд.',
        bestFor: 'ДХБ-ын албан ёсны сертификаттай болох, худалдааны эрх зүйг сурах',
        mentorTip: 'ДХБ-ын сертификат нь олон улсын байгууллага, дипломат алба, гадаад худалдааны компанид үнэлэгддэг.'
      },
      {
        id: 'itc-sme-academy',
        title: 'ITC SME Trade Academy (Олон улсын худалдааны төвийн үнэгүй курсүүд)',
        url: 'https://learning.intracen.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй & Батламж олгодог',
        description: 'Экспортын бэлэн байдал, логистик, олон улсын гэрээ байгуулах тухай жижиг дунд бизнест зориулсан үнэгүй курсүүд.',
        bestFor: 'Экспорт хийх практик алхмуудыг эхнээс нь дуустал сурахад',
        mentorTip: 'Incoterms болон Экспортын логистикийн богино курсийг эндээс аваад батламжаа аваарай.'
      }
    ],
    readingMaterials: [
      {
        id: 'trade-book-1',
        title: 'Олон улсын худалдаа ба төлбөр тооцоо',
        author: 'МУИС, СЭЗИС-ийн Олон улсын худалдааны багш нар',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монголын гадаад худалдааны бодлого, Incoterms дүрмийн хэрэглээ, гаалийн бүрдүүлэлтийг багтаасан сурах бичиг.',
        format: 'Ном',
        keyChapters: ['2-р бүлэг: Incoterms 2020 дүрэм', '5-р бүлэг: Аккредитив ба гадаад төлбөр тооцоо']
      },
      {
        id: 'trade-book-2',
        title: 'International Trade: Theory and Policy',
        author: 'Paul R. Krugman, Maurice Obstfeld, Marc Melitz',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Нобелийн шагналт Пол Кругманы дэлхийн олон улсын худалдааны суурь сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 3: Labor Productivity and Comparative Advantage', 'Chapter 9: The Instruments of Trade Policy']
      }
    ],
    researchSources: [
      {
        id: 'trade-res-1',
        title: 'Монголбанк & Гаалийн Ерөнхий Газар - Гадаад худалдааны статистик',
        sourceName: 'Mongolbank & Customs Administration',
        searchQuery: 'Монгол Улсын гадаад худалдааны тэнцэл экспорт импорт барааны бүтэц',
        directUrl: 'https://www.mongolbank.mn/',
        suggestedTopics: ['Монгол Улсын уул уурхайн бус бүтээгдэхүүний экспортыг дэмжих боломж', 'БНХАУ болон бусад орнуудтай хийж буй худалдааны тэнцэл'],
        citationGuidance: 'Krugman, P. R., Obstfeld, M., & Melitz, M. (2022). International Trade. Pearson.'
      }
    ],
    practiceQuestions: [
      {
        id: 'trade-q1',
        question: 'Incoterms 2020 дүрмийн "FOB" (Free on Board) нөхцөлд ачааны эрсдэл хэзээ худалдан авагчид шилждэг вэ?',
        options: [
          'Худалдагчийн үйлдвэрийн хаалганаас гарах үед',
          'Ачаа ачих боомтод усан онгоцны тавцан дээр бүрэн ачигдсан мөчид',
          'Худалдан авагчийн улсын боомтод ирсний дараа',
          'Худалдан авагч мөнгөө бүрэн төлсний дараа'
        ],
        correctIndex: 1,
        explanation: 'Төгс зөв хариуллаа, найз минь! FOB (Free on Board) нөхцөлд худалдагч барааг усан онгоцон дээр ачиж дуусмагц эрсдэл болон тээврийн зардал худалдан авагчийн талд шилждэг.'
      }
    ],
    studyTips: [
      'Incoterms-ийн 11 дүрмийг "Хэн тээврийг төлөх вэ? Хэн эрсдэл хариуцах вэ?" гэсэн 2 баганаар зураглаж цээжил.',
      'TradeMap.org руу ороод өөрийн сонирхдог барааны (жишээ нь ноолуур) кодыг олоод дэлхийн хэн авч байгааг хар.',
      'Монголын гадаад худалдааны тэнцэл яагаад ашигтай эсвэл алдагдалтай гардгийн учир шалтгааныг тоонууд дээрээс харж дүгнэ.'
    ]
  },

  // 9. Санхүү / Банк
  {
    id: 'fin-bank',
    code: 'FIN201',
    title: 'Санхүү / Банк',
    englishTitle: 'Corporate Finance, Banking Operations & Money Markets',
    faculty: 'business',
    category: 'Санхүү, Банк & Даатгал',
    level: '2-3-р курс',
    overview: 'Мөнгөний цаг хугацааны үнэ цэн (TVM), хүүгийн онол, арилжааны банкны үйл ажиллагаа (зээл, хадгаламж, төлбөр тооцоо), Монголбанкны мөнгөний бодлого, хөрөнгө оруулалтын үнэлгээ (NPV, IRR) болон санхүүгийн зах зээлийг судална.',
    mentorGreeting: 'Сайн уу найз минь! Санхүү бол дэлхийн хамгийн том тоглоом. Өнөөдрийн 1000 төгрөг яагаад маргаашийн 1000 төгрөгөөс илүү үнэ цэнтэй байдаг вэ? Банкууд хэрхэн мөнгө бүтээдэг вэ? Энэ бүх нууцыг хоёулаа математик болон бодит банкны кейсээр сурах болно!',
    mentorTip: 'NPV (Цэвэр Өнөөгийн Үнэ Цэн) > 0 байвал хөрөнгө оруулалтыг хийх ёстой гэдэг алтан дүрмийг хэзээ ч бүү март!',
    hardSkills: [
      'Мөнгөний цаг хугацааны үнэ цэнийг тооцоолох (PV, FV, Annuity)',
      'Хөрөнгө оруулалтын төслийн үр ашиг үнэлэх (NPV, IRR, Payback Period)',
      'Зээлийн судалгаа & Зээлжих чадварын үнэлгээ (Credit Scoring & 5Cs of Credit)',
      'Excel дээр зээлийн эргэн төлөлтийн хуваарь (Amortization Schedule) гаргах',
      'Банкны санхүүгийн харьцаанууд тооцох (CAMELS үнэлгээний үндэс)'
    ],
    softSkills: [
      'Санхүүгийн ёс зүй & Найдвартай байдал (Fiduciary Responsibility)',
      'Аналитик сэтгэлгээ (Analytical Rigor)',
      'Харилцагчийн санхүүгийн хэрэгцээг ойлгох (Client Financial Counseling)',
      'Эрсдэл ба өгөөжийн тэнцвэрийг мэдрэх (Risk-Reward Intuition)',
      'Тоон өгөгдлийг энгийнээр тайлбарлах (Financial Communication)'
    ],
    keyLearningOutcomes: [
      'Хүүгийн хүүгийн хүчийг ашиглан ирээдүйн ба өнөөгийн үнэ цэнийг бодох',
      'Арилжааны банкуудын актив, пассивын бүтэц болон заавал байлгах нөөцийн түвшнийг тайлбарлах',
      'ААН-үүдийн хөрөнгө оруулалтын шийдвэрт NPV, IRR үзүүлэлтээр үнэлэлт дүгнэлт өгөх',
      'Төв банкны бодлогын хүүгийн өөрчлөлт инфляц ба зээлийн хүүд хэрхэн нөлөөлдгийг шинжлэх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Санхүүгийн системийн үндэс ба Мөнгөний цаг хугацааны үнэ цэн',
        keyConcepts: ['Time Value of Money (TVM)', 'Present Value (PV)', 'Future Value (FV)', 'Annuity'],
        summary: 'Мөнгөний цаг хугацааны үнэ цэн, нийлмэл хүүгийн тооцоолол, инфляцын нөлөө.',
        mentorTip: 'Excel дээр =PV(), =FV(), =PMT() функцуудыг өнөөдөр л ашиглаж үзээрэй.'
      },
      {
        week: '4-6',
        title: 'Арилжааны банкны үйл ажиллагаа ба Зээлийн шинжилгээ',
        keyConcepts: ['Актив ба Пассив', '5Cs of Credit', 'Зээлийн эрсдэл', 'Хадгаламжийн даатгал'],
        summary: 'Банкны орлогын бүтэц (цэвэр хүүгийн маржин NIM), зээлдэгчийн чадавхыг үнэлэх 5C зарчим.',
        mentorTip: '5Cs of Credit: Character, Capacity, Capital, Collateral, Conditions гэдгийг цээжлээрэй.'
      },
      {
        week: '7-9',
        title: 'Хөрөнгө оруулалтын төсвийн үнэлгээ (Capital Budgeting)',
        keyConcepts: ['NPV (Net Present Value)', 'IRR (Internal Rate of Return)', 'WACC', 'Нөхөх хугацаа'],
        summary: 'Компанийн урт хугацааны төслүүдийн ирээдүйн мөнгөн урсгалыг дисконтчилж ашигт ажиллагааг үнэлэх.',
        mentorTip: 'NPV болон IRR зөрчилдвөл үргэлж NPV-ийн шийдвэрийг дагадаг шүү.'
      },
      {
        week: '10-12',
        title: 'Төв банк ба Мөнгөний бодлогын хэрэгслүүд',
        keyConcepts: ['Бодлогын хүү', 'Заавал байлгах нөөц', 'Нээлттэй зах зээлийн үйл ажиллагаа', 'Инфляцын онилолт'],
        summary: 'Монголбанк эдийн засаг дахь мөнгөний нийлүүлэлтийг хэрхэн удирддаг ба валютын ханшийн зохицуулалт.',
        mentorTip: 'Монголбанкны бодлогын хүү өсөхөд зээлийн хүү өсөж, хадгаламж нэмэгддэг зүй тогтлыг ойлгоорой.'
      },
      {
        week: '13-16',
        title: 'Банкны зохицуулалт, Базелийн стандарт ба Төгсгөлийн шалгалт',
        keyConcepts: ['Basel III', 'Өөрийн хөрөнгийн хүрэлцээ (CAR)', 'Чанаргүй зээл (NPL)', 'Санхүүгийн кейс'],
        summary: 'Банкуудын эрсдэл даах чадвар, чанаргүй зээлийн эрсдэлийн сан ба төгсгөлийн тооцоот шалгалт.',
        mentorTip: 'Өөрийн хөрөнгийн хүрэлцээ (CAR) яагаад 12%-иас дээш байх ёстойг шалгалтад заавал асуудаг.'
      }
    ],
    usefulWebsites: [
      {
        id: 'khan-finance-free',
        title: 'Khan Academy - Finance and Capital Markets (100% Үнэгүй санхүүгийн хичээлүүд)',
        url: 'https://www.khanacademy.org/economics-finance-domain/core-finance',
        category: 'interactive',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй дэлхийн санхүүгийн платформ',
        description: 'Хүү, бонд, хувьцаа, банкны үйл ажиллагаа, төв банкны мөнгөний бодлогын талаарх Сал Ханы дэлхийд хамгийн их үзэгдсэн энгийн видео тайлбарууд.',
        bestFor: 'Мөнгөний цаг хугацааны үнэ цэн, банкны механизмыг хялбараар ойлгох',
        mentorTip: 'Сал Хан энэ сэдвүүдийг маш энгийнээр зурж тайлбарладаг тул ойлгоход ямар ч хүндрэл гарахгүй.'
      },
      {
        id: 'cfi-free-resources',
        title: 'Corporate Finance Institute (CFI) - Free Financial Calculators & Excel Templates',
        url: 'https://corporatefinanceinstitute.com/resources/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Үнэгүй загварууд & Нийтлэлүүд',
        description: 'Excel дээр NPV, IRR, Зээлийн хуваарь бодох бэлэн загварууд, санхүүгийн загварчлалын үнэгүй гарын авлагууд.',
        bestFor: 'Хичээлийн тооцоот бодлогуудыг Excel дээр хурдан шалгах',
        mentorTip: 'CFI-ийн бэлэн Excel загваруудыг татаж аваад өөрийнхөө бодлогын тоонуудыг оруулан шалгаарай.'
      },
      {
        id: 'mongolbank-free-data',
        title: 'Монголбанк - Статистик өгөгдөл & Мөнгөний бодлогын тойм',
        url: 'https://www.mongolbank.mn/mn/statistic',
        category: 'documentation',
        language: 'MN',
        isFree: true,
        freeTierNote: '100% Үнэгүй нээлттэй өгөгдөл',
        description: 'Монгол Улсын банкуудын зээл, хадгаламжийн хүү, инфляц, бодлогын хүү, валютын ханшийн өдөр тутмын бодит өгөгдөл.',
        bestFor: 'Бие даалт ба судалгааны ажилд Монголын бодит банкны статистикийг ашиглахад',
        mentorTip: 'Монголбанкны статистик мэдээллийн сангаас Excel файл татаж аваад график байгуулбал өндөр үнэлэгдэнэ.'
      }
    ],
    readingMaterials: [
      {
        id: 'fin-book-1',
        title: 'Байгууллагын санхүүгийн удирдлага',
        author: 'СЭЗИС-ийн Санхүүгийн тэнхимийн хамт олон',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монголын санхүүгийн зах зээл, банкны систем, мөнгөний цаг хугацааны үнэ цэн, хөрөнгө оруулалтын шийдвэрийг заадаг үндсэн сурах бичиг.',
        format: 'Ном',
        keyChapters: ['4-р бүлэг: Мөнгөний цаг хугацааны үнэ цэн', '9-р бүлэг: Хөрөнгө оруулалтын төсөвлөлт']
      },
      {
        id: 'fin-book-2',
        title: 'Principles of Corporate Finance',
        author: 'Richard A. Brealey, Stewart C. Myers, Franklin Allen',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Дэлхийн санхүүчдийн "Библи" гэгддэг корпорацын санхүүгийн сонгодог сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 2: How to Calculate Present Values', 'Chapter 5: Net Present Value and Other Investment Criteria']
      }
    ],
    researchSources: [
      {
        id: 'fin-res-1',
        title: 'Монголын Банкны Холбоо (МБХ) - Судалгааны тайлан',
        sourceName: 'Mongolian Bankers Association',
        searchQuery: 'Монголын банкны салбарын тойм активын чанар зээлийн хүү',
        directUrl: 'https://mba.mn/',
        suggestedTopics: ['Банкны салбарын дижитал шилжилт ба финтек компаниудын өрсөлдөөн', 'Ногоон санхүүжилтийн өнөөгийн байдал'],
        citationGuidance: 'Brealey, R. A., Myers, S. C., & Allen, F. (2020). Principles of Corporate Finance. McGraw-Hill.'
      }
    ],
    practiceQuestions: [
      {
        id: 'fin-q1',
        question: 'Хэрэв жилийн хүү 10% бол өнөөдрийн 10,000,000 төгрөг 2 жилийн дараа нийлмэл хүүгээр хэд болох вэ?',
        options: [
          '11,000,000₮',
          '12,000,000₮',
          '12,100,000₮',
          '10,200,000₮'
        ],
        correctIndex: 2,
        explanation: 'Төгс тооцоолол, найз минь! Нийлмэл хүүгийн томьёо: FV = PV x (1 + r)^n = 10,000,000 x (1.10)^2 = 10,000,000 x 1.21 = 12,100,000₮ болно. Нэмэлт 100,000 төгрөг нь "Хүүгээс бодогдсон хүү" юм шүү!'
      }
    ],
    studyTips: [
      'Excel дээр =NPV() болон =IRR() томьёог өөрийн зохиосон 5 тоон дээр ажиллуулж турш.',
      'Монголбанкны бодлогын хүүгийн мэдэгдлийг улирал бүр уншиж зах зээлийн хөдөлгөөнийг ажигла.',
      'Төслийн хөрөнгө оруулалтыг үнэлэхдээ зөвхөн ашиг биш, хэзээ мөнгөө нөхөх вэ (Payback period) гэдгийг хамт хар.'
    ]
  },

  // 10. Санхүүгийн манлайлал (Хиймэл оюун ухаан /AI/ хосолсон)
  {
    id: 'fin-lead-ai',
    code: 'FIN401',
    title: 'Санхүүгийн манлайлал (Хиймэл оюун ухаан /AI/ хосолсон)',
    englishTitle: 'Financial Leadership, Strategic CFO Decisions & AI Analytics',
    faculty: 'ai_business',
    category: 'Санхүү, Банк & AI',
    level: '3-4-р курс',
    overview: 'Санхүүгийн захирлын (CFO) стратегийн сэтгэлгээ, компанийн үнэ цэнийг өсгөх засаглал, M&A (нэгдэх, нийлэх), хөрөнгийн бүтцийн оновчлол, эрсдэлийн удирдлага болон AI санхүүгийн таамаглалын загварууд (Predictive Financial Modeling).',
    mentorGreeting: 'Сайн уу найз минь! Санхүүгийн манлайлал бол зүгээр л тоо бүртгэх тухай биш, харин ирээдүйн 5 жилд компани хаашаа явах, хаана хөрөнгө оруулахыг залдаг Санхүүгийн захирлын (CFO) алсын хараа юм. AI ашиглан санхүүгийн таамаглал дэвшүүлж, том хөрөнгө оруулагчдад илтгэл тавих урлагт хоёулаа суралцана!',
    mentorTip: 'CFO хүн үргэлж компанийн WACC (Хөрөнгийн жигнэсэн дундаж өртөг)-ийг бууруулж, ROIC (Оруулсан хөрөнгийн өгөөж)-ийг өсгөх тухай боддог!',
    hardSkills: [
      'Стратегийн санхүүгийн загварчлал (3-Statement Financial Modeling in Excel)',
      'Компанийн үнэлгээ хийх (DCF - Discounted Cash Flow, Multiples Valuation)',
      'AI ашиглан санхүүгийн таамаглал хийх (Predictive Scenario Analysis)',
      'M&A (Компани нэгтгэх, худалдан авах) шинжилгээ',
      'Хөрөнгө оруулагчдад зориулсан санхүүгийн Pitch Deck танилцуулах'
    ],
    softSkills: [
      'Гүйцэтгэх удирдлагын манлайлал (Executive Leadership)',
      'Стратегийн итгэл үнэмшил & Нөлөөлөл (Influence & Persuasion in Boardroom)',
      'Санхүүгийн өндөр хариуцлага & Ёс зүй (Governance & Ethical Steward)',
      'Хямралын үеийн санхүүгийн тогтвортой байдал (Resilience under crisis)',
      'Хөрөнгө оруулагчидтай итгэлцэл тогтоох харилцаа'
    ],
    keyLearningOutcomes: [
      'Компанийн үнэ цэнийг тооцоолох DCF загварыг Excel дээр боловсруулах',
      'Өр болон өөрийн хөрөнгийн оновчтой бүтцийг (Modigliani-Miller) тодорхойлох',
      'Хиймэл оюун ухааны алгоритмуудыг санхүүгийн эрсдэл, зээлийн үнэлгээнд ашиглах төлөвлөгөө гаргах',
      'Удирдах зөвлөлд санхүүгийн стратеги, хөрөнгийн хуваарилалтын шийдвэрийг мэргэжлийн түвшинд танилцуулах'
    ],
    modules: [
      {
        week: '1-3',
        title: 'CFO-ийн үүрэг ба Стратегийн санхүүгийн манлайлал',
        keyConcepts: ['CFO as Strategic Partner', 'Shareholder Value Creation', 'ROIC vs WACC', 'Хөрөнгийн бүтэц'],
        summary: 'Санхүүгийн удирдагчийн сэтгэлгээ, өртөг танах биш үнэ цэн бүтээх стратегиуд.',
        mentorTip: 'ROIC > WACC байж л компани үнэ цэн бүтээж байдаг гэдгийг тогтоо.'
      },
      {
        week: '4-6',
        title: 'Компанийн үнэлгээ (Valuation) ба DCF загварчлал',
        keyConcepts: ['Discounted Cash Flow (DCF)', 'Free Cash Flow to Firm (FCFF)', 'Terminal Value', 'WACC'],
        summary: 'Ирээдүйн чөлөөт мөнгөн урсгалыг дисконтчилж компанийн бодит үнэ цэнийг олох загварчлал.',
        mentorTip: 'Терминал үнэ цэн (Terminal Value) нь нийт компанийн үнэлгээний 60-80%-ийг бүрдүүлдэг.'
      },
      {
        week: '7-9',
        title: 'M&A (Нэгдэх ба Худалдан авалт) ба Корпорацын засаглал',
        keyConcepts: ['Synergy үнэлгээ', 'Due Diligence', 'Хувьцааны бүтцийн өөрчлөлт', 'Board Governance'],
        summary: 'Компаниудыг нэгтгэх үеийн синерги үр ашиг, санхүүгийн нарийвчилсан шалгалт (Due Diligence).',
        mentorTip: 'Due Diligence хийхдээ баланс дээр тусгагдаагүй өр төлбөрүүдийг хамгийн түрүүнд шалгадаг.'
      },
      {
        week: '10-12',
        title: 'Хиймэл оюун ба Санхүүгийн урьдчилан таамаглал (AI FinTech)',
        keyConcepts: ['Automated Forecasting', 'Anomaly Detection', 'Robo-advising', 'Monte Carlo Simulation'],
        summary: 'Санхүүгийн тайлангийн хуурамч бичилтийг AI-аар илрүүлэх, Монте-Карло симуляциар магадлалт таамаг дэвшүүлэх.',
        mentorTip: 'Monte Carlo симуляцийг Excel дээр үнэгүй нэмэлт өргөтгөлөөр туршиж болдог.'
      },
      {
        week: '13-16',
        title: 'Хямралын санхүүгийн удирдлага ба Стратеги хамгаалалт',
        keyConcepts: ['Liquidity Crisis Management', 'Debt Restructuring', 'Investor Relations', 'Final CFO Pitch'],
        summary: 'Мөнгөн урсгалын гэнэтийн хомсдолд авах арга хэмжээ, удирдах зөвлөлд санхүүгийн стратегиа хамгаалах.',
        mentorTip: 'Төгсгөлийн хамгаалалтдаа CFO шиг костюм өмсөөд 3 гол санхүүгийн мессеж дээрээ төвлөрч илтгээрэй!'
      }
    ],
    usefulWebsites: [
      {
        id: 'damodaran-online-free',
        title: 'Aswath Damodaran Online (Нью-Йоркийн их сургуулийн үнэгүй үнэлгээний хичээлүүд)',
        url: 'https://pages.stern.nyu.edu/~adamodar/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Бүрэн үнэгүй NYU хичээлүүд & Дата сан',
        description: 'Уолл Стритийн "Үнэлгээний декан" гэгддэг профессор Дамодараны бүх лекц, Excel үнэлгээний файлууд, салбарын бета өгөгдөл.',
        bestFor: 'Компанийн үнэлгээ (Valuation, DCF) хийх Excel загваруудыг үнэгүй татаж авах',
        mentorTip: 'Дамодараны бэлэн Excel загваруудыг ашиглан компани үнэлбэл аль ч багш А үнэлгээ тавина.'
      },
      {
        id: 'cfi-cfo-pathway',
        title: 'CFI - Financial Leadership & Strategy Guides',
        url: 'https://corporatefinanceinstitute.com/resources/management/',
        category: 'documentation',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй гарын авлагууд',
        description: 'Санхүүгийн захирлын стратегийн шийдвэр, хөрөнгийн хуваарилалт, манлайллын ур чадварын нээлттэй эмхэтгэл.',
        bestFor: 'CFO түвшний сэтгэлгээ ба удирдлагын зөвлөмжүүдийг унших',
        mentorTip: 'Энд байгаа "CFO vs Controller" нийтлэлийг уншиж манлайллын ялгааг нь ойлгоорой.'
      },
      {
        id: 'fred-economic-free',
        title: 'FRED (Federal Reserve Economic Data) - Дэлхийн макро эдийн засгийн үнэгүй өгөгдөл',
        url: 'https://fred.stlouisfed.org/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй АНУ-ын Төв банкны өгөгдлийн сан',
        description: 'Дэлхийн хүүгийн түвшин, инфляц, макро эдийн засгийн 800,000 гаруй цуврал өгөгдлийг нэгтгэсэн сан.',
        bestFor: 'Хөрөнгийн өртөг (WACC), эрсдэлгүй хүүгийн түвшинг үнэн зөв сонгоход',
        mentorTip: 'Risk-free rate (Эрсдэлгүй хүү)-ийн хувьд FRED-ээс 10 жилийн АНУ-ын Засгийн газрын бондын хүүг эш татаарай.'
      }
    ],
    readingMaterials: [
      {
        id: 'finlead-book-1',
        title: 'Санхүүгийн манлайлал ба Үнэ цэнийн удирдлага',
        author: 'СЭЗИС-ийн Ахисан түвшний сургалтын хөтөлбөр',
        type: 'textbook',
        level: 'Гүнзгийрүүлсэн',
        description: 'Байгууллагын санхүүгийн захирлын түвшний стратегийн шийдвэр гаргалт, үнэлгээ, хөрөнгийн бүтцийн сурах бичиг.',
        format: 'Ном',
        keyChapters: ['5-р бүлэг: Компанийн үнэлгээний арга зүй', '8-р бүлэг: M&A ба санхүүгийн бүтцийн өөрчлөлт']
      },
      {
        id: 'finlead-book-2',
        title: 'Valuation: Measuring and Managing the Value of Companies',
        author: 'McKinsey & Company (Tim Koller, Marc Goedhart, David Wessels)',
        type: 'guide',
        level: 'Гүнзгийрүүлсэн',
        description: 'МакКинзигийн дэлхийд хүлээн зөвшөөрөгдсөн санхүүгийн үнэлгээ ба үнэ цэнийн удирдлагын сонгодог бүтээл.',
        format: 'PDF',
        keyChapters: ['Chapter 2: Why Value Value?', 'Chapter 6: Frameworks for Valuation']
      }
    ],
    researchSources: [
      {
        id: 'mckinsey-finance',
        title: 'McKinsey on Finance (МакКинзигийн санхүүгийн судалгааны сэтгүүл)',
        sourceName: 'McKinsey & Company',
        searchQuery: 'CFO strategy corporate finance generative AI trends',
        directUrl: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights',
        suggestedTopics: ['Хиймэл оюун ухаан санхүүгийн захирлын ажлын байрыг хэрхэн өөрчилж буй нь', 'Компанийн үнэ цэнийг өсгөх стратеги'],
        citationGuidance: 'Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation. McKinsey & Company.'
      }
    ],
    practiceQuestions: [
      {
        id: 'finlead-q1',
        question: 'Компанийн оруулсан хөрөнгийн өгөөж (ROIC) 15%, харин хөрөнгийн жигнэсэн дундаж өртөг (WACC) 10% байвал энэ компани ямар үр дүнд хүрэх вэ?',
        options: [
          'Компани хувьцаа эзэмшигчдийн үнэ цэнийг устгаж байна',
          'Компани 5%-ийн цэвэр эерэг өгөөжөөр дамжуулан бодит эдийн засгийн үнэ цэн (Economic Value Added) бүтээж байна',
          'Компани дампуурлын ирмэгт очсон',
          'WACC-ийг тооцох боломжгүй'
        ],
        correctIndex: 1,
        explanation: 'Супер, найз минь! ROIC > WACC (15% > 10%) байгаа тохиолдолд компани хөрөнгө оруулагчдад төлөх ёстой өртгөөсөө илүү өндөр өгөөж олж, хувьцаа эзэмшигчдийн үнэ цэнийг бодитоор өсгөдөг.'
      }
    ],
    studyTips: [
      'Асват Дамодараны YouTube дээрх үнэгүй лекцүүдээс долоо хоногт 1 бичлэг заавал үзээрэй.',
      'МакКинзигийн "Valuation" номын 2-р бүлгийг заавал олж унш, санхүүгийн ертөнцийг өөрөөр харна.',
      'Монголын хөрөнгийн биржийн ТОП-20 компанийн нэгийг сонгож хялбар үнэлгээ хийж дадлагаж.'
    ]
  },

  // 11. Эдийн засаг
  {
    id: 'econ-fund',
    code: 'ECON101',
    title: 'Эдийн засаг',
    englishTitle: 'Principles of Economics (Microeconomics & Macroeconomics)',
    faculty: 'business',
    category: 'Эдийн засаг & Бодлого',
    level: '1-2-р курс',
    overview: 'Хязгаарлагдмал нөөцийн оновчтой хуваарилалт, эрэлт ба нийлүүлэлтийн хууль, зах зээлийн тэнцвэр, хэрэглэгч ба үйлдвэрлэгчийн зан төлөв, ДНБ, инфляц, ажилгүйдэл, төрийн төсөв болон мөнгөний бодлогыг хамарсан цогц хичээл.',
    mentorGreeting: 'Сайн уу найз минь! Эдийн засаг бол зүгээр л тоо биш, харин хүмүүс, нийгэм хязгаарлагдмал нөөцтэй ертөнцөд хэрхэн сонголт хийдэг тухай сэтгэлгээний шинжлэх ухаан юм. Талхны үнэ яагаад өсдөг вэ? Ханш яагаад хэлбэлздэг вэ? Энэ бүхний учир зүйг эндээс хамтдаа нээнэ!',
    mentorTip: 'Эдийн засгийн 1-р дүрэм: "Үнэгүй өдрийн хоол гэж хэзээ ч байдаггүй" (There is no such thing as a free lunch) буюу аливаа сонголт үргэлж Алдагдсан боломжийн өртөг (Opportunity Cost)-тэй байдгийг санаарай!',
    hardSkills: [
      'Эрэлт, нийлүүлэлтийн тэнцвэрийн график зурах & Тэгшитгэл бодох',
      'Үнийн уян хатан чанар (Elasticity) тооцоолох',
      'Бодит ба нэрлэсэн ДНБ, Дефлятор, ХҮИ (CPI) тооцох',
      'Зах зээлийн бүтцүүдийг (Төгс өрсөлдөөн, Монополь, Олигополь) шинжлэх',
      'Макро эдийн засгийн FRED болон Монголбанкны өгөгдөл дээр график байгуулах'
    ],
    softSkills: [
      'Эдийн засгийн шүүмжлэлт сэтгэлгээ (Economic Reasoning)',
      'Сонголтын үр дагаврыг урт хугацаанд харах (Long-term impact analysis)',
      'Нийгмийн бодлогын үр ашгийг үнэлэх (Policy Evaluation)',
      'Алдагдсан боломжийн өртгийг тооцох зуршил (Opportunity Cost Mindset)',
      'Эдийн засгийн үзэгдлийг энгийн үгээр тайлбарлах чадвар'
    ],
    keyLearningOutcomes: [
      'Зах зээл дэх эрэлт, нийлүүлэлтийн өөрчлөлт үнэ болон тоо хэмжээнд хэрхэн нөлөөлөхийг шинжлэх',
      'Хэрэглэгчийн ашиг тусын дээд хэмжээ болон үйлдвэрлэгчийн ахиуц зардал (MC = MR)-ыг тодорхойлох',
      'Инфляц ба ажилгүйдлийн хамаарал (Филлипсийн муруй)-ыг тайлбарлах',
      'Төсвийн ба мөнгөний бодлогын хэрэгслүүд эдийн засгийн мөчлөгт хэрхэн нөлөөлдгийг үнэлэх'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Эдийн засгийн 10 зарчим ба Сэтгэлгээний арга барил',
        keyConcepts: ['Scarcity', 'Opportunity Cost', 'Marginal Thinking', 'Incentives matter'],
        summary: 'Хязгаарлагдмал нөөц ба сонголт, урамшуулал, худалдааны харилцан ашигтай байдал.',
        mentorTip: 'Грегори Мэнкьюгийн "Эдийн засгийн 10 зарчим"-ыг цээжилчихвэл бүх шалгалтыг давна.'
      },
      {
        week: '4-6',
        title: 'Эрэлт, нийлүүлэлт ба Зах зээлийн тэнцвэр',
        keyConcepts: ['Law of Demand & Supply', 'Equilibrium Price & Quantity', 'Price Elasticity', 'Татварын дарамт'],
        summary: 'Үнийн механизм, зах зээлийн илүүдэл ба хомсдол, уян хатан чанарын тооцоо.',
        mentorTip: 'Уян хатан чанар |E| > 1 бол уян, |E| < 1 бол уян бус гэдгийг нүдэлж тогтоо.'
      },
      {
        week: '7-9',
        title: 'Үйлдвэрлэлийн зардал ба Зах зээлийн хэлбэрүүд',
        keyConcepts: ['Fixed vs Variable Costs', 'MC = MR дүрэм', 'Төгс өрсөлдөөн', 'Монополь'],
        summary: 'Ахиу зардал ба ахиу орлого, пүүсийн ашгаа хамгийн их байлгах үйлдвэрлэлийн оновчтой хэмжээ.',
        mentorTip: 'Ашиг хамгийн их байх цэг нь ямар ч зах зээлд үргэлж MC = MR цэг байдаг!'
      },
      {
        week: '10-12',
        title: 'Макро эдийн засаг: ДНБ, Инфляц ба Ажилгүйдэл',
        keyConcepts: ['GDP (C + I + G + NX)', 'Nominal vs Real GDP', 'CPI (Хэрэглээний үнийн индекс)', 'Ажилгүйдлийн хувь'],
        summary: 'Улс орны эдийн засгийн нийт хэмжээг хэмжих аргачлал, амьжиргааны өртгийн өсөлт.',
        mentorTip: 'Бодит ДНБ нь инфляцын нөлөөг хассан бодит үйлдвэрлэлийн өсөлтийг харуулдаг.'
      },
      {
        week: '13-16',
        title: 'Төсвийн ба Мөнгөний бодлого, Эдийн засгийн мөчлөг',
        keyConcepts: ['Төсвийн тэлэх/хумих бодлого', 'Мөнгөний бодлого', 'Филлипсийн муруй', 'Төгсгөлийн шалгалт'],
        summary: 'Эдийн засгийн хямрал, сэргэлт ба Засгийн газар, Төв банкны авч хэрэгжүүлдэг зохицуулалтууд.',
        mentorTip: 'Хямралын үед төсвийг тэлж (зардлыг нэмж), мөнгөний бодлогын хүүг бууруулдаг логикийг сайн ойлгоорой.'
      }
    ],
    usefulWebsites: [
      {
        id: 'core-econ-free',
        title: 'CORE Econ (100% Үнэгүй Интерактив Эдийн засгийн нээлттэй сурах бичиг)',
        url: 'https://www.core-econ.org/',
        category: 'interactive',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Нээлттэй Үнэгүй сурах бичиг & Интерактив графикууд',
        description: 'Оксфорд, UCL зэрэг дэлхийн шилдэг их сургуулиудад ашиглагддаг орчин үеийн бодит эдийн засгийн бүрэн үнэгүй сурах бичиг.',
        bestFor: 'Графикуудыг хөдөлгөж үзэн эдийн засгийн хуулиудыг бодитоор ойлгоход',
        mentorTip: 'Уламжлалт хуурай онол биш, уур амьсгалын өөрчлөлт, баялгийн тэгш бус байдлыг эдийн засгийн өнцгөөс тайлбарладаг гайхалтай сайт.'
      },
      {
        id: 'mru-econ-free',
        title: 'Marginal Revolution University (MRU) - 100% Free Economics Video Platform',
        url: 'https://mru.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй богино видео хичээлүүд ба дасгалууд',
        description: 'Тайлер Ковен, Алекс Табаррок нарын эдийн засгийн бүх сэдвийг 5 минутын анимэйшнтэй, хөгжилтэй хэлбэрээр тайлбарласан видео сан.',
        bestFor: 'Шалгалтын өмнө 5 минутад сэдвүүдээ ойлгож цэгцлэхэд',
        mentorTip: 'MRU-ийн "Elasticity" болон "GDP"-ийн видеог үзвэл ямар ч багшийн лекцээс илүү хурдан ойлгогдоно.'
      },
      {
        id: 'worldbank-open-data',
        title: 'World Bank Open Data (Дэлхийн банкны бүрэн үнэгүй өгөгдлийн сан)',
        url: 'https://data.worldbank.org/country/mongolia',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Нээлттэй Үнэгүй дата',
        description: 'Монгол Улс болон дэлхийн бүх орнуудын ДНБ, ядуурлын түвшин, инфляц, хүн ам зүйн 60 жилийн түүхэн өгөгдөл.',
        bestFor: 'Эдийн засгийн эссэ, курсын ажилдаа Монголын бодит дата оруулахад',
        mentorTip: 'Монголын ДНБ-ий 1990 оноос хойших өсөлтийн графикийг эндээс шууд татаж аваад ашиглаарай.'
      }
    ],
    readingMaterials: [
      {
        id: 'econ-book-1',
        title: 'Эдийн засгийн ухааны үндэс (Мэнкью)',
        author: 'Н. Грегори Мэнкью (Монгол хэл дээрх албан ёсны орчуулга)',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Харвардын их сургуулийн профессор Мэнкьюгийн дэлхийд хамгийн олон хувь борлогдсон эдийн засгийн суурь сурах бичиг.',
        format: 'Ном',
        keyChapters: ['1-р бүлэг: Эдийн засгийн 10 зарчим', '4-р бүлэг: Эрэлт ба нийлүүлэлтийн зах зээлийн хүч', '23-р бүлэг: Үндэстний орлогыг хэмжихүй']
      },
      {
        id: 'econ-book-2',
        title: 'Principles of Economics (OpenStax Free Textbook)',
        author: 'OpenStax Rice University',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Райс их сургуулийн бүрэн үнэгүй, нээлттэй бичил болон макро эдийн засгийн сурах бичиг.',
        format: 'PDF',
        keyChapters: ['Chapter 3: Demand and Supply', 'Chapter 5: Elasticity', 'Chapter 19: The Macroeconomic Perspective']
      }
    ],
    researchSources: [
      {
        id: 'econ-res-1',
        title: 'Монголбанкны Судалгааны Бүтээлүүд & Бодлогын Баримтууд',
        sourceName: 'Bank of Mongolia Research Papers',
        searchQuery: 'Монгол улсын эдийн засгийн өсөлт инфляцын судалгаа',
        directUrl: 'https://www.mongolbank.mn/mn/research-papers',
        suggestedTopics: ['Уул уурхайн салбарын Голланд өвчний Монгол дахь илрэл', 'Инфляцын хүлээлт ба хэрэглээний зан төлөв'],
        citationGuidance: 'Mankiw, N. G. (2020). Principles of Economics. Cengage Learning.'
      }
    ],
    practiceQuestions: [
      {
        id: 'econ-q1',
        question: 'Хэрэв барааны үнэ 10% өсөхөд түүний эрэлтийн тоо хэмжээ 20% буурсан бол үнийн уян хатан чанарын коэффицент хэд байх вэ?',
        options: [
          '0.5 (Уян бус)',
          '2.0 (Уян эрэлттэй)',
          '1.0 (Нэгж уян хатан)',
          '-0.5'
        ],
        correctIndex: 1,
        explanation: 'Маш мундаг байна, найз минь! Үнийн уян хатан чанар = Эрэлтийн тоо хэмжээний өөрчлөлт % / Үнийн өөрчлөлт % = 20% / 10% = 2.0 байна. |Ed| > 1 байгаа тул энэ нь үнийн өөрчлөлтөд маш мэдрэмтгий "Уян эрэлттэй" бараа юм.'
      }
    ],
    studyTips: [
      'Эдийн засгийн графикуудыг заавал цаас, харандаа аваад гараараа зурж муруй хаашаа шилжихийг шалга.',
      'MRU.org дээрх 5 минутын видеонуудыг лекцийнхээ өмнө үзээд очвол багшийн яриа шууд ойлгогдоно.',
      'Монголбанкны инфляцын сар бүрийн тайланг харж ямар барааны үнэ хамгийн их өссөнийг ажиглаж хэвш.'
    ]
  },

  // 12. Эрх зүй
  {
    id: 'law-fund',
    code: 'LAW101',
    title: 'Эрх зүй',
    englishTitle: 'Introduction to Law & Mongolian Legal System',
    faculty: 'law',
    category: 'Эрх зүй & Хууль тогтоомж',
    level: '1-2-р курс',
    overview: 'Төр, эрх зүйн ерөнхий онол, Монгол Улсын Үндсэн хуулийн суурь үзэл баримтлал, Иргэний эрх зүй, Бизнесийн эрх зүй, Захиргааны эрх зүй, хууль хэрэглээний арга зүй, хууль зүйн баримт бичиг боловсруулах үндсийг судална.',
    mentorGreeting: 'Сайн уу найз минь! Эрх зүй бол нийгмийн эмх цэгц, шударга ёс, хүний эрхийн баталгаа юм. Хууль мэдэхгүй байх нь хариуцлагаас чөлөөлөх үндэслэл болдоггүй гэдэг. Хэрэв чи хуулийн хэм хэмжээ, гэрээ байгуулах урлагийг сайн эзэмшвэл амьдрал дээр ч, бизнест ч өөрийгөө болон бусдыг бүрэн хамгаалж чадна!',
    mentorTip: 'Хуулийн аливаа заалтыг цээжлэхээсээ өмнө түүний "Хэм хэмжээний бүтэц" буюу Гипотез (Нөхцөл), Диспозици (Захирамж), Санкци (Хариуцлага)-ийг нь ялгаж харж сураарай!',
    hardSkills: [
      'Legalinfo.mn хууль зүйн мэдээллийн санд нарийвчилсан хайлт хийх',
      'Хууль зүйн дүгнэлт (Legal Memo) бичих (IRAC аргачлал: Issue, Rule, Application, Conclusion)',
      'Иргэний болон бизнесийн гэрээний төсөл боловсруулах, эрсдэлийн шинжилгээ хийх',
      'Шүүхийн шийдвэр, кейс шинжилгээ (Case Law Analysis) хийх',
      'Үндсэн хуулийн цэцийн дүгнэлтүүдийг тайлбарлах'
    ],
    softSkills: [
      'Хууль зүйн өндөр ёс зүй & Шударга байдал (Legal Ethics & Justice)',
      'Логик мэтгэлцэх ба Няцаах чадвар (Advocacy & Persuasion in moot court)',
      'Шүүмжлэлт дедуктив сэтгэлгээ (Deductive Reasoning)',
      'Нарийн нягт үг хэллэг сонгох (Drafting Precision)',
      'Хүний эрх ба тэгш байдлыг хамгаалах сэтгэл зүй'
    ],
    keyLearningOutcomes: [
      'Эрх зүйн хэм хэмжээний эх сурвалж, эрэмбэ (Үндсэн хууль, Хууль, Тогтоол)-ийг ялгах',
      'Иргэний хуулийн дагуу хэлцэл хийх, гэрээний үүргийн гүйцэтгэл, үүргийн зөрчлийг тодорхойлох',
      'IRAC аргачлалаар хууль зүйн бодлого бодох ба шүүхийн маргааны шийдлийг олох',
      'Захиргааны байгууллагын хууль бус шийдвэрийг эсэргүүцэн гомдол гаргах процессыг тайлбарлах'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Төр, эрх зүйн онол ба Үндсэн хуулийн суурь',
        keyConcepts: ['Эрх зүйт төр', 'Хуулийн эрэмбэ', 'Үндсэн хууль', 'Хүний суурь эрх, эрх чөлөө'],
        summary: 'Эрх зүйн үүсэл, төр засаг ба эрх мэдлийн хуваарилалт, Монгол Улсын Үндсэн хуулийн зарчмууд.',
        mentorTip: 'Үндсэн хуулийн 16-р зүйлд заасан Монгол Улсын иргэний үндсэн 18 эрхийг тогтоож аваарай.'
      },
      {
        week: '4-6',
        title: 'Эрх зүйн хэм хэмжээ ба Хууль хэрэглээний арга зүй',
        keyConcepts: ['Гипотез, Диспозици, Санкци', 'Хууль тайлбарлах арга', 'IRAC загвар', 'Коллизийн дүрэм'],
        summary: 'Хуулийн заалтыг зөв задлах, хоёр хууль зөрчилдөхөд аль нь давамгайлах тухай дүрэм (Lex specialis derogat legi generali).',
        mentorTip: 'IRAC арга: Issue (Асуудал) -> Rule (Хуулийн заалт) -> Application (Кейст хэрэглэх) -> Conclusion (Дүгнэлт).'
      },
      {
        week: '7-9',
        title: 'Иргэний эрх зүй: Хэлцэл, Гэрээ ба Өмчлөх эрх',
        keyConcepts: ['Иргэний эрх зүйн харилцаа', 'Хүчин төгөлдөр бус хэлцэл', 'Гэрээ байгуулах', 'Өмчлөл'],
        summary: 'Иргэний хуулийн ерөнхий анги, хэлцлийн хэлбэр, гэрээний үүрэг үүсэх үндэслэлүүд.',
        mentorTip: 'Хүчин төгөлдөр бус хэлцлийн 10 шалтгааныг Иргэний хуулийн 56-р зүйлээс нарийвчлан судлаарай.'
      },
      {
        week: '10-12',
        title: 'Бизнесийн эрх зүй ба Компанийн засаглал',
        keyConcepts: ['Компанийн тухай хууль', 'ХХК ба ХК', 'Төлөөлөн удирдах зөвлөл', 'Хариуцлага'],
        summary: 'Бизнес эрхлэх хууль зүйн хэлбэрүүд, үүсгэн байгуулагчдын эрх, компанийн гүйцэтгэх удирдлагын үүрэг.',
        mentorTip: 'Хязгаарлагдмал Хариуцлагатай Компани (ХХК) яагаад хувийн хөрөнгөөрөө хариуцлага хүлээдэггүйг ойлгоорой.'
      },
      {
        week: '13-16',
        title: 'Шүүх эрх мэдэл, Маргаан шийдвэрлэх ба Шүүхийн мэтгэлцээн',
        keyConcepts: ['Шүүхийн тогтолцоо', 'Арбитрын ажиллагаа', 'Moot Court', 'Төгсгөлийн шалгалт'],
        summary: 'Анхан, давж заалдах, хяналтын шатны шүүх, шүүхийн загварчилсан мэтгэлцээн (Moot court).',
        mentorTip: 'Шүүхийн мэтгэлцээнд орохдоо өөрийн үгээ хуулийн тодорхой зүйл, заалтаар баталгаажуулж хэлээрэй.'
      }
    ],
    usefulWebsites: [
      {
        id: 'legalinfo-mn-free',
        title: 'Legalinfo.mn (Монгол Улсын Хууль зүйн нэгдсэн албан ёсны сан)',
        url: 'https://legalinfo.mn/',
        category: 'documentation',
        language: 'MN',
        isFree: true,
        freeTierNote: '100% Үнэгүй төрийн албан ёсны сан',
        description: 'Монгол Улсын бүх хүчин төгөлдөр хууль, УИХ, Засгийн газрын тогтоол, яамдын дүрэм журмын хамгийн сүүлийн шинэчлэгдсэн эх сурвалж.',
        bestFor: 'Хуулийн бодлого бодох, хүчин төгөлдөр хуулийг үг үсэггүй шалгах',
        mentorTip: 'Хуулийн заалт харахдаа "Хүчин төгөлдөр" эсэх шошго болон сүүлийн нэмэлт өөрчлөлтийн огноог заавал шалгаж бай!'
      },
      {
        id: 'shuukh-mn-free',
        title: 'Шүүхийн Шийдвэрийн Цахим Сан (Shuukh.mn - 100% Нээлттэй Үнэгүй)',
        url: 'https://shuukh.mn/',
        category: 'tool',
        language: 'MN',
        isFree: true,
        freeTierNote: '100% Үнэгүй нээлттэй шүүхийн сан',
        description: 'Монгол Улсын бүх шатны шүүхийн бодит шийдвэр, магадлал, тогтоолуудыг нэр нууцлан нийтэлдэг нээлттэй сан.',
        bestFor: 'Бодит шүүхийн кейс уншиж хууль хэрхэн хэрэглэгддэгийг харах',
        mentorTip: 'Хуулийн бие даалт хийхдээ shuukh.mn дээрээс тухайн зүйл заалтаар гарсан бодит 1 шийдвэрийг хавсаргавал багш 100% онц тавина.'
      },
      {
        id: 'constcourt-mn-free',
        title: 'Монгол Улсын Үндсэн Хуулийн Цэцийн цахим сан',
        url: 'https://constcourt.gov.mn/',
        category: 'documentation',
        language: 'MN',
        isFree: true,
        freeTierNote: '100% Үнэгүй',
        description: 'Үндсэн хуулийн цэцийн бүх дүгнэлт, тогтоолууд болон маргаан хянан шийдвэрлэх ажиллагааны мэдээлэл.',
        bestFor: 'Үндсэн хуулийн маргаан, хүний эрхийн зөрчлийн дүгнэлтүүдийг судлах',
        mentorTip: 'Цэцийн дүгнэлтүүдээс хуулийн логик үндэслэл хэрхэн бичигдсэнийг уншиж суралцаарай.'
      }
    ],
    readingMaterials: [
      {
        id: 'law-book-1',
        title: 'Монгол Улсын Үндсэн хуулийн эрх зүй',
        author: 'МУИС-ийн Хууль зүйн сургуулийн багш нарын хамтын бүтээл',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монгол Улсын төрийн байгууламж, хүний үндсэн эрх, Үндсэн хуулийн хяналтыг шинжлэх ухааны үндэслэлтэй тайлбарласан сурах бичиг.',
        format: 'Ном',
        keyChapters: ['2-р бүлэг: Үндсэн хуулийн зарчим', '5-р бүлэг: Хүний үндсэн эрх ба эрх чөлөө']
      },
      {
        id: 'law-book-2',
        title: 'Иргэний эрх зүй: Ерөнхий анги',
        author: 'Хууль зүйн шинжлэх ухааны доктор, профессорууд',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Иргэний хуулийн суурь үзэл баримтлал, хэлцэл, гэрээ, үүрэг, эд хөрөнгийн эрхийг тайлбарласан үндсэн ном.',
        format: 'PDF',
        keyChapters: ['4-р бүлэг: Хэлцэл хүчин төгөлдөр байх нөхцөл', '8-р бүлэг: Үүргийн эрх зүйн үндэс']
      }
    ],
    researchSources: [
      {
        id: 'law-res-1',
        title: 'Хууль Дээдлэх Ёс Эрдэм Шинжилгээний Сэтгүүл',
        sourceName: 'Хууль Зүйн Үндэсний Хүрээлэн (ХЗҮХ)',
        searchQuery: 'Монгол улсын хууль тогтоомжийн шинэчлэл эрх зүйн дүн шинжилгээ',
        directUrl: 'https://legalinstitute.mn/',
        suggestedTopics: ['Хиймэл оюун ухааны эрх зүйн зохицуулалтын өнөөгийн байдал', 'Цахим гэрээ байгуулах үеийн хууль зүйн эрсдэлүүд'],
        citationGuidance: 'Хууль Зүйн Үндэсний Хүрээлэн (2024). Хууль Дээдлэх Ёс Сэтгүүл. Улаанбаатар.'
      }
    ],
    practiceQuestions: [
      {
        id: 'law-q1',
        question: 'Хууль зүйн бодлого бодох IRAC аргачлалын "R" үсэг нь юуг илэрхийлдэг вэ?',
        options: [
          'Reasoning (Шалтгаан)',
          'Rule (Эрх зүйн хэм хэмжээ буюу холбогдох хуулийн заалт)',
          'Right (Эрх)',
          'Remedy (Хохирол барагдуулах)'
        ],
        correctIndex: 1,
        explanation: 'Маш үнэн, найз минь! IRAC нь: Issue (Асуудал) -> Rule (Холбогдох хуулийн заалт) -> Application (Хуулийг кейстэй холбон шинжлэх) -> Conclusion (Хууль зүйн дүгнэлт) гэсэн 4 алхмаас бүрддэг дэлхийн жишиг арга юм.'
      }
    ],
    studyTips: [
      'Хуулийн зүйл заалтыг шууд цээжлэх гэж битгий яар, юуны өмнө түүний зорилго ба яагаад ийм хууль гарсан учрыг ойлго.',
      'Shuukh.mn дээрээс сард ядаж 2 шүүхийн шийдвэр татаж уншиж хуульчид ямар хэллэгээр бичдэгийг хар.',
      'Курсын ажил, эссэ бичихдээ хуулийн заалтыг иш татах стандартыг (Хуулийн бүтэн нэр, огноо, зүйл заалт) яг таг мөрдөөрэй.'
    ]
  },

  // 13. Энтрепренершип (Хиймэл оюун ухаан /AI/ хосолсон)
  {
    id: 'entrep-ai',
    code: 'ENTR301',
    title: 'Энтрепренершип (Хиймэл оюун ухаан /AI/ хосолсон)',
    englishTitle: 'AI Entrepreneurship, Lean Startup & Venture Creation',
    faculty: 'ai_business',
    category: 'Гарааны бизнес & AI',
    level: '2-4-р курс',
    overview: 'Гарааны бизнес (Startup) эхлүүлэх, Lean Startup арга зүй, Business Model Canvas (BMC), хэрэглэгчийг баталгаажуулах (Customer Discovery), MVP (Хамгийн бага чадамжтай бүтээгдэхүүн) хурдан бүтээхэд Generative AI хэрэглэх, венчур санхүүжилт босгох болон Pitch Deck танилцуулах.',
    mentorGreeting: 'Сайн уу найз минь! Энтрепренершип бол өнөөгийн нийгэмд тулгамдаж буй асуудлыг бизнес болгон хувиргах хамгийн гайхалтай бүтээлч аялал юм. Урьд нь стартап эхлүүлэхэд сая сая төгрөг, бүтэн баг хэрэгтэй байсан бол одоо хиймэл оюун ухааны тусламжтайгаар чи ганцаараа ч 48 цагийн дотор бодит бүтээгдэхүүн бүтээж чадна!',
    mentorTip: 'Стартапын хамгийн том алдаа бол "Хэнд ч хэрэггүй бүтээгдэхүүнийг бүтэн жил сууж хийх" явдал. Тиймээс код бичихээсээ өмнө 10 бодит хэрэглэгчтэй ярилцаж асуудлыг нь баталгаажуул (Customer Validation)!',
    hardSkills: [
      'Business Model Canvas (BMC) болон Value Proposition Canvas боловсруулах',
      'AI ашиглан No-Code прототип & Landing Page бүтээх (Framer, Webflow, Lovable)',
      'Хэрэглэгчийн ярилцлага хийх ("The Mom Test" аргачлал)',
      'Гарааны бизнесийн санхүүгийн загвар (Unit Economics: CAC, LTV, Burn Rate)',
      'Венчур хөрөнгө оруулагчдад зориулсан 10-слайд Pitch Deck бүтээх'
    ],
    softSkills: [
      'Алдаанаас хурдан суралцах тэсвэр хатуужил (Grit & Resilience)',
      'Шинийг санаачлах бүтээлч зүрх зориг (Entrepreneurial Courage)',
      'Бусдыг өөрийн алсын хараанд нэгтгэх (Visionary Pitching)',
      'Нөөцийн хомсдол дунд гарц олох сэтгэлгээ (Resourcefulness / Bootstrapping)',
      'Тодорхойгүй орчинд шийдвэр гаргах чадвар (Navigating Ambiguity)'
    ],
    keyLearningOutcomes: [
      'Асуудал-Шийдлийн нийцэл (Problem-Solution Fit) болон Бүтээгдэхүүн-Зах зээлийн нийцэл (Product-Market Fit)-ийг тодорхойлох',
      'Lean Startup-ийн "Бүтээ - Хэмж - Суралц" (Build-Measure-Learn) эргэлтийг бодитоор хэрэгжүүлэх',
      'Хиймэл оюун ухааны хэрэгслүүдийг ашиглан хэдхэн хоногт зах зээлд гарах туршилтын MVP бэлтгэх',
      'Хөрөнгө оруулагчдын өмнө гарааны бизнесээ 3 минутын дотор итгэл төгс танилцуулах'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Энтрепренер сэтгэлгээ ба Асуудал илрүүлэх',
        keyConcepts: ['Opportunity Recognition', 'The Mom Test', 'Pain vs Gain', 'AI Idea Brainstorming'],
        summary: 'Бизнесийн санааг төсөөллөөр бус хэрэглэгчийн бодит өвдөлт дээр үндэслэн олох ба AI-аар баяжуулах.',
        mentorTip: '"The Mom Test" номын гол зарчим: Хүмүүсээс таны санаа таалагдаж байна уу гэж биш, өнгөрсөнд энэ асуудлыг яаж шийдсэн тухай нь асуу!'
      },
      {
        week: '4-6',
        title: 'Бизнес загвар (Business Model Canvas) ба Үнэ цэнийн санал',
        keyConcepts: ['9 Blocks of BMC', 'Value Proposition Canvas', 'Revenue Streams', 'Cost Structure'],
        summary: 'Бизнесээ 1 хуудсанд бүрэн зураглах, үнэ цэнийн санал ба хэрэглэгчийн сегментийн огтлолцол.',
        mentorTip: 'Strategyzer-ийн бэлэн BMC загварыг ашиглан ханандаа Post-it нааж багаараа ярилцаарай.'
      },
      {
        week: '7-9',
        title: 'Lean Startup ба AI-аар MVP хурдан бүтээх',
        keyConcepts: ['Minimum Viable Product (MVP)', 'Build-Measure-Learn', 'No-code Tools', 'AI Prototyping'],
        summary: 'Их мөнгө үрэлгүйгээр хамгийн бага зардлаар хэрэглэгчийн сонирхлыг шалгах веб/апп хийх.',
        mentorTip: 'MVP нь бүрэн апп байх албагүй, ердөө л үнэгүй Landing page дээр имэйл цуглуулах хэлбэр байж болно.'
      },
      {
        week: '10-12',
        title: 'Стартапын санхүүжилт ба Хэмжүүрүүд (Metrics)',
        keyConcepts: ['Bootstrapping', 'Angel Investors vs VC', 'SAFE гэрээ', 'Burn Rate & Runway', 'Unit Economics'],
        summary: 'Хөрөнгө оруулалт босгох шатууд (Pre-seed, Seed, Series A), стартапын мөнгө дуусах хугацааг тооцоолох.',
        mentorTip: 'Runway (Сард шатааж буй мөнгөндөө харьцуулбал хэдэн сар амьдрах хугацаа)-гаа үргэлж 12+ сард барь.'
      },
      {
        week: '13-16',
        title: 'Pitch Deck бүтээх ба Демо өдрийн хамгаалалт',
        keyConcepts: ['10-Slide Pitch Deck (Guy Kawasaki)', 'Storytelling for founders', 'Demo Day Pitch'],
        summary: 'Хөрөнгө оруулагчдад зориулсан 3 минутын төгс илтгэл бэлдэх ба семестрийн төслийн бодит хамгаалалт.',
        mentorTip: 'Слайд дээр хэт их бичвэр бичихгүй, тоо болон хэрэглэгчийн өсөлтийн графикийг хамгийн том харуул!'
      }
    ],
    usefulWebsites: [
      {
        id: 'ycombinator-startup-school',
        title: 'Y Combinator Startup School (100% Үнэгүй Дэлхийн Шилдэг Стартап Хөтөлбөр)',
        url: 'https://www.startupschool.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Бүрэн Үнэгүй бүх хичээлүүд, форум ба хэрэгслүүд',
        description: 'Airbnb, Stripe, Dropbox-ийг төрүүлсэн дэлхийн №1 венчур акселератор Y Combinator-ийн албан ёсны үнэгүй бүрэн сургалт.',
        bestFor: 'Дэлхийн шилдэг үүсгэн байгуулагчдын туршлагыг үнэгүй судлах, сертификат авах',
        mentorTip: 'YC-ийн "How to Talk to Users" болон "How to Pitch" видео лекцүүдийг заавал үзээрэй, энэ бол алт л гэсэн үг!'
      },
      {
        id: 'strategyzer-bmc-free',
        title: 'Strategyzer - Business Model Canvas (Үнэгүй загварууд & Видео заавар)',
        url: 'https://www.strategyzer.com/library/the-business-model-canvas',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй татах боломжтой загварууд',
        description: 'Алекс Остервальдерийн бүтээсэн Business Model Canvas-ийн албан ёсны PDF, хэрэглэх заавар видеонууд.',
        bestFor: 'Бизнес загварын 9 нүдийг ямар ч алдаагүй зөв бөглөх',
        mentorTip: 'Эндээс албан ёсны PDF-ийг нь татаж аваад өөрийн стартап санаагаа 9 нүдэнд нь бичиж үзээрэй.'
      },
      {
        id: 'producthunt-free',
        title: 'Product Hunt (Дэлхийн шинэ AI ба Стартапуудын өдөр тутмын талбар)',
        url: 'https://www.producthunt.com/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй',
        description: 'Өдөр бүр дэлхий даяар шинээр нээгдэж буй AI хэрэгслүүд, шинэлэг гарааны бизнесүүдийн жагсаалт ба хэрэглэгчдийн үнэлгээ.',
        bestFor: 'Өдөр бүр шинэ санаа, тренд харж зах зээлийг судлах',
        mentorTip: 'Өглөө бүр Product Hunt руу орж хамгийн их санал авсан 3 AI бүтээгдэхүүнийг сонирхож сэтгэлгээгээ цэнэглээрэй.'
      }
    ],
    readingMaterials: [
      {
        id: 'entrep-book-1',
        title: 'Lean Startup (Хэмнэлттэй стартап)',
        author: 'Эрик Рис (Монгол хэл дээрх албан ёсны орчуулга)',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Стартапын ертөнцийг үндсээр нь өөрчилсөн, цаг хугацаа ба мөнгө үрэлгүйгээр хэрэглэгчийн хүсэж буй бүтээгдэхүүнийг баталгаажуулах суурь ном.',
        format: 'Ном',
        keyChapters: ['1-р бүлэг: Эхлэл', '4-р бүлэг: Туршилт', '6-р бүлэг: Хурдан бүтээгдэхүүн (MVP)']
      },
      {
        id: 'entrep-book-2',
        title: 'The Mom Test: How to talk to customers when everyone is lying to you',
        author: 'Rob Fitzpatrick',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Хэрэглэгчээс худал магтаал биш, бодит үнэнийг сонсож асуудлыг баталгаажуулах дэлхийн хамгийн шилдэг богино гарын авлага.',
        format: 'PDF',
        keyChapters: ['Chapter 1: The Mom Test', 'Chapter 3: Asking Important Questions']
      }
    ],
    researchSources: [
      {
        id: 'entrep-res-1',
        title: 'Startup Genome - Global Startup Ecosystem Report',
        sourceName: 'Startup Genome',
        searchQuery: 'Global startup ecosystem report venture capital trends',
        directUrl: 'https://startupgenome.com/',
        suggestedTopics: ['Монголын стартап экосистемийн хөгжил ба венчур санхүүжилт', 'Fintech ба Edtech стартапуудын өсөлтийн загвар'],
        citationGuidance: 'Ries, E. (2011). The Lean Startup. Crown Business.'
      }
    ],
    practiceQuestions: [
      {
        id: 'entrep-q1',
        question: 'Lean Startup арга зүйн гол цөм болох тасралтгүй эргэлт (Feedback Loop) ямар дараалалтай байдаг вэ?',
        options: [
          'Төлөвлө - Мөнгө босго - Зар сурталчилгаа хий',
          'Бүтээ (Build) -> Хэмж (Measure) -> Суралц (Learn)',
          'Код бич - Компани байгуул - Захирал бол',
          'Зардал тооц - Үнэ тогтоо - Хүлээ'
        ],
        correctIndex: 1,
        explanation: 'Гайхалтай үүсгэн байгуулагч байна шүү, найз минь! Lean Startup-ийн цөм нь хамгийн бага хүчээр хурдан Бүтээж (Build), хэрэглэгчийн хариу үйлдлийг Хэмжиж (Measure), түүнээсээ Суралцан (Learn) бүтээгдэхүүнээ сайжруулах эргэлт юм.'
      }
    ],
    studyTips: [
      'Y Combinator Startup School-ийн үнэгүй видеонуудыг 1.5x хурдаар өдөрт 1 ширхгийг үзэж тэмдэглэл хөтөл.',
      '"The Mom Test" номыг уншаад найзуудаасаа асуух биш огт танихгүй 3 хүнээс асууж үзээрэй.',
      'Framer эсвэл Canva ашиглан 1 цагийн дотор өөрийн стартапын танилцуулга хуудсыг хийж турш.'
    ]
  },

  // 14. Нийгмийн инноваци
  {
    id: 'soc-innov',
    code: 'SOC201',
    title: 'Нийгмийн инноваци',
    englishTitle: 'Social Innovation, Design Thinking & Impact Entrepreneurship',
    faculty: 'social_innovation',
    category: 'Нийгмийн инноваци & Хөгжил',
    level: '2-3-р курс',
    overview: 'Нийгэм, байгаль орчин, боловсрол, эрүүл мэндийн тулгамдсан асуудлуудыг шийдвэрлэх шинэлэг санаа, Дизайн Сэтгэлгээ (Design Thinking), нийгмийн бизнес, төрийн бус байгууллагын менежмент, НҮБ-ын Тогтвортой хөгжлийн 17 зорилго (SDGs) болон нийгмийн үр нөлөөг хэмжих арга зүй.',
    mentorGreeting: 'Сайн уу найз минь! Бизнес зөвхөн ашиг олохын төлөө биш, харин дэлхий ертөнцийг илүү сайн сайхан, тэгш хүртээмжтэй болгох хүчирхэг хэрэгсэл байж чадна. Нийгмийн эмзэг асуудлуудыг технологи, бүтээлч сэтгэлгээ, тогтвортой бизнесийн загвараар хэрхэн шийдэхийг энд судална!',
    mentorTip: 'Дизайн Сэтгэлгээ (Design Thinking)-ийн 1-р алхам болох Эмпати (Empathy)-ийг хэзээ ч алгасаж болохгүй. Асуудлыг танхимд сууж таах биш, тухайн асуудалтай нүүр тулж буй хүмүүстэй хамт амьдарч, сонсож байж жинхэнэ шийдэл төрдөг юм шүү!',
    hardSkills: [
      'Дизайн Сэтгэлгээний 5 үе шат (Empathize, Define, Ideate, Prototype, Test)',
      'Нөлөөллийн онол (Theory of Change) боловсруулах',
      'Нийгмийн үр нөлөөг хэмжих (SROI - Social Return on Investment)',
      'Төслийн логик загвар (Logical Framework / Logframe) боловсруулах',
      'Олон улсын донор байгууллагуудад зориулсан тэтгэлгийн төсөл (Grant Proposal) бичих'
    ],
    softSkills: [
      'Гүн эмпати ба Сонсох соёл (Deep Empathy & Compassionate Listening)',
      'Нийгмийн шударга ёс ба Хүртээмжтэй сэтгэлгээ (Inclusivity & Accessibility)',
      'Төвөгтэй нийгмийн асуудлыг шийдвэрлэх бүтээлч байдал (Creative Problem Solving)',
      'Хамтын манлайлал ба Олон нийтийг дайчлах (Community Mobilization)',
      'Ёс зүйтэй хариуцлага (Ethical Stewardship)'
    ],
    keyLearningOutcomes: [
      'НҮБ-ын Тогтвортой хөгжлийн зорилгуудын (SDGs) уялдаа холбоог үнэлэх',
      'Хүнд төвлөрсөн дизайн (Human-Centered Design)-ийн аргаар нийгмийн тулгамдсан асуудалд шийдэл загварчлах',
      'Нийгмийн бизнесийн орлогын болон нөлөөллийн загварыг хослуулан төлөвлөх',
      'Олон улсын байгууллага, сангуудад өрсөлдөхүйц нийгмийн төслийн санал бичиж хамгаалах'
    ],
    modules: [
      {
        week: '1-3',
        title: 'Нийгмийн инновацийн үндэс ба Тогтвортой хөгжил (SDGs)',
        keyConcepts: ['Social Innovation vs Traditional CSR', 'UN 17 SDGs', 'Wicked Problems', 'Системийн өөрчлөлт'],
        summary: 'Нийгмийн инновацийн тодорхойлолт, хүнд хэцүү нийгмийн асуудлууд (Wicked problems) ба тогтвортой хөгжлийн зорилтууд.',
        mentorTip: 'НҮБ-ын 17 зорилгоос өөрийн хамгийн их эмзэглэдэг 1 зорилгоо сонгоод төслөө түүнтэй уялдуулаарай.'
      },
      {
        week: '4-6',
        title: 'Хүнд төвлөрсөн дизайн (Design Thinking) арга зүй',
        keyConcepts: ['Empathize', 'Define Problem Statement', 'Ideation techniques', 'Low-fidelity Prototyping', 'Testing'],
        summary: 'IDEO ба Стэнфордын их сургуулийн Дизайн сэтгэлгээний 5 алхамт арга зүйг бодит нийгмийн асуудал дээр хэрэгжүүлэх.',
        mentorTip: '"How Might We..." (Бид яаж...?) гэж асуултаа эхлүүлбэл багийн бүтээлч тархи шууд ажиллаж эхэлдэг.'
      },
      {
        week: '7-9',
        title: 'Нийгмийн бизнес ба Орлогын тогтвортой загвар',
        keyConcepts: ['Social Enterprise', 'Muhammad Yunus Model', 'Cross-subsidization', 'Нөлөөллийн загвар'],
        summary: 'Нобелийн шагналт Мухаммад Юнусын нийгмийн бизнесийн зарчмууд, хандив харахгүйгээр өөрөө өөрийгөө санхүүжүүлэх арга.',
        mentorTip: 'Grameen Bank-ийн ядууст зориулсан бичил зээлийн туршлага нийгмийг хэрхэн өөрчилснийг уншаарай.'
      },
      {
        week: '10-12',
        title: 'Нөлөөллийн онол (Theory of Change) ба SROI үнэлгээ',
        keyConcepts: ['Inputs, Activities, Outputs, Outcomes, Impact', 'Theory of Change', 'SROI хэмжилт'],
        summary: 'Төслийн хийсэн ажил бодит үр дагаварт хэрхэн хүрч буйг логик хэлхээгээр харуулах ба нийгмийн өгөөжийг хэмжих.',
        mentorTip: 'Outputs (Гарц - 100 хүнд сургалт орсон) ба Outcomes (Үр дүн - 80 хүн ажилд орсон)-ийг хэзээ ч бүү холь!'
      },
      {
        week: '13-16',
        title: 'Төслийн санал (Grant Proposal) бичих ба Хамгаалалт',
        keyConcepts: ['Grant proposal structure', 'Stakeholder engagement', 'Төслийн төсөв', 'Final Impact Pitch'],
        summary: 'Олон улсын байгууллага, сангуудад өргөн барих тэтгэлгийн төслийг бүрэн боловсруулах ба танилцуулах.',
        mentorTip: 'Төслийнхөө нөлөөллийг ганц өгүүлбэрт тодорхой багтааж чадвал тэтгэлэг авах магадлал 80% өснө.'
      }
    ],
    usefulWebsites: [
      {
        id: 'ideo-designkit-free',
        title: 'IDEO Design Kit (Хүнд төвлөрсөн дизайны 100% үнэгүй арга зүйн хөтөч)',
        url: 'https://www.designkit.org/',
        category: 'tool',
        language: 'EN',
        isFree: true,
        freeTierNote: '100% Үнэгүй гарын авлагууд ба видеонууд',
        description: 'Дэлхийн шилдэг инновацийн компани IDEO-ийн нийгмийн төслүүдэд ашигладаг 50 гаруй алхам алхмаар заасан арга зүйн сан.',
        bestFor: 'Хэрэглэгчийн эмпати ярилцлага, прототип турших дасгалуудыг авах',
        mentorTip: 'Энд байгаа "Field Guide to Human-Centered Design" үнэгүй PDF-ийг татаж аваад ашиглаарай, энэ бол шилдэг хөтөч!'
      },
      {
        id: 'acumen-academy-free',
        title: 'Acumen Academy - Free Courses for Social Impact',
        url: 'https://www.acumenacademy.org/',
        category: 'course',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Олон үнэгүй сургалтуудтай',
        description: 'Нийгмийн бизнес, нөлөөллийн манлайлал, ядуурлыг бууруулах бүтээлч загваруудыг заадаг дэлхийн шилдэг академи.',
        bestFor: 'Нийгмийн манлайлал, Theory of Change зохиохыг сурах',
        mentorTip: 'Acumen-ийн үнэгүй богино сургалтууд нь баг хамт олноороо хийхэд маш үр дүнтэй байдаг.'
      },
      {
        id: 'ssir-open-access',
        title: 'Stanford Social Innovation Review (SSIR Open Articles)',
        url: 'https://ssir.org/',
        category: 'documentation',
        language: 'EN',
        isFree: true,
        freeTierNote: 'Үнэгүй нээлттэй судалгааны нийтлэлүүд',
        description: 'Стэнфордын их сургуулиас эрхлэн гаргадаг нийгмийн инноваци, нөлөөллийн санхүүжилтийн дэлхийн тэргүүлэгч сэтгүүл.',
        bestFor: 'Дэлхий дахинд хэрэгжиж буй амжилттай нийгмийн төслүүдийн кейсийг унших',
        mentorTip: 'Бие даалтын ажилдаа SSIR дээрх кейсийг эш татвал багш маш өндөр үнэлнэ.'
      }
    ],
    readingMaterials: [
      {
        id: 'soc-book-1',
        title: 'Нийгмийн инноваци ба Тогтвортой хөгжил',
        author: 'МУИС-ийн Нийгмийн ухааны сургууль',
        type: 'textbook',
        level: 'Эхлэн суралцагч',
        description: 'Монгол дахь нийгмийн тулгамдсан асуудлууд, ТББ ба иргэний нийгмийн оролцоо, төслийн менежментийн сурах бичиг.',
        format: 'Ном',
        keyChapters: ['2-р бүлэг: Нийгмийн тулгамдсан асуудлыг тодорхойлох', '6-р бүлэг: Төслийн логик хүрээ']
      },
      {
        id: 'soc-book-2',
        title: 'Field Guide to Human-Centered Design',
        author: 'IDEO.org Open Access',
        type: 'guide',
        level: 'Дунд шат',
        description: 'Нийгмийн сорилтуудыг Дизайн Сэтгэлгээгээр шийдэх алхамчилсан бүрэн үнэгүй гарын авлага.',
        format: 'PDF',
        keyChapters: ['Inspiration Phase: Empathy Methods', 'Ideation Phase: Making Sense of Research', 'Implementation Phase: Piloting']
      }
    ],
    researchSources: [
      {
        id: 'undp-mongolia',
        title: 'НҮБ-ын Хөгжлийн Хөтөлбөр (UNDP Mongolia) - Судалгаа ба Тайлан',
        sourceName: 'UNDP Mongolia Accelerator Lab',
        searchQuery: 'Mongolia sustainable development goals social innovation accelerator',
        directUrl: 'https://www.undp.org/mongolia',
        suggestedTopics: ['Монгол залуусын ажил эрхлэлт ба дижитал шилжилт', 'Уур амьсгалын өөрчлөлтөд дасан зохицох нийгмийн инноваци'],
        citationGuidance: 'IDEO.org (2015). The Field Guide to Human-Centered Design. San Francisco.'
      }
    ],
    practiceQuestions: [
      {
        id: 'soc-q1',
        question: 'Хүнд төвлөрсөн Дизайн Сэтгэлгээний (Design Thinking) хамгийн эхний бөгөөд хамгийн чухал үе шат аль нь вэ?',
        options: [
          'Хөрөнгө оруулагчдад илтгэл тавих',
          'Эмпати (Empathize - Зорилтот хүмүүсийн өвдөлт, мэдрэмжийг гүн ойлгох)',
          'Шууд төсөв зохиох',
          'Аппликейшны код бичих'
        ],
        correctIndex: 1,
        explanation: 'Зөвхөн сэтгэлтэй, ухаалаг залуус л үүнийг ойлгодог шүү, найз минь! Хүмүүсийн зовлон, бэрхшээлийг өөрийн биеэр мэдэрч, ойлгож (Эмпати) чадахгүй бол бид хэзээ ч бодит үр дүнтэй нийгмийн шийдэл олж чадахгүй.'
      }
    ],
    studyTips: [
      'IDEO Design Kit сайтаас 1 аргыг (жишээ нь Five Whys) сонгоод өнөөдөр найзтайгаа туршиж үз.',
      'НҮБ-ын 17 зорилгын албан ёсны веб сайт руу орж Монголын үзүүлэлтүүд ямар байгааг хар.',
      'Төсөл бичихдээ тоо баримтаас гадна бодит хүний амьдралын жишээг (Storytelling) заавал оруул.'
    ]
  }
];

export const POPULAR_COURSE_SUGGESTIONS = [
  'Аялал жуулчлал',
  'Бизнесийн удирдлага',
  'Даатгал',
  'Зочлох үйлчилгээний менежмент',
  'Маркетинг (Хиймэл оюун ухаан /AI/ хосолсон)',
  'Мэдээллийн систем (Хиймэл оюун ухаан /AI/ хосолсон)',
  'Нягтлан бодох бүртгэл',
  'Олон улсын худалдаа (Хиймэл оюун ухаан /AI/ хосолсон)',
  'Санхүү / Банк',
  'Санхүүгийн манлайлал (Хиймэл оюун ухаан /AI/ хосолсон)',
  'Эдийн засаг',
  'Эрх зүй',
  'Энтрепренершип (Хиймэл оюун ухаан /AI/ хосолсон)',
  'Нийгмийн инноваци',
  'Python ба SQL',
  'Incoterms 2020',
  'Design Thinking',
  'Power BI & Looker Studio',
];

export const UNIVERSITIES = [
  'Монгол Улсын Их Сургууль (МУИС)',
  'Шинжлэх Ухаан, Технологийн Их Сургууль (ШУТИС)',
  'Санхүү Эдийн Засгийн Их Сургууль (СЭЗИС)',
  'Монгол Улсын Боловсролын Их Сургууль (МУБИС)',
  'Анагаахын Шинжлэх Ухааны Үндэсний Их Сургууль (АШУҮИС)',
  'Хөдөө Аж Ахуйн Их Сургууль (ХААИС)',
  'Мандах Их Сургууль',
  'Их Засаг Олон Улсын Их Сургууль',
  'Бусад их, дээд сургууль',
];

