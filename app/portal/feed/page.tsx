import { DocumentDuplicateIcon } from "@heroicons/react/24/outline"
import Rune from "@/app/ui/feed/rune"
import Post from "@/app/ui/feed/post"

export default function Feed() {
    return (
        <>

        <div className="grid grid-cols-[auto,1fr] desktop:ml-72 tablet:ml-20 min-h-screen">

        </div>
            <section className="px-4 py-4 grid grid-cols-[auto,1fr] gap-4 ">
                {/* Avatar */}

                <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img src="" alt="alt" className="w-full" />
                </div>

                <div className="space-y-10 w-full">
                    
                    {/* <Textbox /> */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="What's happening?"
                            className="w-full text-[1.25rem] focus:outline-none"
                        />
                    </div>


                    <div className="flex items-center justify-between gap-4">
                        <div className="hover:bg-sky-100 p-2 rounded-full transition-colors duration-500 ease-out cursor-pointer mobile:hidden">
                            <DocumentDuplicateIcon className="w-5 h-5 text-sky-500" />
                        </div>
                        {/* <Actions /> */}

                        <div className="mobile:flex items-center hidden ">
                            <Rune
                            Icon={<DocumentDuplicateIcon fill="fill-sky-500" />}
                            color="hover:bg-sky-100"
                            />
                            <Rune Icon={<DocumentDuplicateIcon fill="fill-sky-500" />} color="hover:bg-sky-100" />
                            <Rune
                            Icon={<DocumentDuplicateIcon fill="fill-sky-500" />}
                            color="hover:bg-sky-100"
                            />
                            <Rune
                            Icon={<DocumentDuplicateIcon fill="fill-sky-500" />}
                            color="hover:bg-sky-100"
                            />
                            <Rune
                            Icon={<DocumentDuplicateIcon fill="fill-sky-500" />}
                            color="hover:bg-sky-100"
                            />
                            <Rune
                            Icon={<DocumentDuplicateIcon fill="fill-sky-500" />}
                            color="hover:bg-sky-100"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <Post></Post>
            </section>

        </>


    )
}