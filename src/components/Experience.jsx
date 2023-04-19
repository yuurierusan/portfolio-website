import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
        {
            id: 9,
            src: 'https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png',
            title: 'Amplify',
            style: 'shadow-orange-500',
        },
        {
            id: 10,
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png',
            title: 'Bash',
            style: 'shadow-gray-500',
        },
        {
            id: 11,
            src: 'https://www.brainspire.com/hubfs/asp.net-logo.png',
            title: '.NET',
            style: 'shadow-blue-500',
        },
        {
            id: 12,
            src: 'https://w7.pngwing.com/pngs/545/451/png-transparent-node-js-express-js-javascript-solution-stack-web-application-others-angle-text-rectangle-thumbnail.png',
            title: 'Express',
            style: 'shadow-gray-500',
        },
        {
            id: 13,
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png',
            title: 'Figma',
            style: 'shadow-orange-500',
        },
    ]

    return (
        <div
            name='experience'
            className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt='' className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
