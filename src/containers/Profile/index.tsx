import * as React from "react";
import Button from "src/components/Button";
import Card from "src/components/Card";
import ProfileImg from "src/components/ProfileImg";

const styles = {
  container: {
    padding: "15px"
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  }
};

export default class Profile extends React.Component {
  public render() {
    const imageUrl: string = "https://placekitten.com/100/100";
    return (
      <div style={styles.container}>
        <div style={styles.row}>
          <ProfileImg />
          <Button>Agregar</Button>
        </div>
        <div style={styles.row}>
          <Card>
            <img src={imageUrl} />
          </Card>
          <Card>
            <img src={imageUrl} />
          </Card>
          <Card>
            <img src={imageUrl} />
          </Card>
        </div>
        <div style={styles.row}>
          <Card>
            <img src={imageUrl} />
          </Card>
          <Card>
            <img src={imageUrl} />
          </Card>
          <Card>
            <img src={imageUrl} />
          </Card>
        </div>
      </div>
    );
  }
}
