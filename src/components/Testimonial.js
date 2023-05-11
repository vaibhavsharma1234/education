import Card1 from './Card1'
import './Testimonial.css'
function Testimonial() {
  return (
    <>
      <div className="w-full mb-16 flex justify-center">
        <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
          Our Testimonial
        </h1>
      </div>
      <div id="container2" className="grid-container">
        <Card1 className="grid-item" />
        <Card1 className="grid-item" />
        <Card1 className="grid-item" />
      </div>
    </>
  )
}
export default Testimonial
