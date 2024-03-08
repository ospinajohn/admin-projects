import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-6xl font-bold'>
				Bienvenido al administrador de proyectos
			</h1>
			<Image
				src='/convex-logo.svg'
				alt='Convex Logo'
				width={200}
				height={200}
			/>
			<p className='text-2xl'>
				Get started by editing <code>pages/index.tsx</code>
			</p>
		</main>
	);
}
