import React, { useEffect, useState } from "react";

export default function Background(props) {
    const [imgsMap, setImgsMap] = useState([]);
    const [imgs, setImgs] = useState([]);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    })

    useEffect(() => {
        if (imgs.length < Math.floor(dimensions.width * dimensions.height / 50000)) {
            var newImgs = imgs
            for (let i = imgs.length; i < Math.floor(dimensions.width * dimensions.height / 50000); i++) {
                var newImg = {
                    dir: "./img/background/" + (Math.floor(Math.random() * 47)).toString() + ".png",
                    rot: (Math.random() * 360).toString(),
                    speed_rot: (Math.random() * 0.1).toString(),
                    direct: (Math.random() * 360).toString(),
                    speed_direct: (Math.random() * 0.1).toString(),
                    size: (Math.random() * 125 + 50).toString(),
                    pos_x: (Math.random() * (dimensions.height + 200) - 100).toString(),
                    pos_y: (Math.random() * (dimensions.width + 200) - 100).toString()
                }
                newImgs[newImgs.length] = newImg
            }
            console.log("new", newImgs)
            setImgs(newImgs)
        } else {

            console.log("imgs", imgs)
            if (imgs.length > 0) {
                setImgsMap(
                    imgs.map((val, i) =>
                        <img key={i} src={val.dir} 
                            style={{
                                position: 'absolute',
                                zIndex: -999,
                                rotation: val.rot + 'deg',
                                width: val.size + 'px',
                                top: val.pos_x + 'px',
                                left: val.pos_y + 'px'
                            }}
                            alt="Une des images du background d'Eko"
                        />
                    )
                )
            }
        }
    }, [imgs]);

    return <div 
        style={{
            zIndex: -999,
            position: 'fixed',
            overflow: 'hidden',
            width: '100vw',
            height: '100vh',
            top: '0px'
        }}>
        {imgsMap}
    </div>
}