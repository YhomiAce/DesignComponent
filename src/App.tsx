import "./App.css";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Button from "./components/Button";
import CounterClass from "./components/class/CounterClass";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import UserData from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import CustomButton from "./components/html/CustomButton";
import { CustomComponent } from "./components/html/CustomComponent";
import CustomInput from "./components/html/CustomInput";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Text from "./components/polymorphic/Text";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import RandomNumber from "./components/restriction/RandomNumber";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import Status from "./components/Status";
import Toast from "./components/templateliterals/Toast";

function App() {
  const personName = {
    first: "Barry",
    last: "Allen",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  const handleClick = (event: React.MouseEvent, id: number) =>
    console.log("Button clicked", id, event);

  return (
    <div className="App">
      <ThemeContextProvider>
        <Text as="h1" size="lg"> Heading</Text>
        <Text as="h2" size="lg"> Heading Two</Text>
        <Text as="p" size="md"> Paragraph</Text>
        <Text as="label" htmlFor="someId" size="sm" color="secondary"> Label</Text>
        <UserContextProvider>
          <CustomButton variant="primary" onClick={() => console.log('clicked')}>
            Primary Button
          </CustomButton>
          <CustomInput type="password" id="input" />
          <Greet name="Domina" isLoggedIn />
          <CustomComponent name="Don" isLoggedIn={false} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Status status="success" />
          <Heading>Placeholder text</Heading>
          <Oscar>
            <Heading>The Oscar award goes to Leonardo Dicpario</Heading>
          </Oscar>
          <Button handleClick={handleClick} />
          <Input value="" handleChange={(e) => console.log(e)} />
          <Container styles={{ border: "1px solid red", padding: "1rem" }} />
          <LoggedIn />
          <User />
          <Counter />
          <Box />
          <UserData />
          <DomRef />
          <MutableRef />
          <CounterClass message="The count value is " />
          <Private component={Profile} isLoggedIn={true} />
          <List
            items={["Batman", "Superman", "Flash"]}
            onClick={(item) => console.log(item)}
          />
          <List
            items={[1, 2, 3, 4]}
            onClick={(item) => console.log(item)}
          />
          <List
            items={nameList}
            onClick={(item) => console.log(item)}
          />
          <RandomNumber value={-10} isNegative />
          <Toast position="center-bottom" />
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
