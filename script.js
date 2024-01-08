"use strict";

const langArr = {
  "page-title": {
    ua: "привіт, я - ірина брусенцова.",
    en: "hi, i`m iryna brusentsova.",
  },
  "page-subtitle": {
    ua: "фронтенд розробник та інженер",
    en: "frontend developer and engineer",
  },
  "about-description-1": {
    ua: "Привіт, я - Іра! Одна з тих, кому знайоме відчуття, що знаходишся не на своєму місці. Багато років я займалася розробкою креслень та технологій обробки і контролю деталей з металу. От працюєш, наче добре виходить, але хотілося іншого, більш цікавого для себе,неординарного.Коли я про це замислювалася, в маленькому місті, де я тоді жила, навіть не знали такої професії, як веб-розробник).Це типу як гапакс у шкільній літературі. Що вже казати про стабільний інтернет, який працював від домашнього телефону. Доречі, телефон теж був не у всіх))",
    en: "Hi, I am Irina and I am one of those, who knowns what is like to feel - it`s not my cup of tea.I was designing drawings and technologies for processing and controls metal parts for many years. So I was designing, it seems to work out well, but I wanted something else, more interesting for myself, extraordinary.When I thought about it, living in small town, even anybody did not know the profession such as a web developer.It sounded like `an once in a blue moon`.There was not stabile internet connecting, which addict to home telephone connecting. Not everybody had the home telephones.",
  },
  "about-description-2": {
    ua: "Час минав, технології прогресували і почалися мої довгі `пошуки себе`. Так були освоєні професії менеджера банку та аудитора ситеми якості ISO9001. А одного разу, виконуючи аудит сайту одній із компаній, я відмітила в якості користувача, що він потребує покращень. Але яких? Тут інтуїція ще напружено мовчала. Та дуже було цікаво, як це там все влаштовано, хто цим керує, що то за потустороння позаекранна сила? Це стало викликом для мене і водночас поштовхом. Ми з інтуїцією зрозуміли, що здається ми стали на великий шлях до нової професії. ",
    en: "Time was passing, the technologies was transforming and I started to look for myself in new professions. I worked as a manager in a bank and ISO9001 Quality Assurance Engineer. Once upon, doing the audit of website one of company, I noticed like a user that it needed improves. But what improves did it need? Here my intuition  was tensely silent. But it was very interesting,how it is all arranged there, who controls it, what kind of magical off-screen force? It became a challenge for me and at the same time a motivation. My intuition and me got that we had started to long way a new profession.",
  },
  "about-description-3": {
    ua: "Я почала дослідницький рух в цьому напрямку, який навіть не знала, як називається) Згодом з'ясувалося, що цей напрямок - фронтенд розробка. Мені було трохи страшно прийняти рішення про зміну професії. Але лозунг “Ввійти в АйТі після 39-ти” мені допоміг))Тому, я кажу, що вивчаю фронтенд не з нуля, з мінуса. І це правда.",
    en: "I began to discover this direction, which I even didn`t know haw it called. I later clearned that was frontend development.I was a little afraid to make the decision to change my profession. But the slogan `Enter IT after 39` helped me)). That is why I say that I  study the frontend not from null, but from minus.It`s true.",
  },
  "about-description-4": {
    ua: "Було вже підібрано відповідний курс для навчання, але почалася війна... Багато людей втратили свої життєві орієнтири, роботу, все змінилося.Я переїхала до Польщі. Почала вивчати фронтенд самостійно за допомогою курсів на ютюбі, спільнот в телеграм та ін. І тут, випадково дізналася, що можна отримати грант на навчання за напрямком Frontend developer від польської школи програмування Kodilla шляхом невеличкого конкурса, правда. А саме з 1500 претендентів було обрано 15 людей. Авжеж, я отримала той грант! Далі була дуже насичена программа навчання, опрацьований величезний об'єм інформації, виконані дедлайни. Та-дам! Курс успішно закінчено!",
    en: "A suitable course for study was chosen, but the war began... Many people have lost their life orientations, jobs, everything has changed.I moved to Poland. I began to study the frontend on my own with the help of courses on YouTube, communities in Telegram, etc. And then, by chance, I found out that it is possible to get a grant for studies in the direction of `Frontend developer` from the Polish Kodilla programming school through a  competition. Namely, 15 people were chosen from 1500 applicants.I got this grant for sure!Further there was a very intense training program, processed a huge amount of information, deadlines were completed. The course was successfully completed!",
  },
  "about-description-5": {
    ua: "Та, звичайно, я продовжую далі навчання. Майже вся документація, що є у веб-розробці, на англійській мові, яку я постійно вдосконалюю. Бо треба ж майбутнім колегам розповідати про ті далекі нульові, як я хотіла отримати професію, назву якої навіть не знала.",
    en: "But, of course, I continue my education. Almost all documentation in the web development is in English, which  I am  improving constantly. Because it is necessary to tell future colleagues about those distant zero years, how I wanted to get a profession, the name of which I didn`t even know.",
  },
};

const langUa = document.querySelector(".ua");
console.log(langUa);

const langEn = document.querySelector(".en");
console.log(langEn);

langUa.addEventListener("click", changeLanguage);

function changeLanguage() {
  document.querySelector(".page-title").innerHTML = langArr["page-title"]["ua"];
  document.querySelector(".page-subtitle").innerHTML =
    langArr["page-subtitle"]["ua"];
  document.querySelector(".about-description-1").innerHTML =
    langArr["about-description-1"]["ua"];
  document.querySelector(".about-description-2").innerHTML =
    langArr["about-description-2"]["ua"];
  document.querySelector(".about-description-3").innerHTML =
    langArr["about-description-3"]["ua"];
  document.querySelector(".about-description-4").innerHTML =
    langArr["about-description-4"]["ua"];
  document.querySelector(".about-description-5").innerHTML =
    langArr["about-description-5"]["ua"];
}
changeLanguage();

langEn.addEventListener("click", changeLanguageEn);

function changeLanguageEn() {
  document.querySelector(".page-title").innerHTML = langArr["page-title"]["en"];
  document.querySelector(".page-subtitle").innerHTML =
    langArr["page-subtitle"]["en"];
  document.querySelector(".about-description-1").innerHTML =
    langArr["about-description-1"]["en"];
  document.querySelector(".about-description-2").innerHTML =
    langArr["about-description-2"]["en"];
  document.querySelector(".about-description-3").innerHTML =
    langArr["about-description-3"]["en"];
  document.querySelector(".about-description-4").innerHTML =
    langArr["about-description-4"]["en"];
  document.querySelector(".about-description-5").innerHTML =
    langArr["about-description-5"]["en"];
}
changeLanguageEn();
