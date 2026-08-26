import expenseTracker from '../../public/expenseTracker.jpg'
import factsAboutCats from '../../public/factsAboutCats.jpg'
import movieSearch from '../../public/movieSearch.jpg'


export default function Projects(){
    return(
        <div className="flex flex-col justify-center items-center mt-[30%]">
            <div className="text-white font-black text-7xl">
                Projects
            </div>
            <div className="flex flex-row mt-5 justify-between w-full p-5">
                <div onClick={() => window.location.href = "https://github.com/JavohirJumaev/expense-tracker"} className="w-100 h-100 cursor-pointer h-fit p-5">
                    <img src={expenseTracker}/>
                    <p className="text-white mt-5"></p>
                </div>
                <div onClick={() => window.location.href = "https://github.com/JavohirJumaev/facts-about-cats"} className="w-100 h-100 cursor-pointer h-fit p-5">
                    <img src={factsAboutCats}/>
                    <p className="text-white mt-5">Facts About Cats</p>
                </div>
                <div onClick={() => window.location.href = "https://github.com/JavohirJumaev/movie-search"} className="w-100 h-100 cursor-pointer h-fit p-5">
                    <img src={movieSearch}/>
                    <p className="text-white mt-5">Movie Search</p>
                </div>
            </div>
        </div>
    )
}