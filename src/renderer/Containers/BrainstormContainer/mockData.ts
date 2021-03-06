import { Brainstorm } from '@/interfaces'

const mockBrainstorms: Brainstorm[] = [{
  id: 1,
  question: 'What can I eat for breakfast?',
  response: 'A good breakfast should combine protein, stick-to-your-ribs fat, and some fiber-filled carbs. This is your key to feeling satisfied, energized, and not ready to eat your stapler by lunch. To make any of the breakfast combos suggested below heartier, up the veggies and/or fruit — these are unlimited as far as I’m concerned, especially at breakfast.',
  action: { id: 1, action: 'Cook breakfast' },
  isGenius: true,
  categories: [{
    id: 1,
    name: 'Food'
  }]
}, {
  id: 2,
  question: 'What app can I create with React?',
  response: 'Aside from products, e-commerce apps may provide a service to consumers. If it is a service that is provided locally, an interactive map could be added to the app to provide for the service provider and customer to know each others\' location. Food delivery applications such as UberEats and Doordash, which require the location of the person ordering the food, come to mind.',
  action: { id: 2, action: 'Build an application' },
  isGenius: false,
  categories: [{
    id: 2,
    name: 'Tech'
  }]
}, {
  id: 3,
  question: 'How to make money fast?',
  response: 'People are always looking to have their cars washed and detailed. You could be a mobile car washer and detailer without having a permanent location. Reach out to people you know or make some flyers and put it in your neighbors\' mailboxes. If you want to get serious about it, prop up a one-page website or give out business cards. You can make money quickly doing this.',
  action: { id: 3, action: 'Make money' },
  isGenius: false,
  categories: [{
    id: 3,
    name: 'Money'
  }]
}]

export default mockBrainstorms
