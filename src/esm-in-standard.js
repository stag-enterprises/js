window.using = (...args) => window.addEventListener("esmReady", async () => {
	let mods, ctx, fn;
	if (args.length == 2) [mods, fn] = args
	else if (args.length === 3) [mods, ctx, fn] = args;
	if (!Array.isArray(mods)) mods = [mods];
	if (!Array.isArray(ctx)) ctx = [ctx];
	fn.call(null, ...ctx, await Promise.all(mods.map(_import)));
});

(() => {
	const script = document.createElement("script");
	script.type = "module";
	script.textContent = `
		window._import = e => import(e);
		window.dispatchEvent(new Event("esmReady"));
	`;
	document.head.appendChild(script);
})();
