//Importanto Audio ==> new Audio("Src");
const HOW_PLEASANT = new Audio("./audio/How pleasant, this feeling.mp3");
const THE_MOMENT = new Audio("./audio/The moment you hold me.mp3");
const I_MISSED_YOU = new Audio("./audio/I missed you, I'm sorry.mp3");
const IVE_GIVEN = new Audio("./audio/I've given what I have.mp3");
const I_SHOWED = new Audio("./audio/I showed you I'm growing.mp3");
const THE_ASHES = new Audio("./audio/The ashes fall slowly.mp3");
const AS_YOUR_VOICE = new Audio("./audio/As your voice consoles me.mp3");
const HOURS_PASS = new Audio("./audio/As the hours pass.mp3");
const LET_YOU_KNOW = new Audio("./audio/I will let you know.mp3");
const NEED_TO_ASK = new Audio("./audio/That I need to ask.mp3");
const BEFORE_IM_ALONE = new Audio("./audio/Before I'm alone.mp3");
const HOW_IT_FEELS = new Audio("./audio/How it feels to rest.mp3");
const PATIENT_LIPS= new Audio("./audio/On your patient lips.mp3");
const ETERNAL_BLISS= new Audio("./audio/To eternal bliss.mp3");
const GLAD_KNOW= new Audio("./audio/I'm so glad to know.mp3");

//Criando um mapa para os botões do teclado:
const ordemAudioObjeto = {
    a: HOW_PLEASANT,
    b: THE_MOMENT,
    c: I_MISSED_YOU,
    d: IVE_GIVEN,
    e: I_SHOWED,
    f: THE_ASHES,
    g: AS_YOUR_VOICE,
    h: HOURS_PASS,
    i: LET_YOU_KNOW,
    j: NEED_TO_ASK,
    k: BEFORE_IM_ALONE,
    l: HOW_IT_FEELS,
    m: PATIENT_LIPS,
    n: ETERNAL_BLISS,
    o: GLAD_KNOW,   
}

function ativarAudioAoApertar(key){
    if (ordemAudioObjeto[key])
        ordemAudioObjeto[key].play();
}

//Ativando o áudio quando o botão do teclado é pressionado
window.addEventListener("keydown", function (e){
    const botaoAtivado = e.key.toLowerCase();
    ativarAudioAoApertar(botaoAtivado);
})
