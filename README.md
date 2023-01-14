# CompteurDeMots V.1.0.4

**CompteurDeMots** est un outil javascript développé par un étudiant en informatique pour calculer le nombre de mots dans un texte français le plus précisément possible.

## Que fait-il de mieux ?

Contrairement à la plupart des autres outils, celui-ci permet de :

 - Ignorer les caractères spéciaux qui ne sont pas des mots
 
 - Compter en double les mots séparés par un apostrophe, sauf exception,  par exemple « J'ai » vaut deux mots tandis que « Aujourd'hui » en vaut un seul
 
 - Faire la différence entre un seul mot et deux mots séparés par un trait d'union, par exemple « haut-parleur » vaut un mot et « Était-il ? » en vaut deux

> Derniers ajouts

 - Correctifs dans les caractères spéciaux, les majuscules des lettres accentuées étaient inclues dans la liste des caractères spéciaux
 - Fixs mineurs en back-end
 - Bouton d'options pour désactiver le tri des mots avec trait d'union, apostrophes et le filtre des caractères spéciaux
