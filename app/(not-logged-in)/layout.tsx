import type { Metadata } from 'next'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import '../globals.css'
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger
} from '@/components/ui/menubar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Dragon Co-op',
	description: 'Worker owned business builder'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Menubar>
					<MenubarMenu>
						<MenubarTrigger>
							<div className="pt-4">
								<Image
									src="/images/main-logo.png"
									alt="Dragon Co-Op Logo"
									width="80"
									height="80"
									className="rounded-full"
								/>
							</div>
						</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Print</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
					<MenubarMenu>
						<MenubarTrigger>File</MenubarTrigger>
						<MenubarContent>
							<MenubarItem>
								New Tab <MenubarShortcut>⌘T</MenubarShortcut>
							</MenubarItem>
							<MenubarItem>New Window</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Share</MenubarItem>
							<MenubarSeparator />
							<MenubarItem>Print</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
				{children}
			</body>
		</html>
	)
}
