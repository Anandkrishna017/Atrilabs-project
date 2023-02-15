import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex10Cb, use1Cb, use2Cb, use3Cb, use4Cb, useTextBox2Cb, usehomeCb, useAboutCb, useButton8Cb, useButton9Cb, useButton10Cb, useButton11Cb, useButton12Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex10Props = useStore((state)=>state["Home"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Home"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const 1Props = useStore((state)=>state["Home"]["1"]);
const 1IoProps = useIoStore((state)=>state["Home"]["1"]);
const 1Cb = use1Cb()
const 2Props = useStore((state)=>state["Home"]["2"]);
const 2IoProps = useIoStore((state)=>state["Home"]["2"]);
const 2Cb = use2Cb()
const 3Props = useStore((state)=>state["Home"]["3"]);
const 3IoProps = useIoStore((state)=>state["Home"]["3"]);
const 3Cb = use3Cb()
const 4Props = useStore((state)=>state["Home"]["4"]);
const 4IoProps = useIoStore((state)=>state["Home"]["4"]);
const 4Cb = use4Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const homeProps = useStore((state)=>state["Home"]["home"]);
const homeIoProps = useIoStore((state)=>state["Home"]["home"]);
const homeCb = usehomeCb()
const AboutProps = useStore((state)=>state["Home"]["About"]);
const AboutIoProps = useIoStore((state)=>state["Home"]["About"]);
const AboutCb = useAboutCb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const Button10Props = useStore((state)=>state["Home"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["Home"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()

  return (<>
  <Flex className="p-Home Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Flex className="p-Home 1 bpt" {...1Props} {...1Cb} {...1IoProps}>
<Flex className="p-Home 2 bpt" {...2Props} {...2Cb} {...2IoProps}>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
</Flex>
<Flex className="p-Home 3 bpt" {...3Props} {...3Cb} {...3IoProps}>
<Button className="p-Home home bpt" {...homeProps} {...homeCb} {...homeIoProps}/>
<Button className="p-Home Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
<Button className="p-Home About bpt" {...AboutProps} {...AboutCb} {...AboutIoProps}/>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
<Flex className="p-Home 4 bpt" {...4Props} {...4Cb} {...4IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
</Flex>
</Flex>
  </>);
}
