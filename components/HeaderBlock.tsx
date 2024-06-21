

const HeaderBlock = ({
    title,
    children
}: {title: string, children: React.ReactNode}) => {
    return (
        <div className='flex items-center justify-between gap-5 mb-4'>
            <h2 className='heading-3'>{title}</h2>
            <div className="">
                {children}
            </div>
        </div>
    )
}

export default HeaderBlock