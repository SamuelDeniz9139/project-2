const helper=require('./helper.js');
const handleAnime = async(e) => {//handles the addition to the list
    e.preventDefault();
    helper.hideError();
    let name=e.target.querySelector('#animeName').value;
    let genre=e.target.querySelector('#animeGenre').value;
    let year=e.target.querySelector('#animeYear').value;
    const _csrf=e.target.querySelector('#_csrf').value;
    if(!name||!genre||!year){//requires all fields are filled
        helper.handleError('All fields are required.');
        return false;
    }
    const response = await fetch('/getAnimes');
    const data = await response.json();
    let animeArray=data.animes;
    for (let list=0;list<animeArray.length;list++){//checks for an anime of that name
        if(animeArray[list].name === name){//if it's already on the list
            helper.handleError('That anime is already on the list.');
            return false;
        }
    }
    helper.sendPost(e.target.action, {name,genre,year,_csrf}, loadAnimesFromServer);
    return false;
}
const loadAnimesFromServer = async() => {//loads the animes from the server
    const response = await fetch('/getAnimes');
    const data = await response.json();
    ReactDOM.render(
        <AnimeList animes={data.animes} />, document.getElementById('animes')
    );
}
const premInit = (e) => {//reloads the main page with premium form
    e.preventDefault();
    helper.hideError();
    init(1);
}
const AnimeList = (props) => {
    if(props.animes.length === 0){
        return (
            <div className="animeList">
                <h1 className="emptyAnime">Your backlog is empty.</h1>
            </div>
        );
    }
    const animeNodes=props.animes.map(anime => {
        return(
            <div key={anime._id} className="anime">
                <p>Title: {anime.name} </p>
                <p>Genre: {anime.genre} </p>
                <p>Year released: {anime.year} </p>
            </div>
        );
    });
    return(
        <div className="animeList">
            {animeNodes}
        </div>
    );
};
const PremiumSwitch=(props)=>{
    return(
        <form id="premiumForm" onSubmit={premInit}
        name="premiumForm" action="/premium" method="POST">
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="formSubmit" type="submit" value="Activate Premium" />
        </form>
    );
}
const AnimeForm=(props)=>{
    return (//the form that lets you add variables to your anime
        <form id="animeForm" onSubmit={handleAnime}
        name="animeForm" action="/maker"
        method="POST" className="animeForm">
            <input className='animeField' id="animeName" type="text" name="name" placeholder="Anime Title" /><br></br><br></br>
            <label htmlFor="animeGenre">Genre: </label>
            <select className='animeField' id="animeGenre" name="genre">
                <option className='animeField' value="Action">Action</option>
                <option className='animeField' value="Comedy">Comedy</option>
                <option className='animeField' value="Romance">Romance</option>
                <option className='animeField' value="Shonen">Shonen</option>
                <option className='animeField' value="Slice of Life">Slice of Life</option>
            </select><br></br><br></br>
            <input id="animeYear" type="number" min="0" name="year" placeholder="Year released" className='animeField' /><br></br><br></br>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeAnimeSubmit" type="submit" value="Add to list" />
        </form>
    );
}
const PremiumForm=(props)=>{
    return (//the form for the premium version
        <form id="animeForm" onSubmit={handleAnime}
        name="animeForm" action="/maker"
        method="POST" className="animeForm">
            <input className='animeField' id="animeName" type="text" name="name" placeholder="Anime Title" /><br></br><br></br>
            <label htmlFor="animeGenre">Genre: </label>
            <select className='animeField' id="animeGenre" name="genre">
                <option className='animeField' value="Action">Action</option>
                <option className='animeField' value="Comedy">Comedy</option>
                <option className='animeField' value="Isekai">Isekai</option>
                <option className='animeField' value="Mecha">Mecha</option>
                <option className='animeField' value="Romance">Romance</option>
                <option className='animeField' value="Sci-Fi">Sci-Fi</option>
                <option className='animeField' value="Shonen">Shonen</option>
                <option className='animeField' value="Slice of Life">Slice of Life</option>
                <option className='animeField' value="Other">Other</option>
            </select><br></br><br></br>
            <input id="animeYear" type="number" min="0" name="year" placeholder="Year released" className='animeField' /><br></br><br></br>
            <input id="_csrf" type="hidden" name="_csrf" value={props.csrf} />
            <input className="makeAnimeSubmit" type="submit" value="Add to list" />
        </form>
    );
}
const init = async (prem) => {//loads the preButton and data
    const response = await fetch('/getToken');
    const data = await response.json();
    const preButton=document.getElementById("premiumButton");
    if(prem===0){
        ReactDOM.render(
            <AnimeForm csrf={data.csrfToken} />, document.getElementById('makeAnime')
        );
        preButton.addEventListener('click',(e)=>{
            e.preventDefault();
            ReactDOM.render(<PremiumSwitch csrf={data.csrfToken} />, document.getElementById('animes'));
            return false;
        });
    } else {
        ReactDOM.render(
            <PremiumForm csrf={data.csrfToken} />, document.getElementById('makeAnime')
        );
        preButton.innerHTML="Premium Mode";
    }
    ReactDOM.render(
        <AnimeList animes={[]} />, document.getElementById('animes')
    );
    loadAnimesFromServer();
}
window.onload=init(0);