import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
export default function About() {
  return (
    <div className="mx-auto">
      <h1 className="col-md-4 mx-auto" style={{ color: "#8D8DAA" }}>
        About Us
      </h1>

      <Stack direction="horizontal" className="col-md-11 mx-auto" gap={3}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quae consequatur cupiditate amet ea esse, eveniet nesciunt facere
          facilis, impedit earum ducimus accusantium rem eius ipsum, voluptates
          itaque necessitatibus corrupti!
        </div>
        <Card
          className="col-3"
          style={{
            margin: "30px",
            boxSizing: "content-box",
          }}
        >
          <Card.Img
            variant="top"
            src="https://c4.wallpaperflare.com/wallpaper/966/951/802/digital-digital-art-artwork-illustration-fantasy-art-hd-wallpaper-preview.jpg"
          />
          <Card.Body>
            <Card.Title>Hello</Card.Title>
          </Card.Body>
        </Card>
      </Stack>
    </div>
  );
}
