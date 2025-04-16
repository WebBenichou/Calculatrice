
function ecrire(n) {
    let zone = document.getElementById('zone')
    zone.textContent += n
}


function supprimer() {
    let zone = document.getElementById('zone')
    zone.textContent = ' '
}

function calculer() {
    let zone = document.getElementById('zone')
    try {
        zone.textContent = eval(zone.textContent)
    } catch(err) {
        zone.textContent = "erreur"
    }

}