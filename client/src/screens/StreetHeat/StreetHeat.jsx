import React from 'react'
import './StreetHeat.css'
import { Card } from 'react-bootstrap'


export default function () {

  const sneakArr = [
    'https://i.imgur.com/rDiDXkQ.jpg',
    'https://i.imgur.com/G9iAMVS.jpg',
    'https://i.imgur.com/hoMAM2t.jpg',
    'https://i.imgur.com/ZxBL22i.jpg',
    'https://i.imgur.com/J2FNJ7b.jpg',
    'https://i.imgur.com/zS2hZqN.jpg',
    'https://i.imgur.com/M17Uv9T.jpg',
    'https://i.imgur.com/axngVlH.jpg',
    'https://i.imgur.com/LyBGlBV.jpg',
    'https://i.imgur.com/XcN7Wzt.jpg',
    'https://i.imgur.com/B2dWA3z.jpg',
    'https://i.imgur.com/nNqzPsz.jpg',
    'https://i.imgur.com/USuhyi9.jpg',
    'https://i.imgur.com/bky4VuU.jpg',
    'https://i.imgur.com/bzKTJ9e.jpg',
    'https://i.imgur.com/ijsr6gX.jpg',
    'https://i.imgur.com/JpVSWvV.jpg',
    'https://i.imgur.com/d8FF9VF.jpg',
    'https://i.imgur.com/dhsRHvt.jpg',
    'https://i.imgur.com/LiU5EfJ.jpg',
    'https://i.imgur.com/zXmz5Jf.jpg',
    'https://i.imgur.com/QPPzO9c.jpg',
    'https://i.imgur.com/B1mw3gk.jpg',
    'https://i.imgur.com/Vn2kHQQ.jpg',
    'https://i.imgur.com/xu0einL.jpg',
    'https://i.imgur.com/E2sfu7D.jpg',
    'https://i.imgur.com/Je1gI4u.jpg',
    'https://i.imgur.com/rcFEpBr.jpg',
    'https://i.imgur.com/p52oLqk.jpg',
    'https://i.imgur.com/vk4hDho.jpg',
    'https://i.imgur.com/Qh2QbEC.jpg',
    'https://i.imgur.com/P9DOUtO.jpg',
    'https://i.imgur.com/aT4gEbu.jpg',
    'https://i.imgur.com/9ymE9Nf.jpg',
    'https://i.imgur.com/2LyIxup.jpg',
    'https://i.imgur.com/T6Cy9Et.jpg',
    'https://i.imgur.com/Rom6IMD.jpg',
    'https://i.imgur.com/XTD8Ips.jpg',
    'https://i.imgur.com/IeRTGqF.jpg',
    'https://i.imgur.com/8jJ7Fd1.jpg',
    'https://i.imgur.com/uyWFyKb.jpg',
    'https://i.imgur.com/MODF7xJ.jpg',
    'https://i.imgur.com/VtRT5AO.jpg',
    'https://i.imgur.com/jLNpQU6.jpg',
    'https://i.imgur.com/L9L2qJZ.jpg',
    'https://i.imgur.com/5hDGmJF.jpg',
    'https://i.imgur.com/9RcDmlg.jpg',
    'https://i.imgur.com/1dfg3Qz.jpg',
    'https://i.imgur.com/B4rFfm2.jpg',
    'https://i.imgur.com/Y0mmQjm.jpg',
    'https://i.imgur.com/1uNWPcJ.jpg',
    'https://i.imgur.com/FTm1WNW.jpg',
    'https://i.imgur.com/4d0qkjH.jpg',
]



  return (
    <div className='sneak-container mt-5 mx-auto '>
      {
        sneakArr.map(post => 
          <Card className="text-white" style={{ width: '16rem' }}>
            <Card.Img src={post} alt={post} />
            <Card.ImgOverlay>
            </Card.ImgOverlay>
            </Card>
          )
      }
    </div>
  )
}
