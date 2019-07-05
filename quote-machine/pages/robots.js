import fetch from 'isomorphic-unfetch'

const Robots = (props) => {
    return (
        <div>
            <h1>Quotes</h1>
            <div>
            {
                props.robots.map(quote => (
                <li>{quote.quote}</li>
            ))}
            </div>
        </div>
    )
}


Robots.getInitialProps = async function () {
    const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
    const data = await res.json();
    return {
        robots: data
    }
}

export default Robots