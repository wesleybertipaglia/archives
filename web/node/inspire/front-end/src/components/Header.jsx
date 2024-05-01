export default function Header() {
    return (
        <header className="bg-stone-50 border-b-stone-200 border-b-[0.5px]">
            <div className="container mx-auto p-6">
                <nav className="flex gap-8 justify-between">
                    <div>
                        Home
                    </div>

                    <ul className="flex gap-2 list-none">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Get Started</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}