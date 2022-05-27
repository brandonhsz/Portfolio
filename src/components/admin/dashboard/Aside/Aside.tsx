import { AiFillDashboard, AiOutlineCode, AiOutlineSetting, AiOutlineUserAdd } from 'react-icons/ai'

import AsideItem from '../asideItem/AsideItem'

const Aside = () => {
  return (
    <aside className="w h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto h-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <ul className="space-y-2">

          <AsideItem
            name={"Dashboard"}
            Icon={<AiFillDashboard />}
          />
          <AsideItem
            name={"Users"}
            Icon={<AiOutlineUserAdd />}
          />
          <AsideItem
            name={"Projects"}
            Icon={<AiOutlineCode />}
          />

          <AsideItem
            name={"Settings"}
            Icon={<AiOutlineSetting />}
          />

        </ul>
      </div>
    </aside>
  )
}

export default Aside