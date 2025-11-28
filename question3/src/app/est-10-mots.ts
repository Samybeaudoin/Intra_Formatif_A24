import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function estMin10Mots(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const comments = control.value;
    // On regarde si le champ est rempli avant de faire la validation
    if (!comments) {
      // On attend que le champ soit rempli avant de le valider
      return null;
    }
    let mots = comments.split(" ");
    
    // On fait notre validation. Includes retourne un booléen.
    let estValide = null;
    if(mots.length >= 10){
       estValide = true;
    }
    else{
        estValide = false
    }
   

    // On retourne null si c'est valide, ou un objet décrivant l'erreur sinon
    return estValide ? null : { estMin10Mots: true };
  };
}