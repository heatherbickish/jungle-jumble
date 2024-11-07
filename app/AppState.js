import { WordMumbles } from "./models/WordMumbles.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  wordMumble = [
    new WordMumbles({
      name: '🐒 Mumble',
      body: 'Monkeys have a wide range of habitats. They are very emotional predators. Highly social dynamic that improves their plans to establish grooming patterns. Impressive cognitive abilities complexes the evolutionary links we share.'
    }),
    new WordMumbles({
      name: '🐆Mumble',
      body: 'Showing their prowess over long distances increases their skills to survive. They like to make threats but they strive for beauty, strength and cunning to intrigue predators. From growls, roars, and "sawing" calls, their competitions are unmatched like hyenas and lions.'
    }),
    new WordMumbles({
      name: '🧠Mumble',
      body: 'Unravelling the mystery of remarkable plasticity, highlights its unsatiable demand for fuel. Consciencness arises when 20% of biological enginering marvels hundred trillion synapses.'
    })
  ]
  /** @type {WordMumbles} */
  activeMumble = null



















  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())