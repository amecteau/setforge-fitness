import { getLocale, setLocale } from '$lib/paraglide/runtime.js';

type Locale = 'en' | 'es';

let _locale = $state<Locale>(getLocale() as Locale);

export function currentLocale(): Locale {
	return _locale;
}

export function switchLocale(locale: Locale): void {
	setLocale(locale);
	_locale = locale;
}
