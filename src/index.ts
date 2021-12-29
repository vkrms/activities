import activities from '../data/activities.yaml'
import './sass/main.scss'

function getActivity(activities: string[]): { index: number, text: string } {
  const randIndex: number = Math.floor(Math.random() * activities.length)
  return {
    index: randIndex,
    text: activities[randIndex]
  }
}

const button = document.querySelector('[button]')
const resultElement = document.querySelector('[result]')

button?.addEventListener('click', (e): void => {
  const { index, text } = getActivity(activities.activities)
  resultElement?.setAttribute('data-index', index.toString())
  resultElement!.textContent = text
})
