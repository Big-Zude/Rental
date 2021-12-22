import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { RentalCollection } from './ui-components'

function App () {
  return (
    <AmplifyProvider>
     <RentalCollection
 type='list' overrides={{
   'Collection.CardA[0]': {
       overrides: {
        'Flex.Image[0]': { objectFit: 'cover' }
       }
    }
 }}
/>
    </AmplifyProvider>
  )
}

export default App
