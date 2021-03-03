import { useBStore } from '../store'
import './index.scss'
const PageB = () => {
  const { state: { BCount }, dispatch } = useBStore()
  return (
    <div className="page b">
      <div className="count">{BCount}</div>
      <div className="operation">
        <button onClick={
          () => dispatch({ type: 'addB', payload: { num: 7 } })}
        > +7</button>
        <button onClick={
          () => dispatch({ type: 'subtractB', payload: { num: 3 } })}
        >-3</button>
      </div>
    </div >
  )
}
export default PageB