import { createSlice } from "@reduxjs/toolkit";
import slider1 from "../pictures/newsSlider/19.01.2024.jpg";
import slider2 from "../pictures/newsSlider/24.01.2024.jpg";
import slider3 from "../pictures/newsSlider/03.02.2024.jpg";
import slider4 from "../pictures/newsSlider/16.02.2024.jpg";
import slider5 from "../pictures/newsSlider/29.02.2024.jpg";
import slider6 from "../pictures/newsSlider/02.03.2024.jpg";
import slider7 from "../pictures/newsSlider/02.03.2024.2.jpg";
import slider8 from "../pictures/newsSlider/05.03.2024.jpg";
import slider9 from "../pictures/newsSlider/25.03.2024.jpg";
import slider10 from "../pictures/newsSlider/30.03.2024.jpg";
import slider11 from "../pictures/newsSlider/13.04.2024.jpg";
import jan19_1 from "../pictures/news/19.01.2024/5lGbIqpk3Bk.jpg";
import jan19_2 from "../pictures/news/19.01.2024/7n_7U3zwoz8.jpg";
import jan19_3 from "../pictures/news/19.01.2024/ACfjfkjXwZg.jpg";
import jan19_4 from "../pictures/news/19.01.2024/AbZK8Mtzkao.jpg";
import jan19_5 from "../pictures/news/19.01.2024/CdSUxQ4Brzg.jpg";
import jan19_6 from "../pictures/news/19.01.2024/DyqwCKf2k8s.jpg";
import jan19_7 from "../pictures/news/19.01.2024/FlfahHp7MgQ.jpg";
import jan19_8 from "../pictures/news/19.01.2024/GWCAfT4-m8E.jpg";
import jan19_9 from "../pictures/news/19.01.2024/LhGETvVfrRQ.jpg";
import jan19_10 from "../pictures/news/19.01.2024/o35bKsKM7mY.jpg";
import jan24_1 from "../pictures/news/24.01.2024/2yvsTWO812Q.jpg";
import jan24_2 from "../pictures/news/24.01.2024/3wrrMy2jg08.jpg";
import jan24_3 from "../pictures/news/24.01.2024/BqqJB4Y45X4.jpg";
import jan24_4 from "../pictures/news/24.01.2024/EQcDCNTRNBE.jpg";
import jan24_5 from "../pictures/news/24.01.2024/KfUfBeIvDKQ.jpg";
import jan24_6 from "../pictures/news/24.01.2024/LGBYrMq4U8w.jpg";
import jan24_7 from "../pictures/news/24.01.2024/PznCUCPoeY0.jpg";
import jan24_8 from "../pictures/news/24.01.2024/UQwO9vzE4aI.jpg";
import jan24_9 from "../pictures/news/24.01.2024/WIZJVn_z7vA.jpg";
import jan24_10 from "../pictures/news/24.01.2024/Wv0NxunimJc.jpg";
import feb03_1 from "../pictures/news/03.02.2024/9shzOXnlBE4.jpg";
import feb03_2 from "../pictures/news/03.02.2024/JnGV0jKwo7U.jpg";
import feb03_3 from "../pictures/news/03.02.2024/SWmBFUKhudc.jpg";
import feb03_4 from "../pictures/news/03.02.2024/Uz2RhORRtlA.jpg";
import feb03_5 from "../pictures/news/03.02.2024/dD6-LHnqAk8.jpg";
import feb03_6 from "../pictures/news/03.02.2024/lTBsgqWR2tA.jpg";
import feb03_7 from "../pictures/news/03.02.2024/p15A-RakvHg.jpg";
import feb03_8 from "../pictures/news/03.02.2024/qHy219T9G9c.jpg";
import feb03_9 from "../pictures/news/03.02.2024/tv_fYzVxET4.jpg";
import feb16_1 from "../pictures/news/16.02.2024/--BlM-V1Rxc.jpg";
import feb16_2 from "../pictures/news/16.02.2024/9M8pTeHqKl0.jpg";
import feb16_3 from "../pictures/news/16.02.2024/K6ifghMmK3w.jpg";
import feb16_4 from "../pictures/news/16.02.2024/Lul482Sl7e8.jpg";
import feb16_5 from "../pictures/news/16.02.2024/TjpgBEMRlL0.jpg";
import feb16_6 from "../pictures/news/16.02.2024/UGeNh5c7NDY.jpg";
import feb16_7 from "../pictures/news/16.02.2024/_wXsNQ3rIc4.jpg";
import feb16_8 from "../pictures/news/16.02.2024/f9Dkc2HylSs.jpg";
import feb16_9 from "../pictures/news/16.02.2024/v2RwDQU9zLE.jpg";
import feb29_1 from "../pictures/news/29.02.2024/K7QrekaVLYs.jpg";
import feb29_2 from "../pictures/news/29.02.2024/Lf-220fSSr0.jpg";
import feb29_3 from "../pictures/news/29.02.2024/Nn5fWc1cL9k.jpg";
import feb29_4 from "../pictures/news/29.02.2024/YOoqGyrRpEs.jpg";
import feb29_5 from "../pictures/news/29.02.2024/brKzTeQ63hA.jpg";
import feb29_6 from "../pictures/news/29.02.2024/hIFoitKSaO8.jpg";
import feb29_7 from "../pictures/news/29.02.2024/rtUtjJRi4RY.jpg";
import feb29_8 from "../pictures/news/29.02.2024/z_s85udxTME.jpg";
import feb29_9 from "../pictures/news/29.02.2024/UuthYrzzDHc.jpg";
import mar02_1 from "../pictures/news/02.03.2024/6z5gRzqduu8.jpg";
import mar02_2 from "../pictures/news/02.03.2024/Dll4BO9dvSg.jpg";
import mar02_3 from "../pictures/news/02.03.2024/FJGGoGVlDkA.jpg";
import mar02_4 from "../pictures/news/02.03.2024/Ppbk1fZDOx8.jpg";
import mar02_5 from "../pictures/news/02.03.2024/RfPwlk_yTNk.jpg";
import mar02_6 from "../pictures/news/02.03.2024/a904rmiRW0c.jpg";
import mar02_7 from "../pictures/news/02.03.2024/lpWuCxOQpVA.jpg";
import mar02_8 from "../pictures/news/02.03.2024/oFhpj5Efmqs.jpg";
import mar02_9 from "../pictures/news/02.03.2024/v-5UiwzeqPA.jpg";
import mar022_1 from "../pictures/news/02.03.2024.2/-N7m3cj0YaQ.jpg";
import mar022_2 from "../pictures/news/02.03.2024.2/1LwnUTlDKTc.jpg";
import mar022_3 from "../pictures/news/02.03.2024.2/5pf-gN6uJww.jpg";
import mar022_4 from "../pictures/news/02.03.2024.2/E3V4VrKjlHE.jpg";
import mar022_5 from "../pictures/news/02.03.2024.2/W2dbLrZKUmA.jpg";
import mar022_6 from "../pictures/news/02.03.2024.2/_mPT88yBY5g.jpg";
import mar022_7 from "../pictures/news/02.03.2024.2/kGj8SB1Uv9A.jpg";
import mar022_8 from "../pictures/news/02.03.2024.2/n7CmmTQXzfU.jpg";
import mar022_9 from "../pictures/news/02.03.2024.2/xZRJ9Yt2qIs.jpg";
import mar05_1 from "../pictures/news/05.03.2024/-v86Znjen5E.jpg";
import mar05_2 from "../pictures/news/05.03.2024/5YL1-7SkwEY.jpg";
import mar05_3 from "../pictures/news/05.03.2024/E5AowdjQgwU.jpg";
import mar05_4 from "../pictures/news/05.03.2024/FkRskuDxLEc.jpg";
import mar05_5 from "../pictures/news/05.03.2024/UPhW9EpRW4U.jpg";
import mar05_6 from "../pictures/news/05.03.2024/n3HdimFWtwQ.jpg";
import mar25_1 from "../pictures/news/25.03.2024/0tqbA1VIzZc.jpg";
import mar25_2 from "../pictures/news/25.03.2024/25.03.2024.jpg";
import mar25_3 from "../pictures/news/25.03.2024/6xki8r6UkPQ.jpg";
import mar25_4 from "../pictures/news/25.03.2024/Jahjv8c8zLU.jpg";
import mar25_5 from "../pictures/news/25.03.2024/LvtJPu5aE7M.jpg";
import mar25_6 from "../pictures/news/25.03.2024/MkFmbYWEBPM.jpg";
import mar25_7 from "../pictures/news/25.03.2024/V9B4h43fUFQ.jpg";
import mar25_8 from "../pictures/news/25.03.2024/Z9jZK1pGm0s.jpg";
import mar25_9 from "../pictures/news/25.03.2024/pd8n9J2XJrM.jpg";
import mar30_1 from "../pictures/news/30.03.2024/2DN3s4SwKOY.jpg";
import mar30_2 from "../pictures/news/30.03.2024/FGDcv63kHNg.jpg";
import mar30_3 from "../pictures/news/30.03.2024/RzpI_t8ENVE.jpg";
import mar30_4 from "../pictures/news/30.03.2024/_5a7ESHuHPc.jpg";
import mar30_5 from "../pictures/news/30.03.2024/_TlJSWAcrpw.jpg";
import mar30_6 from "../pictures/news/30.03.2024/hMiAG2ID3nc.jpg";
import mar30_7 from "../pictures/news/30.03.2024/ps_ThBwf-nM.jpg";
import mar30_8 from "../pictures/news/30.03.2024/uwMVxE6tgSw.jpg";
import mar30_9 from "../pictures/news/30.03.2024/zdXdCj3x9v8.jpg";
import apr13_1 from "../pictures/news/13.04.2024/20240407_143738.jpg";
import apr13_2 from "../pictures/news/13.04.2024/20240407_143756.jpg";
import apr13_3 from "../pictures/news/13.04.2024/20240407_144042.jpg";
import apr13_4 from "../pictures/news/13.04.2024/20240407_144606.jpg";
import apr13_5 from "../pictures/news/13.04.2024/20240407_145122.jpg";
import apr13_6 from "../pictures/news/13.04.2024/20240407_145139.jpg";
import apr13_7 from "../pictures/news/13.04.2024/20240407_151451.jpg";
import apr13_8 from "../pictures/news/13.04.2024/20240407_151804.jpg";
import apr13_9 from "../pictures/news/13.04.2024/IMG-20240408-WA0087.jpg";

export const newsSliderSlice = createSlice({
  name: "newsSlider",
  initialState: [
    {
      id: 0,
      url: slider1,
      date: "19.01.2024",
      text: `19 января 2024г. участники организации "Общество доступная среда" в количестве 9 чел. с 2-мя сопровождающими совершили поездку в село Семилужки Томского р-на с целью посещения храма во имя Св.Николая Угодника и музея "Дорожный павильон Цесаревича Николая".
        Сначала участники по прибытию в село Семилужки посетили храм, в котором все желющие набрали Крещенской воды и настоятель церкви о.Евгений провел беседу с учпстниками поездки  по интересущим их вопросам.
        Участники экскурсии после храма отпраились в Казачий Острог (своеобразный музей под открытым небом), где приняли участие в праздновании "Крещения Господня". Руководитель музея Владимир Ильин провел небольшую, но очень содержательную экскурсию в которой познакомил с историей Качачьего Семилужского Острога с его назначением и ролью в охране г.Томска от набегов средне-азиатских племён и показал воинское казачье снаряжение и предметы быта домашнего обихода Томских казаков.
        После Казачьего Острога участники поездки посетили музей "Дорожный павильон Цесаревича Николая". Экскурсию провела руководитель музея Галина Егоровна Горбунова.
        Экскурсанты внимательно прослушали историю появления в музее древа династии Романовых, историю путешествия  Цесаревича Николая по Российской Империи от г.Владивостока до г.Санкт-Петербурга, об остановке  Цесаревича в г.Томске летом в 1891г. 
        Галина Егоровна показала выставку Обрядовых изделий  посвященную Рождеству, Крещению Господня и русским традициям.
        Все участники поездки выразили благодарность руководителю музея Казачьего Острога, настоятелю храма,  руководителю Дорожного павильона Цесаревича Николая за полученные знания, за внимательное, доброжелательное отношение к "особой" категории экскурсантам.
        Участники поездки выразили организаторам поездки в с.Семилужки  благодарность и предложили почаще организовывать такие экскурсии.
        Председатель ТРОО "Общество доступная среда".`,
      img: [jan19_1, jan19_2, jan19_3, jan19_4, jan19_5, jan19_6, jan19_7, jan19_8, jan19_9, jan19_10,],
    },
    {
      id: 1,
      url: slider2,
      date: "24.01.2024",
      text: `По приглашению фонда "Соработничество" председатель ТРОО "Общество доступная среда" Игнатова Ю.А. и руководитель проекта "Помним, познаем,храним и передаем другим"в рамках конкурса "Бережливое сознание" Михайлова В.И. посетили ежегодные XXXll Международные Рождественские образовательные чтения в г. Москва с 24 по 26 января 2024г.
        24 января в Кремлёвском Дворце съездов состоялось открытие Рождественных чтений, которые были открыты приветственным выступлением Патриархом Московским и всея Руси Кириллом. Участников Чтений приветствовали также представители Правительства РФ, Гос.Думы и Федерального Собрания.
        После торжественной части состоялся концерт посвященный прославлению России.
        25 января приняли участие в работе секций Рождественных чтений по выбранной теме напоавлений в Зале Церковных соборов храма Христа Спасителя и ознакомились с выставкой-ярмаркой православной продукции.
        26 января по программе фонда "Соработничество" в конференц-зале Зала церковнях соборов храма Христа Спасителя приняли участие в Дискуссии "От устоев и  развития к устойчивому будущему" и Круглом столе "Год семьи. Православные инициативы в проектах". В результате этого заседания познакомились с общим направлением работы по сохранению и передачи современному поколению русских православных традиций, особенно через воспитание детей и молодежи в семье. Участниками Круглого стола из разных регионов страны были представлены интересные проекты по работе с семьями и молодежью.
        Михайлова В.И. и Игнатова Ю.А. после посещения Рождественских чтений  выразили свое мнение,что это мероприятие было: грандиозным, великолепным и очень полезным!`,
      img: [jan24_1, jan24_2, jan24_3, jan24_4, jan24_5, jan24_6, jan24_7, jan24_8, jan24_9, jan24_10,],
    },
    {
      id: 2,
      url: slider3,
      date: "03.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 03 февраля 2024г. в Томском Областном Краеведческом музее состоялась экскурсия «Томск и Томичи в годы Великой Отечественной войны 1941-1945г.г.».
        Экскурсовод музея Мария Никольская провела очень интересную и познавательную экскурсию, её участники инвалиды по зрению познакомились с состоянием промышленности и численностью населения г.Томска накануне ВОВ, узнали сколько промышленных предприятий и советских граждан было эвакуировано в Томск в течение 1941-42г.г. Экскурсовод подробно остановилась на выпускаемой для фронта продукции, на работе госпиталей, учёных г.Томска, самоотверженном труде Томичей во имя Победы над врагом. Экскурсанты познакомились с подвигом томских дивизий и Томичей на фронтах Великой Отечественной войны, героизм которых увековечен в названиях томских улиц. Экскурсия произвела на её участников глубокое впечатление. Благодарность за неё они выразили в Книге отзывов.`,
      img: [feb03_1, feb03_2, feb03_3, feb03_4, feb03_5, feb03_6, feb03_7, feb03_8, feb03_9,],
    },
    {
      id: 3,
      url: slider4,
      date: "16.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 16 и 17 февраля 2024г. состоялась поездка в с.Кривошеино и г.Колпашево участников литературного мини-театра.
      Участники мини-театра показали мини-спектакль посвященный 100летию со дня рождения поэту и прозаику Э.А.Асадову, которое отмечалось 07 сентября 2023г. по его произведениям и спектакль по рассказу А.П.Чехова "Радость" зрителям МО ВОС с.Кривошеино 16 февраля и зрителям МО ВОС г.Колпашево 17 февраля.
      Спектакль по рассказу А.П.Чехова, посвящается 420летию г.Томска и 220летию образованию Томской губернии в память о пребывании в г.Томске великого русского писателя во время пути на о.Сахалин. Самодеятельные артисты старались донести до зрителей преклонение перед боевым, гражданским и духовным подвигом Э.Асадова, значение его творчества для советских людей второй половины 20-го столетия и будущего поколения, которое является весомым вкладом в литературное наследие нашей страны. А в спектакле по рассказу А.П.Чехова артисты сумели передать иронию и юмор содержания рассказа, главный герой которого исполнился небывалой радостью, что о нем, попавшего в нетрезвом состоянии под сани извозчика, сообщили в газете.
      Зрители МО ВОС с.Кривошеино и МО ВОС г.Колпашево тепло встретили представление мини-театра и выразили надежду, что такая встреча будет не последней.
      Руководитель проекта В.И.Михайлова передала в дар МО ВОС с.Кривошеино изображения икон Богоматери, Святителя Николая Чудотворца, Святой Троицы и иконы Святых, выполненных в технике рельефной графики на пластиковой основе специально для слепых и слабовидящих. Эти изображения были приобретены организацией на средства православного гранта 2022г. Свою благодарность участникам мини-театра зрители с.Кривошеино выразили в лице председателя Совета ветеранов Кривошеинского р-на Смысловой С.В. в благодарственном письме.`,
      img: [feb16_1, feb16_2, feb16_3, feb16_4, feb16_5, feb16_6, feb16_7, feb16_8, feb16_9,],
    },
    {
      id: 4,
      url: slider5,
      date: "29.02.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 29 февраля 2024г. состоялась экскурсия «Герой Советского Союза И.С.Черных – «Огненный лётчик».
      Экскурсию провела руководитель проекта В.И.Михайлова, в ней приняли участие 12 инвалидов по зрению, Экскурсия началась от Томского Индустриального техникума, расположенного по ул. Беленца, д.11. В 30-е г.г. 20 века техникум являлся ФЗУ завода «Металлист» (Фабрично заводское училище, ныне Томского электромеханического завода).
      Над входом техникума установлена мемориальная доска, сообщающая, что с февраля 1935г. по апрель 1936г. в этом учебном заведении (ФЗУ завода «Металлист») учился Герой Советского Союза Иван Сергеевич Черных. Экскурсовод рассказала, как он поступил в училище, какую получилось в нём специальность, куда был направлен на работу после окончания учёбы в училище, и обратил внимание на корпус внутри двора, где располагались мастерские училища. Затем участники экскурсии проехали по пр. Ленина, мимо главного корпуса ФЗУ, ныне учебной базы факультета журналистика ТГУ (пр.Ленина, д.66). Далее автобус проследовал до ул. Петропавловская по маршруту, по которому, учащийся И.С.Черных ходил от своего дома до ФЗУ. После экскурсанты остановились у старого здания школы №4, в котором И.С.Черных окончил 6 классов. Экскурсия завершилась у памятника Героя на площади возле Дворца культуры Авангард. В экскурсии Михайлова В.И. использовала материал о жизни и подвиге Героя, собранный в Центральном архиве Министерства Обороны, из воспоминаний его матери, с которой встречалась в свои школьные годы, и содержание экскурсии получилось, интересным, увлекательным и эмоциональным. Это отметили в своих отзывах участники экскурсии. Для них многие факты, изложенные в экскурсии, оказались совершенно новыми, услышанными впервые.
      В Томске мы ходим по улицам названия, которых посвящены Героям страны, выдающимся людям страны и города, но фактически мало знаем об их жизни, деятельности, подвигах. Поэтому такие экскурсии. Как о Герое-летчике И.С.Черных, вошедшем в истории Великой Отечественной войны под названием «Огненный лётчик», несомненно, полезны и необходимы.`,
      img: [feb29_1, feb29_2, feb29_3, feb29_4, feb29_5, feb29_6, feb29_7, feb29_8, feb29_9,],
    },
    {
      id: 5,
      url: slider6,
      date: "02.03.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 02 марта 2024г. в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им. А.С.Пушкина состоялось открытие выставки «Семейные реликвии» и экскурсия для участников проекта и членов организации и читателей библиотеки.
      На выставку были  предоставлены экспонаты членов ТРОО «Общество доступная среда»: Андреевой А.Я.,  Михайловой В.И., Былиной О.А., Ивановой Е.М., Лубениковой И.В., Костиковой Е.И., Головиной Г.П., Игольниковыми Е.И. и В.В., Тогушаковой Л.А.
      Представленные экспонаты участников выставки  коротко рассказывали о трудовых, боевых заслугах, творческих способностях их обладателей и преемственности сохранения семейных ценностей в семье в настоящее время.
      На выставке присутствовало 30 чел., они   внимательно прослушали  пояснение к выставке, описание каждого экспоната и кто его представил и кому он принадлежал.
      Присутствующие члены Организации после экскурсии  высказали своё мнение, что подобные выставки интересны и полезны, и о многом рассказывают, о жизни и деятельности  о членах организации, их членов семей и родственников.`,
      img: [mar02_1, mar02_2, mar02_3, mar02_4, mar02_5, mar02_6, mar02_7, mar02_8, mar02_9,],
    },
    {
      id: 6,
      url: slider7,
      date: "02.03.2024.",
      text: `02 марта 2024г. в Отделе библиотечного обслуживания людей с ограничениями жизнедеятельности ТОУНБ им. А.С.Пушкина состоялся праздник посвящённый Женскому Дню 8 марта.
      Программа праздника включала Конкурс семейных пар и концерт участников художественной самодеятельности.
      Две супружеские пары Головины Г.П. и Л.Н. и Игольниковы Е.И. и В.В. показали подготовленные для конкурса 5 заданий, коротко рассказали о своих занятиях, о дне знакомства, о самом важном и запомнившемся событии в их жизни и представили номер худ.самодеятельности. Супруги Головины сценку «Птичий рынок», а супруги Игольниковы стихотворение «Я не могу без тебя». Для 3й супружеской пары Юшковых И.А. и В.В. была подготовлена специальная тест-викторина. Мероприятие всем участникам очень понравилось, отзывы о нем звучали: «Очень хорошо!,» «Здорово!», «Отлично!».`,
      img: [mar022_1, mar022_2, mar022_3, mar022_4, mar022_5, mar022_6, mar022_7, mar022_8, mar022_9,],
    },
    {
      id: 7,
      url: slider8,
      date: "05.03.2024",
      text: `05 марта 2024г. состоялась запись радиопередачи на рвдиоканале "Другое радио" в рамках конкурса "Бережливое сознание" по проекту "Помним, познаем, храним и передаем другим".
      В записи передачи приняли участие руководитель проекта Михайлова, В.И., председатель ТРОО "Общество доступная среда"Игнатова Ю.А. и участники реализации проекта Иванова Е.М., Лубеникова И.В., Былина О.А., Савченко С.Н.
      Участники радиопередачи рассказали в каких мероприятиях они приняли участие, что интересного для себя узнали, где побывали, как проявили свои творческие способности и какие знания они уже передали и передадут другим людям-членам Организации-инвалидам по зрению и членам своей семьи.`,
      img: [mar05_1, mar05_2, mar05_3, mar05_4, mar05_5, mar05_6, ],
    },
    {
      id: 8,
      url: slider9,
      date: "25.03.2024",
      text: `25 марта в  рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" состоялась экскурсия "Томск Альма-Матер".
      Экскурсию провел "общественный экскурсовод" Алексей Николаевич Минаев.
      Она началась от главных ворот в главную аллею Университетской Рощи.
      Экскурсовод познакомил участников экскурсии с историей возникновения решения о строительстве университета в Томске до его реализации, о политических и экономических проблемах в Российской Империи, помешавших осуществлению строительства в начале 19 в.
      Открытие в Томске Императорского унивеситета в 1888г. имело огромное значение для развития высшего образования на огромной зауральской территории Империи, для развития научно-технического потенциала Сибири и Дальнего Востока, привлечения в Сибирь научной интеллегенции, инженерно-технического персонала. Кроме того, в Томске в Императорский университет для обучения поступали молодые люди из Европейской части России, неся с собой свободолюбивые веяния.А со временем Томский университет стал Альма-матерью и для передовых молодых людей из Казахстана и Средней Азии.
      Экскурсовод провел экскурсантов по территории Рощи и показал главный корпус университета и другие корпуса, которые были построены в конце 19-го, в начале 20-го и в конце 20-го в.в. А.Н.Минаев сообщил для каких Томских университетов ТГУ стал основой-Томский политехнический университет(в1896г.был открыт как Технологический институт Томского университета), Сибирский государственный мед.университет при открытии Томского Императорского университета являлся медицинским  факультетом.В конце 19-го и начале 20-го в.в. около Томского Императорского унивеситета возник своеобразный Студенческий городок с учебными корпусами, мед.клиниками, ботаническим садом, студенческими общежитиями и жилыми домами для профессорского и преподавательского состава.Экскурсанты узнали о выдающихся выпускниках унивеситета, его ученых, факультетах на которых обучается тысячи студентов Сибири, Двльнего Востока, из Европейской части России, Средней Азии, Казахстана.Томский государственный университет и его "собратья" стали основой Томска как науко-образовательного города-"Науко-града".`,
      img: [
        mar25_1,
        mar25_2,
        mar25_3,
        mar25_4,
        mar25_5,
        mar25_6,
        mar25_7,
        mar25_8,
        mar25_9,
      ],
    },
    {
      id: 9,
      url: slider10,
      date: "30.03.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" 30 марта для инвалидов по зрению МО ВОС с.Кривошеино состоялась экскурсия «Томск – Губернский и Областной центр». Руководитель проекта Михайлова В.И. и активные его участники Иванова Е.М., Булыгина И.Н., Савченко С.Н. провели экскурсию для членов МО ВОС 6 человек (Шаповалов Н.В., Шаповалова Н.В., Жукова Н.Н., Шаповалов М., Козьякова Д., Куцман Е.) с. Кривошеино: по центральному району г.Томска, где сохранилось много зданий построенных ещё в конце 19-го и начале 20-го века. Экскурсия началась от Отдела библиотечного обслуживания людей с ограничениями жизнедеятельности. Руководитель проекта Михайлова В.И. рассказала о здании, в котором располагается Отдел, его архитекторе, владельцах в начале 20-го века, об учреждениях, находившихся в нём в Советский период. Затем участники экскурсии прошлись по проспекту Ленина, знакомясь со зданиями, в которых находятся различные торговые предприятия и муниципальные учреждения, в т.ч. на углу пер. Нахановича (бывший Ямской пер.) и пр. Ленина (бывшая Почтамская) дом Гадалова, построенного по проекту К.К. Лыгина. В этом доме с начала 20-го века до настоящего времени на 1-м этаже находится продовольственный магазин, а на 2-м и 3-м этажах в настоящее время располагаются некоторые отделы Советского р-на г.Томска и Городская Дума. «Общественный экскурсовод» Савченко С.Н. вместе с руководителем проекта рассказали о Центральном базаре г.Томска, его «гостином дворе» и зданиях, построенных в начале 20-го века, в которых совершались торговые сделки, заключались договора о поставках товаров, встречи купцов и промышленников. Эти здании сохранились и являются украшением центром города. На пл Ленина участники экскурсии посетили Часовню во имя Иверской иконы Божией Матери и прослушали рассказ о её строительстве. Экскурсанты проследовали на Воскресенскую гору по улицам Обруб и Бакунина в музей Истории г.Томска по пути следования руководитель проекта познакомила с историей возникновения этих улиц. Экскурсовод музея провела экскурсию по экспозициям: Томская крепость, Томск – купеческий, крестьянский быт 18-го-19-го в.в. Экскурсовод предоставила возможность инвалидам по зрению потрогать своими руками макет крепостной стены, предметы купеческого, крестьянского быта, одежду того времени и воинские доспехи казаков. После завершения экскурсии гости из с. Кривошеино вернулись в Отдел библиотечного обслуживания и посмотрели представление мини-спектаклей, который представили участники литературного мини-театра. Участники мини-театра в количестве 8 человек показали литературную композицию о жизни и творчестве поэта Николая Клюева и мини-спектакль по рассказам А.П.Чехова «Подарок» и «Радость». Самодеятельные актёры сумели своей игрой и чтением стихотворений Н.Клюева вызвать у зрителей духовно-эмоциональный подъём, который выразился в дружных аплодисментах и словах - «замечательно», «здорово», «хотим еще побывать на подобных представлениях». Председатель МО ВОС с. Кривошеино Шаповалов Н.В выразил глубокую благодарность за оказанный им прием и организацию экскурсий по городу Томску и в музей Истории г.Томска, они узнали много интересного и полезного об истории Томска, его развитии и сохранении исторического и культурного наследия.`,
      img: [
        mar30_1,
        mar30_2,
        mar30_3,
        mar30_4,
        mar30_5,
        mar30_6,
        mar30_7,
        mar30_8,
        mar30_9,
      ],
    },
    {
      id: 10,
      url: slider11,
      date: "13.04.2024",
      text: `В рамках конкурса "Бережливое сознание" по проекту ТРОО "Общество доступная среда" "Помним, познаём, храним и передаем другим" с 07 по 11 апреля 2024г. для участников проекта-инвалидов по зрению в кол-ве 10 чел. состоялась поездка в г.Новокузнецк с целью знакомства с историей освоения Юга Западной Сибири томскими казаками и служивыми людьми, с историей развития духовной жизни, боевым и трудовым подвигом строителей и трудящихся Кузнецкого металлургического комбинате и Западно-Сибирского металлургического завода. В перввй день пребывания в г.Новокузнецке 07 апреля группа туристов посетила литературно-мемориальный музей Ф.М.Достоевского. Экскурсанты в доме-музее прошлись по постоянно действующей экспозици, которая состоит из 5 залов: "Дорога', 'Кузнецкий пятачок", "Салон госпожи Москалевой", "Треугольник", "Венчание". Экскурсовод рассказала о небольшом сроке пребывании Ф.М.Достоевского в г.Кузнецке в середине19 в. и его венчании в 1857г. в Градо-Кузнецкой Одигитриевской церкви. В конце экскурсии экскурсанты прослушали запись из отрывка спектакля о венчании Ф.М. Достоевского в г.Кузнецке, поставленного актерами Новокузнецкого драматического театра. В завершении экскурсии все ее участники прошлись по придомовой территории и сфотографировались на память. После экскурсии участники поездки совершили прогулку по парку Ю.А.Гагарина, и проспекту Металлургов.`,
      img: [
        mar30_1,
        mar30_2,
        mar30_3,
        mar30_4,
        mar30_5,
        mar30_6,
        mar30_7,
        mar30_8,
        mar30_9,
      ],
    },
  ],
  reducers: {
    reducer: (state) => state,
  },
    addlink: (state, action) => {
      state.current = action.payload;
    }
});

export const { reducer } = newsSliderSlice.actions;

export default newsSliderSlice.reducer;