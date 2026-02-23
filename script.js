// Set the start date to June 23, 2024 at 20:58:00
const startDate = new Date('2024-06-23T20:58:00');

// Upcoming Events
const upcomingEvents = [
    { title: "Os bonitinhos vão à Maia", date: new Date(new Date().getFullYear(), 2, 1) }, // 1st of march
    { title: "Via Sacra", date: new Date(new Date().getFullYear(), 2, 7) }, // 7th march
    { title: "Rita Rocha", date: new Date(new Date().getFullYear(), 2, 20) }, // 20th march
    { title: "Miguel Araujo", date: new Date(new Date().getFullYear(), 3, 29) }, // 29th april
    { title: "Carolina de Deus", date: new Date(new Date().getFullYear(), 1, 28) }, // 28th of may
    { title: "Quinteto da Morte", date: new Date(new Date().getFullYear(), 5, 18) }, // 18th june
    { title: "Michael - O Filme", date: new Date(new Date().getFullYear(), 3, 24) }, // 24th of april
    { title: "O Retorno da Hannah", date: new Date(new Date().getFullYear(), 2, 24) }, // 24th of march
];

// Reasons Why I Love You
const loveReasons = [
    "Porque o teu abraço é o meu lugar favorito no mundo.",
    "Pela forma como me fazes rir e pelo teu sentido de humor.",
    "Porque as nossas conversas até às tantas são as melhores.",
    "Pelo teu olhar e a forma como me vês de verdade.",
    "Porque amo partilhar cada momento da minha vida contigo.",
    "Pela tua força e resiliência que admiro todos os dias.",
    "Porque contigo até o silêncio é confortável e especial.",
    "Pelo conforto e segurança que me transmites.",
    "Porque te preocupas comigo e me fazes sentir valorizada.",
    "Pela forma como me motivas a ser melhor e a seguir os meus sonhos.",
    "Pelo apoio que me dás em tudo o que faço.",
    "Pelo amor que me sinto por ti.",
    "Pelo ritmo musical que nos une e se adapta a todas as situações.",
    "Porque a vida tem mais cor contigo.",
    "Porque me fizeste acreditar num amor genuíno, verdadeiro e puro.",
    "És a minha melhor amiga e fiel companheira."
];

// Array of your songs (feel free to add or change them!)
const songQuotes = [
    `I wish I could have told you that
I was born to love you
To love you with all my heart`,

    `Going back to the corner where I first saw you
Gonna camp in my sleeping bag, I'm not gonna move
So I'm not moving, I'm not moving
I'm not moving, I'm not moving`,

    `Se eu pudesse parar
O tempo agora
E sermos só nós
A falar por horas`,

    `Once in a lifetime
It's just right
And we are always safe`,

    `Tal parece que yo, me acostumbre a ti
En un solo día, que te ando extrañando
Como si hacen años que te conocía
Tal parece que yo en un solo baile te entregue mi vida
Tal parece que el sentimiento venció las reglas que había
Venció las reglas que había`,

    `When you look me in the eyes
And tell me that you love me
Everything's alright
When you're right here by my side
I catch a glimpse of heaven
I find my paradise`,

    `Now I'm speechless
Over the edge, I'm just breathless
I never thought that I'd catch this lovebug again
Hopeless, head over heels in the moment
I never thought that I'd get hit by this lovebug again`,

    `Won't you stay 'til the a.m.?
All my favourite conversations
Always made in the a.m.
'Cause we don't know what we're saying`,

    `Tem cuidado, ó Carolina
Que o lagarto dá o rabo
Tu até te vês rainha
Queima-te o patriarcado`,

    `Ainda te lembras amor
Como tudo começou?
Se te esqueceste eu não
Nosso primeiro beija beija`,

    `Pa-pa-parara
Pa-pa-parara
Tem gente que senta pra beber
Aqui 'nois bebe pra sentar`,

    `De ladin', coraçãozin'
Manda beijinho pra quem tá filmando
Macetando, macetando
Macetando, macetando`,

    `Celebrate with me tonight
Celebrate while we got time
So lucky to have you in my life
You better, you better, hit the right and hit the left now
Turn around and slide`,

    `Oh this is an S.O.S.
Don't wanna second guess
This is the bottom line
It's true`,

    `Parado no trânsito infernal da cidade
Já nem controlo a ansiedade
A fila onde me encontro
Pouco ou nada avança
Só o relógio não se cansa

Conto a conta-gotas o tempo que passa
Vejo o sol lá fora a fazer-me pirraça
Já são quatro e meia está quase na hora`,

    `Esperei por ti nas capicuas
São 20:20 onde é quе estás?
É que eu vi uma foto tua е já sei onde é que vais
São 20:20 onde é que estás?`,

    `To let the fire come out in me
I'm what you're up against, just letting you know
I keep givin' you the fire
I'ma heat it up
Under my control
Here's the night that you've been waiting on`,

    `Mas quando o universo decide acreditar
É certeza dar certo, ninguém pode mudar
Quem torceu pra gente dar errado, vai ter que aceitar
Como é que poderia dar errado entre você e eu?
Se o nosso cupido foi Deus`,

    `Abraças-me e perguntas-me ao ouvido
O porquê de termos de dormir
Eu só durmo pra sonhar contigo
Vemo-nos nos sonhos, não nos vamos despedir`,

    `God went crazy when he gave me you
Must've done something good in another life
Fifty Shades with them baby blues
So immaculately designed `,

    `They say that good things take time
But really great things happen in a blink of an eye
Thought the chances to meet somebody like you were a million to one
I can't believe it
You're one in a million`
];

function setRandomQuote() {
    const quoteElement = document.getElementById('song-quote');
    const randomIndex = Math.floor(Math.random() * songQuotes.length);

    // The fixed introductory text requested by the user
    const introText = `Aqui está um pequeno excerto de uma música da nossa história <3`;

    // Replace newline characters with HTML <br> tags so lyrics display multiline 
    const randomLyricFormatted = songQuotes[randomIndex].replace(/\n/g, '<br>');

    // Combine intro text and the random quote
    quoteElement.innerHTML = `${introText}<br><br><span class="music-lyric">${randomLyricFormatted}</span>`;
}

function updateTime() {
    const now = new Date();
    // Total difference in milliseconds
    const diffMs = now - startDate;

    // Calculate total big numbers
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    // Format numbers with commas (e.g., 1,234,567)
    const formatNumber = (num) => num.toLocaleString('en-US');

    // Update the DOM for big numbers
    const secondsInMillions = Math.floor(totalSeconds / 1000000);
    document.getElementById('total-seconds').textContent = `> ${secondsInMillions}M`;
    document.getElementById('total-minutes').textContent = formatNumber(totalMinutes);
    document.getElementById('total-hours').textContent = formatNumber(totalHours);

    // Calculate detailed breakdown (Years, Months, Days, Hours, Minutes, Seconds)

    // An elegant way to compute absolute calendar difference
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    // Adjust for negative boundaries
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Calculate days in the previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Build the detailed display HTML
    const timeUnits = [
        { value: years, label: years === 1 ? 'Ano' : 'Anos' },
        { value: months, label: months === 1 ? 'Mês' : 'Meses' },
        { value: days, label: days === 1 ? 'Dia' : 'Dias' },
        { value: hPad(hours), label: 'Horas' },
        { value: hPad(minutes), label: 'Minutos' },
        { value: hPad(seconds), label: 'Segundos' }
    ];

    let detailedHtml = '';
    for (const unit of timeUnits) {
        if (unit.value > 0 || (unit.label !== 'Ano' && unit.label !== 'Anos' && unit.label !== 'Mês' && unit.label !== 'Meses') || detailedHtml !== '') {
            detailedHtml += `
            <div class="time-unit">
                <span class="val">${unit.value}</span>
                <span class="lbl">${unit.label}</span>
            </div>`;
        }
    }

    document.getElementById('detailed-time').innerHTML = detailedHtml;
}

function renderUpcomingEvents() {
    const pastContainer = document.getElementById('past-events-container');
    const futureContainer = document.getElementById('future-events-container');
    const now = new Date();
    // Neutralizar as horas para considerar apeans as datas 
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Arrays separados para Eventos Futuros (crescente) e Eventos Passados (decrescente: os mais recentes primeiro)
    const futureEvents = upcomingEvents
        .filter(event => event.date >= today)
        .sort((a, b) => a.date - b.date);

    const pastEvents = upcomingEvents
        .filter(event => event.date < today)
        .sort((a, b) => b.date - a.date);

    const formatter = new Intl.DateTimeFormat('pt-PT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Função auxiliar para gerar o HTML dos cards repetidamente
    const generateEventsHTML = (events, emptyMessage, isPast = false) => {
        if (events.length === 0) {
            return `<p style="text-align: center; width: 100%; color: var(--text-secondary);">${emptyMessage}</p>`;
        }
        return events.map(event => `
            <div class="event-card ${isPast ? 'past-event' : ''}">
                <div class="event-date">${formatter.format(event.date)}</div>
                <div class="event-name">${event.title}</div>
            </div>
        `).join('');
    };

    // Aplicar a cada coluna com mensagens diferentes para Listas Vazias
    pastContainer.innerHTML = generateEventsHTML(
        pastEvents,
        "Ainda não temos eventos antigos registados nesta jornada.",
        true
    );

    futureContainer.innerHTML = generateEventsHTML(
        futureEvents,
        "Sem próximos planos agendados de momento."
    );
}

// Logic for Interactive Reasons
function setRandomReason() {
    const reasonText = document.getElementById('reason-text');
    // Save current reason to avoid repeating identically in a row
    const currentReason = reasonText.textContent;
    let newReason = currentReason;

    // Pick a new reason that is different from the current one
    while (newReason === currentReason) {
        const randomIndex = Math.floor(Math.random() * loveReasons.length);
        newReason = loveReasons[randomIndex];
    }

    // Fade out
    reasonText.style.opacity = 0;

    // Wait for the fade out to finish (400ms matching CSS), then change text and fade back in
    setTimeout(() => {
        reasonText.textContent = newReason;
        reasonText.style.opacity = 1;
    }, 400);
}

// Initialize button event listener
document.getElementById('btn-next-reason').addEventListener('click', setRandomReason);

// Helper to pad single digits with a leading zero
function hPad(num) {
    return num.toString().padStart(2, '0');
}

// Initial calls to avoid 1-second delay
setRandomQuote();
renderUpcomingEvents();
setRandomReason(); // Load first reason dynamically
updateTime();

// Update every second
setInterval(updateTime, 1000);
