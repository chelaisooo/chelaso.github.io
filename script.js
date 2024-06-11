function calculate() {
    var type = document.getElementById("acid-base").value;
    var concentration = parseFloat(document.getElementById("input-concentration").value);
    var constant = (type === "acid-weak" || type === "base-weak") ? parseFloat(document.getElementById("input-constant").value) : 0;
    var resultContainer = document.getElementById("result");
    var pH, pOH, H, OH;

    if (type === "acid-strong") {
        H = concentration;
        pH = -Math.log10(H);
        OH = 1.0e-14 / H;
        pOH = -Math.log10(OH);
    } else if (type === "acid-weak") {
        H = Math.sqrt(1.0e-14 * constant * concentration);
        pH = -Math.log10(H);
        OH = 1.0e-14 / H;
        pOH = -Math.log10(OH);
    } else if (type === "base-strong") {
        OH = concentration;
        pH = 14 + Math.log10(OH);
        H = 1.0e-14 / OH;
        pOH = 14 - pH;
    } else if (type === "base-weak") {
        OH = Math.sqrt(1.0e-14 * constant * concentration);
        pOH = -Math.log10(OH);
        H = constant / OH;
        pH = -Math.log10(H);
    }

    resultContainer.innerHTML = "<p>pH: " + pH.toFixed(4) + "</p><p>pOH: " + pOH.toFixed(4) + "</p><p>[H+]: " + H.toExponential(4) + " M</p><p>[OH-]: " + OH.toExponential(4) + " M</p>";
}