// Set the start date to June 23, 2024 at 00:00:00
const startDate = new Date('2024-06-23T00:00:00');

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

// Helper to pad single digits with a leading zero
function hPad(num) {
    return num.toString().padStart(2, '0');
}

// Initial call to avoid 1-second delay
updateTime();

// Update every second
setInterval(updateTime, 1000);
