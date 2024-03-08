'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
	const router = useRouter();

	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mb-16 items-center justify-center text-center'>
			<span className='bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
				404
			</span>
			<h2 className='my-2 font-heading text-2xl font-bold'>
				Lo siento, la página que buscas no existe.
			</h2>
			<p>
				Es posible que la página haya sido eliminada o que hayas introducido una
				dirección incorrecta.
			</p>
			<div className='mt-8 flex justify-center gap-2'>
				<Button onClick={() => router.back()} variant='default' size='lg'>
					Regresar
				</Button>
				<Button
					onClick={() => router.push('/dashboard')}
					variant='ghost'
					size='lg'>
					Ir a inicio
					<HomeIcon className='w-6 h-6 ml-2' />
				</Button>
			</div>
		</div>
	);
}
