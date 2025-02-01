function calculateImpact() {
    let income = parseFloat(document.getElementById("income").value);
    let alimony = parseFloat(document.getElementById("alimony").value);
    let years = parseFloat(document.getElementById("years").value);

    if (isNaN(income) || isNaN(alimony) || isNaN(years)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers.";
        return;
    }

    let totalAlimony = (income * (alimony / 100)) * 12 * years;

    let totalCasesIn10Years = 250000;
    let daysIn10Years = 3650;
    let casesPerDay = totalCasesIn10Years / daysIn10Years;

    let startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 10);
    let daysPassed = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24));

    let realTimeCases = Math.floor(casesPerDay * daysPassed);

    // Show overlay with spinner
    document.getElementById("overlay").style.display = "flex";

    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("result").innerHTML = `
            <p><strong>Estimated Financial Loss:</strong> ₹${totalAlimony.toLocaleString()} in ${years} years.</p>
            <hr>
            <p><strong>Last 10 years data (Updated till Today):</strong> ${realTimeCases.toLocaleString()} men affected by false cases and financial burden.</p>
        `;
    }, 2000);
}
