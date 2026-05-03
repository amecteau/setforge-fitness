<script lang="ts">
	import { base } from '$app/paths';
	import { currentLocale } from '$lib/shared/locale.svelte.js';
	import LanguageToggle from '$lib/shared/components/LanguageToggle.svelte';

	const isEs = $derived(currentLocale() === 'es');
</script>

<svelte:head>
	<title>{isEs ? 'Política de Privacidad — SetForge' : 'Privacy Policy — SetForge'}</title>
	<meta
		name="description"
		content={isEs
			? 'Política de privacidad de SetForge. No recopilamos datos personales.'
			: 'SetForge privacy policy. We collect no personal data.'}
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="page-wrap">
	<header class="page-header">
		<a href={`${base}/`} class="back-link">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			>
				<path d="M19 12H5M12 5l-7 7 7 7" />
			</svg>
			SetForge
		</a>
	</header>

	<main id="main" class="content">
		{#if isEs}
			<article>
				<h1>Política de Privacidad</h1>
				<p class="effective-date">Fecha de vigencia: 3 de mayo de 2026</p>

				<section>
					<h2>1. Descripción General</h2>
					<p>
						SetForge es un contador de repeticiones de gimnasio con privacidad prioritaria para
						Windows y Android, desarrollado por Andrew Mecteau. Esta política describe cómo SetForge
						maneja tus datos. En resumen:
						<strong>no recopilamos ningún dato personal.</strong> Todo lo que SetForge almacena vive
						exclusivamente en tu dispositivo.
					</p>
				</section>

				<section>
					<h2>2. Información que Recopilamos</h2>
					<p>
						SetForge no recopila, transmite ni almacena ninguna información personal en servidores
						externos. Todos los datos de entrenamiento (ejercicios, series, repeticiones, pesos e
						historial) se almacenan localmente en una base de datos SQLite en tu dispositivo. Estos
						datos nunca abandonan tu dispositivo.
					</p>
					<p>
						No recopilamos: nombres, direcciones de correo electrónico, datos de ubicación,
						identificadores de dispositivo, análisis de uso, informes de fallos ni ninguna otra
						información personal o no personal.
					</p>
				</section>

				<section>
					<h2>3. Cómo Usamos tu Información</h2>
					<p>
						Como no recopilamos información, no tenemos datos que usar. Tu historial de entrenamiento
						existe únicamente para servirte dentro de SetForge en tu propio dispositivo.
					</p>
				</section>

				<section>
					<h2>4. Compartición de Datos y Terceros</h2>
					<p>
						No compartimos ningún dato con terceros. SetForge no contiene SDK de análisis de
						terceros, redes publicitarias, píxeles de seguimiento ni marcos de telemetría. Nunca se
						transmiten datos a nosotros ni a ninguna otra parte.
					</p>
				</section>

				<section>
					<h2>5. Retención y Eliminación de Datos</h2>
					<p>
						Todos los datos se almacenan localmente en tu dispositivo y están bajo tu control total.
						Puedes eliminar tus datos de entrenamiento en cualquier momento desde la configuración de
						SetForge. Al desinstalar SetForge, se eliminarán todos los datos asociados de tu
						dispositivo.
					</p>
				</section>

				<section>
					<h2>6. Privacidad de Menores</h2>
					<p>
						SetForge no está dirigido a menores de 13 años. No recopilamos conscientemente
						información de niños. Dado que SetForge no recopila datos personales de nadie,
						inherentemente tampoco recopila datos de menores.
					</p>
				</section>

				<section>
					<h2>7. Seguridad</h2>
					<p>
						Como todos los datos permanecen en tu dispositivo y nunca se transmiten por una red, no
						existe superficie de ataque del lado del servidor. La seguridad de tus datos depende de
						la seguridad de tu propio dispositivo.
					</p>
				</section>

				<section>
					<h2>8. Cambios en Esta Política</h2>
					<p>
						Si actualizamos esta política de privacidad, revisaremos la fecha de vigencia en la parte
						superior de esta página. Te recomendamos revisar esta política periódicamente. El uso
						continuado de SetForge después de cualquier cambio constituye tu aceptación de la
						política actualizada.
					</p>
				</section>

				<section>
					<h2>9. Contáctanos</h2>
					<p>
						Si tienes preguntas sobre esta política de privacidad, contáctanos en:
						<a href="mailto:setforgefitness@gmail.com">setforgefitness@gmail.com</a>
					</p>
				</section>
			</article>
		{:else}
			<article>
				<h1>Privacy Policy</h1>
				<p class="effective-date">Effective date: May 3, 2026</p>

				<section>
					<h2>1. Overview</h2>
					<p>
						SetForge is a privacy-first gym rep counter for Windows and Android, developed by Andrew
						Mecteau. This policy describes how SetForge handles your data. The short version:
						<strong>we collect no personal data whatsoever.</strong> Everything SetForge stores lives
						exclusively on your device.
					</p>
				</section>

				<section>
					<h2>2. Information We Collect</h2>
					<p>
						SetForge does not collect, transmit, or store any personal information on external
						servers. All workout data (exercises, sets, reps, weights, and history) is stored locally
						in a SQLite database on your device. This data never leaves your device.
					</p>
					<p>
						We do not collect: names, email addresses, location data, device identifiers, usage
						analytics, crash reports, or any other personal or non-personal information.
					</p>
				</section>

				<section>
					<h2>3. How We Use Your Information</h2>
					<p>
						Because we collect no information, there is no data for us to use. Your workout history
						exists solely to serve you within SetForge on your own device.
					</p>
				</section>

				<section>
					<h2>4. Data Sharing and Third Parties</h2>
					<p>
						We do not share any data with third parties. SetForge contains no third-party analytics
						SDKs, advertising networks, tracking pixels, or telemetry frameworks. No data is ever
						transmitted to us or any other party.
					</p>
				</section>

				<section>
					<h2>5. Data Retention and Deletion</h2>
					<p>
						All data is stored locally on your device and is under your full control. You can delete
						your workout data at any time from within SetForge's settings. Uninstalling SetForge will
						remove all associated data from your device.
					</p>
				</section>

				<section>
					<h2>6. Children's Privacy</h2>
					<p>
						SetForge is not directed at children under the age of 13. We do not knowingly collect any
						information from children. Because SetForge collects no personal data from anyone, it
						inherently does not collect data from children either.
					</p>
				</section>

				<section>
					<h2>7. Security</h2>
					<p>
						Because all data remains on your device and is never transmitted over a network, there is
						no server-side attack surface. The security of your data depends on the security of your
						own device.
					</p>
				</section>

				<section>
					<h2>8. Changes to This Policy</h2>
					<p>
						If we update this privacy policy, we will revise the effective date at the top of this
						page. We encourage you to review this policy periodically. Continued use of SetForge
						after any changes constitutes your acceptance of the updated policy.
					</p>
				</section>

				<section>
					<h2>9. Contact Us</h2>
					<p>
						If you have questions about this privacy policy, please contact us at:
						<a href="mailto:setforgefitness@gmail.com">setforgefitness@gmail.com</a>
					</p>
				</section>
			</article>
		{/if}
	</main>

	<footer class="page-footer">
		<p>© 2026 SetForge. {isEs ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
		<div class="footer-right">
			<a href={`${base}/`}>setforge.fitness</a>
			<LanguageToggle />
		</div>
	</footer>
</div>

<style>
	@reference "tailwindcss";

	.page-wrap {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-color: var(--color-bg);
		color: var(--color-text, #f1f5f9);
	}

	.page-header {
		@apply border-b px-6 py-5;
		border-color: var(--color-border);
	}

	.back-link {
		@apply inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-slate-100 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:outline-none;
	}

	.content {
		@apply mx-auto w-full flex-1 px-6 py-12;
		max-width: 48rem;
	}

	article h1 {
		@apply mb-2 text-3xl font-bold text-slate-100;
	}

	.effective-date {
		@apply mb-10 text-sm text-slate-500;
	}

	article section {
		@apply mb-8;
	}

	article h2 {
		@apply mb-3 text-lg font-semibold text-slate-200;
	}

	article p {
		@apply mb-3 text-base leading-relaxed text-slate-400;
	}

	article strong {
		@apply text-slate-200;
	}

	article a {
		@apply text-blue-400 underline underline-offset-2 transition-colors duration-150 hover:text-blue-300;
	}

	.page-footer {
		@apply flex flex-wrap items-center justify-between gap-3 border-t px-6 py-6 text-xs text-slate-500;
		border-color: var(--color-border);
	}

	.footer-right {
		@apply flex items-center gap-4;
	}

	.page-footer a {
		@apply text-slate-400 transition-colors duration-150 hover:text-slate-200;
	}
</style>
