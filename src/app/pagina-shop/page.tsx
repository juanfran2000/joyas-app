"use client"
import { Card } from "antd";
import Image from 'next/image';

const subRick = {
  color: '#fff',
  fontSize: '30px',
  textAlign: 'left',
  marginLeft: '20px',
  marginTop: '100px',
  marginBottom: '20px',
}

const tituloRick = {
  color: '#fff',
  fontSize: '80px',
  textAlign: 'left',
  marginLeft: '20px',
  marginTop: '0',
}


export default function Shop() {
  const { Meta } = Card;
  return (
    <div>
    <h3 style={subRick}>SEARCH CATEGORY</h3>
        <h1 style={tituloRick}>RICK AND MORTY</h1>
    <div className="flex justify-center space-x-4 ">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="Bethshop.png" />}
      >
        <Meta title="Card 1" description="Descripción del Card 1" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="fatherShop.png" />}
      >
        <Meta title="Card 2" description="Descripción del Card 2" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="mortyShop.png" />}
      >
        <Meta title="Card 3" description="Descripción del Card 3" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="rickShop.png" />}
      >
        <Meta title="Card 4" description="Descripción del Card 4" />
      </Card>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="summerShop.png" />}
      >
        <Meta title="Card 5" description="Descripción del Card 5" />
      </Card>
    </div>
    </div>
  );
}