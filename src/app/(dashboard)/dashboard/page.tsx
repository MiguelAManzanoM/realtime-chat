import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return <div>
            <h2 className='mt-6 text-center text-4xl font-bold tracking-tight text-grey-900'> FaxChat Dashboard </h2>
            <br></br><br></br><br></br>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-grey-900'> This project was made by Miguel Ángel Manzano Méndez</h2>
            <br></br><br></br><br></br>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-grey-900'> Programación para Internet - I5909 - D03</h2>
        </div>
}

export default page