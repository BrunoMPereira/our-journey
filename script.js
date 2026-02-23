// Set the start date to June 23, 2024 at 20:58:00
const startDate = new Date('2024-06-23T20:58:00');

// Upcoming Events
const upcomingEvents = [
    { title: "Os bonitinhos vão à Maia", date: new Date(new Date().getFullYear(), 2, 1) }, // 1st of march
    { title: "Via Sacra", date: new Date(new Date().getFullYear(), 2, 7) }, // 7th march
    { title: "Rita Rocha", date: new Date(new Date().getFullYear(), 2, 20) }, // 20th march
    { title: "Miguel Araujo", date: new Date(new Date().getFullYear(), 3, 29) }, // 29th april
    { title: "Carolina de Deus", date: new Date(new Date().getFullYear(), 1, 28) }, // 28th of may
    { title: "Quinteto da Morte", date: new Date(new Date().getFullYear(), 5, 18) } // 18th june
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
It's true`
];

function setRandomQuote() {
    const quoteElement = document.getElementById('song-quote');
    const randomIndex = Math.floor(Math.random() * songQuotes.length);

    // The fixed introductory text requested by the user
    const introText = `Aqui está um pequeno excerto de uma música da nossa história <3`;

    // Replace newline characters with HTML <br> tags so lyrics display multiline 
    const randomLyricFormatted = songQuotes[randomIndex].replace(/\n/g, '<br>');

    // Combine intro text and the random quote
    quoteElement.innerHTML = `${introText}<br><br>${randomLyricFormatted}`;
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
    const container = document.getElementById('events-container');
    const now = new Date();

    // Filter out events that already passed, and sort by date ascending
    const futureEvents = upcomingEvents
        .filter(event => event.date >= new Date(now.getFullYear(), now.getMonth(), now.getDate()))
        .sort((a, b) => a.date - b.date);

    if (futureEvents.length === 0) {
        container.innerHTML = '<p style="text-align: center; width: 100%; color: var(--text-secondary);">Sem eventos agendados de momento.</p>';
        return;
    }

    const formatter = new Intl.DateTimeFormat('pt-PT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    let eventsHtml = '';
    futureEvents.forEach(event => {
        eventsHtml += `
        <div class="event-card">
            <div class="event-date">${formatter.format(event.date)}</div>
            <div class="event-name">${event.title}</div>
        </div>`;
    });

    container.innerHTML = eventsHtml;
}

// Helper to pad single digits with a leading zero
function hPad(num) {
    return num.toString().padStart(2, '0');
}

// Initial calls to avoid 1-second delay
setRandomQuote();
renderUpcomingEvents();
updateTime();

// Update every second
setInterval(updateTime, 1000);
