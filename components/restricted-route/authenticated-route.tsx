import { useAuth } from '@/hooks/use-auth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export interface AuthenticatedRouteProps {
	children: any;
	requireLogin?: boolean;
}

export function AuthenticatedRoute({ children, requireLogin = true }: AuthenticatedRouteProps) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (requireLogin) {
			if (!firstLoading && !profile?.username) router.push('/sign-in')
		} else {
			if (!firstLoading && profile?.username) router.push('/dashboard')
		}
	}, [router, profile, firstLoading])

	// if (!profile?.username) return <p>Loading...</p>

	return <div>{children}</div>
}
