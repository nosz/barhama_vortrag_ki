/*
 * Anmeldeformular Vortragsabend - derzeit DEAKTIVIERT (Termin steht noch nicht fest).
 * Es gibt bewusst kein action-Attribut und keinen Versand.
 *
 * Aktivierung spaeter (ein Schalter):
 *   1. In ki_software_hardware_info.html am <form id="anmeldeformular"> data-aktiv="false" auf "true" setzen.
 *   2. Hinweis-Alert (Anmeldung ab Terminbekanntgabe) entfernen.
 *   3. Versandziel (action/Endpunkt) vom Betreiber festlegen lassen; Datenschutzseite vorher fuellen.
 * Das Skript entfernt dann "disabled" vom fieldset. Ohne data-aktiv="true" bleibt alles gesperrt.
 */
(function () {
  var form = document.getElementById('anmeldeformular');
  if (!form) return;
  var felder = document.getElementById('formular-felder');
  var aktiv = form.getAttribute('data-aktiv') === 'true';
  if (felder) felder.disabled = !aktiv;
  form.addEventListener('submit', function (e) {
    if (!aktiv) { e.preventDefault(); return; }
    // Hier spaeter Versand anbinden (nicht implementiert).
    e.preventDefault();
  });
})();