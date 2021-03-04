import data from './metal.json'

const MetalMeta = () => {
  return (
    <div className = "MetalMeta">
      <p>Total Bands: {data.length}</p>
    </div>
  )
}
export default MetalMeta;