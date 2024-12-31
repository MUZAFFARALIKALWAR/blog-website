import { type SchemaTypeDefinition } from 'sanity'
import hero from "../hero"
import car from '../cars'
import category from '../category'
import latest from '../latest'
import trandingblog from '../tradingblog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero,car,category,latest,trandingblog],
}
