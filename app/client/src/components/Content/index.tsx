import React from "react";
import { Button } from "@dreamtec-ui/button";
import {
  Wrapper,
  Features,
  Title,
  Item,
  Icon,
  SubTitle,
  Text,
  Form,
  Input,
  Card,
  Image
} from "./styled";

export const Content: React.FC = () => {
  return (
    <Wrapper>
      <Features>
        <Title>Handcrafted, home-made masterpieces</Title>
        <Form>
          <Input placeholder="Ingrese su nombre" />
          <Button variant="primary">Get Started</Button>
        </Form>
      </Features>
      <Features>
        <Item>
          <Icon>
            <svg
              width="50"
              height="50"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.45706 0.878906C9.43362 3.49609 8.92581 4.92188 7.83206 6.05469C6.64065 7.30469 4.78518 8.24219 3.47659 10.0781C1.73831 12.5195 1.44534 17.8906 7.71487 19.2969C5.07815 17.9102 4.51174 13.8867 7.36331 11.3672C6.62112 13.8086 7.98831 15.3711 9.68752 14.8047C11.3477 14.2383 12.4414 15.4297 12.4024 16.7969C12.3828 17.7344 12.0117 18.5352 11.0547 18.9844C15.1367 18.2617 16.7774 14.8828 16.7774 12.3047C16.7774 8.90625 13.75 8.4375 15.2735 5.58594C13.4571 5.74219 12.8321 6.93359 13.0078 8.88672C13.125 10.1758 11.7774 11.0547 10.7813 10.4688C9.98049 9.98047 10 9.04297 10.7031 8.33984C12.2071 6.85547 12.793 3.4375 8.45706 0.878906Z"
                fill="black" />
            </svg>
          </Icon>
          <div>
            <SubTitle>Premium Materials</SubTitle>
            <Text>Our trombones use the shiniest brass which is sourced locally. This will increase the longevity of your purchase.</Text>
          </div>
        </Item>
        <Item>
          <Icon>
            <svg
              width="50"
              height="50"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.55888 12.1895H13.2808V13.811H4.92047H4.75284C4.49855 13.1126 3.82818 12.612 3.04257 12.612C2.26873 12.612 1.60658 13.0978 1.34372 13.7803C1.01982 13.6867 0.782791 13.3889 0.782791 13.0349V12.966C0.782791 12.5369 1.13017 12.1895 1.55888 12.1895ZM4.33648 14.2509C4.33648 14.9976 3.72895 15.6051 2.98205 15.6051C2.23565 15.6051 1.62792 14.9976 1.62792 14.2509C1.62792 13.5042 2.23565 12.8964 2.98205 12.8964C3.72895 12.8964 4.33648 13.5042 4.33648 14.2509ZM3.92226 14.2509C3.92226 13.7325 3.50053 13.3107 2.98205 13.3107C2.46365 13.3107 2.04215 13.7325 2.04215 14.2509C2.04215 14.7691 2.46387 15.191 2.98205 15.191C3.50076 15.191 3.92226 14.7693 3.92226 14.2509ZM18.0249 14.2509C18.0249 14.9976 17.4173 15.6051 16.6706 15.6051C15.9239 15.6051 15.3163 14.9976 15.3163 14.2509C15.3163 13.5042 15.9239 12.8964 16.6706 12.8964C17.4173 12.8964 18.0249 13.5042 18.0249 14.2509ZM17.6108 14.2509C17.6108 13.7325 17.189 13.3107 16.6709 13.3107C16.1524 13.3107 15.7309 13.7325 15.7309 14.2509C15.7309 14.7691 16.1524 15.191 16.6709 15.191C17.189 15.191 17.6108 14.7693 17.6108 14.2509ZM20 10.3608V13.4229C20 13.5657 19.8842 13.6817 19.7413 13.6817H18.3883C18.1017 13.0515 17.4674 12.612 16.7308 12.612C15.9948 12.612 15.36 13.0515 15.0733 13.6817H14.1607C14.0176 13.6817 13.9016 13.5657 13.9016 13.4229V7.27312C13.9016 7.13006 14.0176 7.01433 14.1607 7.01433H17.5674C17.7105 7.01433 17.9277 7.062 18.0852 7.27312L20 10.3608ZM18.7928 9.6881L17.6283 7.75597C17.5383 7.58956 17.4277 7.4973 17.0328 7.4973H14.9197C14.7768 7.4973 14.6608 7.61303 14.6608 7.75597V9.6881C14.6608 9.83115 14.7768 9.94688 14.9197 9.94688H18.5337C18.6766 9.94688 18.7928 9.83115 18.7928 9.6881ZM19.8015 12.6291C19.8015 12.4961 19.6935 12.3876 19.56 12.3876C19.4266 12.3876 19.3186 12.4961 19.3186 12.6291V13.0867C19.3186 13.2201 19.4266 13.3281 19.56 13.3281C19.6935 13.3281 19.8015 13.2201 19.8015 13.0867V12.6291ZM0 11.7262H13.2808V4.39502H0V11.7262Z"
                fill="black" />
            </svg>
          </Icon>
          <div>
            <SubTitle>Premium Delivery</SubTitle>
            <Text>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</Text>
          </div>
        </Item>
        <Item>
          <Icon>
            <svg
              width="50"
              height="50"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5256 1.15385H11.9792V0H7.94096V1.15385H6.4742C5.51974 1.15385 4.74353 1.93028 4.74353 2.88465V18.2693C4.74353 19.2234 5.51996 20 6.4742 20H13.5256C14.4803 20 15.2564 19.2234 15.2564 18.2693V2.8846C15.2564 1.93028 14.4803 1.15385 13.5256 1.15385ZM14.1027 18.2694C14.1027 18.5874 13.8438 18.8462 13.5256 18.8462H6.4742C6.15595 18.8462 5.89708 18.5878 5.89708 18.2694V2.8846C5.89708 2.56665 6.15595 2.30766 6.4742 2.30766H13.5256C13.8438 2.30766 14.1027 2.56661 14.1027 2.8846V18.2694ZM13.4736 18.1634H6.5263V15.632H13.4734V18.1634H13.4736ZM13.4736 15.0084H6.5263V12.4772H13.4734V15.0084H13.4736ZM13.4736 11.8534H6.5263V9.32202H13.4734V11.8534H13.4736ZM13.4736 8.70561H6.5263V6.17423H13.4734V8.70561H13.4736ZM13.4736 5.55053H6.5263V3.01902H13.4734V5.55053H13.4736Z"
                fill="black" />
            </svg>
          </Icon>
          <div>
            <SubTitle>Premium Charger</SubTitle>
            <Text>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</Text>
          </div>
        </Item>
      </Features>
      <Features>
        <Card
          href="https://nextjs.org/docs/routing/dynamic-routes"
          target="_blank"
          title="Dynamic Routes">
          <Image
            src="https://picsum.photos/500/400"
            alt="Image Random one"
            title="Image Random one" />
        </Card>
        <Card
          href="https://developers.google.com/"
          target="_blank"
          title="Google Developers">
          <Image
            src="https://picsum.photos/550/400"
            alt="Image Random two"
            title="Image Random one" />
        </Card>
        <Card
          href="https://picsum.photos/"
          target="_blank"
          title="Picsum Photos">
          <Image
            src="https://picsum.photos/600/400"
            alt="Image Random three"
            title="Image Random one" />
        </Card>
      </Features>
    </Wrapper>
  );
};

Content.displayName = "Content";
