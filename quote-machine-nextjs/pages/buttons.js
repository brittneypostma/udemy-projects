import Link from 'next/link'

const Buttons = () => (
    
    <div className="buttons">
      <Link href="https://twitter.com">
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
        <i className="fa fa-twitter"></i>
      </a>
      </Link>
      <Link href="https://facebook.com">
        <a className="button" id="fb-quote" title="Post this quote on Facebook!" target="_blank">
        <i className="fa fa-tumblr"></i>
      </a>
      </Link>
      <button className="button" id="new-quote">New quote</button>
    </div>

)

export default Buttons