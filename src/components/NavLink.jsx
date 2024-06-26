import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useUser } from "@/app/context/UserContextProvider"

const NavLink = ({iconImg, title, url}) => {
  const {user} = useUser()

const pathname = usePathname();
  return (
    <div className="my-2">
      <Link href={url == '/profile' ? `/profile/${user?.userName}` : url} className={`${pathname == url || (url == "/profile" && pathname == `/profile/${user?.userName}`  )? "active":""} flex items-center px-2 py-1 rounded-md`}>
        <Image src={iconImg} alt={title} width={16} height={16} className="h-[1.5rem] w-[1.5rem] mr-2"/>
        <span className="text-[1.2rem] font-bold">{title}</span>
      </Link>
    </div>
  );
}

export default NavLink