## Auteurs et pages GitHub :
Ayoub FATHALLAH : https://github.com/Formidabledu59  
Théo Dancoiosne : https://github.com/Theo-Dancoisne  
Remi DESCAMPS : https://github.com/rere1208  
Julien MERIEL : ? https://github.com/NoobToSayajin  


## Informations à mettre à jour au fur et à mesure
### Format des données stockées localment
`userData: {"grp_name":"Les Muchachos","player_nb":"2","player_names":["Joueur 1","Joueur 2"]}`
PS: Ici seul le nom du groupe doit être stocké en base.


## Notes
**⚠ Il faut que l'API soit dispo au moment du build pour transformer les routes dynamiques en routes statiques**


## NextJs + (Playwright + monocart-coverage-reports)
https://github.com/cenfun/nextjs-with-playwright good example
https://github.com/cenfun/monocart-reporter good repo
https://github.com/cenfun/monocart-coverage-reports used but maybe not enought, can't I use MCR?

"dev": "next dev --turbopack",
"build": "next build --turbopack",
"next": "^15.5.9",
"react": "19.1.0",
"react-dom": "19.1.0"
Reason of downgrading Next.js to v14: https://github.com/cenfun/monocart-reporter/issues/161

https://github.com/cenfun/playwright-coverage
https://github.com/vercel/next.js/tree/canary/examples/with-playwright
https://github.com/michaelhays/playwright-nextjs-coverage-example/tree/main
