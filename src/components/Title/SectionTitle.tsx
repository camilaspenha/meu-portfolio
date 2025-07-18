
type Title = {
  text:string
}
const SectionTitle = ({text}:Title) => {
  return (
    <div className="container section-title">
      <h2>{text}</h2>
    </div>
  )
}

export default SectionTitle
