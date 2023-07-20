import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>

            <button
                type="button"

                onClick={()=> window.open('https://github.com/chinmaya-2024')}
                className='black_btn'
            >
                Github
            </button>

        </nav>

        <h1 className='head_text'>
            Quick Overview with <br className='max-md:hidden'/>
            <span className='blue_gradient'>Page Digest</span>
        </h1>
        <h2 className='desc'>
        Discover Instant Insights: Our cutting-edge webpage summarizer provides you with succinct and captivating summaries, saving you valuable time while giving you a quick overview of the key takeaways from any web page.
        </h2>
    </header>
  )
}

export default Hero