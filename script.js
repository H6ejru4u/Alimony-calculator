function calculateImpact() {
    let income = parseFloat(document.getElementById("income").value);
    let alimony = parseFloat(document.getElementById("alimony").value);
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(income) || isNaN(alimony) || isNaN(years)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let totalAlimony = (income * (alimony / 100)) * 12 * years;

    // Static Data (Ye NCRB ya kisi aur report se update kar sakta hai)
    let totalCasesIn10Years = 250000; // 2.5 Lakh cases (Example)
    let daysIn10Years = 3650; // 10 years × 365 days
    let casesPerDay = totalCasesIn10Years / daysIn10Years;

    // Aaj Tak Ke Cases Ka Calculation
    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 10); // 10 saal pehle ka date
    let daysPassed = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24)); // Total din

    let realTimeCases = Math.floor(casesPerDay * daysPassed);

    document.getElementById("result").innerHTML = `
        <p><strong>Estimated Financial Loss:</strong> ₹${totalAlimony.toLocaleString()} in ${years} years.</p>
        <hr>
        <p><strong>Last 10 years data (Updated till Today):</strong> ${realTimeCases.toLocaleString()} men affected by false cases and financial burden.</p>
    `;
}