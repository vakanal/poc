import * as React from "react";

const style = (bkgImage: boolean, center: boolean, mainHeight: boolean): React.CSSProperties => ({
  alignItems: center ? "center" : undefined,
  backgroundColor: "#eee",
  backgroundImage: bkgImage ?  'url(' + 'https://images.pexels.com/photos/926987/pexels-photo-926987.jpeg?cs=srgb&dl=america-analysis-cellphone-926987.jpg&fm=jpg' + ')' : undefined,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  height: mainHeight ? "calc(100vh - 60px)" : "calc(100vh - 20px)",
  justifyContent: center ? "center" : undefined,
  padding: "10px 15px",
  width: "calc(100vw - 30px)"
});

interface IContainerProps {
  bkgImage?: boolean;
  center?: boolean;
  mainHeight?: boolean;  
}

export default class Container extends React.Component<IContainerProps> {
  public render() {
    const {bkgImage = false, children, center = false, mainHeight = false } = this.props;
    return <div style={style(bkgImage, center, mainHeight)}>{children}</div>;
  }
}
