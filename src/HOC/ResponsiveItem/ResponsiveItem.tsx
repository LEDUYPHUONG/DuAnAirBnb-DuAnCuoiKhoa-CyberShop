import React, { useEffect, useState } from 'react'

type Props = {
    Component: React.FC,
    ComponentMobile?:React.FC,
    // ComponentJSX:JSX.Element,
}

type Screen = {
    width:number,
    height:Number,
}

export default function ResponsiveItem({Component,ComponentMobile}: Props) {

    const [screen,setScreen] = useState<Screen>({
        width: window.innerWidth,//lấy thông số của màn hình khi loead lên
        height: window.innerHeight
    });
    
    useEffect(() => {
        // khi người dùng resize
        let resizeFunction = () => {
            // lấy ra kích thước mới của window
            setScreen({
                width: window.innerWidth,
                height: window.innerHeight
                
            })
            console.log(window.innerWidth);
            
        }
        window.onresize = resizeFunction;
        return () => {
            window.removeEventListener('resize',resizeFunction);
        }
    }, []);


    let ComponentRender = Component;
    if(screen.width < 768 && ComponentMobile) {
        ComponentRender = ComponentMobile;
    }

  return <>
    <ComponentRender />
  </>
}