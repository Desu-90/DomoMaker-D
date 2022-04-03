
const DomoMovie = (props) => {
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PcltCupJUuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <input id='_csrf' type='hidden'name='_csrf' value={props.csrf} />
        </div>
    );
}
const init = async () => {
    const response = await fetch('/movie');
    const data = await response.json();

    const movieButton = document.getElementById('moviebutton');
    movieButton.addEventListener('click', (e) => {
        ReactDOM.render(
            <DomoMovie csrf={data.csrfToken} />,
            document.getElementById('content'));
        return false;
        
    })
    
}

window.onload = init;