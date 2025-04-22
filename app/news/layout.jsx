import Link from "next/link";

function layout({children}) {
    return (
        <div>
            <div>
                <h1>Latest News</h1>
                <div className="text-xl font-bold space-x-3">
                    <Link href='/news/news1'>News 1</Link>
                    <Link href='/news/news2'>News 2</Link>
                    <Link href='/news/news3'>News 3</Link>
                </div>
            </div>

            <div className="flex">
                <section className="bg-gray-600 w-5/6 h-96">
                   {
                    children
                   }
                </section>
                <div className="bg-red-600 w-1/6">
                    sidebar
                </div>
            </div>

        </div>
    );
}

export default layout;