export default function Footer() {
    return (
        <footer className="bg-stone-50 border-b-stone-200 border-b-[0.5px]">
            <div className="container mx-auto p-6 pb-12 flex justify-between">
                <div className="flex flex-col gap-3">
                    <h5>InspireMe</h5>
                    <ul className="flex gap-2 list-none">
                        <li className="flex h-10 w-10 bg-green-300 rounded-full"></li>
                        <li className="flex h-10 w-10 bg-green-300 rounded-full"></li>
                        <li className="flex h-10 w-10 bg-green-300 rounded-full"></li>
                        <li className="flex h-10 w-10 bg-green-300 rounded-full"></li>
                    </ul>
                </div>

                <nav className="flex gap-8">
                    <div className="flex flex-col gap-3 w-32">
                        <strong>Title</strong>
                        <ul className="flex flex-col gap-2 list-none">
                            <li>Page Title</li>
                            <li>Page Title</li>
                            <li>Page Title</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3 w-32">
                        <strong>Title</strong>
                        <ul className="flex flex-col gap-2 list-none">
                            <li>Page Title</li>
                            <li>Page Title</li>
                            <li>Page Title</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3 w-32">
                        <strong>Title</strong>
                        <ul className="flex flex-col gap-2 list-none">
                            <li>Page Title</li>
                            <li>Page Title</li>
                            <li>Page Title</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
}