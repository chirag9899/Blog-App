import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import studioNavbar from './components/studioNavbar'
import Logo from './components/Logo'
import { myTheme } from './theme'
import { getDefaultDocumentNode } from './structure'



const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET  !





export default defineConfig({
  basePath: '/studio',
  name: 'blogApp',
  title: 'BlogApp studio',
  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode : getDefaultDocumentNode,
  }), visionTool()],  //vision tool which allowus to basically test out our work queries on backend 
                                        // desk tool allow us to update information
  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:Logo,
      navbar:studioNavbar,
      
    }
  },
  theme:myTheme,
})

