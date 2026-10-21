import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// API Route: Generate comprehensive Mongolian academic resources for any course
app.post('/api/generate-course-resources', async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseName, faculty = 'stem', level = '1-2-р курс' } = req.body;

    if (!courseName || typeof courseName !== 'string' || !courseName.trim()) {
      res.status(400).json({ error: 'Хичээлийн нэр шаардлагатай.' });
      return;
    }

    if (!ai) {
      res.status(503).json({
        error: 'Gemini API тохируулагдаагүй байна.',
        fallbackNotice: 'Урьдчилан бэлтгэсэн сангийн өгөгдлийг ашиглана уу.',
      });
      return;
    }

    const prompt = `Чи бол оюутнуудад их сургуулийн хичээлүүдэд нь чин сэтгэлээсээ тусалдаг, бүх зүйлийг ойлгомжтой практик тайлбарладаг "Найз багш" (Buddy Professor & Mentor) юм.
Оюутанд зориулан дараах хичээлийн нэрээр Монгол хэл дээр хамгийн цогц, чанартай, бодит сургалтын нөөц, 100% үнэгүй веб сайтууд, шаардлагатай бүх Hard skill болон Soft skill, унших ном, судалгааны материалын багц үүсгэж өгнө үү. Ихэнх санал болгож буй вебүүд заавал үнэгүй эсвэл оюутны хөнгөлөлттэй байх ёстой.

Хичээлийн нэр: "${courseName.trim()}"
Салбар: ${faculty}
Түвшин: ${level}

Дараах JSON бүтэцтэй яг таг хариу өг:
{
  "title": "Хичээлийн монгол нэр (бүрэн)",
  "englishTitle": "Course English title",
  "faculty": "stem | business | medicine | law | humanities | engineering | ai_business | social_innovation",
  "category": "Нарийвчилсан чиглэл (жишээ нь: Хиймэл оюун ухаан, Санхүү, Хууль, Маркетинг, Нийгмийн инноваци)",
  "level": "Суралцах курс түвшин",
  "overview": "Энэ хичээлийн мөн чанар, яагаад чухал, юу судалдаг талаарх 3-4 өгүүлбэр бүхий ойлгомжтой найрсаг тайлбар.",
  "mentorGreeting": "Сайн уу найз минь! Найз багшийн халуун дулаан, урам зориг өгсөн мэндчилгээ.",
  "mentorTip": "Энэ хичээлийг сурахад хамгийн их тус болох найз багшийн практик алтан зөвлөгөө.",
  "hardSkills": [
    "Техникийн ур чадвар 1 (Програм, хэрэгсэл, тооцоолол)",
    "Техникийн ур чадвар 2",
    "Техникийн ур чадвар 3",
    "Техникийн ур чадвар 4",
    "Техникийн ур чадвар 5"
  ],
  "softSkills": [
    "Зөөлөн ур чадвар 1 (Шүүмжлэлт сэтгэлгээ, харилцаа гэх мэт)",
    "Зөөлөн ур чадвар 2",
    "Зөөлөн ур чадвар 3",
    "Зөөлөн ур чадвар 4"
  ],
  "keyLearningOutcomes": [
    "Эзэмших гол ур чадвар 1",
    "Эзэмших гол ур чадвар 2",
    "Эзэмших гол ур чадвар 3"
  ],
  "modules": [
    {
      "week": "1-3",
      "title": "Сэдвийн нэр",
      "keyConcepts": ["Ойлголт 1", "Ойлголт 2"],
      "summary": "Энэ сэдвээр юу үзэх талаарх товч тайлбар",
      "mentorTip": "Найз багшийн зөвлөгөө"
    },
    {
      "week": "4-6",
      "title": "Дараагийн сэдэв",
      "keyConcepts": ["Ойлголт 1", "Ойлголт 2"],
      "summary": "Тайлбар",
      "mentorTip": "Найз багшийн зөвлөгөө"
    },
    {
      "week": "7-9",
      "title": "Гүнзгийрүүлэх сэдэв",
      "keyConcepts": ["Ойлголт 1", "Ойлголт 2"],
      "summary": "Тайлбар",
      "mentorTip": "Найз багшийн зөвлөгөө"
    },
    {
      "week": "10-12",
      "title": "Практик ба шалгалт",
      "keyConcepts": ["Ойлголт 1", "Ойлголт 2"],
      "summary": "Тайлбар",
      "mentorTip": "Найз багшийн зөвлөгөө"
    }
  ],
  "usefulWebsites": [
    {
      "id": "site-1",
      "title": "Веб сайтын нэр (бодит, үнэгүй шилдэг сайт, жишээ: Coursera Audit, Khan Academy, Kaggle, Legalinfo)",
      "url": "https://...",
      "category": "interactive | course | tool | documentation",
      "language": "MN | EN | MN/EN",
      "isFree": true,
      "freeTierNote": "100% Үнэгүй / Оюутны эрхээр үнэгүй",
      "description": "Энэ сайт дээр уг хичээлийн ямар сэдвийг яаж судалж болох тухай монгол тайлбар",
      "bestFor": "Хамгийн их хэрэг болох зүйл",
      "mentorTip": "Найз багшийн нууц зөвлөгөө: Төлбөргүйгээр хэрхэн бүрэн ашиглах арга"
    }
  ],
      "language": "EN",
      "isFree": true,
      "description": "Монгол тайлбар",
      "bestFor": "Зориулалт"
    },
    {
      "id": "site-3",
      "title": "Гурав дахь сайт",
      "url": "https://...",
      "category": "documentation",
      "language": "EN",
      "isFree": true,
      "description": "Тайлбар",
      "bestFor": "Зориулалт"
    }
  ],
  "readingMaterials": [
    {
      "id": "book-1",
      "title": "Монгол болон олон улсад хүлээн зөвшөөрөгдсөн үндсэн сурах бичгийн нэр",
      "author": "Зохиогчийн нэр, Их сургууль / Хэвлэлийн газар",
      "type": "textbook | lecture_notes | cheat_sheet | guide",
      "level": "Эхлэн суралцагч | Дунд шат | Гүнзгийрүүлсэн",
      "description": "Номын гол агуулга, яагаад энэ хичээлд зайлшгүй унших хэрэгтэй тухай",
      "format": "Ном | PDF | Цахим гарын авлага",
      "keyChapters": ["1-р бүлэг: ...", "2-р бүлэг: ..."]
    },
    {
      "id": "book-2",
      "title": "Хоёр дахь зөвлөх ном, гарын авлага",
      "author": "Зохиогч",
      "type": "guide",
      "level": "Дунд шат",
      "description": "Тайлбар",
      "format": "PDF",
      "keyChapters": ["Бүлэг..."]
    }
  ],
  "researchSources": [
    {
      "id": "res-1",
      "title": "Эрдэм шинжилгээний мэдээллийн сан, сэтгүүл",
      "sourceName": "Google Scholar / ResearchGate / МУИС Эрдмийн бичиг / ШУТИС бүтээл",
      "searchQuery": "Оюутан хайлт хийхэд тохирох нарийвчилсан түлхүүр үгс",
      "directUrl": "https://scholar.google.com/scholar?q=...",
      "suggestedTopics": [
        "Курсын ажил, эссэ бичих сэдэв 1",
        "Дипломын судалгааны сэдэв 2"
      ],
      "citationGuidance": "APA 7 стандартын дагуу эш татах зөвлөмж"
    }
  ],
  "practiceQuestions": [
    {
      "id": "q-1",
      "question": "Хичээлийн гол ойлголтыг шалгасан 1 сонгох тест асуулт",
      "options": ["Сонголт А", "Сонголт Б", "Сонголт В", "Сонголт Г"],
      "correctIndex": 0,
      "explanation": "Яагаад зөв хариулт болох тухай монгол хэл дээрх дэлгэрэнгүй тайлбар"
    },
    {
      "id": "q-2",
      "question": "Хоёр дахь тест асуулт",
      "options": ["Сонголт А", "Сонголт Б", "Сонголт В", "Сонголт Г"],
      "correctIndex": 1,
      "explanation": "Тайлбар"
    }
  ],
  "studyTips": [
    "Энэ хичээлийг үр дүнтэй суралцах практик зөвлөгөө 1",
    "Шалгалт дээр хамгийн их алддаг алдаа ба анхаарах зүйл 2",
    "Лаборатори, даалгавраа хийхэд хэрэгтэй аргачлал 3"
  ]
}

Анхаар: Зөвхөн цэвэр JSON буцаа, ямар ч markdown кодын хаалт (\`\`\`json) битгий бич.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text?.trim() || '{}';
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      // Clean possible fences
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsedData = JSON.parse(cleaned);
    }

    // Attach generated ID and flag
    const courseId = `gen-${Date.now()}`;
    const result = {
      id: courseId,
      ...parsedData,
      isAIGenerated: true,
    };

    res.json(result);
  } catch (error: any) {
    console.error('Error generating course resources:', error);
    res.status(500).json({
      error: 'Хичээлийн мэдээлэл үүсгэхэд алдаа гарлаа: ' + (error?.message || 'Серверийн алдаа'),
    });
  }
});

// API Route: Explain a complex academic concept in Mongolian
app.post('/api/explain-concept', async (req: Request, res: Response): Promise<void> => {
  try {
    const { courseTitle, conceptQuery } = req.body;

    if (!conceptQuery || typeof conceptQuery !== 'string' || !conceptQuery.trim()) {
      res.status(400).json({ error: 'Тайлбарлуулах ойлголт, сэдвийг бичнэ үү.' });
      return;
    }

    if (!ai) {
      res.status(503).json({ error: 'Gemini API холбогдоогүй байна.' });
      return;
    }

    const prompt = `Чи бол оюутнуудад хэцүү, хийсвэр ойлголтуудыг хамгийн энгийнээр, маш найрсаг, ойлгомжтой, амьдрал дээрх жишээгээр тайлбарлаж өгдөг "Найз багш" (Buddy Professor & Mentor) юм.
Хичээл: "${courseTitle || 'Их сургуулийн ерөнхий хичээл'}"
Оюутны асуулт / Тайлал хэрэгтэй сэдэв: "${conceptQuery.trim()}"

Найз багшийн халуун дулаан, урам зоригтой өнгө аясаар оюутанд зориулж дараах хэсэг бүхий бүрэн монгол тайлбарыг JSON хэлбэрээр буцаана уу:
{
  "conceptTitle": "${conceptQuery.trim()}",
  "simpleDefinition": "Найз багшийн энгийн 2 өгүүлбэрт багтаасан тайлбар (ямар ч хуурай академик үггүй)",
  "realWorldAnalogy": "Бодит амьдрал дээрх маш ойлгомжтой сонирхолтой зүйрлэл эсвэл аналог жишээ",
  "stepByStepExplanation": [
    "Алхам 1: ...",
    "Алхам 2: ...",
    "Алхам 3: ..."
  ],
  "concreteExample": "Бодит амьдрал эсвэл Монголын компанийн жишээ/тооцоо",
  "commonMistakes": "Оюутнууд шалгалт дээр хамгийн их андуурдаг зүйл ба түүнээс зайлсхийх найз багшийн зөвлөгөө",
  "quickSelfCheckQuestion": {
    "question": "Өөрийгөө шалгах найрсаг богино асуулт",
    "answer": "Зөв хариу ба яагаад гэдэг учир шалтгаан"
  }
}
Зөвхөн цэвэр JSON буцаана уу.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text?.trim() || '{}';
    let parsed;
    try {
      parsed = JSON.parse(responseText);
    } catch {
      const cleaned = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      parsed = JSON.parse(cleaned);
    }

    res.json(parsed);
  } catch (error: any) {
    console.error('Error explaining concept:', error);
    res.status(500).json({
      error: 'Сэдэв тайлбарлахад алдаа гарлаа: ' + (error?.message || 'Серверийн алдаа'),
    });
  }
});

// Mount Vite or serve static
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`StudentHub server running on http://0.0.0.0:${PORT} [mode: ${isProduction ? 'prod' : 'dev'}]`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
