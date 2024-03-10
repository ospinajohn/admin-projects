'use client';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
	const { isAuthenticated, isLoading } = useConvexAuth();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-6xl font-bold'>
				Administra tus proyectos de forma sencilla y agil.
			</h1>
			<div className='flex flex-col items-center justify-center gap-4'>
				<h3 className='text-2xl font-bold'>Esto es facil, secillo y rapido</h3>
				{isLoading && (
					<div className='w-full flex items-center justify-center'>
						<Spinner size='lg' />
					</div>
				)}
				{!isAuthenticated && !isLoading && (
					<>
						<SignInButton mode='modal'>
							<Button>
								Iniciar sesion
								<ArrowRight className='ml-2' />
							</Button>
						</SignInButton>
					</>
				)}
				{isAuthenticated && !isLoading && (
					<>
						<Button asChild>
							<Link href='/dashboard'>
								Ver mis proyectos
								<ArrowRight className='h-4 w-4 ml-2' />
							</Link>
						</Button>
						<UserButton afterSignOutUrl='/' />
					</>
				)}
			</div>
		</main>
	);
}
