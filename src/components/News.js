import Button from "./Button"

export default function News(){
    return(
        <div className='flex flex-col items-center bg-base2 mb-10 h-[55vh]'>
            <p className='text-highlight pt-24 pb-3 uppercase small'>latest news</p>
            <h2 className='pb-10'>Latest News & Updates</h2>
            <div>
                <input type='text' placeholder='Enter your email' className="rounded-full border-transparent focus:border-text focus:ring-0 w-96 pl-6"/>
                <Button variant="secondary" className='ml-3'>subscribe</Button>
            </div>
        </div>
    )
}