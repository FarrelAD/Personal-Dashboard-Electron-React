interface CardProps {
    title: string,
    url: string
}

function Card({ title, url } : CardProps) {
    return (
        <a href={url} className="w-full h-fit max-h-fit shadow-md shadow-black bg-cyan-950 p-5 rounded-md text-center flex flex-col gap-5 hover:cursor-pointer hover:bg-cyan-800 focus:outline-white">
            <div className="h-full flex justify-center">
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <h3 className="font-semibold">{title}</h3>
        </a>
    );
}

export default Card;