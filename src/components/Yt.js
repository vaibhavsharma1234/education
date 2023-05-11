import Iframe from 'react-iframe'
import './Yt.css'
export default function Yt() {
  return (
    <div className="container1">
      <div className="box1"></div>
      <div className="box2">
        <iframe
          title="education-video"
          src="https://www.youtube-nocookie.com/embed/uXWycyeTeCs"
          width={'100%'}
          height={'100%'}
        ></iframe>
        <div className="box3"></div>
        <div className="box4"></div>
      </div>

      {/* <div className="box2"></div> */}
    </div>
  )
}
