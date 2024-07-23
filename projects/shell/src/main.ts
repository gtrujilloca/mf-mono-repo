import { loadManifest } from "@angular-architects/module-federation"


loadManifest("/mf.manifest.json", true)
	.catch(err => console.error(err))
	.then(_ => import('./bootstrap'))
	.catch(err => console.error(err));

// import('./bootstrap')
// 	.catch(err => console.error(err));