import Image from 'next/image'
import styles from './page.module.css'
import SideBar from '@/components/Layout/side-bar/side-bar'
import SearchBar from '@/components/search_bar/search_bar'
import { RxEnvelopeClosed, RxGear } from 'react-icons/rx'

export default function Home() {
  return (
    <main>
      <div className={styles.home_searct_section}>
        <div>
          <SearchBar />
        </div>
         
         <div>
          <span><RxGear /></span>
          <span><RxEnvelopeClosed /></span>
         </div>
      </div>
    
    </main>
  )
}
