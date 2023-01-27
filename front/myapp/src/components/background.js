import { useEffect, useState } from "react";

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
        if (imgs.length < Math.floor(dimensions.width * dimensions.height / 100000)) {
            var newImg = {
                dir: "./img/background/" + (Math.floor(Math.random() * 48)).toString() + ".png",
                rot: Math.floor(Math.random() * 360),
                size: Math.floor(Math.random() * 490 + 10),
                pos_x: Math.floor(Math.random() * (dimensions.width + 300) - 150),
                pos_y: Math.floor(Math.random() * (dimensions.height + 300) - 150)
            }
            setImgs([imgs, newImg])
        }

        setImgsMap(imgs.map(val => 
            <img src={val.dir} alt="Image du background d'Eko"/>
        ))
    }, [imgs]);
    useEffect(() => {
        setImgs([])
    }, []);
}