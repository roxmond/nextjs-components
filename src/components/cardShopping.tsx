import Image from "next/image"

export default function CardShopping() {
    return (
        <>
        <div className="card border w-52 h-60">
            <div className="cover border w-full h-16">
            <Image src="/cover.png" alt="Profile Picture" width={208} height={64} />
                <div className="profile-pic relative -top-16 border rounded-full w-24 h-24">
                <Image src="/profile-pic.png" alt="Profile Picture" width={96} height={96} />
                </div>
            </div>

            <div className="body flex border w-full h-auto">
                <div className="info border w-2/5 max-h-auto">
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                </div>
                <div className="content border w-3/5 h-auto">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
                </div>
            </div>
        </div>
        </>
    )
}