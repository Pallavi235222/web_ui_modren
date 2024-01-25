import { card } from '../assets'
import style, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Find a better card deal <br className='sm:lock hidden'/>in few easy steps.</h2>
        <p className={`${style.paragraph} max-w-[470px mt-5]`}>Arcu tortor, oursus in mattis at sed integer fauibus. Aliquest quis aliquet eget muris tortor. Aliquet ultrices ac, ametau.</p>

      <Button style="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>

      </div>
    </section>
  )


export default CardDeal
