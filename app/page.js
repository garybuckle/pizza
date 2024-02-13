/**
 * entry point page.js
 */
import classes from './page.module.css'
import ImageSlider from '@/components/images/image-slider'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slider}>
          <ImageSlider />
        </div>
        <div className={classes.hero}>
          <h1>Pizza - zum abholen oder liefern </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque illum
            fuga, eligendi eaque perspiciatis quasi quaerat accusantium nobis?
            Reiciendis quo quos iste atque ut accusamus, sit impedit veritatis
            esse unde.
          </p>{' '}
          <div className={classes.cta}>
            <Link href="./order">Pizza bestellen</Link>
            <Link href="./pizzas">Menu</Link>
          </div>
        </div>
      </header>
    </>
  )
}
