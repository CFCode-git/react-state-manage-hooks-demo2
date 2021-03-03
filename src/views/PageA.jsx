import { useAStore } from '../store'
import './index.scss'

const PageA = () => {
  const { state: { ACount }, dispatch } = useAStore()
  return (
    <div className="page a">
      <div className="count">{ACount}</div>
      <div className="operation">
        <button onClick={
          () => dispatch({ type: 'addA', payload: { num: 5 } })}
        >+5</button>
        <button onClick={
          () => dispatch({ type: 'subtractA', payload: { num: 2 } })}
        >-2</button>
      </div>
    </div>
  )
}
export default PageA
