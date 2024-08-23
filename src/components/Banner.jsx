import Image from 'next/image'
import React from 'react'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import {BsCarFront, BsGeoAltFill, BsPhoneFill} from 'react-icons/bs'

export default function Banner() {
    const carList = [
        "Micro",
        "Hiace",
        "Noah",
      ]
  return (
    <div className='grid grid-cols-2'>
        <div>
            <Image 
                src='/banner.png'
                width={587}
                height={700}
            />
        </div>
        <div style={{overflow:"hidden",position: "relative",height:"100vh"}}>
            <div className='box-custom-2-bg'>
                <div className='box-custom-2-bg-inner'>
                    <div className="box-custom-2-bg-image" style={{backgroundImage: "url(/banner-shape.png)"}}></div>
                </div>
            </div>
            <div className='form-side'>
                <form>
                    <SelectInput icon={<BsCarFront color="#c2c2c2" />} items={carList} placeholder="Car Type" />
                    <TextInput icon={<BsGeoAltFill color="#c2c2c2" />} placeholder="Pickup Address" />
                    <TextInput icon={<BsGeoAltFill color="#c2c2c2" />} placeholder="Destination Address" />
                    <TextInput icon={<BsPhoneFill color="#c2c2c2" />} placeholder="Your Phone Number" />
                </form>
            </div>
        </div>
    </div>
  )
}
