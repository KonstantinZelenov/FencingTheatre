
/*const tr = {
    RU: {
        FIO: "Константин"
        ghgh:
    },
    EN: {
        FIO: "Konstantin"
    }
}

const translate = (lang) => {
    document.querySelector(".header__h1").innerHTML = tr[lang].FIO
}
*/

function show() {

const headerHeading = document.getElementById("headerNameLink");
headerHeading.innerHTML = "КОНСТАНТИН ЗЕЛЕНОВ";

const mainHeading = document.getElementsByTagName("h2");
mainHeading[0].innerHTML = "КОНСТАНТИН ЗЕЛЕНОВ";

const descriptionHeading = document.querySelector(".description-title_p");
descriptionHeading.innerHTML = "Тренер по фехтованию, каскадёр, спортсмен";

const headerList = document.getElementsByClassName("header__links-li");
headerList[0].innerHTML = "Обо мне";
headerList[1].innerHTML = "Проекты";
headerList[2].innerHTML = "Школа";
headerList[3].innerHTML = "Цены";
headerList[4].innerHTML = "Контакты";


const headerDropList = document.getElementsByClassName ("header__dropdown-li");
headerDropList[0].innerHTML = "Меню";
headerDropList[1].innerHTML = "Обо мне";
headerDropList[2].innerHTML = "Проекты";
headerDropList[3].innerHTML = "Школа";
headerDropList[4].innerHTML = "Цены";
headerDropList[5].innerHTML = "Контакты";

const navList = document.getElementsByClassName("nav-translate");

navList[0].innerHTML = "Инстаграм";
navList[1].innerHTML = "Личный блог";
navList[2].innerHTML = "ВКонтакте";
navList[3].innerHTML = "Больше фото в альбомах";
navList[4].innerHTML = "Телеграм";
navList[5].innerHTML = "Напишите мне";
navList[6].innerHTML = "Константин Зеленов, тренер, каскадёр, актёр.";

document.getElementById("contacts").innerHTML = "Контакты";

const el = document.getElementsByTagName("h3");
el[0].innerHTML = "Обо мне";
el[1].innerHTML = "О проекте";
el[2].innerHTML = "О школе";
el[3].innerHTML = "Цены";
el[4].innerHTML = "Персоналка";
el[5].innerHTML = "Сплит занятие";
el[6].innerHTML = "Групповое занятие";
el[7].innerHTML = "Съёмка видео";


const aboutTrainerText = document.getElementsByClassName ("about-trainer__text-p");
aboutTrainerText[0].innerHTML = "Здравствуйте, меня зовут Константин Зеленов, и я рад поделиться с вами своей историей. Последние 20 лет своей жизни я посвятил фехтованию, оттачивая свое мастерство спортсмена, каскадера, актера театра и кино.";
aboutTrainerText[1].innerHTML = "Я дважды становился чемпионом мира по артистическому фехтованию. Несколько раз был чемпионом России и многократным призером соревнований по артистическому фехтованию.";
aboutTrainerText[2].innerHTML = "На протяжении всей своей карьеры я имел честь тренировать множество учеников, которые впоследствии заняли призовые места в соревнованиях по артистическому фехтованию. Мой опыт в фехтовании, трюках и актерском мастерстве позволяет мне привнести уникальный взгляд на тренировочный процесс.";
aboutTrainerText[3].innerHTML = "Присоединяйтесь ко мне в этом необыкновенном путешествии, где мы будем изучать сложные движения ног, технику владения оружием и актёрское мастерство.";
aboutTrainerText[4].innerHTML = "Мечтаете ли вы подняться на пьедестал чемпионата или просто хотите испытать острые ощущения от этой древней формы искусства, я здесь, чтобы помочь вам на каждом этапе пути.Свяжитесь со мной сегодня, чтобы начать захватывающее приключение в мир фехтования. Давайте создадим что-то необыкновенное вместе!";

const aboutProjectText = document.getElementsByClassName ("about-project__text__p");
aboutProjectText[0].innerHTML = "Шагните в мир, где переплетаются искусство и фехтование. Наши видео- и театральные проекты в области артистического фехтования выходят за рамки простого боя, c помощью тщательно поставленных боевых сцен мы создаем визуальную симфонию движения и мастерства, очаровывая зрителей красотой и интенсивностью этого вида спорта. Мы стремимся зажечь искру в сердцах и умах тех, кто стал свидетелем наших выступлений.";
aboutProjectText[1].innerHTML = "Каждый взмах меча, каждое парирование и каждая драматическая пауза тщательно продуманы, чтобы передать повествование, выходящее за пределы физического мира. Мы стремимся затронуть души наших зрителей, оставить их в раздумьях еще долго после того, как опустится последний занавес или исчезнет последний кадр.";
aboutProjectText[2].innerHTML = "Присоединяйтесь к нам в этом художественном путешествии, где мечи становятся кистями, а сцена — нашим холстом. Вместе мы создадим моменты чистой магии, где столкновение стали и сила рассказывания историй оставят неизгладимое впечатление.";

const videoContentDiscription = document.getElementsByClassName("video-content__discription__p");

videoContentDiscription[0].innerHTML = "Добро пожаловать в нашу школу фехтования. Наши занятия фехтованием не только обучат вас основам техники, таким как атаки, защиты и перемещения, но и помогут развить гибкость, координацию движений и силу. Каждый ученик получит внимание и поддержку, чтобы достичь максимальных результатов в своем развитии как фехтовальщик.";
videoContentDiscription[1].innerHTML = "Мы также предлагаем обучение каскадерскому искусству, где вы сможете освоить трюки, падения, и все необходимые навыки для создания захватывающих сцен боя на экране или на сцене.";
videoContentDiscription[2].innerHTML = "Мы верим, что фехтование и каскадерство - это не только физические навыки, но и искусство самовыражения и творчества.";

const discription__price = document.getElementsByClassName("discription__priceList");

discription__price[0].innerHTML = "Длительность: 1 час.";
discription__price[1].innerHTML = "Стоимость: 2500 р.";
discription__price[2].innerHTML = "Описание: Аренда зала оплачивается отдельно. За час успеваем провести разминку, выучить фехтовальные элементы, провести заминку.";
discription__price[3].innerHTML = "Длительность: 1.5 часа.";
discription__price[4].innerHTML = "Стоимость: 3500 р.";
discription__price[5].innerHTML = "Описание: Аренда зала оплачивается отдельно. За полтора часа успеваем провести разминку, выучить фехтовальные и базовые акробатические элементы, провести заминку.";
discription__price[6].innerHTML = "Длительность: 2 часа.";
discription__price[7].innerHTML = "Стоимость: 4000 р.";
discription__price[8].innerHTML = "Описание: Аренда зала оплачивается отдельно. За 2 часа проводим разминку/заминку. Учим фехтовальные,акробатические элементы. Обсуждаем идею номера и то, как её осуществить.";
discription__price[9].innerHTML = "Длительность: 1 час.";
discription__price[10].innerHTML = "Стоимость: 3500 р.";
discription__price[11].innerHTML = "Описание: Аренда зала оплачивается отдельно. За час успеваем провести разминку, выучить фехтовальные элементы, провести заминку.";
discription__price[12].innerHTML = "Длительность: 1.5 часа.";
discription__price[13].innerHTML = "Стоимость: 4500 р.";
discription__price[14].innerHTML = "Описание: Аренда зала оплачивается отдельно. Разминка/заминка, учим фехтовальные и акробатические элементы, учимся парному взаимодействию.";
discription__price[15].innerHTML = "Длительность: 2 часа.";
discription__price[16].innerHTML = "Стоимость: 6000 р.";
discription__price[17].innerHTML = "Описание: Аренда зала оплачивается отдельно. Разминка/заминка. Фехтование, парная акробатика, проработка идеи номера и её воплощение. Постановка номера.";
discription__price[18].innerHTML = "Длительность: 2 часа.";
discription__price[19].innerHTML = "Стоимость: 2000 р.";
discription__price[20].innerHTML = "Описание: Аренда зала входит в стоимость. За 2 часа успеваем провести разминку, выучить фехтовальные элементы, провести заминку.";
discription__price[21].innerHTML = "Мастер-класс: 4 часа.";
discription__price[22].innerHTML = "Стоимость: 3000 р.";
discription__price[23].innerHTML = "Описание: Аренда зала входит в стоимость. Разбираем сложные элементы, учим схемы групповых боёв, разбираем методики тренировки и обучения.";
discription__price[24].innerHTML = "Длительность: 8 часов.";
discription__price[25].innerHTML = "Стоимость: 6000 р.";
discription__price[26].innerHTML = "Описание: Аренда зала входит в стоимость. Полное сопровождение от идеи номера до её воплощения на сцене. План от первого занятия до выхода на сцену.";
discription__price[27].innerHTML = "Длительность: 1 час.";
discription__price[28].innerHTML = "Стоимость: 5000 р.";
discription__price[29].innerHTML = "Описание: Аренда локации или трансфер до локации отдельно. Снимаем фильм с вами в главной роли. Идея и костюмы обговариваются заранее.";
discription__price[30].innerHTML = "Длительность: 2 часа.";
discription__price[31].innerHTML = "Стоимость: 9000 р.";
discription__price[32].innerHTML = "Описание: Аренда локации или трансфер до локации отдельно. Съёмка видео, отбор материала, простой монтаж,одна правка по желанию заказчика.";
discription__price[33].innerHTML = "Длительность: 4 и более часов.";
discription__price[34].innerHTML = "Стоимость: 4000 р в час.";
discription__price[35].innerHTML = "Описание: Аренда локации или трансфер включены (в пределах города). Съёмка видео, отбор материала, монтаж, цвето коррекция. Одна правка по желанию заказчика.";
 
const formChoice = document.getElementsByTagName("option");
console.log("test", formChoice)
formChoice[0].innerHTML = "Меч";
formChoice[1].innerHTML = "Копьё";
formChoice[2].innerHTML = "Рапира";
formChoice[3].innerHTML = "Меч и щит";
formChoice[4].innerHTML = "Парные мечи";
formChoice[5].innerHTML = "Шест";

const legend = document.getElementsByTagName("legend");
legend[0].innerHTML = "Заявка";

const formLabel = document.getElementsByClassName("form__label");
formLabel[0].innerHTML = "Имя";
formLabel[1].innerHTML = "Е-мейл";
formLabel[2].innerHTML = "Оружие";
formLabel[3].innerHTML = "Сообщение";

const button = document.getElementsByClassName("form__button-button");
button[0].innerHTML = "Отправьте заявку";

};