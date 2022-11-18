import Image from 'next/image'
import Link from 'next/link'

function Account({users}){
    return(
        <div className='account flex flex-col max-lg:hidden sticky top-5 gap-3'>
            {
                users ? 
                users.map(user => {
                    return <div className='flex justify-between items-center'>
                    <Link href="/profile" className='flex items-center gap-3'>
                        <div className='relative w-14 h-14'>
                            <Image src={user.image} alt="" layout='fill' objectFit='cover' className='rounded-full'/>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-semibold'>{user.userName}</span>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                    </Link>
                    <span className='switch_button font-semibold'>Switch</span>
                </div>
                }):
                null
            }
            
            <div>
                <div className=' suggestions flex justify-between'>
                    <span>Suggestions For You</span>
                    <span className='see_all_button font-semibold'>See All</span>
                </div>
            </div>
        </div>
    )
}

export default Account