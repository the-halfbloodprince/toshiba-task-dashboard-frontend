import React from 'react'
import styles from './TopStates.module.scss'
import Bar from './Bar'

type Props = {}

const states = [
  { title: 'NY', score: 120 },
  { title: 'MA', score: 80 },
  { title: 'NH', score: 70 },
  { title: 'OR', score: 50 },
]

const Topstates = (props: Props) => {

  let maxScore = -1;

  for (let i = 0; i < states.length; i++)
    maxScore = Math.max(maxScore, states[i].score)

  const modifiedStatesList = states.map(state => ({
    title: state.title,
    score: state.score,
    percent: state.score / maxScore * 100
  }))

  return (
    <div className={styles.container}>
      <h2>Top States</h2>
      <div className={styles.bars}>
        { modifiedStatesList.map((state, idx) => <Bar key={idx} barDetails={state} />) }
      </div>
    </div>
  )
}

export default Topstates