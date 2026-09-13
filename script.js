/* =====================================
   MUSIC
===================================== */

const music =
document.getElementById("music");

const musicButton =
document.getElementById("musicButton");


function startMusic(){

    music.volume = 0.7;

    music.play()
    .then(function(){

        musicButton.textContent = "🔊";

    })
    .catch(function(){

        musicButton.textContent = "🎵";

    });

}


function toggleMusic(){

    if(music.paused){

        music.play()
        .then(function(){

            musicButton.textContent = "🔊";

        })
        .catch(function(){

            alert(
                "Mama... music start panna 🔊 button-ah click pannu ❤️"
            );

        });

    }

    else{

        music.pause();

        musicButton.textContent = "🔇";

    }

}


/* =====================================
   PAGE
===================================== */

function showPage(id){

    document
        .querySelectorAll(".page")
        .forEach(function(page){

            page.classList.remove("active");

        });

    document
        .getElementById(id)
        .classList.add("active");

    window.scrollTo(0,0);

}


/* =====================================
   START
===================================== */

function openSurprise(){

    startMusic();

    showPage("secret");

}


/* =====================================
   QUESTIONS
===================================== */

const questions = [

{

icon:"❤️",

question:
"Mama... namma story start aana first days-la enna pathi unakku enna thonuchu?",

hint:
"Unmaiya sollu... naan screenshot eduthuppen 😂",

options:[
"Romba special ❤️",
"Konjam different 😌",
"Semma curiosity 👀",
"Appove something special 🥹"
]

},

{

icon:"😏",

question:
"Namma rendu perula first-ah love feel pannadhu yaaru?",

hint:
"Indha answer romba mukkiyam Mama 😂",

options:[
"Naan dhaan 😌",
"Mama dhaan 😎",
"Rendu perum ❤️",
"Love dhaan first"
]

},

{

icon:"🥰",

question:
"Naan pannura endha chinna vishayam unakku romba cute-ah irukkum?",

hint:
"Correct answer choose pannu 😌",

options:[
"En smile 😊",
"En voice 🥹",
"En craziness 😂",
"Ellame ❤️"
]

},

{

icon:"😂",

question:
"Namma rendu perula yaaru romba seekiram kovapaduvom?",

hint:
"Unmaiya sollu Mama...",

options:[
"Naan 😌",
"Mama 😎",
"Rendu perum 😂",
"Situation-ku depend"
]

},

{

icon:"📱",

question:
"Naan oru whole day message pannama irundha... enna miss pannuva?",

hint:
"Don't lie Mama 😂",

options:[
"En messages ❤️",
"En voice 📞",
"En face 🥹",
"Ellame"
]

},

{

icon:"🫶",

question:
"Naan sad-ah irundha... enna panna enakku seekiram smile varum?",

hint:
"Enna nalla therinja answer idhu ❤️",

options:[
"Hug 🤗",
"Comedy 😂",
"Food 🍫",
"Nee pakkathula irundha podhum ❤️"
]

},

{

icon:"🥹",

question:
"Naan unakku lover mattum dhaana... illa vera edhachum special-ah irukkena?",

hint:
"Heart-la irundhu answer pannu.",

options:[
"Best friend 🫶",
"Comfort person ❤️",
"Home 🏠",
"Everything 🥹"
]

},

{

icon:"🤣",

question:
"Namma chats-la serious conversation adhigama... illa summa comedy pannradhu adhigama?",

hint:
"Namma chat history paatha answer easy 😂",

options:[
"Comedy dhaan 😂",
"Serious dhaan 😌",
"Renduume ❤️",
"Namma chats-e comedy 🤣"
]

},

{

icon:"📸",

question:
"Namma old photos paakumbodhu unakku first enna feel varum?",

hint:
"Old memories unlocked ❤️",

options:[
"Awww 🥹",
"Semma cute 😍",
"Andha days miss panren ❤️",
"Enna look idhu 😂"
]

},

{

icon:"🌎",

question:
"Namma future-la rendu perum kandippa panna vendiya oru dream enna?",

hint:
"Namma future-a konjam imagine pannu ❤️",

options:[
"Long trip ✈️",
"More memories 📸",
"Own little world 🏠",
"Everything together ❤️"
]

},

{

icon:"❤️",

question:
"Naan un life-la vandhadhukku apram unakku enna change aachu?",

hint:
"Idhu konjam serious question...",

options:[
"More happiness 🥰",
"More craziness 😂",
"More love ❤️",
"Everything changed 🥹"
]

},

{

icon:"🥰",

question:
"Enna pathi unakku romba pidicha oru vishayam enna?",

hint:
"One answer mattum choose pannu!",

options:[
"En caring ❤️",
"En smile 😊",
"En character 🫶",
"Ellame ❤️"
]

},

{

icon:"💗",

question:
"Innum 10 years kazhichum naan ippadiye un pakkathula irukkanum-nu aasai irukka?",

hint:
"Escape panna mudiyadhu Mama 😂",

options:[
"Always ❤️",
"Definitely 🥹",
"Lifetime 💍",
"Of course 😘"
]

},

{

icon:"😂",

question:
"Old age varaikkum en kooda irundhu daily konjam sandai poda ready-ah?",

hint:
"Idhu namma future plan 😂",

options:[
"Ready 😂",
"Always ❤️",
"Lifetime 😌",
"Already stuck with you 🤣"
]

},

{

icon:"♾️",

question:
"Last kelvi Mama... adutha jenmathulayum enna dhaan choose pannuva?",

hint:
"Last answer... heart-la irundhu. 🥹❤️",

options:[
"Unna dhaan ❤️",
"Marubadiyum unna 🥹",
"Ovvoru jenmathulayum nee ♾️",
"Vera answer-e illa 😘"
]

}

];


let questionIndex = 0;


/* =====================================
   START QUESTIONS
===================================== */

function beginQuestions(){

    questionIndex = 0;

    loadQuestion();

    showPage("questionPage");

}


/* =====================================
   LOAD QUESTION
===================================== */

function loadQuestion(){

    const q =
    questions[questionIndex];


    document.getElementById("counter")
        .textContent =
        String(questionIndex + 1)
        .padStart(2,"0")
        +
        " / 15";


    document.getElementById("questionIcon")
        .textContent =
        q.icon;


    document.getElementById("question")
        .textContent =
        q.question;


    document.getElementById("hint")
        .textContent =
        q.hint;


    const options =
    document.getElementById("options");


    options.innerHTML = "";


    q.options.forEach(function(answer){

        const button =
        document.createElement("button");


        button.className =
        "option";


        button.textContent =
        answer;


        button.onclick =
        function(){

            selectAnswer(button);

        };


        options.appendChild(button);

    });


    document.getElementById("progressBar")
        .style.width =
        ((questionIndex + 1) / 15 * 100)
        + "%";

}


/* =====================================
   ANSWER
===================================== */

function selectAnswer(button){

    const buttons =
    document.querySelectorAll(".option");


    buttons.forEach(function(item){

        item.disabled = true;

    });


    button.classList.add("selected");


    createHeart();


    setTimeout(function(){

        showMemory();

    },700);

}


/* =====================================
   MEMORIES
===================================== */

const memories = [

{

title:"Andha Azhagana Moment ❤️",

text:
"Indha photo paatha udane namma story oda oru beautiful moment nyabagam varudhu. 🥹❤️",

image:"images/photo 1.jpg"

},

{

title:"Oru Cute Ninaivu 🥰",

text:
"Simple photo dhaan... aana indha moment enakku romba precious.",

image:"images/photo 2.jpg"

},

{

title:"Just Namma ❤️",

text:
"Indha photo-la enakku pidichadhu... namma rendu perum dhaan.",

image:"images/photo 3.jpg"

},

{

title:"Un Smile ❤️",

text:
"Un smile paatha enakku innum automatic-ah smile varudhu.",

image:"images/photo 4.jpg"

},

{

title:"Oru Chinna Memory 🌸",

text:
"Sila ordinary moments later romba precious-a maaridum.",

image:"images/photo 5.jpg"

},

{

title:"Together 🫶",

text:
"Un kooda irukkura simple moments kooda enakku special.",

image:"images/photo 6.jpg"

},

{

title:"Namma Crazy Side 😂",

text:
"Konjam crazy... konjam comedy... full-a namma.",

image:"images/photo 7.jpg"

},

{

title:"En Favourite Person ❤️",

text:
"Favourite place thevai illa... favourite person irundha podhum.",

image:"images/photo 8.jpg"

},

{

title:"Innum Oru Chapter 📖",

text:
"Indha photo oru chapter... aana namma book innum perusu.",

image:"images/photo 9.jpg"

},

{

title:"Still Namma ❤️",

text:
"Time pogalam... memories oda value pogadhu.",

image:"images/photo 10.jpg"

},

{

title:"En Comfort 🥹",

text:
"Un kooda irukkumbodhu naan naana irukka mudiyudhu.",

image:"images/photo 11.jpg"

},

{

title:"Namma Little World 🌎",

text:
"Sometimes namakku vera edhuvum venam... namma rendu perum podhum.",

image:"images/photo 12.jpg"

},

{

title:"Romba Precious ❤️",

text:
"Thousands of photos irundhaalum sila moments-ku replacement illa.",

image:"images/photo 13.jpg"

},

{

title:"Almost 4 Years 🥹",

text:
"24 November 2022-la aarambicha namma story... innum azhaga continue aagudhu.",

image:"images/photo 14.jpg"

},

{

title:"Namma Story ♾️",

text:
"15 photos mudinjiduchu... aana namma memories innum countless.",

image:"images/photo 15.jpg"

}

];


/* =====================================
   SHOW MEMORY
===================================== */

function showMemory(){

    const memory =
    memories[questionIndex];


    document.getElementById("memoryNumber")
        .textContent =
        "NAMMA NINAIVU "
        +
        String(questionIndex + 1)
        .padStart(2,"0");


    document.getElementById("photoTitle")
        .textContent =
        memory.title;


    const photo =
    document.getElementById("memoryPhoto");


    photo.src =
    memory.image;


    document.getElementById("photoText")
        .textContent =
        memory.text;


    showPage("photoPage");

}


/* =====================================
   NEXT MEMORY
===================================== */

function nextMemory(){

    if(questionIndex < 14){

        questionIndex++;

        loadQuestion();

        showPage("questionPage");

    }

    else{

        showPage("storyPage");

    }

}


/* =====================================
   BIRTHDAY
===================================== */

function showBirthday(){

    createManyHearts();

    showPage("birthdayPage");

}


/* =====================================
   LETTER
===================================== */

function showLetter(){

    createManyHearts();

    showPage("letterPage");

}


/* =====================================
   FLOATING HEART
===================================== */

function createHeart(){

    const heart =
    document.createElement("div");


    heart.className =
    "floating-heart";


    heart.textContent =
    ["❤️","💗","💕","💖","✨"]
    [
        Math.floor(
            Math.random() * 5
        )
    ];


    heart.style.left =
    Math.random() * 100 + "%";


    heart.style.animationDuration =
    (4 + Math.random() * 4) + "s";


    document.getElementById("hearts")
        .appendChild(heart);


    setTimeout(function(){

        heart.remove();

    },8000);

}


function createManyHearts(){

    for(let i = 0; i < 15; i++){

        setTimeout(function(){

            createHeart();

        },i * 150);

    }

}


/* =====================================
   CONTINUOUS HEARTS
===================================== */

setInterval(function(){

    createHeart();

},1200);