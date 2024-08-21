import Image from "next/image"


export default function NavBar1() {
    //profilePicture = "/profile-pic"
    return (
        <>
        <div className="bg-gray-600 w-full h-fit flex flex-row items-center justify-between shadow-[0_3px_13px_rgba(215,215,215,0.3)]">
            {/* Profile Picture */}
            <div className="w-16 h-16 rounded-full">
                <Image src={"/profile-pic.png"} alt="profile pic" width={64} height={64}/>
            </div>

            {/* Search Icon */}
            <div className="w-16 h-16 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="inline-block w-10 h-10 fill-white">
                <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
                </svg> 
            </div>

            <div className="w-16 h-16 flex items-center">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#ffffff" className="inline-block w-6 h-6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g>
                <path fill="#231F20" d="M56,44c-1.832,0-4-2.168-4-4V20C52,8.973,43.027,0,32,0S12,8.973,12,20v20c0,1.793-2.207,4-4,4 c-2.211,0-4,1.789-4,4s1.789,4,4,4h48c2.211,0,4-1.789,4-4S58.211,44,56,44z"></path> <path fill="#231F20" d="M32,64c4.418,0,8-3.582,8-8H24C24,60.418,27.582,64,32,64z"></path> </g> </g></svg>
            </div>
        </div>
        </>
    )
}