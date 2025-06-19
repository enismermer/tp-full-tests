# Lancement du projet

J'ai tapé cette commande afin de créer un projet vite en choisissant React + TypeScript. J'ai nommé ainsi le repertoire : tp-full-tests
```bash
npm init vite@latest
```


Ensuite, j'ai utilisé cette commande afin d'installer Vitest.
```bash
npm install -D vitest
```

Puis je n'ai pas oublié d'ajouter ce script dans le fichier **package.json** :
```json
"scripts": {
  "test": "vitest"
}
```


Ensuite, j'ai installé Playwrigth grâce à cette commande de la documentation :
```bash
npm init playwright@latest
```

Puis j'ai fait en sorte d'ajouter ce script dans **scripts** dans le fichier **package.json** :
```json
"e2e": "playwright test"
```

Ainsi, nous pouvons taper la commande **npm run e2e** pour effectuer un test end-to-end grâce à playwright sinon on peut taper cette autre commande : **npx playwright test**.



Ensuite, dans le fichier **vite.config.ts**, j'ai ajouté ce bout de code qui permettra d'exécuter les tests dont le fichiers se terminent par : **.test.ts** :
```ts
test: {
    include: ['**/*.test.ts'],
  },
```

## Test sur l'interface graphique et screenshots :
```bash
tests/example.spec.ts
```

Ce test vérifie plusieurs comportements :

- Le bouton "Calculer" est désactivé tant que les champs ne sont pas tous valides.
- Les champs n'acceptent que les valeurs 1 ou 2.
- Le résultat ne s'affiche que lorsque tous les champs sont valides et que le bouton est cliqué.
- Une capture d'écran du résultat est générée.

### Lancer les tests E2E
On assure d’abord que l'application est lancée avec :

```bash
npm run dev
```
Puis, dans un autre terminal, on lance les tests :

```bash
npx playwright tes
```

### Capture d'écran
Un screenshot est automatiquement pris à la fin du test et enregistré dans :

```bash
screenshots/result.png
```



## Test unitaire 

### Tester le fichier
J'ai défini le test unitaire dans :
```bash
src/__tests__/calculateJupiterTime.test.ts
```

### Lancer les tests unitaires
Pour lancer les tests unitaires, je tape la commande la commande :
```bash
npm run test
``` 

### Explication des erreurs :

Ces erreurs montrent que le comportement attendu ne correspond pas au résultat réel.
Par exemple :
```bash
expected 'aprenoon' to be 'mortin'
```
Ca veut dire que le test s’attend à recevoir "mortin", mais la fonction a renvoyé "aprenoon".


L'objectif c'est que les tests permettent de valider les différentes plages de résultat telles que mortin, aprenoon, soirning et nuight, puis d'identifier rapidement un bug si la logique est cassée et réviser la fonction **calculateJupiterTime** en cas d'incohérence.