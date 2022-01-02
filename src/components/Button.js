export default function Button({children, variant='primary', disabled=false, className}) {
    return(
        <button 
            className={`bg-brand rounded-[20px] py-2 px-8 min-w-[180px] text-base1 hover:bg-text hover:text-base1 hover:border-text 
            ${variant === 'secondary' ? 'bg-base1 text-brand border-2 border-brand' : ''} 
            ${className}`}>
            <p className="uppercase">{children}</p>
        </button>
    )
}