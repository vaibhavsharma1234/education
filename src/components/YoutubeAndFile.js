import Yt from './Yt'
import { Pdf } from './Pdf'
import './YoutubeAndPdf.css'
function YoutubeAndFile() {
  return (
    <div>
      <div id="video-tilte">
        <h1>title of the video</h1>
      </div>

      <Yt />
      <Pdf />
    </div>
  )
}
export default YoutubeAndFile
