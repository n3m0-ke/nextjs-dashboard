

import Rune from "./rune"
import { ShieldCheckIcon } from "@heroicons/react/24/solid"

export default function Post(){
    return(
        <div className="border-t-[1px] px-4 pt-3 pb-2 hover:bg-neutral-100 transition-colors duration-500 ease-out">
            <div className="grid grid-cols-[auto,1fr] gap-3">
                {/* <Avatar src={post.image} alt={post.username} /> */}
                <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img src="" alt="alt" className="w-full" />
                </div>
                
                <div>
                {/* <Heading name={post.name} username={post.username} time={post.time} /> */}
                <div className="flex gap-1 items-center">
                    <h1 className="font-bold">Name Name</h1>
                    <h2 className="text-neutral-500 hidden mobile:block">username</h2>
                    <span className="text-neutral-500">•</span>
                    <h2 className="text-neutral-500">time</h2>
                    <div className="p-2 hover:bg-sky-100 ml-auto rounded-full group cursor-pointer transition-colors duration-500 ease-out">
                        {/* <DotsHorizontalIcon className="w-4 h-4 text-neutral-400 group-hover:text-sky-500" /> */}
                    </div>
                </div>
                <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.</p>


                {/* <Actions
                    replies={post.replies}
                    retweets={post.retweets}
                    likes={post.likes}
                /> */}

                    <div className="flex justify-between mt-3 max-w-md cursor-pointer">
                        <div className="flex items-center group tablet:pr-4">
                            <Rune
                            Icon={<ShieldCheckIcon fill="group-hover:fill-sky-500" />}
                            color="group-hover:bg-sky-100"
                            />
                            <p className="text-xs group-hover:text-sky-500">23</p>
                        </div>
                        <div className="flex gap-1 items-center group tabletpx-4">
                            <Rune
                            Icon={<ShieldCheckIcon fill="group-hover:fill-green-500" />}
                            color="group-hover:bg-green-100"
                            />
                            <p className="text-xs group-hover:text-green-500">23</p>
                        </div>
                        <div className="flex gap-1 items-center group tabletpx-4">
                            <Rune
                            Icon={<ShieldCheckIcon fill="group-hover:fill-rose-500" />}
                            color="group-hover:bg-rose-100"
                            />
                            <p className="text-xs group-hover:text-rose-500">23</p>
                        </div>
                        <div className="flex gap-1 items-center group tabletpl-4">
                            <Rune
                            Icon={<ShieldCheckIcon fill="group-hover:fill-sky-500" />}
                            color="group-hover:bg-sky-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}